import React, {useState} from "react";
import {AddTodo} from "./Components/AddTodo/AddTodo";
import {TodoList} from "./Components/TodoList/TodoList";
import {Footer} from "./Components/Footer/Footer";

function App() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            text: "First todo"
        },
        {
            id: 2,
            text: "Second todo"
        },
        {
            id: 3,
            text: "Third todo"
        }
    ])

    return (
        <>
            <div className="header">
                <h1>todos</h1>
            </div>
            <AddTodo/>
            <TodoList />
            <Footer />
        </>
    );
}

export default App;
