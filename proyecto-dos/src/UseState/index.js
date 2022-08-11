import React from 'react';

function UseState() {
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);

    React.useEffect(() => {
        console.log("empezando effect");

        if (!!loading) {
            setTimeout(() => {
                console.log("Validando");
    
                setLoading(false);
    
                console.log("Terminando de validar");
            }, 2000);
        }

        console.log("terminando effect");
    }, [loading]);

    return (
        <div>
            <h2>Eliminar UseState</h2>

            <p>Por favor, escribe el código de seguridad</p>

            {error && (
                <p>Error: el código es incorrecto</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}

            <input type="text" placeholder="Código de seguridad"/>
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    );
}

export { UseState };