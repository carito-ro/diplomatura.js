import React from 'react';

class ListaProfesores extends React.Component {

    render() {
        return (
            <>
                {
                    this.props.data.profesores.map(
                        (elto) =>
                            <a href="/#" key={elto.id} className="row list-group-item list-group-item-action list-group-item-info" >
                                {elto.nombre}
                                <button type="button" className="close btn btn-outline-info" aria-label="Close">
                                    <span aria-hidden="true" onClick={this.eliminarProfesores.bind(this, elto.id)} >&times;</span>
                                </button>
                            </a>
                    )
                }
            </>
        )
    }
    eliminarProfesores(id) {
        let { profesores } = this.props.data;
        profesores = profesores.filter(el => el.id !== id);
        this.props.deleteElto({ profesores });
    }
}

export default ListaProfesores;
