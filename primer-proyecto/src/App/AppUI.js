import React from 'react';
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoContext } from '../TodoContext/index.js';
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <div className="form-container">
                <div className="form">
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

                <CreateTodoButton/>
                </div>
            </div>
        </React.Fragment>
    );
}

export { AppUI };