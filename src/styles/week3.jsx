import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 24px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 300px;
  margin-top: 20px;
`;
export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  max-width: 300px;

  li {
    padding: 10px;
    margin-bottom: 8px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    color: #333;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;
export const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  color: #333;
  font-family: Arial, sans-serif;
`;

export const TimeDisplay = styled.h2`
  font-size: 28px;
  color: #333;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #007bff;
  margin-bottom: 20px;
`;
export const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin: 20px 0;
  text-align: justify;
  font-family: "Arial", sans-serif;
`;
