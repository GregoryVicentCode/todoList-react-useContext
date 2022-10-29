import { useContext } from "react";
import { TodoContext } from "../TodoContext";

import { TodoButton } from "../TodoButton";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { TodoCreate } from "../TodoCreate";

import './App.css'

const App = () => {
    const {
        todosFilter,
        totalTodos,
        completedTodos,
        isOpen
    } = useContext(TodoContext)

    return (
        <main className="App">
            {!!isOpen && <TodoCreate />}
            <section className="App-todoSearch App-container">
                <TodoSearch />
            </section>
            <section className="App-todoList App-container">

                {todosFilter.map(todo => (
                        <TodoItem 
                            key={todo.task}
                            text={todo.task}
                            completed={todo.completed}
                        />
                    ))}

            </section>
            <TodoButton />
        </main>
    );
};

export { App };
