import React from "react";
import "./index.css";

function TodoItem(props) {

    return(
        <li>
            <span className={ `${props.completed && 'completed'}` }
                onClick={props.onCompleted}
            >√</span>

            <p className={ `${props.completed && 'completed'}` }
            >{props.text}</p>

            <span className="delete"
                onClick={props.onDeleted}
            >x</span>
        </li>
    );
}

export { TodoItem };