import React, {useState} from "react";
import './AddTodo.scss';

export const AddTodo = ({addTodo}) => {

    const [text, setText] = useState('');

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            addTodo(text)
            setText('')
        }
    }

    const onButton = () => {
        addTodo(text)
        setText('')
    }

    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="Add a task"
                className="add-todo__input"
                onChange={e => setText(e.target.value)}
                value={text}
                onKeyDown={onKeyDown}
            />
            <button className="add-todo__btn" onClick={onButton}>
                Add
            </button>
        </div>
    )
}