import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
`;

const Info = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 10px 0;
  color: #555;

  span {
    font-weight: bold;
    color: #333;
  }
`;

const InterestList = styled.ul`
  list-style-type: square;
  padding-left: 20px;
  color: #555;

  li {
    margin-bottom: 5px;
  }
`;

const Introduce = (props) => {
  return (
    <Container>
      <Title>Personal Profile</Title>
      <Info>
        <span>Name: {props.props.name}</span>
      </Info>
      <Info>
        <span>Department: {props.props.department}</span>
      </Info>
      <Info>
        <span>Student ID: {props.props.studentId}</span>
      </Info>
      <Info>
        <span>Major: {props.props.major}</span>
      </Info>
      <Info>
        <span>Minor: {props.props.minor}</span>
      </Info>
      <Info>
        <span>Email: {props.props.email}</span>
      </Info>
      <Info>
        <span>Interests</span>
        <InterestList>
          {props.props.interesting.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </InterestList>
      </Info>
    </Container>
  );
};

export default Introduce;
