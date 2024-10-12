import React, { useState, useEffect } from "react";
import { ClockContainer, Title, TimeDisplay } from "../../../styles/week3";

export const LifeCycle = () => {
  const [date, setDate] = useState(new Date());

  // useEffect를 사용하여 타이머 설정 및 해제
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    // 컴포넌트가 언마운트될 때 타이머 해제
    return () => {
      clearInterval(timerID);
    };
  }, []);

  // 시간 업데이트 함수
  const tick = () => {
    setDate(new Date());
  };

  return (
    <ClockContainer>
      <Title>Hello, world!</Title>
      <TimeDisplay>현재 시간: {date.toLocaleTimeString()}</TimeDisplay>
    </ClockContainer>
  );
};
