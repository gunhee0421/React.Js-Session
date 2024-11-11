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
import App from "./page/App";
import SimplePage from "./page/week2/P1/SinglePage2";
import P2 from "./page/week2/P2/P2";
import Calculator from "./page/week2/P4/Calculator";
import { IntroducePage } from "./page/week2/P3/IntroducePage";
import W3_P1 from "./page/week3/P1/P1";
import W3_P2 from "./page/week3/P2/P2";
import { P1Home } from "./page/week5/P1/Home";
import P1User from "./page/week5/P1/User";
import { UserProvider1 } from "./page/week5/P1/UserContext";
import Write from "./page/week5/P1/Write";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <UserProvider1>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/week2/">
              <Route path="p1" element={<SimplePage />} />
              <Route path="p2" element={<P2 />} />
              <Route path="p3" element={<IntroducePage />} />
              <Route path="p4" element={<Calculator />} />
            </Route>
            <Route path="/week3/">
              <Route path="p1" element={<W3_P1 />} />
              <Route path="p2" element={<W3_P2 />} />
            </Route>
            <Route path="/week5/">
              <Route path="p1">
                <Route path="home" element={<P1Home />} />
                <Route path="user" element={<P1User />} />
                <Route path="write" element={<Write />} />
              </Route>
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="user" element={<User />} />
            </Route>
          </Routes>
        </UserProvider1>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
