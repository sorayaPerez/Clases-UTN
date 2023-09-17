// Funciones

function sumar(num1,num2){ // Si no llamas aparecen en gris
}

function sumar(num1,num2){ // Si lo llamas se colorean
    return num1 + num2
}
console.log(sumar(2,4));


// Reemplazando la palabra function con un arrow function

const sumar1 = (num1,num2) => {
    return num1+num2}
console.log(sumar1(2,4));

// Lo mismo pero todo en una linea

const sumar2 = (num1,num2) => num1+num2
console.log(sumar2(2,4));



// Ejemplo 2
function esPar(numero){
    return numero % 2 == 0
}

const numero1 =10;
const numero2 = 7;

console.log(esPar(numero1));
console.log(esPar(numero2));


// Ejemplo 3
function saludar(nombre){
    return "Hola "+ nombre
}

console.log(saludar("Soraya"));


// Ejemplo 4: area del triangulo 
function area_triangulo(base,altura){
    return ((base*altura)/2)
}

console.log(area_triangulo(4,8));

// Ejemplo 5: Local
function sumaLocal (num1, num2){
    let resultado = num1 + num2
    let mensaje = "El resultado de la suma es " + resultado
    return mensaje
}

console.log(sumaLocal(2, 4))

// Ejemplo 6: Global la variable la definis afuera, y dentro le asignas el valor
let mensaje;
function SumaGlobal(num1, num2){
    let resultado = num1 + num2
    mensaje = "Luca" + resultado
}

SumaGlobal(3,6); 
console.log(mensaje)


// Ejemplo 7
function verificar(numero){
    if(numero > 0){
        return "El numero es positivo"
    }
    else if(numero < 0){
        return "El numero es negativo"
    }
    else{
        return "El número es cero"
    }
}

console.log(verificar(-1))


// Ejemplo 8
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
// Aca entras a cada uno de los objetos (claves de valor?) NO vimos objetos
        return {
            positivos:positivo,
            negativos :negativo,
            ceros:ceros
        }

}

console.log(verificar(numero))


