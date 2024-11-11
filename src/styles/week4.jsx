import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const InputContainer = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

export const AddButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TodoListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const TodoText = styled.span`
  flex-grow: 1;
  font-size: 1rem;
  cursor: pointer;
  ${({ completed }) =>
    completed &&
    `
    text-decoration: line-through;
    color: gray;
  `}
`;

export const DeleteButton = styled.button`
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  color: white;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;
