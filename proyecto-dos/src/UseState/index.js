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

    React.useEffect(() => {
        console.log("empezando effect");

        if (!!state.loading) {
            setTimeout(() => {
                console.log("Validando");
   
                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error: false,
                        loading: false,
                        confirmed: true
                    });
                } else {
                    setState({
                        ...state,
                        loading: false,
                        error: true
                    });
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
                        setState({
                            ...state,
                            value: event.target.value
                        });
                    }}
                />
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            loading: true
                        });
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
                        setState({
                            ...state,
                            deleted: true
                        })
                    }}
                >Sí, eliminar</button>
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            confirmed: false,
                            value: ''
                        })
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
                        setState({
                            ...state,
                            confirmed: false,
                            deleted: false,
                            value: ''
                        })
                    }}
                >Volver atrás</button>
            </React.Fragment>
        );
    }

}

export { UseState };