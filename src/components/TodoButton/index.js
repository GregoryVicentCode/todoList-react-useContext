import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

import './TodoButton.css'

const TodoButton = () => {
const {
    onClickButton,
    isOpen
} = useContext(TodoContext)

    return (
        <button onClick={onClickButton} className="TodoButton">
            {
                !!isOpen ? 'X' : '+'
            }
        </button>
    )
}

export { TodoButton }