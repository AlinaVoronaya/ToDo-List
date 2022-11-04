import React, {useState} from "react";
import {AddTodo} from "./Components/AddTodo/AddTodo";
import {TodoItem} from "./Components/Item/TodoItem/TodoItem";
import {Footer} from "./Components/Footer/Footer";
import './App.scss';

const todos = [
    {
        id: 1,
        text: 'First task',
        isCompleted: false,
    },
    {
        id: 2,
        text: 'Second task',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Third task',
        isCompleted: false,
    }
];

function App() {

    const [todo, setTodo] = useState(todos);
    const [filtered, setFiltered] = useState(todo);

    const todoFilter = (isCompleted) => {
        if (isCompleted === "All") {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(t => t.isCompleted === isCompleted)
            setFiltered(newTodo)
        }
    }

    const addTodo = (text) => {
        setTodo([{
            id: new Date(),
            text,
            isCompleted: false
        },
            ...todo
        ])
    };


    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodo(copy)
    };

    const removeTodo = id => {
        setTodo([...todo].filter(t => t.id !== id));
    };

    //перед мапом поменяла todo на filtered

    return (
        <div className="app-container">
            <div className="container">
                <div className="header">
                    <h1>todos</h1>
                </div>
                <AddTodo addTodo={addTodo}/>
                {filtered.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <Footer
                    countTodo={todo.length}
                    todoFilter={todoFilter}
                />
            </div>
        </div>
    );
}

export default App;
