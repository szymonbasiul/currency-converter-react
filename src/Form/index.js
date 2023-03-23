import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";

const Form = () => {
  const [amount, setAmount] = useState(currencies[0].shortName);
  const [currency, setCurrency] = useState("");

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend"> Kalkulator walutowy </legend>
        <p>Wybierz walutę*</p>
        <select
          className="select"
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
          <span className="form__labelText">Kwota:</span>
        </label>
        <label>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__field"
            id="amount"
            name="exchange"
            type="number"
            placeholder="Wprowadź kwotę do wymiany"
            autofocus
            min="1"
            step="0.01"
            required
          />
        </label>
      </fieldset>

      <label>
        <button className="form__button" type="submit">
          Przelicz
        </button>
      </label>
      <p className="form__result">
        {" "}
        Przeliczona wartość: <strong className="result">result</strong>
      </p>
    </form>
  );
};

export default Form;
