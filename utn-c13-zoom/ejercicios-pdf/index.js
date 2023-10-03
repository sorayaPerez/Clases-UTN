// Ejercicio 1: 

// Crear una función que reciba el parámetro nombre y que devuelva el largo de ese nombre. 
// Guardar el valor de retorno en una variable y mostrarlo en consola.
// Por ejemplo: si ingresamos “Ana”. El resultado debería ser 3.

function conocerte(nombre){
        return console.log(nombre.length);
}

longitud_nombre = conocerte("cami")
console.log(longitud_nombre);


// Ejercicio 2

// 1. Creá en un archivo un esqueleto HTML básico. 
// 2. Incluí la etiqueta <h1> y <p>
// 3. Asignale un ID o CLASS a la etiqueta <p>
// 4. Enlazá tu archivo JS al HTML
// 5. Usando el método querySelector mostrá tu h1 y tu ID o CLASS en consola. 
// 6. Mostrá en consola el texto dentro de la etiqueta h1

const h1 = document.querySelector("h1")
const p = document.querySelector(".parrafo")

console.log(h1);
// h1#titulo
console.log(p);
// p.parrafo



console.log(h1.textContent); //Traes el contenido


// Ejercicio 2

console.log(p.textContent);
// Si, recien ahora estoy haciendo estos ejercicios


function saludar(nombre){
        alert("Hola" + nombre)
}
saludar("Lucas")

//  El objeto document es específico del entorno del navegador web y no está disponible en todos los contextos de JavaScript, como por ejemplo en Node.js.

// Para ver lo que hiciste tenes que ir a el browser y fijarte en consola



// // Llamas el boton para darle un ?¿metodo
// let btn = document.querySelector('#btn')

// // document es una api que nos permite trabajar con los elementos HTML y CSS
// function createParagraph(){
//     let p= document.createElement()
//     p.textContent = "Hola soy un parrafo"
//     document.body.appendChild('p')
// }

// btn.addEventListener('click',createParagraph)