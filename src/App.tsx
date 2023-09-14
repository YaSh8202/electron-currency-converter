import Select from "react-select";
import countryCurrencies from "./data/currencies";
import { useState } from "react";
import { Currency, ExchangeRate } from "./types";
import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_API_KEY as string;

async function getExchangeRateData(from?: string) {
  if (!from) {
    return;
  }

  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
  );

  const data = await res.json();

  console.log(data);
  return data as ExchangeRate;
}

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState<Currency>();
  const [to, setTo] = useState<Currency>();
  const [convertedAmount, setConvertedAmount] = useState<number>();

  const { data, isLoading } = useQuery(
    [from?.code],
    () => getExchangeRateData(from?.code),
    {
      enabled: !!from,
      cacheTime: 1000 * 60 * 60 * 24, // 1 day
    }
  );

  function convertHandler() {
    const exchangeRate = data?.conversion_rates[to?.code as string];

    if (!exchangeRate) return;

    const convertedAmount = exchangeRate ? amount * exchangeRate : 0;

    setConvertedAmount(convertedAmount);
  }

  return (
    <main className="max-w-4xl mx-auto py-20   ">
      <h1 className="font-bold text-3xl text-center">
        Electron Currency Converter
      </h1>
      <div className="flex flex-row items-center gap-5  justify-center my-12  ">
        <div className="flex flex-col ">
          <p className="text-lg font-medium">Amount</p>
          <input
            type="text"
            className="w-64 h-10 px-3 rounded-md focus:outline-none focus:shadow-outline text-base text-gray-700 border border-[hsl(0,0%,80%)] focus-within:border-blue-500 "
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => {
              setAmount(parseInt(e.target.value));
            }}
            pattern="[0-9]+"
          />
        </div>

        <div className="flex flex-col ">
          <p className="text-lg font-medium">From</p>
          <Select
            className="basic-single w-72 "
            classNamePrefix="select"
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={true}
            name="from"
            options={countryCurrencies}
            getOptionValue={(option) => option.code}
            getOptionLabel={(option) => option.currency}
            placeholder="Select a currency"
            value={from}
            onChange={(e) => setFrom(e as Currency)}
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-lg font-medium">To</p>
          <Select
            className="basic-single w-72 "
            classNamePrefix="select"
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={true}
            name="from"
            options={countryCurrencies}
            getOptionValue={(option) => option.code}
            getOptionLabel={(option) => option.currency}
            placeholder="Select a currency"
            value={to}
            onChange={(e) => setTo(e as Currency)}
          />
        </div>
      </div>
      <div className="flex flex-row items-start  justify-between w-full">
        {convertedAmount && (
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">
              {amount} {from?.currency} ={" "}
            </p>
            <p className="font-semibold text-2xl">
              {convertedAmount} {to?.currency}
            </p>
          </div>
        )}
        <button
          disabled={isLoading}
          onClick={convertHandler}
          className=" bg-blue-500 text-white px-5 py-2 rounded-lg ml-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
        >
          Convert
        </button>
      </div>
    </main>
  );
}

export default App;
