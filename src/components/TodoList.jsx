import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  setTodos,
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
              todos={todos}
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
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
