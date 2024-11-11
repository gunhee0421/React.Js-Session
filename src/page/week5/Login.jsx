import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Container } from "../../styles/week4";
import { StyledButton } from "../../styles/week3";

const Login = () => {
  const nav = useNavigate();
  const { logIn } = useContext(UserContext);
  return (
    <Container>
      <StyledButton
        onClick={() => {
          logIn();
          nav("/week5/user");
        }}
      >
        로그인
      </StyledButton>
    </Container>
  );
};
export default Login;
