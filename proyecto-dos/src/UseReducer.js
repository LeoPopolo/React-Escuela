import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseReducer() {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);

    const onConfirm = () => {
        dispatch({
            type: actionTypes.confirm
        });
    }
    
    const onError = () => {
        dispatch({
            type: actionTypes.error
        });
    }
    
    const onWrite = ({target: {value}}) => {
        dispatch({
            type: actionTypes.write,
            payload: value
        });
    }
    
    const onCheck = () => {
        dispatch({
            type: actionTypes.check
        });
    }
    
    const onDelete = () => {
        dispatch({
            type: actionTypes.delete
        });
    }
    
    const onReset = () => {
        dispatch({
            type: actionTypes.reset
        });
    }

    React.useEffect(() => {
        console.log("empezando effect");

        if (!!state.loading) {
            setTimeout(() => {
                console.log("Validando");
   
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                } else {
                    onError();
                }
                
                console.log("Terminando de validar");
            }, 2000);
        }

        console.log("terminando effect");
    }, [state.loading]);

    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar UseReducer</h2>
    
                <p>Por favor, escribe el código de seguridad</p>
    
                {(state.error && !state.loading) && (
                    <p>Error: el código es incorrecto</p>
                )}
    
                {state.loading && (
                    <p>Cargando...</p>
                )}
    
                <input 
                    type="text" 
                    placeholder="Código de seguridad"
                    value={state.value}
                    onChange={onWrite}
                />
                <button
                    onClick={onCheck}
                >Comprobar</button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>¿Tas seguro?</p>
                <button
                    onClick={onDelete}
                >Sí, eliminar</button>
                <button
                    onClick={onReset}
                >No, me arrepentí</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con éxito</p>
                <button
                    onClick={onReset}
                >Volver atrás</button>
            </React.Fragment>
        );
    }
}

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    check: 'CHECK',
    reset: 'RESET',
    write: 'WRITE',
    delete: 'DELETE'
}

const reducerObject = (state, payload) => ({
    
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.check]: {
        ...state,
        loading: true
    },
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    [actionTypes.write]: {
        ...state,
        value: payload
    },
    [actionTypes.reset]: {
        ...state,
        confirmed: false,
        deleted: false,
        value: ''
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true
    }
});

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
}

export { UseReducer };