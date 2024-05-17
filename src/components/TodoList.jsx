import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  title,
  deleteTodoHandler,
  toggleTodoHandler,
  btn,
}) => {
  return (
    <>
      <p>{title}</p>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              btn={btn}
              deleteTodoHandler={deleteTodoHandler}
              toggleTodoHandler={toggleTodoHandler}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
