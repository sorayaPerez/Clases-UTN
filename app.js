"use strict";
// ``
let nombre = "Lucas";
let edad = 40;
let estudiante = true;
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar("Mundo");
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const persona1 = new Persona("Lucas", 40);
console.log(`${persona1.nombre}`, `${persona1.edad} `);
//*
let numeros = [1, 2, 3, 4, 5];
for (const numero of numeros) {
    console.log(numero);
}
var Dias;
(function (Dias) {
    Dias["Lunes"] = "lunes";
    Dias["Martes"] = "martes";
})(Dias || (Dias = {}));
