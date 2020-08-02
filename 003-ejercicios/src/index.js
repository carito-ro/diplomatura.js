import { Collection } from './1.collection';
import { Vector } from './2.vector';
import { mensaje, run, run2 } from './3.Delay_con_callbacks';
import { apiFetchThen } from './4.api';
import { apiAsycAwait } from './5.API_con_async_await'
import { runDelay, resolverDelay } from './6. delay';
console.log("--------------- 1.collection.js ---------------------");
let arregloCollection = new Collection({});
console.log(arregloCollection);

arregloCollection = new Collection([1, 2, 3]);
console.log(arregloCollection);

arregloCollection.add(5);
console.log(arregloCollection);

arregloCollection.delete(3);
console.log(arregloCollection);

arregloCollection.has(3);
console.log("Existe el elto 2? " + arregloCollection.has(2));
console.log("Existe el elto 3? " + arregloCollection.has(3));
console.log("--------------- 2.vector.js ---------------------");
console.log(new Vector(1, 2).sumar(new Vector(2, 3)));
console.log("--------------- 3.vector.js ---------------------");
//mensaje();
//run();
//run2(); 
console.log("--------------- 4.api.js ---------------------");
//apiFetchThen();
console.log("--------------- 5.API_con_asyc_await.js ---------------------");
apiAsycAwait();
console.log("--------------- 6.delay.js ---------------------");
resolverDelay();
// p.then(("hola"));