import React from 'react';
import datos from '../datos/index';
import ListaAlumnos from './listaAlumnos';
import ListaCalificaciones from './listaCalificaciones';
import ListaMaterias from './listaMaterias';
import ListaProfesores from './listaProfesores';

class MainView extends React.Component {
    constructor(data) {
        super(data);
        this.state = {
            alumnos: datos.alumnos,
            profesores: datos.profesores,
            materias: datos.materias,
            calificaciones: datos.calificaciones,
        };
    }
    render() {
        let vistaActual = this.props.data.vistaActual;
        switch (vistaActual) {
            case 'alumnos':
                return <ul> <ListaAlumnos data={this.state} deleteElto={this.asignarNuevoEstado.bind(this)} /> </ul>;
            case 'profesores':
                return <ul> <ListaProfesores data={this.state} deleteElto={this.asignarNuevoEstado.bind(this)} /> </ul>;
            case 'materias':
                return <ul> <ListaMaterias data={this.state} deleteElto={this.asignarNuevoEstado.bind(this)} /> </ul>;
            case 'calificaciones':
                return <ul> <ListaCalificaciones data={this.state} deleteElto={this.asignarNuevoEstado.bind(this)} /> </ul>;
            default:
                return <ul> <ListaAlumnos data={this.state} deleteElto={this.asignarNuevoEstado.bind(this)} /> </ul>;
        }
    }
    asignarNuevoEstado(newState) {
        this.setState(newState);
    }
}
export default MainView;