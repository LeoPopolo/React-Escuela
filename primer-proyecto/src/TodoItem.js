import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const onComplete = () => {
        alert('completaste la tarea ' + props.text);
    }

    const onDelete = () => {
        alert('borraste la tarea ' + props.text);
    }

    return(
        <li>
            <span className={ `${props.completed && 'completed'}` }
                onClick={onComplete}
            >√</span>

            <p className={ `${props.completed && 'completed'}` }
            >{props.text}</p>

            <span className="delete"
                onClick={onDelete}
            >x</span>
        </li>
    );
}

export { TodoItem };