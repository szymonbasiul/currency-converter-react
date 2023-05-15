import { useState, useEffect } from "react";

export const useCurrencyData = () => {
  const API_URL = "https://api.exchangerate.host/latest?base=PLN";

  const [currencyData, setCurrencyData] = useState({

  });

  const getAllCurrenciesData = () => {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrencyData(data);
      })
      .catch();
  };

  return { getAllCurrenciesData, currencyData };
};
