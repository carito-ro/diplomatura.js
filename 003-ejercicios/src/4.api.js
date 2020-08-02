import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, 
//entonces puede hacer fetch(....).then(resultado => {.... })

/* ## 4. Consumir una API con Promise Chaining
Consumir la API https://jsonplaceholder.typicode.com/users
y mostrar por consola los datos requeridos
- Abrir el archivo archivo 4.api.js
- Utilizar la función fetch para obtener los 
//datos desde la URL.
- Mostrar por consola el resultado de fetch
- Convertir los resultados a un objeto utilizando
 resultado.json() **utilizando promise chaining**
- Mostrar por consola el nombre del usuario y la ciudad donde vive
 */
export function apiFetchThen() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(buscar => buscar.json())
        .then(json => {
            console.log("*** Nombre del usuario y la ciudad donde vive *** \n");
            json.forEach(element => {
                console.log("Nombre de usuario: " + element.username)
                console.log("Ciudad: " + element.address.city + "\n");
            });
        })
        .catch(error => console.error("error: " + error));
}
