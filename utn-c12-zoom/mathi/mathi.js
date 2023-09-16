// Funciones con PARAMETROS
// == las funciones son acciones, por lo que hay que nombrarlas bien

function sumarValidado(numero1,numero2){
          // 10      y         5 
    if (Number(numero1) && Number(numero2)) { // Number convierte a Numero
        let resultado = Number(num1) + Number(num2)

        alert(`El resultado de ${numero1} + ${numero2} es: ${resultado}`)
    }else{
        alert('Uno de los numeros ingresados no es correcto')
    }
        // true / false -  // true / false
        // true            y  true =  true
        // true            y  false  =  false
        // false           y  false  =  false
        // false           y  true  =  false
}

// Cuando llamas a la funcion, tenes que indicar los parametros
sumarValidado(10, 5)


//Podemos solicitar esos numeros y despues pasarlos como argumento
let num1 = prompt("Decime un numero")
let num2 = prompt("Decime un numero")

sumarValidado(num1,num2)





function operacionMatematica(num1, num2, operacion){
    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 +  num2   
            alert(resultado)
            break;
        case "-":
            resultado = num1 -  num2   
            alert(resultado)
            break;
    
        default:
            break;
    }
    // En una division habria que tener en cuenta que no sea 0
}

operacionMatematica(3, 6, "-")
operacionMatematica(3, 10, "+")

//Funciones Callback    "Cuando se ejecute el metodo for each quiero que se realice esta funcion"
const miArray1 =[1,2,3,4,5,6,7,8,9,10]
// .forEach                nos permite iterar por todos los elementos del ARRAY
miArray1.forEach((elemento) => {
    console.log(elemento);
})


// FUNCIONES ANONIMAS -- despues no la podes volver a llamar
function sum(a, b) {
    return a + b;
};

// EXPRESION DE FUNCION -- lea signas a una variable 
let suma = function(a, b) {
    return a + b;
};

console.log(typeof suma); // function



//  =============== ¿Por que podes armar un  con const y usar metodos que lo modifiquen? 

const pi = 3.14 //number
// pi = "10" //String   o si lo cambias por otro numero.              
// la variable NO PUEDE cambiar en el tipo de VALOR y DATO

// EMOJIS win + .
const frutas = ["🍎","🍏","🍇" ] //array
console.log( frutas);
console.log(typeof frutas);
frutas.push("🍒") // lo que cambias es el ELEMENTO, no el valor del array, no pasa a ser un objeto. Se modifica internamente.
frutas.push(10)
console.log( frutas);
console.log(typeof frutas);




// ==================


function suma(num1, num2) {
    let resultado = num1 + num2
    // return mum1,num2,resultado          El return solo devuelve UN valor, el ultimo
    return   [num1,num2,resultado]         // Por eso lo convertis en un array
    // if ()                              // Todo lo que este abajo del return no lo lee, corta la ejecucion de la funcion  
}


//1)
suma(10, 5) // No te devuelve nada

//2)
console.log( suma(10, 5)) // Te lo muestra por consola

//3) 
resultadoSuma = suma(3, 4)  // Lo guardas en una variable 
console.log(resultadoSuma); // Te lo muestra por consola

console.log(resultadoSuma[0]);


//4) En vez de array podes hacer un objeto


// function suma(num1, num2) {
//     let resultado = num1 + num2
//     return   {
//         primer_numero :num1,
//         segundo_numero: num2,
//         resultado_final: resultado,
//     }
// }

// Con ECMAscript 6 podes optimizarar el codigo si a la propiedad y al valor le das el mismo nombre

function suma(num1, num2) {
    let resultado = num1 + num2
    return   {
        num1, // num1: num1
        num2,
        resultado
    }
}
console.log(suma(10,5).resultado);



//=================  Variables externas

let userName = 'Juan';


// function showMessage() {
//     userName = "Bob"; 

//     let message = 'Hola, ' + userName;
//     alert(message);
// }

// alert( userName ); //Juan

// showMessage(); // Llamas a la funcion

// alert( userName );  //Bob



function showMessage() {
    let userName = "Bob"; 

    let message = 'Hola, ' + userName;
    alert(message);
}

alert( userName ); //Juan

showMessage(); // Llamas a la funcion

alert( userName );  // Juan



//============== Valores predeterminados: el valor por defecto tiene que estar a lo ULTIMO

function showMessage(from ,text = "sin texto") {
    alert( from + ": " + text );
    }


    // DOCUMENTAR
/**
  * Esta funcion imprime por pamtallla el parametro from y text
  * @param {string} from  nombre de la persona
  * @param {string} text texto a imprimir en pantalla 
  */


function showMessage( from = 'Mathias', text = "sin texto" ) {
    alert( from + ": " + text );
    }


