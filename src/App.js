import React, { useState } from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import './App.css';

const App = () => {
  // state with all todo objects created
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-app">
      <header>
        <h1>TODO APP</h1>
      </header>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;