import { ResultForm } from "./styled";

export const Result = ({ result }) => (
  <ResultForm>
    {result !== undefined && (
      <>
        {result.givenAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
        <strong>
          {result.changedAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </ResultForm>
);
