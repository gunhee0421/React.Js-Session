import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, DeleteButton } from "../../../styles/week4";
import { Heading } from "../../../styles/week3";
import { StyledButton } from "../../../styles/week3";
import { UserContext } from "./UserContext";

const P1User = () => {
  const nav = useNavigate();
  const { login, logOut } = useContext(UserContext);

  return (
    <Container>
      {login ? <Heading>이름: 조건희</Heading> : <p>로그인이 필요합니다.</p>}
      <br />
      <StyledButton onClick={() => nav("/week5/p1/home")}>홈으로</StyledButton>
      <br />
      <StyledButton onClick={() => nav("/week5/p1/write")}>글쓰기</StyledButton>
      <br />
      <DeleteButton onClick={() => logOut()}>로그아웃</DeleteButton>
    </Container>
  );
};

export default P1User;
