// alert("hola") //* ok 

// Objeto que vamos a renderizar en la web
let persona = {
    nombre:"Juan",
    apellido: "Perez",
    edad : 25,
    altura: 1.70
}

let infoPersona = document.getElementById("infoPersona") //*!Seleccionas el div

const persona1 = `
<p> Nombre: ${persona.nombre} </p>
<p> Apellido: ${persona.apellido} </p>
<p> Eddad: ${persona.edad} </p>
<p> Nombre: ${persona.nombre} </p>
`
// Mostrar esto en el HTML

//     id.             el objeto 
infoPersona.innerHTML = persona1