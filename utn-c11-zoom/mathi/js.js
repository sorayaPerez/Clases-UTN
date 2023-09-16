/** Funciones **/ 
// Clase 11

// 1) declarar la funcion
function sumar(){
    let num1 =  parseInt(prompt('Decime el num1 para sumar'))
    let num2 = parseInt(prompt('Decime el num2  a sumar'))

    let resultado = num1+num2 
    console.log(resultado);
    alert(`El resultado de ${num1} + ${num2} es: ${resultado}`)
}

// 2) Llamar la funcion
suma()


// ================ Aca si no ingresa nada sale NaN 
// ================ Te pones mas estricto


function sumarValidado(){
    let num1 =  prompt('Decime el num1 para sumar')
    let num2 = prompt('Decime el num2  a sumar')

          // 10      y         5 
    if (Number(num1) && Number(num2)) {
        let resultado = Number(num1) + Number(num2)

        alert(`El resultado de ${num1} + ${num2} es: ${resultado}`)
    }else{
        alert('Uno de los numeros ingresados no es correcto')
    }
        // true / false -  // true / false
        // true            y  true =  true
        // true            y  false  =  false
        // false           y  false  =  false
        // false           y  true  =  false
}

// sumar(10, 5)
// sumar(12, 8)

// sumarValidado(10, 5)
// sumarValidado(12, 8)

















function operacionMatematica(num1, num2, op){
    let resultado;

    switch (op) {
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

}

// operacionMatematica(3, 6, "-")
// operacionMatematica(3, 10, "+")


// let suma = function(a, b) {
//     return a + b;
//   };

// console.log(typeof suma);


// const pi = 3.14 //number

// pi = 10 //String

const frutas = ["🍎","🍏","🍇" ] //array

console.log( frutas);
console.log(typeof frutas);


frutas.push("🍒")
frutas.push(10)
console.log( frutas);

console.log(typeof frutas);


function suma(num1, num2) {
    let resultado = num1 + num2

    return   {
        num1,
        num2,
        resultado
    }

}

// console.log( suma(10, 5).resultado);

// let resultadoSuma = suma(3, 4)

// console.log(resultadoSuma[0]);


let userName = 'Juan';


function showMessage() {
  let userName = "Bob"; 

  let message = 'Hola, ' + userName;
  alert(message);
}

alert( userName );

showMessage();

alert( userName ); 



// function showMessage(text = "sin texto",  from ) {
//     alert( from + ": " + text );
//   }


 /**
  * Esta funcion imprime por pamtallla el parametro from y text
  * @param {string} from  nombre de la persona
  * @param {string} text texto a imprimir en pantalla 
  */
function showMessage( from = 'Mathias', text = "sin texto" ) {
    alert( from + ": " + text );
  }




