import { useState } from "react";
import Form from "./Form";
import { Container } from "./styled";
import { useCurrencyData } from "./Form/useCurrencyData";

function App() {
  const [result, setResult] = useState();
  const { currencyData } = useCurrencyData();

  const calculateExchange = (currency, amount) => {
    const rate = currencyData.rates[currency];

    setResult({
      givenAmount: +amount,
      changedAmount: amount * rate,
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
