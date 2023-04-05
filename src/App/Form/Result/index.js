import "./style.css";

export const Result = ({ result }) => (
  <p className="form__result">
    {result !== undefined && (
      <>
        {result.givenAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
        <strong>
          {result.changedAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);
