import React from 'react';
import { Loading } from '../Loading';

class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: true,
            loading: false
        };
    }

    componentDidUpdate() {
        console.log("actualizacion");

        if (!!this.state.loading) {
            setTimeout(() => {
                console.log("Validando");
    
                this.setState({loading: false});
    
                console.log("Terminando de validar");
            }, 2000);
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>

                <p>Por favor, escribe el código de seguridad</p>

                {this.state.error && (
                    <p>Error: el código es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading/>
                )}

                <input type="text" placeholder="Código de seguridad"/>
                <button
                    onClick={() => {
                        this.setState({
                            loading: true
                        })
                    }}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState };