import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [result, setResult] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateExchange();
  };

  const onCurrencyChange = ({ target }) => setCurrency(target.value);
  const onAmountChange = ({ target }) => setAmount(target.value);

  const calculateExchange = () => {
    currencies.forEach((x) => {
      if (x.shortName === currency) {
        setResult(x.rate / amount);
      }
    });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend"> Kalkulator walutowy </legend>
        <p>Wybierz walutę*</p>
        <select
          className="select"
          value={currency}
          onChange={onCurrencyChange}
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
        </label>
        <label>
          <input
            value={amount}
            onChange={onAmountChange}
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

      <label>
        <button className="form__button" type="submit">
          Przelicz
        </button>
      </label>
      <p className="form__result">
        {" "}
        Przeliczona wartość:{" "}
        <strong className="result">{`${result.toFixed(2)} ${currency}`}</strong>
      </p>
    </form>
  );
};

export default Form;
