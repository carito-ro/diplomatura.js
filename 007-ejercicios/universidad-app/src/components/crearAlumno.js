
import React from 'react';

class CrearAlumno extends React.Component {
    constructor(props) {
        super(props);
        this.nombre = React.createRef();
        this.edad = React.createRef()
        this.submit = this.submit.bind(this);
    }
    submit(event) {
        let nombre = this.nombre.current.value;
        let edad = this.edad.current.value;
        this.props.insertarAlumno({ nombre: nombre, edad: edad });
        this.nombre.current.value = '';
        this.edad.current.value = '';
        event.preventDefault();
    }
    render() {
        return (
            <div className="collapse p-1" id="collapseAdd">
                <div className="card card-body">
                    <form>
                        <div className="row">
                            <div className="col-7">
                                <input type="text"
                                    name="nombre"
                                    ref={this.nombre}
                                    className="form-control"
                                    placeholder="Nombre y Apellido" />
                            </div>
                            <div className="col">
                                <input type="number" min="0" max="110"
                                    name="edad"
                                    ref={this.edad}
                                    className="form-control"
                                    placeholder="Edad" />
                            </div>
                            <button type="submit"
                                className="btn btn-info mb-2"
                                onClick={this.submit}>
                                agregar </button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
export default CrearAlumno;