import React, { useEffect, useState } from "react";
import { Container, Title, StyledParagraph } from "../../../styles/week3";

const EffectTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {data ? (
        <div>
          <Title>{data.title}</Title>
          <StyledParagraph>ID: {data.id}</StyledParagraph>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default EffectTest;
