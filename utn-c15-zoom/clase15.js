//* Funcion constructora: definis la funcion, pasas parametros que tambien actuan como propiedades en los objetos {},
// Podes crear distintos objetos a partir de esa clase. En otros lenguajes se permite la herencia
//                      parametros
// function Persona(nombre,apellido,edad,ciudad){
//     this.nombre = nombre;                                             // this no se puede usar en un arrow function (=>) por eso se usa function (forma tradicional)
//     this.apellido = apellido;
//     this.edad = edad;
//     this.ciudad =ciudad;
// }

// // Podes crear otras personas usando la funcion constructora
// const persona1 = new Persona("Juan","Perez",30,"Buenos Aires")
// const persona2 = new Persona("Luis","Perez",35,"Buenos Aires")

// console.log(persona1);
// console.log(persona2); 
//* Devuelve un OBJETO a partir de la funcion persona.


//?========================= Codigo Asincrono:  */
//! la respuesta demora y/o no puede ser procesada en el momento.
// Cuando hablamos de funciones asincronicas hablamos de tareas ejecutadas una detras 
// de otra.Es decir que espera el resultado de una para iniciar la siguiente
// Para poder hacer que las acciones se ejecuten de forma consecutiva, hace falta poner en espera el inicio de la siguiente tarea para que aguarde el resultado de la anterior.

// Ejemplos:
// ● Operaciones sobre archivos (solo para JavaScript del lado del servidor) 
// ● Operaciones sobre bases de datos (solo para JavaScript del lado del servidor) 
// ● Conexión y consulta a servidores externos 

// En JavaScript todas las operaciones de E/S son asincrónicas 
// ● Conexión con un servidor remoto por medio de HTTP 
// ● Timers 
// ● Del lado del servidor (NodeJS) 
//      ○ Consultas a la base de datos 
//      ○ Operaciones sobre archivos

// Para ello, contamos con tres formas de hacerlo:

//* -Por medio de una funcion Callback

//* -Por medio de PROMESAS

//* -Por medio de las palabras async y awai


// //? Callback: "I will finish later!"
// function myDisplayer(info){
//     let texto= document.querySelector("p");
//     texto.innerText=info;
// }

// function myCalculator(num1,num2,myCallback){ 
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5,5,myDisplayer)
//* En este ejemplo podemos ver que la funcion myDisplayer() se va a comportar como la 
//* funcion callback de myCalculator.
//* Esto quiere decir que solo se ejecutara myDisplayer una vez hecha la suma .

// Lo podriamos usar en un gestor de gastos, cuando se solicita valores especificos.



//? Promesas:  
// es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden 
// ocurrir que no se cumpla o que quede en un estado incierto indefinidamente

//* Con esto en mente podemos decir que una promesa no es mas que un objeto devuelto al cuál se adjuntan funciones callback segun el resultado de ese objeto

// Las promesas hacen uso de METODOS que nos permitiran armar la estructura necesaria 
// para indicarle al programa como actuar tanto en el caso que la promesa se cumpla , 
// como en caso que halla algun error por lo que la promesa no se cumpla.

//* Estos metodos son .then() ,que contiene la funcion callback a ejecutar en caso que la promesa se cumpla; 
//* y .catch() , que contiene la funcion callback en el caso que surja algun error o falla.

//? EJEMPLO 1 

// let promesa = new Promise((resolve,reject)=> {
//     let todoOk= true
//     if (todoOk == true){
//         resolve("Funciono")
//     } else{
//         reject("Hay un error")
//     }
// })

// promesa .then((response)=>{
//     console.log('response:'+response);
// })
//     .catch((error)=>{
//         console.log('Error', error);
//     })


//? EJEMPLO 2 

// let promesa = new Promise((resolve,reject)=> {
//     let todoOk= false
//     if (todoOk == true){
//         resolve("Funciono")
//     } else{
//         reject("Hay un error")
//     }
// })

// promesa .then((response)=>{
//     console.log('response:'+response);
// })
//     .catch((error)=>{
//         console.log('Error', error);
//     })


// Como vemos en el siguiente ejemplo estamos ejecutando una promesa en donde 
// vemos que el metodo .then() ejecuta la función callback resolve() cuando la promesa se cumple ; y el metodo .catch() ejecuta la función callback reject() cuando la promesa no se cumple 

// En este caso la promesa se encuentra en el condicional if() donde evalua si la variable todoOk es TRUE 



//*? Funcion Cors  (Seguridad en HTTP)   https://developer.mozilla.org/es/docs/Web/HTTP/CORS
// El intercambio de recursos de origen cruzado (CORS, por sus siglas en inglés), es un mecanismo basado en cabeceras HTTP que permite a un servidor indicar cualquier dominio, esquema o puerto con un origen (en-US) distinto del suyo desde el que un navegador debería permitir la carga de recursos. CORS también se basa en un mecanismo por el cual los navegadores realizan una solicitud de "verificación previa" al servidor que aloja el recurso de origen cruzado, con el fin de comprobar que el servidor permitirá la solicitud real. En esa comprobación previa, el navegador envía cabeceras que indican el método HTTP y las cabeceras que se utilizarán en la solicitud real.

//? Ejemplo 3

//  //                valor
// function hacerAlgo(resultado){
//     // No sabes cuando se va a cumplir por eso es asincrono. Es una request)
//     return new Promise ((resolve1,resolve2) =>{
//         setTimeout(() => {                    //Cuanto tiempo tarda la promesa
//             if(resultado){
//                 resolve1("Operacion exitosa")
//             }
//             else{
//                 resolve2("Error")
//             }
//         },2000);  //2000 segundos tarda e aparecer en consola
//     })
// }

// hacerAlgo(true)
// .then((mensaje)=>{
//     console.log(mensaje); // Mensaje: Operacion exitosa
// })

// .catch((error) =>{
//     console.log(error);
// })          // El catch agarra el mensaje, ya que no se cumplio la promesa


// En esta parte del código, se llama a la función hacerAlgo con el valor true. Esto significa que la promesa se resolverá con éxito, y el then se ejecutará. El mensaje "Operación exitosa" se muestra en la consola.
// Si en lugar de true hubieras pasado false a hacerAlgo, entonces la promesa se habría rechazado, y el catch se habría ejecutado, mostrando el mensaje de error "Error" en la consola.