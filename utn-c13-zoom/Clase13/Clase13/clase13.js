// Funciones
// function sumar(num1, num2){
//     return num1 + num2
// }

// console.log(sumar(2, 4))

// const sumar1 = (num1, num2) => {
//     return num1 + num2}

// console.log(sumar1(2, 4))

// function esPar(numero){
//     return numero % 2 == 0
// }

// const numero1 = 10;
// const numero2 = 7;

// console.log(esPar(numero1))
// console.log(esPar(numero2))

// function saludar(nombre){
//     return "Hola " + nombre + "!!"
// }

// console.log(saludar("Lucas"))

// function triangulo (base, altura){
//     return (base * altura) / 2
// }

// console.log(triangulo(5, 8))

// function sumaLocal (num1, num2){
//     let resultado = num1 + num2
//     let mensaje = "El resultado de la suma es " + resultado
//     return mensaje
// }

// console.log(sumaLocal(2, 4))

// let mensaje;
// function SumaGlobal(num1, num2){
//     let resultado = num1 + num2
//     mensaje = "Luca" + resultado
// }

// SumaGlobal(3,6); //Esto no funcionaria porque el valor de la variable
// console.log(mensaje)

// function verificar(numero){
//     if(numero > 0){
//         return "El numero es positivo"
//     }
//     else if(numero < 0){
//         return "El numero es negativo"
//     }
//     else{
//         return "El número es cero"
//     }
// }

// console.log(verificar(-1))

const numero = [5, 0, 2, -1, -3]
function verificar (lista){
    let positivo = 0;
    let negativo = 0;
    let ceros = 0;

    for (let i = 0; i < lista.length; i++){
        if(lista[i] > 0){
            positivo ++
        }
        else if(lista[i]< 0 ){
            negativo++
        }
        else {
            ceros ++}
        }

        return {
            positivos:positivo,
            negativos :negativo,
            ceros:ceros
        }

}

console.log(verificar(numero))