import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

const default_currency = currencies[0].shortName;

const Form = ({ calculateExchange, result }) => {
  const [currency, setCurrency] = useState(default_currency);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateExchange(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
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

      <button className="form__button">Przelicz</button>

      <Result result={result} />
    </form>
  );
};

export default Form;
