import React from "react";
import { useActions } from "easy-peasy";

const TodoItem = ({ todo }) => {
  const toggle = useActions((actions) => actions.toggle);
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span onClick={() => toggle(todo.id)} style={{ cursor: "pointer" }}>
        {todo.title}
      </span>
      <button>
        <i className="fas fa-trash alt" />
      </button>
    </div>
  );
};

export default TodoItem;
