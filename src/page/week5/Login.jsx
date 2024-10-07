import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const nav = useNavigate();
  const { logIn } = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() => {
          logIn();
          nav("/week5/home");
        }}
      >
        로그인
      </button>
    </div>
  );
};
export default Login;
