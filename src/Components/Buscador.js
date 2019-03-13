import React, { Component } from 'react';
class buscador extends Component {
    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();
        // tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        // Lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }
    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Nombre del cliente" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Enviar" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-light btn-block" value="Desayuno" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-light btn-block" value="Almuerzo / Cena" />
                    </div>
                </div>
            </form>
        );
    }
}
export default buscador;