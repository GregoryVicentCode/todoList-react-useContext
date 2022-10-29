import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

import './Modal.css'

const Modal = () => {
    const {
        createValue,
        onChangeCreate,
        onClickButtonCreate
    } = useContext(TodoContext)

    return(
        <section className="Modal">
            <div className="Modal-box">
                <h2 className="Modal-title">Crear un nuevo todo:</h2>
                <input value={createValue} onChange={onChangeCreate} className="Modal-input" type="text" placeholder="new todo..."/>
                <button onClick={onClickButtonCreate} className="Modal-button">Crear</button>
            </div>
        </section>
    )
}

export { Modal }