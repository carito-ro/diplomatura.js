import React from 'react';
import './App.css';
import MainView from './components/mainView';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: 'alumnos',
      idDetalleSeleccionado: -1,
    };

  }
  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual(vista) {
    this.setState({ vistaActual: vista });
  }
  render() {
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button className="btn btn-outline-info" onClick={this.setVistaActual.bind(this, "alumnos")} >Alumnos</button>
          <button className="btn btn-outline-info" onClick={this.setVistaActual.bind(this, "profesores")} >Profesores</button>
          <button className="btn btn-outline-info" onClick={this.setVistaActual.bind(this, "materias")} >Materias</button>
          <button className="btn btn-outline-info" onClick={this.setVistaActual.bind(this, "calificaciones")} >Calificaciones</button>
        </div>
        <h2>{this.state.vistaActual}</h2>
        <MainView data={this.state} />
      </div>
    );
  }
}

export default App;
