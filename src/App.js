import React, { useState } from "react";
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [input, setinput] = useState("");

  return (
    <div className="todo-app">
      <header>
        <h1>{input}</h1>
      </header>
      <TodoForm setInput={setinput}/>
    </div>
  );
}

export default App;
