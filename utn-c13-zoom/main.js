// Llamas el boton para darle un ?¿metodo
let btn = document.querySelector('#btn')

// document es una api que nos permite trabajar con los elementos HTML y CSS
function createParagraph(){
    let p= document.createElement()
    p.textContent = "Hola soy un parrafo"
    document.body.appendChild('p')
}

btn.addEventListener('click',createParagraph)