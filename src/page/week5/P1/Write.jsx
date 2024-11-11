import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { writeData } = useContext(UserContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    writeData({ title: title, content: text });
    setTitle("");
    setText("");
  };

  return (
    <div>
      <button onClick={() => nav("/week5/p1/home")}>홈으로</button>
      <h1>제목</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>블로그 내용</h2>
      <input type="text" value={text} onChange={handleChange} />
      <br />
      <button onClick={handleClick}>Add Blog</button>
    </div>
  );
};

export default Write;
