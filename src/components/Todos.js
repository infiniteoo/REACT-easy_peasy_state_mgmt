import React from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = [
    {
      id: 1,
      title: "Take out the trash",
      completed: true,
    },
    {
      id: 2,
      title: "Grocery shopping",
      completed: false,
    },
    {
      id: 3,
      title: "Clean gecko tank",
      completed: false,
    },
  ];
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
