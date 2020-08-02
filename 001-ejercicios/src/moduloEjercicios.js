import basededatos, { database } from './basededatos';

/**
 * Obtiene la lista de materias aprobadas (nota >= 4) para el nombre de alumno dado.
 * En caso de no existir el alumno, devolver undefined.
 * En caso de que no encuentre ninguna materia para el alumno, devuelve un array vacio []
 * Ejemplo del formato del resultado suponiendo que el alumno cursa dos materias y tiene mas de 4.
 *  [
    {
      id: 1,
      nombre: 'Análisis matemático',
      profesores: [1, 2],
      universidad: 1,
    },
    {
      id: 2,
      nombre: 'Corte y confección de sabanas',
      profesores: [3],
      universidad: 2,
    }
  ]
 * @param {string} nombreAlumno el id del alumno
 */
export const materiasAprobadasByNombreAlumno = (nombreAlumno) => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  // console.log(basededatos.alumnos);
  let arrMa = [],
    calificaciones,
    unaMateria;
  let alumno = database.alumnos.find(
    (alumno) => alumno.nombre === nombreAlumno
  );
  if (alumno) {
    calificaciones = database.calificaciones.filter(
      (calificacion) =>
        calificacion.alumno === alumno.id && calificacion.nota >= 4
    );
    if (calificaciones) {
      calificaciones.forEach((unaCalificacion) => {
        unaMateria = database.materias.find(
          (materia) => materia.id === unaCalificacion.materia
        );
        arrMa.push(unaMateria);
      });
    }
  } else {
    return undefined;
  }
  return arrMa;
};

/**
 * Devuelve informacion ampliada sobre una universidad.
 * Si no existe la universidad con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto universidad,
 * agregar la lista de materias dictadas por la universidad y
 * tambien agrega informacion de los profesores y alumnos que participan.
 * Ejemplo de formato del resultado (pueden no ser correctos los datos en el ejemplo):
 *{
      id: 1,
      nombre: 'Universidad del Comahue',
      direccion: {
        calle: 'Av. Siempre viva',
        numero: 2043,
        provincia: 'Neuquen',
      },
      materias: [
        {
          id: 1,
          nombre: 'Análisis matemático',
          profesores: [1, 2],
          universidad: 1,
        },
        {
          id: 4,
          nombre: 'Programación orientada a objetos',
          profesores: [1, 3],
          universidad: 1,
        },
      ],
      profesores:[
        { id: 1, nombre: 'Jorge Esteban Quito' },
        { id: 2, nombre: 'Marta Raca' },
        { id: 3, nombre: 'Silvia Torre Negra' },
      ],
      alumnos: [
         { id: 1, nombre: 'Rigoberto Manchu', edad: 22, provincia: 1 },
         { id: 2, nombre: 'Alina Robles', edad: 21, provincia: 2 },
      ]
    }
 * @param {string} nombreUniversidad
 */
export const expandirInfoUniversidadByNombre = (nombreUniversidad) => {
  let uni,
    arrMat,
    arrProf = [],
    arrAlum = [];
  uni = database.universidades.find((uni) => uni.nombre === nombreUniversidad);
  if (uni) {
    arrMat = database.materias.filter((mat) => mat.universidad === uni.id);
    arrMat.forEach((materia) => {
      materia.profesores.forEach((profesorMateria) => {
        if (arrProf.find((pm) => pm.id === profesorMateria) === undefined) {
          arrProf.push(
            database.profesores.find((p) => p.id === profesorMateria)
          );
        }
      });
      let calificacionesMat = database.calificaciones.filter(
        (cali) => cali.materia === materia.id
      );
      calificacionesMat.forEach((calificacion) => {
        if (
          arrAlum.find((alumno) => alumno.id === calificacion.alumno) ===
          undefined
        ) {
          arrAlum.push(
            database.alumnos.find((a) => a.id === calificacion.alumno)
          );
        }
      });
    });
  }
  return { uni, arrMat, arrProf, arrAlum };
};

// /**
//  * Devuelve el promedio de edad de los alumnos.
//  */
export const promedioDeEdad = () => {
  let suma = 0;
  database.alumnos.forEach((alumno) => (suma += alumno.edad));
  return suma / database.alumnos.length;
};

// /**
//  * Devuelve la lista de alumnos con promedio mayor al numero pasado
//  * por parametro.
//  * @param {number} promedio
//  */
export const alumnosConPromedioMayorA = (promedio) => {
  let alumnos = [],
    suma = 0;
  database.alumnos.forEach((alumno) => {
    let calificacionesAlumn = database.calificaciones.filter(
      (elto) => elto.alumno === alumno.id
    );
    suma = 0;
    calificacionesAlumn.forEach((calificacion) => (suma += calificacion.nota));
    if (suma / calificacionesAlumn.length > promedio) {
      alumnos.push(alumno);
    }
  });
  return alumnos;
};

// /**
//  * Devuelve la lista de materias sin alumnos
//  */
export const materiasSinAlumnosAnotados = () => {
  let arrMaterias = [];
  let sinAlumno;
  database.materias.forEach((unaMateria) => {
    sinAlumno = true;
    database.calificaciones.forEach((unaCalificacion) => {
      if (unaCalificacion.materia === unaMateria.id) {
        sinAlumno = false;
      }
    });
    if (sinAlumno) {
      arrMaterias.push(unaMateria);
    }
  });
  return arrMaterias;
};

// /**
//  * Devuelve el promdedio de edad segun el id de la universidad.
//  * @param {number} universidadId
//  */
export const promedioDeEdadByUniversidadId = (universidadId) => {
  let arrAlumnos = [],
    unAlumno;
  let suma = 0;
  database.materias.forEach((unaMateria) => {
    if (unaMateria.universidad === universidadId) {
      database.calificaciones.filter((unaCalificacion) => {
        if (unaCalificacion.materia === unaMateria.id) {
          unAlumno = database.alumnos.find(
            (alumno) => alumno.id === unaCalificacion.alumno
          );
          if (
            unAlumno &&
            arrAlumnos.find((a) => a.id === unAlumno.id) === undefined
          ) {
            suma += unAlumno.edad;
            arrAlumnos.push(unAlumno);
          }
        }
      });
    }
  });
  return (suma / arrAlumnos.length).toFixed(2);
};
