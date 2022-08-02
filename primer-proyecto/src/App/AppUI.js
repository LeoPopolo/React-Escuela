import React from 'react';
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoContext } from '../TodoContext/index.js';
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from '../Modal/index.js';
import "./index.css";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <div className="form-container">

                <div className="form">
                <CreateTodoButton
                    setOpenModal={setOpenModal}
                />
                <TodoCounter />
                <TodoSearch />

                <TodoList>
                    {loading && <p>Cargando</p>}
                    {error && <p>ERROR</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

                    {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onCompleted={() => completeTodo(todo.text)}
                    onDeleted={() => deleteTodo(todo.text)}/>
                    ))}
                </TodoList>

                { !!openModal && (
                    <Modal>
                        <div className="modal">
                            <div>
                                <h3>Nueva tarea</h3>
                                <input type="text"/>
                                <button>Agregar</button>
                            </div>
                        </div>
                    </Modal>
                )}
                </div>
            </div>
        </React.Fragment>
    );
}

export { AppUI };