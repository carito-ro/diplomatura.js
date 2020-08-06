import React from 'react';

class DetalleAlumno extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alumno: props.alumno,
            volver: props.volver
        };
        this.atras = this.atras.bind(this);
    }
    atras() {
        this.props.volver({ detalleActivado: false, idActivada: -1 });
    }
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-8">Información </h1>
                    <p className="lead ">
                        <b>
                            ID: {this.props.alumno.id}
                        </b>
                        <br></br>
                            Nombre: {this.props.alumno.nombre}
                        <br></br>
                             Edad: {this.props.alumno.edad}
                    </p>
                </div>
                <div>
                    <button className="btn btn-info "
                        onClick={this.atras}>
                        Volver
                    </button>
                </div>
            </div>
        );
    }
}

export default DetalleAlumno; 