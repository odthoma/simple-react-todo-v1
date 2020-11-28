import React from 'react';

const Todo = (props) => {
    return (
        <div className="todo">
            <li className="todo-item">{props.text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"/>
            </button>
            <button className="trash-btn">
                <i className="fas fa-trash"/>
            </button>
        </div>
    );
};

export default Todo;