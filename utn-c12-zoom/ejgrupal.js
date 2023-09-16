console.log('******************************************************* Problema 1*****')
// Enunciado: Crea un programa que imprima los números pares del 1 al 10 (inclusive) en la consola.


miArrayEjercicio=[1,2,3,4,5,6,7,8,9,10]
const paresEjercicio = miArrayEjercicio.filter((elemento) =>{
    return elemento % 2 === 0
})
console.log(paresEjercicio)




console.log('******************************************************* Problema 2*****')
// for each y join
// Enunciado: Dado un array de nombres, crea un programa que imprima los nombres en una sola cadena, separados por comas.


const nombres= ["Joaquin","Gabriel","Soraya", "Lucas", "Matias"]
const nombresConComa = nombres.join(",")
console.log(nombresConComa);

// Este programa utiliza el método join() de JavaScript que permite unir los elementos de un array en una sola cadena utilizando un separador especificado. 
// En este caso, el separador es una coma seguida de un espacio ", ". El resultado se almacena en la variable nombresSeparadosPorComas, y luego se imprime en la consola utilizando console.log().







