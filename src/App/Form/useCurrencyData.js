import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.exchangerate.host/latest?base=PLN";

export const useCurrencyData = () => {
  const [currencyData, setCurrencyData] = useState({
    stage: "load",
  });

  useEffect(() => {
    setTimeout(getCurrencyData, 1500);
  }, []);

  const getCurrencyData = async () => {
    try {
      const fetchedData = await axios(API_URL);
      setCurrencyData({
        stage: "done",
        date: fetchedData.data.date,
        rates: fetchedData.data.rates,
      });
    } catch (error) {
      console.log("Error: ", error);
      setCurrencyData({
        stage: "error",
      });
    }
  };

  return { currencyData };
};
