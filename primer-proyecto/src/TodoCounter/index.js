import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css'

function TodoCounter() {

    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos}/{totalTodos} TODOs</h2>
    );
}

export { TodoCounter };