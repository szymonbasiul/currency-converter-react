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

  if (currencyData.stage === "load") {
    return <Load>Loading data from API ...</Load>;
  } else if (currencyData.stage === "error") {
    return <Crash>Error occured ;/ ...</Crash>;
  } else {
    return (
      <MainForm onSubmit={onSubmit}>
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
      </MainForm>
    );
  }
};

export default Form;
