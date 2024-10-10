import { useReducer } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const CountDisplay = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Button = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-right: ${(props) => (props.marginRight ? "10px" : "0")};
  background-color: ${(props) => (props.increment ? "#4CAF50" : "#f44336")};
`;

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const ReducerTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <CountDisplay>Count: {state.count}</CountDisplay>
      <Button onClick={() => dispatch({ type: "decrement" })} marginRight>
        -
      </Button>
      <Button onClick={() => dispatch({ type: "increment" })} increment>
        +
      </Button>
    </Container>
  );
};
