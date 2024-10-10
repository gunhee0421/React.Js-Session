import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ContextPage, Page1 } from "./week2/Components/Component";
import {
  ButtonComponent,
  ButtonComponentCss,
} from "./week2/Components/ButtonComponent";
import styled from "styled-components";
import IntroducePage from "./week2/P3/Introduce";
import Calculator from "./week2/P4/Calculator";
import { ReducerTest } from "./week2/Components/ReducerTest";

// component 인수 예제
// export default function App() {
//   const name = "조건희";

//   return (
//     <div className="flex flex-col  justify-center items-center">
//       <h1 className="font-bold text-[44px] mb-12">
//         welcome to React.JS Session
//       </h1>
//       <p>저는 Web Tm {name} 입니다.</p>
//     </div>
//   );
// }

// component 객체 전달 예제
export function P3App() {
  const data = {
    name: "조건희",
    department: "ICT융합학부",
    studentId: "202204133",
    major: "소프트웨어 전공",
    minor: "가상현실 전공",
    email: "rjsgml771@naver.com",
    interesting: ["Web", "Frontend", "Backend", "App", "React Native"],
  };

  return <IntroducePage props={data} />;
}

// reducer 예제
export default function App() {
  return <ReducerTest />;
}

// context 예제
export const Context = React.createContext();

// export default function App() {
//   return (
//     <Context.Provider value={{ name: "조건희" }}>
//       <ContextPage />
//     </Context.Provider>
//   );
// }
