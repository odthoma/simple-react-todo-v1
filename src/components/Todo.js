import React from "react";

const Todo = (props) => {
  const handleDelete = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  const handleComplete = () => {
    props.setTodos(
      props.todos.map((i) => {
        if (i.id === props.todo.id) {
          return {
            ...i,
            completed: !i.completed,
          };
        }
        return i;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.text}
      </li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};

export default Todo;
