import { useContext } from "react";
import { Context } from "../pages/ContextTest";

export const Page1 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold">welcome to React.JS Session</h1>
      <p>React is a JavaScript library for building user interfaces</p>
    </div>
  );
};
export const ContextPage = () => {
  const data = useContext(Context);

  return (
    <div className="flex items-center justify-center font-bold text-[20px]">
      저의 이름은 {data.name} 입니다.
    </div>
  );
};
