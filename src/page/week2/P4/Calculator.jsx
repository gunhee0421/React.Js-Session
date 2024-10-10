import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f0f4f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CalculatorWrapper = styled.div`
  background-color: #ffffff;
  padding: 30px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 320px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 24px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 15px;
  outline: none;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  flex: 1;
  padding: 15px;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#4caf50" : "#f44336")};
  color: #fff;
  border: none;
  border-radius: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#45a049" : "#e53935")};
  }
`;

const Result = styled.h2`
  margin-top: 20px;
  color: ${(props) => (props.error ? "#f44336" : "#333")};
  text-align: center;
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
      <ButtonContainer>
        <Button onClick={calculateResult}>Send</Button>
        <Button onClick={clearInput}>Clear</Button>
      </ButtonContainer>
      {result !== null && (
        <Result error={result === "Error"}>Result: {result}</Result>
      )}
      <ButtonContainer>
        <Button
          onClick={() => {
            setResult(result + 1);
            setResult(result + 1);
          }}
          style={{ background: "blue" }}
        >
          +2
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Calculator;
