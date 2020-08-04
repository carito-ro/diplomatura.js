import React from 'react';

class ListaAlumnos extends React.Component {

    render() {
        return (
            <>
                {
                    this.props.data.alumnos.map(
                        (elto) =>
                            <a href="/#" key={elto.id} className="row list-group-item list-group-item-action list-group-item-info" >
                                {elto.nombre}
                                <button type="button" className="close btn btn-outline-info" aria-label="Close">
                                    <span aria-hidden="true" onClick={this.eliminarAlumno.bind(this, elto.id)} >&times;</span>
                                </button>
                            </a>
                    )
                }
            </>
        )
    }
    eliminarAlumno(id) {
        let newState = this.props.data;
        let newAlumnos = this.props.data.alumnos.filter(el => el.id !== id);
        newState.alumnos = newAlumnos;
        this.props.deleteElto(newState);
    }
}

export default ListaAlumnos;
