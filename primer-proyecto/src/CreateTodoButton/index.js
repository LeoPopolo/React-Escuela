import React from "react";
import "./index.css";

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    };     
    
    return(
        <button
            onClick={() => onClickButton('se abre un modal')}
        >+</button>
    );
}

export { CreateTodoButton };