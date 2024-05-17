import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      title: "일기 쓰기",
      body: "일기를 씁시다.",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      title: "가계부 쓰기",
      body: "가계부를 씁시다.",
      isDone: true,
    },
  ]);
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  const deleteTodoHandler = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          return { ...item, isDone: !item.isDone };
        }
      })
    );
  };
  return (
    <>
      <TodoForm setTodos={setTodos} />
      <div>
        <TodoList
          title="Working"
          btn="완료"
          deleteTodoHandler={deleteTodoHandler}
          toggleTodoHandler={toggleTodoHandler}
          todos={workingTodos}
        />
        <TodoList
          title="Done"
          btn="취소"
          deleteTodoHandler={deleteTodoHandler}
          toggleTodoHandler={toggleTodoHandler}
          todos={doneTodos}
        />
      </div>
    </>
  );
};

export default TodoContainer;
