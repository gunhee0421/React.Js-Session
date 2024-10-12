import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  StyledInput,
  StyledButton,
  StyledList,
  ButtonContainer,
  Title,
} from "../../../styles/week3";

const W3_P2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputValue]);

  const addFirst = () => {
    if (inputValue) {
      setListItems([inputValue, ...listItems]);
      setInputValue(""); // 입력값 초기화
    }
  };

  const addLast = () => {
    if (inputValue) {
      setListItems([...listItems, inputValue]);
      setInputValue(""); // 입력값 초기화
    }
  };

  const removeFirst = () => {
    setListItems(listItems.slice(1));
  };

  const removeLast = () => {
    setListItems(listItems.slice(0, -1));
  };

  return (
    <Container style={{ height: "100vh" }}>
      <Title>실습 2번째</Title>
      <form>
        <StyledInput
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text here"
        />
        <ButtonContainer>
          <StyledButton type="button" onClick={addFirst}>
            Add First
          </StyledButton>
          <StyledButton type="button" onClick={addLast}>
            Add Last
          </StyledButton>
          <StyledButton type="button" onClick={removeFirst}>
            Remove First
          </StyledButton>
          <StyledButton type="button" onClick={removeLast}>
            Remove Last
          </StyledButton>
        </ButtonContainer>
      </form>

      <StyledList>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </StyledList>
    </Container>
  );
};
export default W3_P2;
