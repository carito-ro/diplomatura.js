/* - Experimentar con la función setTimeout para que muestre un mensaje después
de 3000 milisegundos.
   ```
   setTimeout(() =>  {.... do something ...}, delay_in_milliseconds);
   ```

- Crear una función `delay` que tome dos parámetros `mensaje` y
`milisegundos` y muestre un mensaje después del tiempo indicado.

- Crear una función `run` con el siguiente código

   ```
   console.log(1);
   delay('Terminó 1', 1000);
   console.log(2);
   delay('Terminó 2', 1000);
   console.log(3);
   delay('Terminó 3', 1000);
  ```

  Luego invocarla con `run()`. ¿Cuál es el resultado?

- Modificar nuestra función `run` con el siguiente código.
Ejecutarla y observar el resultado.

   ```
   console.log(1);
   delay('Terminó 1', 3000);
   console.log(2);
   delay('Terminó 2', 2000);
   console.log(3);
   delay('Terminó 3', 1000);
   ``` */
export function mensaje() {
    setTimeout(() => console.log("Pasaron 3 segundos"), 3000);
}
export function delay(mensaje, milisegundos) {
    setTimeout(() => console.log(mensaje), milisegundos);
}
export function run() {
    /* Rta: Termina primero los que estan sin delay secuencial,
     luego se ejecutan en 1000 segundos Termino 1,2,3 (todas juntas terminan) */
    console.log(1);
    delay('Terminó 1', 1000);
    console.log(2);
    delay('Terminó 2', 1000);
    console.log(3);
    delay('Terminó 3', 1000);
}

export function run2() {
    /* Rta: Termina primero los que estan sin delay secuencial, 
    nuego se ejecutan las que tienen mejos delay primero */

    console.log(1);
    delay('Terminó 1', 3000);
    console.log(2);
    delay('Terminó 2', 2000);
    console.log(3);
    delay('Terminó 3', 1000);
}
