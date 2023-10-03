// ``

let nombre: string ="Lucas";
let edad: number = 40;
let estudiante: boolean = true;

function saludar(nombre: string){
    console.log(`Hola, ${nombre}!`)
}

saludar("Mundo")

// --------------------------

// Definis objetos 
interface Producto {
    nombre: "Gorra";
    precio: 200
}

class Persona {
    constructor(public nombre: string, public edad:number){
    }
}

const persona1 = new Persona("Lucas",40)
console.log(`${persona1.nombre}`,`${ persona1.edad} `);


//*

let numeros: number[] = [1,2,3,4,5]

for(const numero of numeros){
    console.log(numero);
}

enum Dias{
    Lunes = 'lunes',
    Martes = 'martes'
}