import React from "react";
import "./index.css";

function TodoForm({addTodo, setOpenModal}) {

    const [ newTodoValue, setNewTodoValue ] = React.useState('');

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onAdd = (event) => {
        event.preventDefault();

        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form
        onSubmit={onAdd}
        >
            <h3>Nueva tarea</h3>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Nueva tarea"/>
            <div>
                <button
                className="btn-cancel"
                type="button"
                onClick={onCancel}
                >Cancelar</button>

                <button
                className="btn-add"
                type="submit"
                >Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };