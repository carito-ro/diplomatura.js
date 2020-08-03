import React from 'react';

class ListaMaterias extends React.Component {

    /** data tiene los datos de materias
     * delete elimina por id 
     */
    // delete(id) {
    //     this.props.delete(id);
    // }
    render() {
        return (
            <>
                {
                    this.props.data.materias.map(
                        (elto) =>
                            <a href="/#" key={elto.id} className="row list-group-item list-group-item-action list-group-item-info" >
                                {elto.nombre}
                                <button type="button" className="close btn btn-outline-info" aria-label="Close">
                                    <span aria-hidden="true" onClick={this.eliminarMaterias.bind(this, elto.id)} >&times;</span>
                                </button>
                            </a>
                    )
                }
            </>
        )
    }
    eliminarMaterias(id) {
        let newState = this.props.data;
        let newMaterias = this.props.data.materias.filter(el => el.id !== id);
        newState.materias = newMaterias;
        this.props.deleteElto(newState);
    }
}

export default ListaMaterias;
