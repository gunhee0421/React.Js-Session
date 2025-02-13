import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Container, DeleteButton } from "../../styles/week4";
import { Heading } from "../../styles/week3";
import { StyledButton } from "../../styles/week3";

const User = () => {
  const nav = useNavigate();
  const { login, logOut } = useContext(UserContext);

  return (
    <Container>
      {login ? <Heading>이름: 조건희</Heading> : <p>로그인이 필요합니다.</p>}
      <br />
      <StyledButton onClick={() => nav("/week5/home")}>홈으로</StyledButton>
      <br />
      <DeleteButton onClick={() => logOut()}>로그아웃</DeleteButton>
    </Container>
  );
};

export default User;
