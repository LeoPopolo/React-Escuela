import React from "react";
import "./index.css";

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };     
    
    return(
        <button className="btn-create-todo"
            onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };