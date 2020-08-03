import React from 'react';

class ListaProfesores extends React.Component {

    /** data tiene los datos de profesores
     * delete elimina por id 
     */
    // delete(id) {
    //     this.props.delete(id);
    // }
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
        let newState = this.props.data;
        let newProfesores = this.props.data.profesores.filter(el => el.id !== id);
        newState.profesores = newProfesores;
        this.props.deleteElto(newState);
    }
}

export default ListaProfesores;
