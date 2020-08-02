import { database } from './baseDeDatos';

// 2 - ********************************************************************
export let obtenerUniversidad = (id) =>
  database.universidades.find((universidad) => universidad.id === id);
// 3 - ********************************************************************
export let obtenerProfesor = (id) =>
  database.profesores.find((profesor) => profesor.id === id);
// 4 - ********************************************************************
export let obtenerPorID = (id, tabla) =>
  tabla.find((element) => element.id === id);

export let obtenerPorID2 = (id, tableName) =>
  database[tableName].find((element) => element.id === id);
// 6 - ********************************************************************
export const helper = {
  universidad: (id, tabla) => tabla.find((element) => element.id === id),
  profesor: (id, tabla) => tabla.find((element) => element.id === id),
  materia: (id, tabla) => tabla.find((element) => element.id === id),
  obtenerUltimoIDTabla: (tabla) =>
    Math.max.apply(
      Math,
      tabla.map((o) => o.id)
    ),
};

// 9 - ********************************************************************
let id = helper.obtenerUltimoIDTabla(database.provincias);
export function insertarProvincia(provincia) {
  let objP = {
    nombre: provincia,
    id: id + 1,
  };
  // database.provincias.push(objP);
  return objP;
}

// 10 - ********************************************************************
export function obtenerNombresSegunID(id) {
  let elto = {};
  elto.profesores = [];
  elto.materia = database.materias.find((materia) => {
    if (materia.id === id) {
      elto.universidad = database.universidades.find(
        (universidad) => universidad.id === id
      ).nombre;
      materia.profesores.forEach((profesor) =>
        elto.profesores.push(
          database.profesores.find((p) => p.id === profesor).nombre
        )
      );
    }
    return materia.nombre;
  }).nombre;
  return elto;
}
// 11 - ********************************************************************
export function informacionAlumnos() {
  console.log(' \nNOTAS DE ALUMNOS\n----------------');
  database.alumnos.forEach((alumno) => {
    console.log('\n' + alumno.nombre.toUpperCase());
    database.calificaciones.filter((calificacion) => {
      if (calificacion.alumno === alumno.id) {
        database.materias.find((materia) => {
          if (materia.id === calificacion.materia) {
            console.log(materia.nombre + ' : ' + calificacion.nota);
          }
        });
      }
    });
  });
}
// 12 - ********************************************************************
export function calificacionAlumnoMateria(nombreAlumno, nombreMateria, nota) {
  console.log('Por parametro: alumno: '+nombreAlumno + ' materia: '+ nombreMateria+' nota: '+ nota );
  let calificacion = {};
  calificacion.nota = nota;
  let alumno = crearAlumno(nombreAlumno);
  let materia = crearMateria(nombreMateria);
  calificacion.alumno = alumno.id;
  calificacion.materia = materia.id;
  return calificacion;
}
let ultimoIDTabla = (tabla) =>
  Math.max.apply(
    Math,
    tabla.map((o) => o.id)
  );
function crearMateria(nombreMateria) {
  let materia = database.materias.find(
    (materia) => materia.nombre.toUpperCase() === nombreMateria.toUpperCase()
  );
  if (!materia) {
    materia = {};
    materia.id = ultimoIDTabla(database.materias) + 1;
    materia.nombre = nombreMateria;
    materia.profesores = [];
    materia.universidad = null;
    //  database.materias.push(materia);
  }
  return materia;
}
function crearAlumno(nombreAlumno) {
  let alumno = database.alumnos.find(
    (alumno) => alumno.nombre.toUpperCase() === nombreAlumno.toUpperCase()
  );
  if (!alumno) {
    alumno = {};
    alumno.id = ultimoIDTabla(database.alumnos) + 1;
    alumno.nombre = nombreAlumno;
    alumno.edad = null;
    alumno.provincia = null;
    // database.alumnos.push(alumno);
  }
  return alumno;
}
