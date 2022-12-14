import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState() {
    const [ state, setState ] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    });

    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true
        });
    }

    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false
        });
    }

    const onWrite = (event) => {
        setState({
            ...state,
            value: event.target.value
        });
    }

    const onCheck = () => {
        setState({
            ...state,
            loading: true
        });
    }

    const onDelete = () => {
        setState({
            ...state,
            deleted: true
        })
    }

    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: ''
        })
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
                <h2>Eliminar UseState</h2>
    
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
                    onChange={(event)=>{
                        onWrite(event);
                    }}
                />
                <button
                    onClick={() => {
                        onCheck();
                    }}
                >Comprobar</button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>¿Tas seguro?</p>
                <button
                    onClick={() => {
                        onDelete();
                    }}
                >Sí, eliminar</button>
                <button
                    onClick={() => {
                        onReset();
                    }}
                >No, me arrepentí</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con éxito</p>
                <button
                    onClick={() => {
                        onReset();
                    }}
                >Volver atrás</button>
            </React.Fragment>
        );
    }

}

export { UseState };