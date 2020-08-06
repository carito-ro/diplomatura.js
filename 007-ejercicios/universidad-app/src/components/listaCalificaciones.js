import React from 'react';

class ListaCalificaciones extends React.Component {

    render() {
        return (
            <div>
                {
                    this.calificacionesString(this.props.data).map(
                        (elto) =>
                            <a href="/#" key={elto.id} className="row list-group-item list-group-item-action list-group-item-info" >
                                Alumno: {elto.alumnoNombre} - Materia: {elto.materiaNombre} - Nota: {elto.nota}
                                <button type="button" className="close btn btn-outline-info" aria-label="Close">
                                    <span aria-hidden="true" onClick={this.eliminarCalificacion.bind(this, elto.id)} >&times;</span>
                                </button>
                            </a>
                    )
                }
            </div>
        )
    }
    calificacionesString(data) {
        let arr = data.calificaciones;
        arr.forEach(
            calificacion => {
                let alumno = data.alumnos.find(al => al.id === calificacion.alumno);
                let materia = data.materias.find(mat => mat.id === calificacion.materia);
                if (alumno)
                    calificacion.alumnoNombre = alumno.nombre;
                if (materia)
                    calificacion.materiaNombre = materia.nombre;
            });
        return arr;
    }
    eliminarCalificacion(id) {
        let { calificaciones } = this.props.data;
        calificaciones = calificaciones.filter(el => el.id !== id);
        this.props.deleteElto({ calificaciones });
    }
}

export default ListaCalificaciones;
