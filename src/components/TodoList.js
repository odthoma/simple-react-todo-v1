import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          /* maps through the todo state array and returns list items for each totdo */
          props.todos.map((todo) => (
            <Todo todos={props.todos} setTodos={props.setTodos} todo={todo} />
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
