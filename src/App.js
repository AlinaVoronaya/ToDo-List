import React, {useState} from "react";
import {AddTodo} from "./Components/AddTodo/AddTodo";
import {TodoItem} from "./Components/Item/TodoItem/TodoItem";
import {Footer} from "./Components/Footer/Footer";
import './App.scss';

const defaultTodos = [
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

const filterAll = 0;
const filterComplete = 1;
const filterIncomplete = 2;

function App() {

    const [todos, setTodos] = useState(defaultTodos);
    const [filterState, setFilterState] = useState(filterAll);

    const filterTodos = (todos, filterState) => {
        if (filterState === filterComplete) {
            return todos.filter(item => item.isCompleted)
        }
        if (filterState === filterIncomplete) {
            return todos.filter(item => !item.isCompleted)
        }
        return todos;
    }

    const addTodo = (text) => {
        setTodos([{
            id: new Date(),
            text,
            isCompleted: false
        },
            ...todos
        ])
    };


    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    };

    const removeTodo = id => {
        setTodos([...todos].filter(t => t.id !== id));
    };

    //перед мапом поменяла todo на filtered

    return (
        <div className="app-container">
            <div className="container">
                <div className="header">
                    <h1>todos</h1>
                </div>
                <AddTodo addTodo={addTodo}/>
                {filterTodos(todos, filterState).map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <Footer
                    countTodo={filterTodos(todos, filterIncomplete).length}
                    setFilterState={setFilterState}
                />
            </div>
        </div>
    );
}

export default App;
