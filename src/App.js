import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <form className="form js-form">
        <fieldset className="form__fieldset">
          <legend className="form__legend"> Kalkulator walutowy </legend>
          <p>Wybierz walutę*</p>
          <select className="js-currencyInput">
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
          </select>
          <p>Wybierz walutę oraz kwotę transakcji*</p>
          <label>
            <span className="form__labelText">Kwota:</span>
          </label>
          <label>
            <input
              className="form__field js-currencyAmount"
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
          <input
            className="form__button js-submit"
            type="submit"
            value="Przelicz"
          />
        </label>
        <p className="form__result">
          {" "}
          Przeliczona wartość: <strong className="js-result"></strong>
        </p>
      </form>
    </div>
  );
}

export default App;
