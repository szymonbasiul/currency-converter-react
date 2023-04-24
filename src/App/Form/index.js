import { useState, useRef } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import Clock from "./Clock";
import "./style.css";

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
    <form className="form" onSubmit={onSubmit}>
      <Clock />
      <fieldset className="form__fieldset">
        <legend className="form__legend"> Kalkulator walutowy </legend>
        <p>Wybierz walutę*</p>
        <select
          className="form__select"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.shortName} value={currency.shortName}>
              {currency.fullName}
            </option>
          ))}
        </select>
        <p>Wybierz walutę oraz kwotę transakcji*</p>
        <label>
          <span className="form__labelText">Kwota w PLN:</span>
          <input
            ref={inputRef}
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__field"
            id="amount"
            name="exchange"
            type="number"
            placeholder="Wprowadź kwotę do wymiany"
            min="1"
            step="0.01"
            required
          />
        </label>
      </fieldset>

      <button className="form__button" onClick={focusInput}>
        Przelicz
      </button>

      <Result result={result} />
    </form>
  );
};

export default Form;
