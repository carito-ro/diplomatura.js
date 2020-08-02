import fetch from 'node-fetch';
/* ## 5. Consumir una API con asyc/await
- Copiar el código de el ejercicio 4 en el cuerpo
de una nueva función asincrónica
`async function getRemoteData()`.
- Modificar el cuerpo de la función para utilizar async/await
 en vez de Promise chaining.
 */
export async function apiAsycAwait() {
    console.log("apiAsycAwait");
    const buscar = await fetch('https://jsonplaceholder.typicode.com/users');
    const arrUser = await buscar.json()
        .then(arrUser => {
            console.log("*** Nombre del usuario y la ciudad donde vive *** \n");
            arrUser.forEach(element => {
                console.log("Nombre de usuario: " + element.username)
                console.log("Ciudad: " + element.address.city + "\n");
            });
        }
        );
    return arrUser;
}
