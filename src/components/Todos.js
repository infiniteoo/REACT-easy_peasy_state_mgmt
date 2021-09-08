import React from "react";
import { useStore } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useStore((state) => state.todos);
  console.log("todos:", todos);

  return (
    <>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
