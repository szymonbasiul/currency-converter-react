import { useState } from "react";
import { currencies } from "./currencies";
import Form from "./Form";

function App() {
  const [result, setResult] = useState();

  const calculateExchange = (currency, amount) => {
    const rate = currencies.find(
      ({ shortName }) => shortName === currency
    ).rate;

    setResult({
      givenAmount: +amount,
      changedAmount: amount / rate,
      currency,
    });
  };

  return (
    <div className="container">
      <Form result={result} calculateExchange={calculateExchange} />
    </div>
  );
}

export default App;
