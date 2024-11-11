import React, { useState } from "react";
import { Home } from "./week5/home";
import Login from "./week5/Login";
import User from "./week5/User";

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      {index === 0 && <Home setIndex={setIndex} />}
      {index === 1 && <Login setIndex={setIndex} />}
      {index === 2 && <User setIndex={setIndex} />}
    </div>
  );
}
