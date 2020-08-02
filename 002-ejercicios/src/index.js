// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './baseDeDatos';
import {
  obtenerUniversidad,
  obtenerProfesor,
  obtenerPorID,
  obtenerPorID2,
  helper,
  insertarProvincia,
  obtenerNombresSegunID,
  informacionAlumnos,
  calificacionAlumnoMateria,
} from './helpers';
// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
console.log('\n------------------------------------------------------');
console.log('2- Ejercicio obtener una universidad por ID: ');
const ejercicio2 = obtenerUniversidad(1);
console.log(ejercicio2);

// 3) Implementar una función que obtenga un profesor por Id
console.log('\n------------------------------------------------------');
console.log('3- Ejercicio obtener un profesor por ID: ');
const ejercicio3 = obtenerProfesor(1);
console.log(ejercicio3);

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y
//ver si se les ocurre una función genérica que sirva para cualquier tabla
console.log('\n------------------------------------------------------');
console.log(
  '4- Ejercicio obtener una materia por ID (Funcion generica que sirve para cualquier tabla): '
);
const ejercicio4 = obtenerPorID(1, database.materias);
console.log(ejercicio4);
console.log('\n------------------------------------------------------');
const ejercicio4bis = obtenerPorID2(1, 'materias');
console.log(ejercicio4bis);

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
console.log('\n------------------------------------------------------');
console.log('5- Funcion "helpers" que contiene las funciones como métodos: ');
let ejercicio5 = helper;
ejercicio5.universidad = helper.universidad(1, database.universidades);
ejercicio5.profesor = helper.profesor(1, database.profesores);
ejercicio5.materia = helper.materia(1, database.materias);
console.log(ejercicio5);

// 6) Mover helpers y todo el codigo a un módulo, creando un nuevo archivo helpers.js
console.log('\n------------------------------------------------------');
console.log('6- Mover todo el codigo a helpers.js - HECHO');

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
console.log('\n------------------------------------------------------');
console.log(
  '7- Metodo en helpers que devulver el ultimo ID usando en un una tabla '
);
let ejercicio7 = helper;
ejercicio7.obtenerUltimoIDTabla = helper.obtenerUltimoIDTabla(
  database.profesores
);
console.log(ejercicio7);

// 8) Importar helpers desde su propio módulo auto importar helpers????
console.log('\n------------------------------------------------------');
console.log('8-  Importar helpers desde su propio módulo ???? ');

// 9) Implementar una función que permite insertar una nueva provincia en la BD
//  La función tomará como parámetro el nombre de la provincia y devolverá el ID
// de la nueva provincia. 🤓 Tip: Reusar una o más funciones de helper
console.log('\n------------------------------------------------------');
console.log(
  '9- Función inserta una nueva provincia en la BD, parametro nombreProvincia devuelve el ID nuevo '
);

const ejercicio9 = insertarProvincia('Misiones');
console.log(ejercicio9);
// 10) Implementar una función que reciba el id de una materia y
// devuelva la materia son los ids de universidad y profesores resueltos a sus nombres
console.log('\n------------------------------------------------------');
console.log(
  '10- Función que reciba el id de una materia y devuelve su nombre, el de sus profesores y el de la universidad: '
);
const ejercicio10 = obtenerNombresSegunID(1);
console.log(ejercicio10);

// 11) Implementar una función que muestre en consola la información para todos los
//  alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
console.log(
  '11- Función que reciba el id de una materia y devuelve su nombre, el de sus profesores y el de la universidad: '
);
const ejercicio11 = informacionAlumnos();
// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
console.log('\n------------------------------------------------------');
console.log('12- Guardar calificacion: ');

const ejercicio12 = calificacionAlumnoMateria('Adrian Soto', 'Analisis', 10);
console.log(ejercicio12);
