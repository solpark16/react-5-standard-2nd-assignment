import React from "react";

const TodoItem = ({ todo, deleteTodoHandler, toggleTodoHandler, btn }) => {
  const { id, title, body } = todo;
  return (
    <li>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={() => deleteTodoHandler(id)}>삭제</button>
      <button onClick={() => toggleTodoHandler(id)}>{btn}</button>
    </li>
  );
};

export default TodoItem;
