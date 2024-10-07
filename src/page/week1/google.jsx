import React, { useEffect, useRef, useState } from "react";
import "./css/google.css";

function Google() {
  const [query, setQuery] = useState("");
  const ref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      alert(`검색어: ${query}`);
      setQuery("");
      ref.current.focus();
    } else {
      alert("검색어를 입력해주세요.");
    }
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="App">
      <div className="google-logo">
        <h1>Google</h1>
      </div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          ref={ref}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색"
          autoComplete="off"
          required
          className="search-input"
        />
      </form>
    </div>
  );
}

export default Google;
