import React, { useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      body,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    setTitle("");
    setBody("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="제목을 입력하세요."
      />
      <input
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
        type="text"
        placeholder="내용을 입력하세요."
      />
      <button>입력</button>
    </form>
  );
};

export default TodoForm;
