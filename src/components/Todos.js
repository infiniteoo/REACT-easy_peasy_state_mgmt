import React, { useEffect } from "react";
import { useStore, useActions } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useStore((state) => state.todos);
  const fetchTodos = useActions((actions) => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

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
