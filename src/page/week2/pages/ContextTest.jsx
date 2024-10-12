import React from "react";
import { ContextPage } from "../Components/Component";

export const Context = React.createContext();

export default function ContextTest() {
  return (
    <Context.Provider value={{ name: "조건희" }}>
      <ContextPage />
    </Context.Provider>
  );
}
