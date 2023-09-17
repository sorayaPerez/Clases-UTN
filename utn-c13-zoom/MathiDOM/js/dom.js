console.log('********************************** Simulador HOME-BANKING *************************');

// alert()  // Js bien conectado
// ============ Vamos a probar por que conviene linkear el js en el head

// El document es la puerta de acceso
//* El querySelector llama a document y del documento queres el elemento que tenga el ID btn
//* Para seleccionar el boton (btn) lo hacemos mediante el id que le pusimos y lo guardas en una variable

let btn = document.querySelector('#btn') //*! Guardas el boton
console.log(btn); // <button id="btn"> click me </button>
console.log(document); //* Nos devuelve el !DODCTYPE html con TODO lo que hicimos 

// Al ser objetos accedemos con la notación de . 
console.log(document.head); //* Nos devuelve nuestra estructura del Head
console.log(document.body); //* Nos devuelve nuestra estructura del Body







// ! Le agregas un evento (.addEventListener)
// * El evento es "hacer click" y cuando suceda se va a ejecutar la funcion
// *                     evento     funcion  
// btn.addEventListener('click', createParagraph)

// Creamos la funcion: Cada vez que clikeamos el boton, se genera un nuevo parrafo
// con el contenido "Hola soy un parrafo"

function createParagraph(){
//*                        etiqueta parrafo
    let p = document.createElement('p') //! Creas la etiqueta (literal) parrafo y lo guardas en la variable p
    console.log(p);


    p.textContent = "Hola soy un parrafo"  //! Agregas contenido a la etiqueta vacia p (textContent)
    p.classList.add('paragraph') //! Agregas el estilo   (classList)
    document.body.appendChild(p) //! Lo agregas al body (appendChild)
}

btn.addEventListener('click', createParagraph)

// Si inspeccionas el documento en el navegador, podes ver como en Elements
// Se crearon todas las nuevas etiquetas 



// ====== Otro Boton

let botonUrgente = document.querySelector('#btnUrgente')

function createParagraphUrgente(){
    let p = document.createElement('p')
    let div_urgente = document.querySelector('.urgente') //! Obtenemos el div
    p.textContent = "Esto es un texto urgente"
    div_urgente.appendChild(p)
}

botonUrgente.addEventListener('click',createParagraphUrgente)