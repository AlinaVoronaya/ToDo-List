import React, {useState} from "react";
import './AddTodo.scss';

export const AddTodo = ({addTodo}) => {

    const [text, setText] = useState('');

    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="Add a task"
                className="add-todo__input"
                onChange={e => setText(e.target.value)}
                value={text}
                onKeyDown={e => e.key === 'Enter' && addTodo(text)}
            />
            <button className="add-todo__btn" onClick={addTodo}>
                Add
            </button>
        </div>
    )
}