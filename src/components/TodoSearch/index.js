import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

import './TodoSearch.css'

const TodoSearch = () => {
    const {
        searchValue,
        onChangeSearch,
        totalTodos,
        completedTodos
    } =useContext(TodoContext)

    return (
        <>
            <h2 className="TodoSearch-title">Terminada <span className="TodoSearch-number">{completedTodos}</span> de <span className="TodoSearch-number">{totalTodos}</span> tareas</h2>
            <input value={searchValue} onChange={onChangeSearch} className="TodoSearch-input" type="text" placeholder="Repollo" />
        </>
    );
};

export { TodoSearch };
