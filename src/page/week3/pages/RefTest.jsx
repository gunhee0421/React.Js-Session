import { useEffect, useRef, useState } from "react";
import {
  Container,
  Heading,
  StyledInput,
  StyledButton,
  StyledList,
  ButtonContainer,
} from "../../../styles/week3";

const FocusInput = () => {
  const ref = useRef(null);
  const [text, setText] = useState("");

  const handleFocus = () => {
    alert("input: " + text);
    setText("");
    ref.current.focus();
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <Heading>useRef Example: 포커싱 이동</Heading>
      <StyledInput
        ref={ref}
        onChange={onChange}
        type="text"
        placeholder="Enter text here"
        value={text}
      />
      <StyledButton onClick={handleFocus}>Focus the input</StyledButton>
    </Container>
  );
};

const DomRef = () => {
  const Ref = useRef(null);

  // 마지막 자식 노드 추가
  const addLastChild = () => {
    if (Ref.current) {
      const li = document.createElement("li");
      li.textContent = "item " + (Ref.current.children.length + 1);
      Ref.current.appendChild(li);
    }
  };
  // 마지막 자식 노드 삭제
  const removeLastChild = () => {
    if (Ref.current && Ref.current.lastChild) {
      Ref.current.removeChild(Ref.current.lastChild);
    }
  };

  return (
    <Container>
      <Heading>useRef Example: DOM 요소 접근</Heading>
      <StyledList ref={Ref}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </StyledList>
      <ButtonContainer>
        <StyledButton onClick={addLastChild}>Add</StyledButton>
        <StyledButton onClick={removeLastChild}>Remove</StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export const RefTest = () => {
  return (
    <div>
      <FocusInput />
      <DomRef />
    </div>
  );
};
