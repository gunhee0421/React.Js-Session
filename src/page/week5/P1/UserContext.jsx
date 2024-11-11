import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider1 = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);
  const nav = useNavigate();

  const logIn = () => setLogin(true);
  const logOut = () => {
    setLogin(false);
    nav("/week5/p1/home");
  };
  const writeData = ({ title, content }) => {
    const newData = [...data, { title, content }];
    setData(newData);
  };

  return (
    <UserContext.Provider value={{ login, logIn, logOut, data, writeData }}>
      {children}
    </UserContext.Provider>
  );
};
