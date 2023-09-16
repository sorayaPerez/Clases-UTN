let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    ciudad: 'Buenos Aires'
}

console.log(persona.nombre);

persona.edad = 31
//modificamos el valor de la propiedad
console.log(persona.edad);

persona.profesion = "Ingeniero"
console.log(persona);

delete persona.ciudad
console.log(persona);

const propiedad= Object.keys(persona) // [ 'nombre', 'apellido', 'edad', 'profesion' ]
console.log(propiedad);

const valores = Object.values(persona)   // [ 'Juan', 'Perez', 31, 'Ingeniero' ]
console.log(valores);

const otraPersona = {...persona} //Duplicas el objeto y lo guardas en otra cte
console.log(otraPersona);

// Desestrucutras las propiedades en variables , en el objeto son propiedades, y ahora son variables 
let {nombre,apellido,edad} = persona
console.log(nombre);


//JSON puede usarse como una pseudo base de datos
let jsonPersona = {"nombre":"Juan","apellido":"Perez"} // Json con clave valor pero en comilla. 

let persona1 = JSON.parse(jsonPersona)
console.log(persona1);

let person = {nombre: "Juan", edad}

// callback 

let suma =(num1,num2) => {
    return num1 + num2
}

function operacion(num1,num2,callback){
    let resultado = callback(num1,num2)
    return(resultado)
}

console.log(operacion(2,2,suma));