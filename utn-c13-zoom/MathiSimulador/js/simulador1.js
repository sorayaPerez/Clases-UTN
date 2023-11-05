let div = document.querySelector('#container')

//?. Inicio de sesion: Permitir a los usuarios iniciar sesion con sus credenciales (nombre de usuario y contraseña) para acceder a su cuenta bancaria

//! NO es escalable el "database": tenes que repetir para c/ usuario
// let firstname= 'lo'
// let lastName= 'perez'
// let password ='pez'
// let email = 'perritofeliz@gmail.com'

//! NO es escalable el "database": tenes que repetir el array anterior para c/ usuario
//* Optimizas: pasas de 4 variables a un OBJETO {}
let user ={
    firstname: "lo",    //Propiedades del objeto
    lastName: "pez",
    password:"pez",
    email : 'perritofeliz@gmail.com',
}

// Ahora creas una estructura (ARRAY []) que agrupa TODOS los usuarios. Guarda el objeto user
// todo: Funcion que guarde los usuarios que se registran
let users =[user]


function login(){                                                               //* Para registrar o iniciar sesion necesitamos un prompt para tomar los datos
    div.innerHTML= " "                                                          // La pasas a un string vacio: CADA VEZ que se ejecuta la funcion, LIMPIA lo que tiene el div
                                                                                //*! innerHTML: Es el contenido que tiene dentro
if ((userName === user.firstname) && (password = user.password)) {              //* Validamos los datos: Deben coincidir los datos que ingresa el usuario con tu base de datos.
    let h1= document.createElement('h1')                                        //*! Creamos el h1
    console.dir(h1);                                                            //! Podemos ver todas las propiedades que se pueden usar
    h1.textContent ='Bienvenido ' + userName                                    //! Metes contenido al h1
    div.appendChild(h1)
    return true                                                                 //!Si cumple, devuelve un true
}else{                                                                          //* Si el usuario se equivoca decirselo
    let h1= document.createElement('h1')                                        //*! Creamos el h1
    h1.style.color=  'red'
    h1.textContent ='Usuario o contraseña incorrecta'                           //! Metes contenido al h1
    div.appendChild(h1)                                                         //!Si NO cumple, devuelve un FALSE
    return false
}
}                                                                               // Con login solo NO damos la opcion de //* Volver a intentarlo

// Declaracion de variables
let userName;
let userPassword;
let validate; 
let confirmValidate;

// El for/while siempre se ejecuta y lo primero que se evalua es la condición.
// Por lo que en el ejemplo de abajo como no se cumple la condición directamente no se ejecuta.
// while(2 !==2){
// }

// do-while: 
// Se ejecuta UNA vez lo del DO,
// DESPUES de eso evalua si se sigue iterando o la termina en la primer iteración.

do {
//!                                    Todo en minuscula    Borrar los espacios en blanco
    userName = prompt("Ingresar tu nombre").toLocaleLowerCase().trim() 
    userPassword = prompt("Ingresar contraseña")
    validate = login() // Recibe true or false 
    if (validate === false) {
        confirmValidate= confirm('¿Desea ingresar nuevamente los datos?') //Confirm devuelve true or false dependiendo si acepta o no
    } 
} while (!validate  && confirmValidate === true);

// El do while se va a ejecutar mientras que validate sea falso y confirmValidate sea
