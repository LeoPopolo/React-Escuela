import React from 'react';
import './index.css'

function TodoCounter({total, completed}) {
    return (
        <h2 className="TodoCounter">Has completado {completed}/{total} TODOs</h2>
    );
}

export { TodoCounter };