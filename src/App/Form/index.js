import { useState, useRef } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import Clock from "./Clock";
import {
  Button,
  Field,
  Fieldset,
  Label,
  Legend,
  MainForm,
  Select,
  Text,
} from "./styled";

const default_currency = currencies[0].shortName;

const Form = ({ calculateExchange, result }) => {
  const [currency, setCurrency] = useState(default_currency);
  const [amount, setAmount] = useState("");
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
      <Clock />
      <Fieldset>
        <Legend> Kalkulator walutowy </Legend>
        <Label>
          <Text>Wybierz walutę*</Text>
          <Select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.shortName} value={currency.shortName}>
                {currency.fullName}
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
};

export default Form;
