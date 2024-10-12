import React, { useState, useMemo } from "react";
import { Container, StyledInput, StyledParagraph } from "../../../styles/week3";

const MemoTest = () => {
  const [input, setInput] = useState("");

  // 입력된 나이를 기준으로 태어난 년도를 계산
  const birthYear = useMemo(() => {
    if (!input) return "";
    const currentYear = new Date().getFullYear();
    const age = parseInt(input, 10);

    // 유효한 숫자가 아니면 처리하지 않음
    if (isNaN(age)) return "Invalid input";

    return currentYear - age;
  }, [input]);
  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Enter your age"
        value={input}
        onChange={(e) => setInput(e.target.value)} // 나이를 입력할 때마다 상태 업데이트
      />
      <StyledParagraph>
        {birthYear
          ? `You were born in ${birthYear + 1}`
          : "Please enter your age"}
      </StyledParagraph>
      <br />
    </Container>
  );
};

export default MemoTest;
