import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const logIn = () => setLogin(true);
  const logOut = () => setLogin(false);

  return (
    <UserContext.Provider value={{ login, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
