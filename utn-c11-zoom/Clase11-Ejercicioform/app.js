//    .createElement             Este método crea un nuevo
//                           elemento HTML con el nombre de etiqueta especificado.
//                         Puedes usar este elemento para construir contenido
//                         dinámicamente antes de agregarlo al DOM.


// Obtenemos el formulario, el botón y la lista de tareas
const form = document.getElementById('agregarForm');
const tareasLista = document.getElementById('tareasLista');
const eliminarCompletadasBtn = document.getElementById('eliminarCompletadas');

// Acá estamos obteniendo referencias a los elementos del HTML que vamos a utilizar en nuestro código:

// form: Obtiene el elemento del formulario donde los usuarios ingresarán nuevas tareas.
// tareasLista: Obtiene el elemento de la lista <ul> donde mostraremos las tareas agregadas.
// eliminarCompletadasBtn: Obtiene el botón que nos permitirá eliminar las tareas completadas.

// ------------------------------------------------------------
// Agregamos un evento al formulario para manejar la adición de nuevas tareas
form.addEventListener('submit', function(event) {
    event.preventDefault();                       // () No tenes ningun valor predeterminado

    // Obtenemos el valor del campo de texto de la nueva tarea  (Lo que escribe el usuario)
    const nuevaTarea = document.getElementById('tarea').value;

    // Creamos un nuevo elemento de lista (li) con el contenido de la nueva tarea
    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.textContent = nuevaTarea;

    //                             evento  
    // Agregamos un evento al elemento de lista para marcarlo como completado al hacer clic en él
    nuevaTareaLi.addEventListener('click', function() {
        nuevaTareaLi.classList.toggle('completada');
    });

    // Agregamos el elemento de lista a la lista de tareas
    tareasLista.appendChild(nuevaTareaLi);

    // Limpiamos el campo de texto después de agregar la tarea
    document.getElementById('tarea').value = '';
});

// Este bloque de código se encarga de manejar el evento de envío del formulario (submit) cuando el usuario agrega una nueva tarea:

// event.preventDefault(): Esto evita que el formulario se envíe de forma predeterminada, ya que queremos controlar el proceso con JavaScript y evitar que la página se recargue.
// const nuevaTarea = document.getElementById('tarea').value;: Obtenemos el valor del campo de texto de la nueva tarea ingresada por el usuario.
// const nuevaTareaLi = document.createElement('li');: Creamos un nuevo elemento de lista (<li>) que será la tarea que vamos a agregar a la lista.
// nuevaTareaLi.textContent = nuevaTarea;: Asignamos el texto de la nueva tarea al elemento de lista que creamos.
// nuevaTareaLi.addEventListener('click', function() { ... });: Agregamos un evento al elemento de lista para que, al hacer clic en él, se marque como completado o se desmarque (toggle) si ya estaba marcado como completado.
// tareasLista.appendChild(nuevaTareaLi);: Agregamos el elemento de lista que contiene la nueva tarea a la lista de tareas (<ul>).
// document.getElementById('tarea').value = '';: Limpiamos el campo de texto para que esté listo para ingresar una nueva tarea.

// --------------------------------------------------------------------

// Agregamos un evento al botón "Eliminar Completadas" para eliminar las tareas marcadas como completadas
eliminarCompletadasBtn.addEventListener('click', function() {
    const tareasCompletadas = document.querySelectorAll('.completada');

    // Recorremos las tareas completadas y las eliminamos de la lista
    tareasCompletadas.forEach(function(tareaCompletada) {
        tareaCompletada.remove();
    });
});

// Este bloque de código maneja el evento de clic en el botón "Eliminar Completadas":

// eliminarCompletadasBtn.addEventListener('click', function() { ... });: Agregamos un evento al botón para que, al hacer clic en él, se ejecute la función que sigue.
// const tareasCompletadas = document.querySelectorAll('.completada');: Utilizamos document.querySelectorAll para obtener todos los elementos con la clase completada. Recuerda que hemos agregado esa clase a las tareas marcadas como completadas.
// tareasCompletadas.forEach(function(tareaCompletada) { ... });: Usamos el método forEach para recorrer todas las tareas completadas y ejecutar una función para cada una de ellas.
// tareaCompletada.remove();: Eliminamos cada tarea completada de la lista.
