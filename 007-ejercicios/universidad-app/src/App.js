import React from 'react';
import './App.css';
import datos from './datos/dataBase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: 'alumnos',
      idDetalleSeleccionado: -1,
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
    };

    this.eliminarElto = this.eliminarElto.bind(this);
  }
  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual(vista, idSeleccionado) {
    const newState = {
      vistaActual: vista,
      idDetalleSeleccionado: idSeleccionado
    };
    this.setState(newState);
  }

  render() {
    let vistaAct = this.state.vistaActual;
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button className="btn btn-outline-info" id="alumnos" onClick={() => this.setVistaActual("alumnos")} >
            Alumnos
          </button>
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual("profesores")}>Profesores</button>
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual("materias")} >Materias</button>
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual("calificaciones")}>Calificaciones</button>
        </div>
        <h2>{vistaAct}</h2>
        <div className="mainView">
          <ul> {this.listarMaterias(this.state)}</ul>

        </div>
      </div>
    );
  }
  materiaClick() {
    const newState = { vistaActual: 'materias' };
    this.setState(newState);
  }
  listarMaterias(estado) {
    let visAct = estado.vistaActual;
    switch (visAct) {
      case 'alumnos':
        let listAlumnos = estado.alumnos.map((elto) =>
          <a href="/#" key={elto.id} className="row list-group-item list-group-item-action list-group-item-info" >
            {elto.nombre}
            <button type="button" className="close btn btn-outline-info" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>)
        return listAlumnos
      case 'profesores':
        let listProfesores = estado.profesores.map((elto) =>
          <a href="/#" key={elto.id} className="row list-group-item list-group-item-action list-group-item-info" >
            {elto.nombre}
            <button type="button" className="close btn btn-outline-info" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>)
        return listProfesores;
      case 'materias':
        let listMaterias = estado.materias.map((elto) =>
          <a href="/#" key={elto.id} className="row list-group-item list-group-item-action list-group-item-info" >
            {elto.nombre}
            <button type="button" className="close btn btn-outline-info" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>)
        return listMaterias;
      case 'calificaciones':
        let arr = this.calificacionesString(estado.calificaciones);
        let listCalificaciones = arr.map((elto) =>
          <a href="/#" key={elto.id} className="row list-group-item list-group-item-action list-group-item-info">
            {elto.alumnoNombre} - {elto.materiaNombre} - {elto.nota}
            <button type="button" onClick={() => this.eliminarElto(elto.id, estado.calificaciones)}
              className="close btn btn-outline-info" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>)
        return listCalificaciones;
      default:
        return <li> Vacio</li>;
    }
  }
  calificacionesString(calificaciones) {
    calificaciones.forEach(
      calificacion => {
        let alumno = this.state.alumnos.find(al => al.id === calificacion.alumno);
        let materia = this.state.materias.find(mat => mat.id === calificacion.materia);
        if (alumno)
          calificacion.alumnoNombre = alumno.nombre;
        if (materia)
          calificacion.materiaNombre = materia.nombre;
      });
    return calificaciones;
  }
  eliminarElto(id, tabla) {
    console.log("tabla. " + tabla.length);
    let indice = this.state.calificaciones.indexOf(elto => elto.id === id);
    tabla.splice(indice, 1);
    console.log("tabla. " + tabla.length);

  }
}


export default App;
