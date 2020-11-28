import React, { useState } from "react";

const TodoForm = (props) => {

    // state that updates onChange of form input
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        // prevents page refresh
        e.preventDefault();

        // ID of each todo is set randomly for preventing errors
        props.setTodos([...props.todos, {
            id: Math.floor(Math.random()*1000),
            text: input,
            completed: false
        }]);

        // sets state back to initial state and clears the textField
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={input} type="text" className="todo-input" placeholder="add a todo..." onChange={(e) => setInput(e.target.value)}/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"/>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    ); 
};

export default TodoForm;