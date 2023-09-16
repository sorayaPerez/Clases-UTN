console.log('********************************** Simulador HOME-BANKING *************************');


// El document es la puerta de acceso
// El querySelector llama a document y del documento queres el elemento que tenga el ID btn
// En la variable let guardas el boton
let btn = document.querySelector('#btn')


// Creas la funcion
function createParagraph(){
    let p = document.createElement('p') // Creas la etiqueta parrafo y lo guardas en la variable p
    //                        etiqueta parrafo
    p.textContent = "Hola soy un parrafo"  // Agregas contenido a tu variable p
    p.classList.add('paragraph')
    document.body.appendChild(p) 
}

// .addEventListener te permite agregar el EVENTO, en este caso click 
//                    evento     funcion  
btn.addEventListener('click', createParagraph)

