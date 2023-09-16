// let mensaje = "hola";
// mensaje = 123


// let str = "Hola";
// let str2 = 'Las comillas simples también están bien';
// let phrase = `se puede incrustar otro ${1 + 1}`;

// console.log(phrase);


// let nameFieldChecked = true; // sí, el campo name está marcado

// let age = null
// console.log(age);

let a = 5; //number
let b = "5"; //string
            
console.log(a > b);
console.log(a < b);

console.log( a >= b);

console.log( a == b);
console.log( a === b);

let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?');

// if (condicion){
//     // lo que pasa si la condicion se cumple
// }

if (year == 2015) {
    alert( '¡Estás en lo cierto!' );
}else{
    alert('Respuesta incorrecta, volve a intentar') 
}

if (year == 2015) {
    alert( '¡Estás en lo cierto!' );
} else if(year == 2020){
    alert('otra version de JS')
}else if( year >= 2021){
    alert('Esta version aun no salio')
}else{
    alert('Respuesta incorrecta, volve a intentar') 
}

let edad = prompt('Que edad tenes?')

// let nombre = prompt('como te llamas?')


// SWITCH

let nombre; // Inicializas la variable, pero no la declaras
switch (edad) {
    case 10:
        nombre = prompt('como te llamas?')
        // alert(`Hola, ` + nombre)
        alert(`Hola ${nombre}, tu edad es ${edad} `)
        break;
    case 18:
        nombre = prompt('como te llamas?')
        // alert(`Hola, ` + nombre)
        alert(`Hola ${nombre}, tu edad es ${edad} `)
        break;

    case 30:
        nombre = prompt('como te llamas?')
        // alert(`Hola, ` + nombre)
        alert(`Hola ${nombre}, tu edad es ${edad} `)
        break;

    default:
        break;
}

// SCOPE = alcance de las variables
// let tiene un alcance de bloque, el bloque esta definido entre {}

if (true) {
    var test = true; // uso de "var" 
}
  alert(test); // true, la variable vive después del if

// Si cambias var por let te tira error, porque let tiene alcance de bloque {} y no vive por fuera de eso.



// Los datos primitivos tienen metodos

let str= "Hello";
console.log(str.toLocaleUpperCase);
console.log(str.toLocaleLowerCase);

let n = 1.2343432
console.log(n.toFixed);
console.log(parseInt(n));