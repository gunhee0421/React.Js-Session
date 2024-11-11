import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Container, DeleteButton } from "../../styles/week4";
import { StyledButton } from "../../styles/week3";

export const Home = () => {
  const nav = useNavigate();
  const { login, logOut } = useContext(UserContext);

  const handleClick = () => {
    alert("콜백함수 실행!!");
  };
  const handleClick2 = (callback) => {
    setTimeout(callback, 2000);
  };
  return (
    <Container>
      {!login ? (
        <h1>Home Page</h1>
      ) : (
        <h1 onClick={() => nav("/week5/user")}>User Page</h1>
      )}
      {!login && (
        <StyledButton onClick={() => nav("/week5/login")}>Login</StyledButton>
      )}
      {login && (
        <StyledButton onClick={() => nav("/week5/user")}>User</StyledButton>
      )}
      {login && <DeleteButton onClick={() => logOut()}>LogOut</DeleteButton>}
      <div>
        <br />
        <h2>이벤트 콜백함수</h2>
        <button onClick={handleClick2(handleClick)}>CallBack</button>
      </div>
    </Container>
  );
};
