import React from "react";
import ReactDOM from "react-dom";

import { Modal } from "./Modal";

const TodoCreate = () => {
    return ReactDOM.createPortal(
        <Modal />,
        document.getElementById('modal')
    )
}

export { TodoCreate }