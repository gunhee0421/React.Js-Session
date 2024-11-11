import React, { useState, useRef } from "react";
import {
  Container,
  Input,
  Title,
  InputContainer,
  AddButton,
  TodoListContainer,
  TodoItem,
  TodoText,
  DeleteButton,
} from "../../styles/week4";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const todoRefs = useRef([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    const newTodoItem = {
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <Title>Todo List</Title>

      <InputContainer onSubmit={(e) => addTodo(e)}>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <AddButton type="submit">Add Todo</AddButton>
      </InputContainer>

      <TodoListContainer>
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            <TodoText
              ref={(el) => (todoRefs.current[index] = el)}
              onClick={() => toggleComplete(index)}
              completed={todo.completed}
            >
              {todo.text}
            </TodoText>
            <DeleteButton onClick={() => deleteTodo(index)}>
              Delete
            </DeleteButton>
          </TodoItem>
        ))}
      </TodoListContainer>
    </Container>
  );
};

export default TodoList;
