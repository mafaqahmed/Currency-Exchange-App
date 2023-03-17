import React, { useEffect, useState } from "react";
import { TfiExchangeVertical } from "react-icons/tfi";
import CurrencyRow from "./CurrencyRow";

const Converter = () => {
  const [amount, setAmount] = useState(1);
  const [options, setOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, settoCurrency] = useState();
  const [conversionRate, setConversionRate] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then((res) => res.json())
      .then((data) => {
        setOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
    )
      .then((res) => res.json())
      .then((data) => setConversionRate(data.result));
    setResult(null);
  }, [fromCurrency, toCurrency, amount]);

  const handleAlternate = () => {
    const temp = fromCurrency;
    console.log(temp);
    setFromCurrency(toCurrency);
    console.log(fromCurrency);
    settoCurrency(temp);
    console.log(toCurrency);
  };

  const handleConvert = async () => {
    const result = (conversionRate * amount).toFixed(4);
    setResult(result);
    const date = new Date();
    const item = {
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
      amount: amount,
      conversionRate: conversionRate,
      result: result,
      date: date,
    };
    let conversionHistory = JSON.parse(
      localStorage.getItem("conversionHistory") || "[]"
    );
    conversionHistory.push(item);
    localStorage.setItem(
      "conversionHistory",
      JSON.stringify(conversionHistory)
    );
  };

  return (
    <div className="max-w-2xl rounded bg-white text-black mx-5 px-5 py-10">
      <p className="mb-2 w-headerW md:w-96">amount</p>
      <input
        className="rounded-md mb-2 w-full"
        type="number"
        name="amount"
        id="amount"
        min={'1'}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex flex-col items-center justify-center">
        <CurrencyRow
          title={"from currency"}
          id={"fromCurrency"}
          value={fromCurrency}
          setCurrency={setFromCurrency}
          currencyOptions={options}
        />
        <TfiExchangeVertical
          className="mt-3 mb-2 text-xl text-blue-700 cursor-pointer hover:text-blue-900 ease-in-out duration-200"
          onClick={handleAlternate}
        />
        <CurrencyRow
          title={"to currency"}
          id={"toCurrency"}
          value={toCurrency}
          setCurrency={settoCurrency}
          currencyOptions={options}
        />
      </div>
      <button
        className="text-center w-full bg-red-900 text-white py-2 rounded-md mt-7"
        onClick={handleConvert}
      >
        Convert
      </button>
      {result && (
        <p className="text-red-900 text-sm font-bold w-full text-center mt-2">
          {amount} {fromCurrency} = {result} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default Converter;
