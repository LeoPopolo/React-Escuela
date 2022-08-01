import React from "react";

function TodoItem(props) {
    const onComplete = () => {
        alert('completaste la tarea ' + props.text);
    }

    const onDelete = () => {
        alert('borraste la tarea ' + props.text);
    }

    return(
        <li>
            <span
                onClick={onComplete}
            >C</span>
            <p>{props.text}</p>
            <span
                onClick={onDelete}
            >X</span>
        </li>
    );
}

export { TodoItem };