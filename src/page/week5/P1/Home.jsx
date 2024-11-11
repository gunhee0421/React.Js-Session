import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, DeleteButton } from "../../../styles/week4";
import { StyledButton } from "../../../styles/week3";
import { UserContext } from "./UserContext";

export const P1Home = () => {
  const nav = useNavigate();
  const { login, logIn, logOut, data } = useContext(UserContext);

  console.log(data);

  return (
    <Container>
      {!login ? (
        <h1>Home Page</h1>
      ) : (
        <h1 onClick={() => nav("/week5/p1/user")}>User Page</h1>
      )}
      {!login && (
        <StyledButton
          onClick={() => {
            logIn();
          }}
        >
          Login
        </StyledButton>
      )}
      {login && (
        <StyledButton onClick={() => nav("/week5/p1/user")}>User</StyledButton>
      )}
      {login && <DeleteButton onClick={() => logOut()}>LogOut</DeleteButton>}
      {login &&
        data.map((blog, index) => (
          <div key={index}>
            <h1>{index + 1}번째 블로그</h1>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <hr />
          </div>
        ))}
    </Container>
  );
};
