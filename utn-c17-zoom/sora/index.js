// Ejemplo de Estudiantes
// const estudiantes = [
//     { nombre: "Juan", notas: [85, 90, 78] },
//     { nombre: "María", notas: [92, 88, 95] },
//     { nombre: "Carlos", notas: [78, 85, 80] }
// ];


// function promediarNotas(estudiantes) {
//     for (let estudiante of estudiantes) {                                     // Recorremos el arreglo de objetos de estudiantes
//     const sumaNotas = estudiante.notas.reduce((sum, nota) => sum + nota, 0); // Calculamos la suma de las notas del estudiante
//     const promedio = sumaNotas / estudiante.notas.length;                   // Calculamos el promedio dividiendo la suma de notas entre la cantidad de notas
//     estudiante.promedio = promedio;                                        // Agregamos la propiedad "promedio" al objeto estudiante
//     }
//     return estudiantes;                                                  // Devolvemos el arreglo de objetos de estudiantes modificado
// }

//   // Llamamos a la función para calcular los promedios
// const estudiantesConPromedio = promediarNotas(estudiantes);
// console.log(estudiantesConPromedio);


// Cuando los usuarios llenen el formulario y hagan clic en el botón "Registrarse", sus datos deben ser almacenados en el almacenamiento local del navegador. Luego, deben ser redirigidos automáticamente a la página de perfil.

// Página de Perfil (perfil.html):
// La página de perfil debe mostrar los datos del usuario registrado. Debes extraer los datos almacenados en el almacenamiento local y mostrar el nombre y el email del usuario en esta página. Si no hay datos de usuario disponibles, muestra un mensaje indicando que no hay datos.

const saveUserInformation = document.getElementById("button")
const saveUserName = document.getElementById("nombre")
const saveUserEmail = document.getElementById("email")

saveUserInformation.addEventListener("click", ()=>{
    const userName = saveUserName.value;
    const userEmail = saveUserEmail.value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
});

// Crear un objeto 
// Hacerlo con submit





