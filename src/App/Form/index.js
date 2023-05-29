import { useState, useRef } from "react";
import { Result } from "./Result";
import Clock from "./Clock";
import { useCurrencyData } from "./useCurrencyData";
import {
  Button,
  Crash,
  Load,
  Field,
  Fieldset,
  Label,
  Legend,
  MainForm,
  Select,
  Text,
  Loader,
} from "./styled";

const Form = ({ calculateExchange, result }) => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState();
  const { currencyData } = useCurrencyData();

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    setTimeout(() => {
      setAmount("");
    }, 100);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateExchange(currency, amount);
    clearInput();
  };

  return (
    <MainForm onSubmit={onSubmit}>
      {currencyData.stage === "load" ? (
        <Load>
          <Loader/>
          <p>Loading data... It may take few seconds...</p>
        </Load>
      ) : currencyData.stage === "error" ? (
        <Crash>
          <p> Something went wrong... Check your internet connection and try again later...</p>
        </Crash>
      ) : (
        <>
          <Clock />
          <Fieldset>
            <Legend> Kalkulator walutowy </Legend>
            <Label>
              <Text>Wybierz walutę*</Text>
              <Select
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(currencyData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Select>
            </Label>
            <Text>Wybierz walutę oraz kwotę transakcji*</Text>
            <Label>
              <Text>Kwota w PLN:</Text>
              <Field
                ref={inputRef}
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                id="amount"
                name="exchange"
                type="number"
                placeholder="Wprowadź kwotę do wymiany"
                min="1"
                step="0.01"
                required
              />
            </Label>
          </Fieldset>
          <Button onClick={focusInput}>Przelicz</Button>
          <Result result={result} />
        </>
      )}
    </MainForm>
  );
};

export default Form;
