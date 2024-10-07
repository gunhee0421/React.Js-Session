import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const Result = styled.h2`
  margin-top: 20px;
  color: ${(props) => (props.error ? "red" : "black")};
`;

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  return (
    <Container>
      <h1>Calculator</h1>
      <Input type="text" value={input} onChange={handleInput} />
      <Button onClick={calculateResult}>Send</Button>
      <Button onClick={clearInput}>Clear</Button>
      {result !== null && (
        <Result error={result === "Error"}>Result: {result}</Result>
      )}
    </Container>
  );
};

export default Calculator;
