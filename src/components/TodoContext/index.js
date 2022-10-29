import React from 'react'
import { useState } from 'react'

const TodoContext = React.createContext()

const TodoProvider = (props) => {
    const data = [
        {
            task: "Sacar la basura",
            completed: false,
        },
        {
            task: "Lavar los platos",
            completed: true,
        },
        {
            task: "Tender la ropa",
            completed: false,
        },
        {
            task: "Espantar a las palomas",
            completed: false,
        },
    ]
    const [todos, setTodos] = useState(data)
    const [totalTodos, setTotalTodos] = useState(todos.length)
    const [completedTodos, setCompletedTodos] = useState(todos.filter(todo => !!todo.completed).length)
    const [searchValue, setSearchValue] = useState('')
    const [createValue, setCreateValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    let todosFilter = []

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const onChangeCreate = (event) => {
        setCreateValue(event.target.value)
    }

    const onClickButton = () => {
        !!isOpen ? setIsOpen(false) : setIsOpen(true)
        setCreateValue('')
    }
    
    const onClickButtonCreate = () => {
        const newTodos = todos
        newTodos.push({
            task: createValue,
            completed: false
        })
        setTodos(newTodos)
        setTotalTodos(todos.length)
        setCompletedTodos(todos.filter(todo => !!todo.completed).length)
        setIsOpen(false)
    }

    const onClickCheck = (event) => {
        const todoText = event.target.parentNode.querySelector('.TodoItem-text').textContent
        todos.forEach(todo => {
            if(todoText === todo.task) {
                if(!!todo.completed) {
                    todo.completed = false 
                } else {
                    todo.completed = true
                }
            }
        })
        setTodos(todos)
        setCompletedTodos(todos.filter(todo => !!todo.completed).length)
    }

    const onClickDelete = (event) => {
        const todoText = event.target.parentNode.querySelector('.TodoItem-text').textContent
        todos.forEach(todo => {
            if(todoText === todo.task) {
                const newTodos = todos
                newTodos.splice(todos.indexOf(todo), 1)

                setTodos(newTodos)
                setTotalTodos(todos.length)
                setCompletedTodos(todos.filter(todo => !!todo.completed).length)
            }
        })
    }

    if(searchValue === '') {
        todosFilter = todos
    } else {
        todosFilter = todos.filter(todo => todo.task.match(searchValue))
    }

    return (
        <TodoContext.Provider value={{
            todos,
            totalTodos,
            completedTodos,
            searchValue,
            todosFilter,
            isOpen,
            createValue,
            onChangeCreate,
            onChangeSearch,
            onClickCheck,
            onClickDelete,
            onClickButton,
            onClickButtonCreate
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }