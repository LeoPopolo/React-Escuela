import React from 'react';
import './index.css'

function TodoCounter({completedTodos, totalTodos, loading}) {    

    return (
        <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>Has completado {completedTodos}/{totalTodos} TODOs</h2>
    );
}

export { TodoCounter };