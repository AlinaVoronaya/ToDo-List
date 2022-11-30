import React from "react";
import {Check} from "../Check/Check";
import './TodoItem.scss';

export const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className="todo-item">
            <div className="todo-item_main" onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted}/>
                <span
                    className={` todo-item_text ${todo.isCompleted ? "todo_item--line-through" : ""}`}>{todo.text}</span>
            </div>
            <div className="trash" onClick={() => removeTodo(todo.id)}></div>
        </div>
    )
}