import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./page/week5/home";
import Login from "./page/week5/Login";
import { UserProvider } from "./context/UserContext";
import User from "./page/week5/User";
import App, { P3App } from "./page/App";
import SimplePage from "./page/week2/P1/SinglePage2";
import P2 from "./page/week2/P2/P2";
import IntroducePage from "./page/week2/P3/Introduce";
import Calculator from "./page/week2/P4/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/week2/">
            <Route path="p1" element={<SimplePage />} />
            <Route path="p2" element={<P2 />} />
            <Route path="p3" element={<P3App />} />
            <Route path="p4" element={<Calculator />} />
          </Route>
          <Route path="/week5/">
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
