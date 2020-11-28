import React from 'react'
import Todo from './Todo'


const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map((todo) => (
                    <Todo text={todo.text} id={todo.id}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;