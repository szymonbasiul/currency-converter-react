import { useState } from "react";
import { currencies } from "./currencies";
import Form from "./Form";
import { Container } from "./styled";

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
    <Container>
      <Form result={result} calculateExchange={calculateExchange} />
    </Container>
  );
}

export default App;
