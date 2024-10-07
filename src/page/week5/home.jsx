import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

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
    <div>
      <h1>Home Page</h1>
      {!login && <button onClick={() => nav("/week5/login")}>Login</button>}
      {login && <button onClick={() => nav("/week5/user")}>User</button>}
      {login && <button onClick={() => logOut()}>LogOut</button>}
      <div>
        <h2>이벤트 콜백함수</h2>
        <button onClick={handleClick2(handleClick)}>CallBack</button>
      </div>
    </div>
  );
};
