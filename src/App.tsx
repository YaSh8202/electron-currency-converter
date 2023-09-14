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
  const [amount, setAmount] = useState<string>("");
  const [from, setFrom] = useState<Currency>(
    countryCurrencies.find((currency) => currency.code === "USD") as Currency
  );
  const [to, setTo] = useState<Currency>(
    countryCurrencies.find((currency) => currency.code === "INR") as Currency
  );
  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<[string, string]>();

  const { data, isLoading } = useQuery(
    [from?.code],
    () => getExchangeRateData(from?.code),
    {
      enabled: !!from,
      refetchOnWindowFocus: false,
    }
  );

  function convertHandler() {
    if (!amount) {
      setError("Please enter a valid amount");
      return;
    }

    setError("");

    const exchangeRate = data?.conversion_rates[to?.code as string];

    if (!exchangeRate) return;

    const convertedAmount = exchangeRate ? parseInt(amount) * exchangeRate : 0;

    const firstString = `${amount} ${from?.currency} =`;
    const secondString = `${convertedAmount.toFixed(2)} ${to?.currency}`;

    setResult([firstString, secondString]);
  }

  return (
    <main className="max-w-4xl mx-auto py-20   ">
      <h1 className="font-bold text-3xl text-center">
        Electron Currency Converter
      </h1>
      <div className="flex flex-row items-start gap-5  justify-center my-12  ">
        <div className="flex flex-col ">
          <p className="text-lg font-medium">Amount</p>
          <input
            type="text"
            className="w-64 h-10 px-3 rounded-md focus:outline-none focus:shadow-outline text-base text-gray-700 border border-[hsl(0,0%,80%)] focus-within:border-blue-500 "
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => {
              const regex = /^[0-9]*\.?[0-9]*$/;
              if (e.target.value === "" || regex.test(e.target.value)) {
                const removeLeadingZero = e.target.value.replace(/^0+/, "");
                setAmount(removeLeadingZero);
                setError("");
              }
            }}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
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
        {result && (
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">{result[0]}</p>
            <p className="font-semibold text-2xl">{result[1]}</p>
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
