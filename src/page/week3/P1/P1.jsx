import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  StyledInput,
  StyledButton,
  StyledList,
  ButtonContainer,
  Title,
} from "../../../styles/week3";

const W3_P1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);
  const inputRef = useRef(null);

  // Input에 포커스를 자동으로 맞추기 위한 useEffect
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // 첫 번째 버튼: 첫 번째 자식으로 추가
  const addFirst = () => {
    if (inputValue) {
      setListItems([inputValue, ...listItems]);
      setInputValue(""); // 입력값 초기화
    }
  };

  // 두 번째 버튼: 마지막 자식으로 추가
  const addLast = () => {
    if (inputValue) {
      setListItems([...listItems, inputValue]);
      setInputValue(""); // 입력값 초기화
    }
  };

  // 세 번째 버튼: 첫 번째 요소 삭제
  const removeFirst = () => {
    setListItems(listItems.slice(1));
  };

  // 네 번째 버튼: 마지막 요소 삭제
  const removeLast = () => {
    setListItems(listItems.slice(0, -1));
  };

  return (
    <Container style={{ height: "100vh" }}>
      <Title>실습 1번째</Title>
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
export default W3_P1;
