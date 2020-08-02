/* Escribir una clase Collection que representa una colección de elementos. 
Esta clase debe:

- Poder construirse o vacía (sin elementos) o con una lista inicial de elemenetos
- Debe tener un método `add` para poder agregar un elemento
- Debe tener un método `delete` para poder eliminar un elemento
- Debe tener un método `has` para poder determinar un elemento existe en la colección 
 */

export class Collection {
    constructor(arreglo) {
        this.arreglo = arreglo;
    }

    add(elto) {
        if (!this.has(elto)) this.arreglo.push(elto);
    }

    delete(elto) {
        this.arreglo.splice(this.arreglo.indexOf(elto), 1);
    }

    has(elto) {
        // this.arreglo.includes(elto); devuelve un T o F
        return this.arreglo.indexOf(elto) >= 0;
    }
}
