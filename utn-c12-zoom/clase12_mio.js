console.log('******************************* Arrays y Metodos ****************************');
console.log(' ');


// Indices es cada espacio de un array que se encuentra entre ,, empezando a contar por el 0
// Elementos es cada espacio de un array que se encuentra entre ,, empezando a contar por el 1
// Ejemplo en miArray hay 6 elementos, 5 indices

// Dentro de corchetes
const miArray = [1,2,3,4,5,6]



// ================================================================
// A diferencia de un objeto que va entre llaves (Parece CSS)
miObjeto = {
    nombre: "Soraya",
    apellido: "Perez",
}
// En JavaScript, un objeto es un entidad independiente con propiedades y tipos. Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características.
// ================================================================





// ========================= METODOS ===================================
// Un método es una función puesta en un objeto o una serie de instrucciones para completar una tarea única.
// ( miArray.Estas viendo todos los metodos)




// push          Agrega un elemento al final del array
miArray.push(7)
console.log(miArray);
// [ 1, 2, 3, 4, 5, 6, 7]



// .pop           Saca el ultimo elemento del array
// Armas una variable para el elemento que sacaste asi no lo perdes.
// Si no lo guardas lo eliminas y no lo podes recuperar
const ultimoElemento = miArray.pop()         
console.log(miArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(ultimoElemento); // 7




// .shift         Sacas el primer elemento del array
const primerElemento = miArray.shift()          
console.log(miArray);
console.log(primerElemento);
// [ 2, 3, 4, 5, 6 ]
// 1




// .unshift       Agregas elementos en el indice 0, 1 , 2 .. n 
miArray.unshift(1,1.5)
console.log(miArray);
// [ 1, 1.5, 2, 3, 4,   5, 6]





// Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (FIN NO INCLUIDO).
// // .slice        Te devuelve la parte entre los valores que seleccionas 
const slice1 = miArray.slice(1,6)
console.log(miArray);
console.log(slice1);
// [ 1, 1.5, 2, 3, 4, 5, 6]
// [ 1.5, 2, 3, 4, 5 ]

const slice3 = miArray.slice(2,3)
console.log(miArray);
console.log(slice3);
// [ 1, 1.5, 2, 3, 4, 5, 6]
// [ 2 ]

const slice4 = miArray.slice(2,4)
console.log(miArray);
console.log(slice4);
// [ 1, 1.5, 2, 3, 4, 5, 6]
// [ 2, 3 ]




// .include    Busca un elemento en el array y te devuelve un boleano 
const include = miArray.includes(0)
console.log(include);
// false

const include1 = miArray.includes(1.5)
console.log(include1);
// True





//  LUCA: el foreach es un metodo de array que funciona muy parecido al bucle for, pero lo hace de forma automatica en incremento de acuerdo a la cantidad de elementos del array. En un bucle for lo poder modificar a tu gusto digamos, incluso la condicion de iteracion le podes cambiar


const miArray1 =[1,2,3,4,5,6,7,8,9,10]

// .forEach                nos permite iterar por todos los elementos del ARRAY

// Agarras tu array, aplicas forEach, pones un nombre a los elementos
// Te va a apareces en gris la palabra elemento porque no la llamaste todavia!
miArray1.forEach((elemento) => {
    console.log(elemento);
})
// 1 2 3 4 5 6 7 8 9 10
// la flecha (arrow function) reemplaza a poner function








// .filter              Filtra el array a partir de una condicion. Te trae TODO
const pares = miArray1.filter((elemento) =>{
    return elemento % 2 === 0          // Si el resto es 0, es par
})
console.log("Los numeros pares son",pares)
// Los numeros pares son [ 2, 4, 6, 8, 10 ]







// .map                  Recorre el array y ejecuta la condicion que le das

const duplicados = miArray1.map((elemento) =>{
    return elemento * 2  
})
console.log("Array duplicado",duplicados)
// Array duplicado [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]




// .find   (el primer elemento que encuentra)

const encontrados = miArray1.find((elementos =>{
    return elementos > 5
}))
console.log("Array que coincide",encontrados);
// Primer elemento del Array que es mayor a 5: 6





console.log('****************** Ciclo FOR');

// De donde arrancamos?  let i = 1        Empieza a iterar desde el 1 
// Despues sigue la condicion:   i <=5    Itera desde el 1,2,3,4,5
// Despues agregas un incremento o decremento ; i++ (incremento de a 1) 
// i--(decremento)


console.log('****************** Ejemplo 1');
for (let i = 1; i <=5 ; i ++){
    console.log(i)
}
// 1 2 3 4 5


console.log('****************** Ejemplo 2');
let suma = 0;
for(let i = 1; i <=10 ; i ++){
    // suma = suma + i
    suma += i
    console.log(suma);
}
// 1 3 6 10 15 21 28 36 45 55
console.log('Sumatoria',suma);
// Sumatoria 55  






// .length                te trae todos los elementos del array, los recorre completo
const miArray3 =[6,2,7,4,5,1,3,4,5,10]

for(let i= 0; i < miArray3.length; i++){
    console.log("El valor de i es",i);
    console.log("El valor de mi array es",miArray3[i])
    console.log('  ');
}

// El valor de i es 0
// El valor de mi array es 6

// El valor de i es 1
// El valor de mi array es 2

// El valor de i es 2
// El valor de mi array es 7

// El valor de i es 3
// El valor de mi array es 4

// El valor de i es 4
// El valor de mi array es 5

// El valor de i es 5
// El valor de mi array es 1

// El valor de i es 6
// El valor de mi array es 3

// El valor de i es 7
// El valor de mi array es 4

// El valor de i es 8
// El valor de mi array es 5

// El valor de i es 9
// El valor de mi array es 10


// Esto nos sirve si queres traer la informacion de una variable en una base de datos 



// La diferencia principal con el FOR es que el WHILE adentro tiene la condicion y el autoincremento, pero la variable tiene q estar afuera del bucle. El FOR lo tiene todo adentro de sus parentesis
console.log('****************** Ciclo While');

let contador = 1;      // De donde arrancas
while(contador <=5){   // Condicion
    console.log(contador)
    contador ++        // Incremento
}



