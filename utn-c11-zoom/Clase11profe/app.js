//************************************ DOM ********************/

//El DOM (Document Object Model) proporciona varios
//METODOS que te permiten interactuar con los elementos y
//nodos de una página web.

//  .getElementById(id)            Este método se utiliza para obtener un
//                          elemento del DOM por su identificador único (id). Devuelve el
//                          primer elemento cuyo id coincida con el valor proporcionado. Si
//                          no se encuentra ningún elemento con el id especificado,devuelve `null`.


//  .addEventListener(event, callback):       Este método se utiliza
//                                     para agregar un evento a un elemento. Puedes proporcionar el
//                                    nombre del evento (como "click", "mouseover", etc.) y una
//                                   función de devolución de llamada que se ejecutará cuando
//                                   ocurra el evento.


//  .value                          Obtenes el valor

//  .textContent                    Muestra el mensaje 








//Obtenemos el formulario <form id="saludoForm"> y el div donde mostramos el mensaje <div id="saludoMensaje">
const form = document.getElementById("saludoForm"); // Guardas en form lo que seria el formulario
const mensajeDiv = document.getElementById("saludoMensaje"); // Guardas en mensajeDiv lo que seria el mensaje



//Agregamos un evento para manejar el envío (Cuando apretas el boton)
form.addEventListener("submit", function(event){
    //Evitamos el envío predeterminado del formulario (Si no se completa, no se envia)
    event.preventDefault();

    //Obtenemos y guardamos el nombre ingresado por el usuario
    const nombre = document.getElementById("nombre").value;

    //Creamos un mensaje personalizado
    const mensaje = `Hola, ${nombre} Bienvenido/a!`;

    //mostramos el mensaje
    mensajeDiv.textContent = mensaje;

})

