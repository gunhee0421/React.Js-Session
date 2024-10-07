import React, { useState, useEffect } from "react";

const User = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 비동기 작업을 Promise로 처리
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((result) => {
        setData(result); // 비동기 작업이 완료된 후 상태 업데이트
        setLoading(false); // 로딩 상태 false로 변경
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      })
      .finally(() => {
        console.log(data);
      });
  }, [data]); // 빈 배열로 설정하여 컴포넌트가 처음 마운트될 때만 실행

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default User;
