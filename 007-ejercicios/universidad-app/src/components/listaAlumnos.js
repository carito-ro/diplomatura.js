import React from 'react';
import CrearAlumno from './crearAlumno';
import DetalleAlumno from './detalleAlumno';
class ListaAlumnos extends React.Component {
    constructor(datos) {
        super(datos);
        this.state = {
            actualizar: false,
            detalleActivado: false,
            idActivado: -1
        };
        this.insertarAlumno = this.insertarAlumno.bind(this);
    }
    setVistaActual(setVista) {
        this.setState(setVista);
    }
    render() {
        if (this.state.detalleActivado) {
            const alumno = this.props.data.alumnos.find(element => element.id === this.state.idActivado);
            return (
                <div>
                    <DetalleAlumno alumno={alumno} volver={this.setVistaActual.bind(this)} />

                </div>
            );
        } else {
            return (
                <div>
                    <div className="addBottom">
                        <a type="button" data-toggle="collapse" href="#collapseAdd"
                            role="button" aria-expanded="false"
                            aria-controls="collapseAdd"
                            className="btn btn-info"
                            aria-label="Add" >
                            <span className="material-icons">
                                add
                            </span>
                        </a>
                        <CrearAlumno estado={this.state} insertarAlumno={this.insertarAlumno} />
                    </div>
                    <ul>
                        {
                            this.props.data.alumnos.map(
                                (elto) =>
                                    <a href="/#"
                                        onClick={this.setVistaActual.bind(this,
                                            {
                                                detalleActivado: true,
                                                idActivado: elto.id
                                            })}
                                        key={elto.id}
                                        className="row list-group-item list-group-item-action list-group-item-info" >
                                        {elto.nombre}
                                        <button type="button" className="close btn btn-outline-info" onClick={this.eliminarAlumno.bind(this, elto.id)} aria-label="Close">
                                            <span aria-hidden="true"  >&times;</span>
                                        </button>
                                    </a>
                            )
                        }
                    </ul>
                </div>
            );
        }
    }
    eliminarAlumno(id) {
        let { alumnos } = this.props.data;
        alumnos = alumnos.filter(el => el.id !== id);
        this.props.deleteElto({ alumnos });
    }
    insertarAlumno(nuevoAlumno) {
        console.log("agregar nuevo alumnos");
        console.log(nuevoAlumno);
        this.props.insertar('alumnos', nuevoAlumno);

    }
}
/* */
export default ListaAlumnos;
