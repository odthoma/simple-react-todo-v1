import React, { useState } from "react";

const TodoForm = (props) => {

    const handleInput = (e) => {
        props.setInput(e.target.value);
    };

    return (
        <form onSubmit={(ev) => ev.preventDefault}>
            <input type="text" className="todo-input" placeholder="add a todo..." onChange={handleInput}/>
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
}

export default TodoForm;