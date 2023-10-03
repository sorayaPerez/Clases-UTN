//*============================================ OBJETOS

//Puede ser const o var
let persona = {
//  clave : valor  
    nombre: 'Juan',         //propiedad 1
    apellido: 'Perez',      //propiedad 2
    edad: 30,               //propiedad 3 
    ciudad: 'Buenos Aires'  //propiedad 4
}
//                  propiedades
console.log(persona.nombre);

//Modificar una propiedad edad
persona.edad = 31
console.log(persona.edad);

// Modificando propiedad profesion
persona.profesion = "Ingeniero"
console.log(persona);

// Eliminar propiedad
delete persona.ciudad
console.log(persona);

// Mostrar las keys de las propiedades
const propiedad= Object.keys(persona) // [ 'nombre', 'apellido', 'edad', 'profesion' ]
console.log(propiedad);

// Mostras los valores de las propiedades
const valores = Object.values(persona)   // [ 'Juan', 'Perez', 31, 'Ingeniero' ]
console.log(valores);

//Duplicas el objeto y lo guardas en otra cte
const otraPersona = {...persona} 
console.log(otraPersona);
delete otraPersona.profesion
console.log(otraPersona);

// Desestrucutras las propiedades en variables , en el objeto son propiedades, y ahora son variables 
let {nombre,apellido,edad,ciudad} = persona
console.log(nombre);


//JSON puede usarse como una pseudo base de datos. La podemos consumir!
// La usan muchos lenguejes de programacion
let jsonPersona = '{"nombre":"Juan","apellido":"Perez"}' // Json: clave valor pero en comilla. 

//* Lo pasas a objeto literal
let persona1 = JSON.parse(jsonPersona) // Para poder mostrar el Jason en la web hay que paresearlo
console.log(persona1);
console.log(typeof(persona1)); //object

let person = {nombre: "Juan", edad:25} // Aca tenes un objeto literal
// Lo pasas a JSON
let jsonPeresona1 = JSON.stringify(person)
console.log(jsonPeresona1); // {"nombre":"Juan","edad":25}



//* callback: Funcion que se pasa a otra funcion   
let suma =(num1,num2) => {
    return num1 + num2
}
//                           callback
function operacion(num1,num2,callback){
    let resultado = callback(num1,num2)
    return(resultado)
}

console.log(operacion(2,2,suma));