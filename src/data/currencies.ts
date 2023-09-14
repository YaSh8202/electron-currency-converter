const countryCurrencies = [
  {
    code: "AFA",
    currency: "Afghanistan Afghani (AFA)",
  },
  {
    code: "ALL",
    currency: "Albanian Lek (ALL)",
  },
  {
    code: "DZD",
    currency: "Algerian Dinar (DZD)",
  },
  {
    code: "AOA",
    currency: "Angolan New Kwanza (AOA)",
  },
  {
    code: "ARS",
    currency: "Argentine Peso (ARS)",
  },
  {
    code: "AMD",
    currency: "Armenian Dram (AMD)",
  },
  {
    code: "AWG",
    currency: "Aruba Florin (AWG)",
  },
  {
    code: "AUD",
    currency: "Australian Dollar (AUD)",
  },
  {
    code: "AZM",
    currency: "Azerbaijani Manat (AZM)",
  },
  {
    code: "BSD",
    currency: "Bahamian Dollar (BSD)",
  },
  {
    code: "BHD",
    currency: "Bahraini Dinar (BHD)",
  },
  {
    code: "BDT",
    currency: "Bangladesh Taka (BDT)",
  },
  {
    code: "BBD",
    currency: "Barbados Dollar (BBD)",
  },
  {
    code: "BYR",
    currency: "Belarus Ruble (BYR)",
  },
  {
    code: "BZD",
    currency: "Belize Dollar (BZD)",
  },
  {
    code: "BMD",
    currency: "Bermuda Dollar (BMD)",
  },
  {
    code: "BTN",
    currency: "Bhutan Ngultrum (BTN)",
  },
  {
    code: "BOB",
    currency: "Bolivian Boliviano (BOB)",
  },
  {
    code: "BAM",
    currency: "Bosnian Marka (BAM)",
  },
  {
    code: "BWP",
    currency: "Botswana Pula (BWP)",
  },
  {
    code: "BRL",
    currency: "Brazilian Real (BRL)",
  },
  {
    code: "GBP",
    currency: "British Pound (GBP)",
  },
  {
    code: "BND",
    currency: "Brunei Dollar (BND)",
  },
  {
    code: "BGN",
    currency: "Bulgarian Lev (BGN)",
  },
  {
    code: "BIF",
    currency: "Burundi Franc (BIF)",
  },
  {
    code: "KHR",
    currency: "Cambodia Riel (KHR)",
  },
  {
    code: "CAD",
    currency: "Canadian Dollar (CAD)",
  },
  {
    code: "CVE",
    currency: "Cape Verde Escudo (CVE)",
  },
  {
    code: "KYD",
    currency: "Cayman Islands Dollar (KYD)",
  },
  {
    code: "XOF",
    currency: "CFA Franc (BCEAO) (XOF)",
  },
  {
    code: "XAF",
    currency: "CFA Franc (BEAC) (XAF)",
  },
  {
    code: "CLP",
    currency: "Chilean Peso (CLP)",
  },
  {
    code: "CNY",
    currency: "Chinese Yuan (CNY)",
  },
  {
    code: "COP",
    currency: "Colombian Peso (COP)",
  },
  {
    code: "KMF",
    currency: "Comoros Franc (KMF)",
  },
  {
    code: "CDF",
    currency: "Congolese Franc (CDF)",
  },
  {
    code: "CRC",
    currency: "Costa Rica Colon (CRC)",
  },
  {
    code: "HRK",
    currency: "Croatian Kuna (HRK)",
  },
  {
    code: "CUP",
    currency: "Cuban Peso (CUP)",
  },
  {
    code: "CZK",
    currency: "Czech Koruna (CZK)",
  },
  {
    code: "DKK",
    currency: "Danish Krone (DKK)",
  },
  {
    code: "DJF",
    currency: "Dijibouti Franc (DJF)",
  },
  {
    code: "DOP",
    currency: "Dominican Peso (DOP)",
  },
  {
    code: "XCD",
    currency: "East Caribbean Dollar (XCD)",
  },
  {
    code: "EGP",
    currency: "Egyptian Pound (EGP)",
  },
  {
    code: "SVC",
    currency: "El Salvador Colon (SVC)",
  },
  {
    code: "ERN",
    currency: "Eritrea Nakfa (ERN)",
  },
  {
    code: "ETB",
    currency: "Ethiopian Birr (ETB)",
  },
  {
    code: "EUR",
    currency: "Euro (EUR)",
  },
  {
    code: "FKP",
    currency: "Falkland Islands Pound (FKP)",
  },
  {
    code: "FJD",
    currency: "Fiji Dollar (FJD)",
  },
  {
    code: "GMD",
    currency: "Gambian Dalasi (GMD)",
  },
  {
    code: "GEL",
    currency: "Georgian Lari (GEL)",
  },
  {
    code: "GHC",
    currency: "Ghanian Cedi (GHC)",
  },
  {
    code: "GIP",
    currency: "Gibraltar Pound (GIP)",
  },
  {
    code: "XAU",
    currency: "Gold Ounces (XAU)",
  },
  {
    code: "GTQ",
    currency: "Guatemala Quetzal (GTQ)",
  },
  {
    code: "GGP",
    currency: "Guernsey Pound (",
  },
  {
    code: "GNF",
    currency: "Guinea Franc (GNF)",
  },
  {
    code: "GYD",
    currency: "Guyana Dollar (GYD)",
  },
  {
    code: "HTG",
    currency: "Haiti Gourde (HTG)",
  },
  {
    code: "HNL",
    currency: "Honduras Lempira (HNL)",
  },
  {
    code: "HKD",
    currency: "Hong Kong Dollar (HKD)",
  },
  {
    code: "HUF",
    currency: "Hungarian Forint (HUF)",
  },
  {
    code: "ISK",
    currency: "Iceland Krona (ISK)",
  },
  {
    code: "INR",
    currency: "Indian Rupee (INR)",
  },
  {
    code: "IDR",
    currency: "Indonesian Rupiah (IDR)",
  },
  {
    code: "IRR",
    currency: "Iran Rial (IRR)",
  },
  {
    code: "IQD",
    currency: "Iraqi Dinar (IQD)",
  },
  {
    code: "IMP",
    currency: "Isle of Man Pound (IMP)",
  },
  {
    code: "ILS",
    currency: "Israeli Shekel (ILS)",
  },
  {
    code: "JMD",
    currency: "Jamaican Dollar (JMD)",
  },
  {
    code: "JPY",
    currency: "Japanese Yen (JPY)",
  },
  {
    code: "JEP",
    currency: "Jerseyan Pound (JEP)",
  },
  {
    code: "JOD",
    currency: "Jordanian Dinar (JOD)",
  },
  {
    code: "KZT",
    currency: "Kazakhstan Tenge (KZT)",
  },
  {
    code: "KES",
    currency: "Kenyan Shilling (KES)",
  },
  {
    code: "KRW",
    currency: "Korean Won (KRW)",
  },
  {
    code: "KWD",
    currency: "Kuwaiti Dinar (KWD)",
  },
  {
    code: "KGS",
    currency: "Kyrgyzstan Som (KGS)",
  },
  {
    code: "LAK",
    currency: "Lao Kip (LAK)",
  },
  {
    code: "LBP",
    currency: "Lebanese Pound (LBP)",
  },
  {
    code: "LSL",
    currency: "Lesotho Loti (LSL)",
  },
  {
    code: "LRD",
    currency: "Liberian Dollar (LRD)",
  },
  {
    code: "LYD",
    currency: "Libyan Dinar (LYD)",
  },
  {
    code: "MOP",
    currency: "Macau Pataca (MOP)",
  },
  {
    code: "MKD",
    currency: "Macedonian Denar (MKD)",
  },
  {
    code: "MGF",
    currency: "Malagasy Franc (MGF)",
  },
  {
    code: "MWK",
    currency: "Malawi Kwacha (MWK)",
  },
  {
    code: "MYR",
    currency: "Malaysian Ringgit (MYR)",
  },
  {
    code: "MVR",
    currency: "Maldives Rufiyaa (MVR)",
  },
  {
    code: "MRO",
    currency: "Mauritania Ougulya (MRO)",
  },
  {
    code: "MUR",
    currency: "Mauritius Rupee (MUR)",
  },
  {
    code: "MXN",
    currency: "Mexican Peso (MXN)",
  },
  {
    code: "MDL",
    currency: "Moldovan Leu (MDL)",
  },
  {
    code: "MNT",
    currency: "Mongolian Tugrik (MNT)",
  },
  {
    code: "MAD",
    currency: "Moroccan Dirham (MAD)",
  },
  {
    code: "MZM",
    currency: "Mozambique Metical (MZM)",
  },
  {
    code: "MMK",
    currency: "Myanmar Kyat (MMK)",
  },
  {
    code: "NAD",
    currency: "Namibian Dollar (NAD)",
  },
  {
    code: "NPR",
    currency: "Nepalese Rupee (NPR)",
  },
  {
    code: "ANG",
    currency: "Neth Antilles Guilder (ANG)",
  },
  {
    code: "NZD",
    currency: "New Zealand Dollar (NZD)",
  },
  {
    code: "NIO",
    currency: "Nicaragua Cordoba (NIO)",
  },
  {
    code: "NGN",
    currency: "Nigerian Naira (NGN)",
  },
  {
    code: "KPW",
    currency: "North Korean Won (KPW)",
  },
  {
    code: "NOK",
    currency: "Norwegian Krone (NOK)",
  },
  {
    code: "OMR",
    currency: "Omani Rial (OMR)",
  },
  {
    code: "XPF",
    currency: "Pacific Franc (XPF)",
  },
  {
    code: "PKR",
    currency: "Pakistani Rupee (PKR)",
  },
  {
    code: "XPD",
    currency: "Palladium Ounces (XPD)",
  },
  {
    code: "PAB",
    currency: "Panama Balboa (PAB)",
  },
  {
    code: "PGK",
    currency: "Papua New Guinea Kina (PGK)",
  },
  {
    code: "PYG",
    currency: "Paraguayan Guarani (PYG)",
  },
  {
    code: "PEN",
    currency: "Peruvian Nuevo Sol (PEN)",
  },
  {
    code: "PHP",
    currency: "Philippine Peso (PHP)",
  },
  {
    code: "XPT",
    currency: "Platinum Ounces (XPT)",
  },
  {
    code: "PLN",
    currency: "Polish Zloty (PLN)",
  },
  {
    code: "QAR",
    currency: "Qatar Rial (QAR)",
  },
  {
    code: "ROL",
    currency: "Romanian Leu (ROL)",
  },
  {
    code: "RUB",
    currency: "Russian Rouble (RUB)",
  },
  {
    code: "RWF",
    currency: "Rwanda Franc (RWF)",
  },
  {
    code: "WST",
    currency: "Samoa Tala (WST)",
  },
  {
    code: "STD",
    currency: "Sao Tome Dobra (STD)",
  },
  {
    code: "SAR",
    currency: "Saudi Arabian Riyal (SAR)",
  },
  {
    code: "RSD",
    currency: "Serbian Dinar (RSD)",
  },
  {
    code: "SCR",
    currency: "Seychelles Rupee (SCR)",
  },
  {
    code: "SLL",
    currency: "Sierra Leone Leone (SLL)",
  },
  {
    code: "XAG",
    currency: "Silver Ounces (XAG)",
  },
  {
    code: "SGD",
    currency: "Singapore Dollar (SGD)",
  },
  {
    code: "SBD",
    currency: "Solomon Islands Dollar (SBD)",
  },
  {
    code: "SOS",
    currency: "Somali Shilling (SOS)",
  },
  {
    code: "ZAR",
    currency: "South African Rand (ZAR)",
  },
  {
    code: "LKR",
    currency: "Sri Lanka Rupee (LKR)",
  },
  {
    code: "SHP",
    currency: "St Helena Pound (SHP)",
  },
  {
    code: "SSP",
    currency: "Sudanese Pound (SSP)",
  },
  {
    code: "SRD",
    currency: "Surinam Dollar (SRD)",
  },
  {
    code: "SZL",
    currency: "Swaziland Lilageni (SZL)",
  },
  {
    code: "SEK",
    currency: "Swedish Krona (SEK)",
  },
  {
    code: "CHF",
    currency: "Swiss Franc (CHF)",
  },
  {
    code: "SYP",
    currency: "Syrian Pound (SYP)",
  },
  {
    code: "TWD",
    currency: "Taiwan Dollar (TWD)",
  },
  {
    code: "TZS",
    currency: "Tanzanian Shilling (TZS)",
  },
  {
    code: "THB",
    currency: "Thai Baht (THB)",
  },
  {
    code: "TOP",
    currency: "Tonga Pa'anga (TOP)",
  },
  {
    code: "TTD",
    currency: "Trinidad&Tobago Dollar (TTD)",
  },
  {
    code: "TND",
    currency: "Tunisian Dinar (TND)",
  },
  {
    code: "TRL",
    currency: "Turkish Lira (TRL)",
  },
  {
    code: "TMM",
    currency: "Turkmen Manat (TMM)",
  },
  {
    code: "USD",
    currency: "U.S. Dollar (USD)",
  },
  {
    code: "AED",
    currency: "UAE Dirham (AED)",
  },
  {
    code: "UGX",
    currency: "Ugandan Shilling (UGX)",
  },
  {
    code: "UAH",
    currency: "Ukraine Hryvnia (UAH)",
  },
  {
    code: "UYU",
    currency: "Uruguayan New Peso (UYU)",
  },
  {
    code: "UZS",
    currency: "Uzbekistani Sum (UZS)",
  },
  {
    code: "VUV",
    currency: "Vanuatu Vatu (VUV)",
  },
  {
    code: "VEB",
    currency: "Venezuelan Bolivar (VEB)",
  },
  {
    code: "VND",
    currency: "Vietnam Dong (VND)",
  },
  {
    code: "YER",
    currency: "Yemen Riyal (YER)",
  },
  {
    code: "YUM",
    currency: "Yugoslav Dinar (YUM)",
  },
  {
    code: "ZRN",
    currency: "Zaire New Zaire (ZRN)",
  },
  {
    code: "ZMK",
    currency: "Zambian Kwacha (ZMK)",
  },
  {
    code: "ZWD",
    currency: "Zimbabwe Dollar (ZWD)",
  },
];

export default countryCurrencies;
