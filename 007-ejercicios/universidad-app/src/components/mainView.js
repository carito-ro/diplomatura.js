import React from 'react';
import datos from '../datos/index';
import ListaAlumnos from './listaAlumnos';
import ListaCalificaciones from './listaCalificaciones';
import ListaMaterias from './listaMaterias';
import ListaProfesores from './listaProfesores';
import helpers from '../datos/helpers';

class MainView extends React.Component {
    constructor(lista) {
        super(lista);
        this.state = {
            alumnos: datos.alumnos,
            profesores: datos.profesores,
            materias: datos.materias,
            calificaciones: datos.calificaciones,
        };
        this.insertar = this.insertar.bind(this);
    }
    insertar(name, elto) {
        elto.id = (helpers.ultimoId(this.state?.[name])) + 1;
        if (name) this.setState({ [name]: [...this.state?.[name], elto] });
    }
    render() {
        let vistaActual = this.props.data.vistaActual;
        switch (vistaActual) {
            case 'alumnos':
                return <ListaAlumnos data={this.state}
                    deleteElto={this.asignarNuevoEstado.bind(this)}
                    insertar={this.insertar} />;
            case 'profesores':
                return <ul> <ListaProfesores data={this.state}
                    deleteElto={this.asignarNuevoEstado.bind(this)} /> </ul>;
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