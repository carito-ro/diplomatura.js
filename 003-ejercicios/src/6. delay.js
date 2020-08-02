import fetch from 'node-fetch';
/* ## 6. Delay (_TAREA PARA EL HOGAR_)
- Modificar nuestra función `delay` para que utilice Promises.
 `delay` tomará un sólo parámetro `segundos` y debe devolver
 una Promise que resuelva cuando el tiempo ha finalizado.

- Una vez modificada, cambiar nuestra función run()
para que muestre en orden los siguientes mensajes.
  ```
  1
  Terminó 1
  2
  Terminó 2
  3
  Terminó 3
  ```
#### Tip 1: Puede usarse Promise chaining o async/await
#### Tip 2: Si usamos async/await tenemos que convertir
nuestra función run a asincrónica: `async run(...){ .... }`
#### Tip 3: utilizar el constructor de Promise que
nos permite obtener una referencia una función `resolve`
que nos permite resolver la promesa
```
return new Promise(resolve => {
     .... something ...
     resolve( ... something ...)
     .... something ...
   });
}
```
 */
export function delay(segundos) {
  return new Promise((mensaje) => setTimeout(() => console.log("el: " + mensaje), 1000 * segundos));
}
export async function resolverDelay() {
  let promise = await delay(3000);
  // .then(('Terminó 1'));

}

// export function runDelay() {
//   /* Rta: Termina primero los que estan sin delay secuencial,
//    luego se ejecutan en 1000 segundos Termino 1,2,3 (todas juntas terminan) */
//   console.log(1);
//   let promesa = delay(1000);
//   promesa.then(respuesta => uno('Terminó 1'))
//     .then((dos) => dos('Terminó 2'))
//     .then((dos) => dos('Terminó 3'))
//   console.log(2);
//   console.log(3);
// }