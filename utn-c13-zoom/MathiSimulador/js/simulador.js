let div = document.querySelector('#container')

//?. Inicio de sesion: Permitir a los usuarios iniciar sesion con sus credenciales (nombre de usuario y contraseña) para acceder a su cuenta bancaria

// Esto seria como nuestra base de datos 
// Hacerlo asi es insostenible porque tendrias que hacerlo para TODOS los usuarios
//! NO se puede escalar
// let firstname= 'lo'
// let lastName= 'perez'
// let password ='pez'
// let email = 'perritofeliz@gmail.com'

// Lo pasamos a un //*objeto 
//  La informacion va a estar asociada a un USER 
//* Optimizas: pasas de 4 variables a 1
let user ={
    firstname: "lo",
    lastName: "pez",
    password:"pez",
    email : 'perritofeliz@gmail.com',
}

// Ahora creas una estructura que agrupa TODOS los usuarios
// todo: Funcion que guarde los usuarios que se registran
let users =[user]


//* Si el usuario se quiere registrar/iniciar sesion necesitamos un prompt para tomar los datos


function login(){

    // Cada vez que se ejecuta la funcion, limpia lo que tiene el div
    div.innerHTML= " "        // La pesas un string vacio
    //*! innerHTML: Es el contenido que tiene dentro

//* Validamos los datos: Deben coincidir los datos que ingresa el usuario con tu base de datos.
if ((userName === user.firstname) && (password = user.password)) {
    let h1= document.createElement('h1')                     //*! Creamos el h1
    console.dir(h1);                                         //! Podemos ver todas las propiedades que se pueden usar
    h1.textContent ='Bienvenido ' + userName                 //! Metes contenido al h1
    div.appendChild(h1)
    return true                                              //!Si cumple, devuelve un true
}else{
                                                             //* Si el usuario se equivoca decirselo
    let h1= document.createElement('h1')                     //*! Creamos el h1
    h1.style.color=  'red'
    h1.textContent ='Usuario o contraseña incorrecta'        //! Metes contenido al h1
    div.appendChild(h1)
    return false
}
}
// Con login solo NO damos la opcion de //* Volver a intentarlo

// let userName;
// let userPassword;
// let validate; 
// let confirmValidate;

// //*! do-while: se ejecuta una vez, y despues evalua si se sigue iterando
// do {
// // estandarizar los datos -- JS es //*CASE SENSITIVE
// //!                                    Todo en minuscula    Borrar los espacios en blanco
//     userName = prompt("Ingresar tu nombre").toLocaleLowerCase().trim() 
//     userPassword = prompt("Ingresar contraseña")
//     validate = login()
//     if (validate === false) {
//         confirmValidate= confirm('¿Desea ingresar nuevamente los datos?')
//     } 
// } while (!validate  && confirmValidate === true);

// El do while se va a ejecutar mientras que  validate sea falso y confirmValidate sea






// querySelector('#') //*Aca agarra el PRIMERO que encuentra
// querySelector('.')
// querySelector('h1')
// querySelector('#')
// querySelector('div > h1')
// querySelector('input[type="text"]')
// querySelectorAll('div') //* Si tenes que agarrar TODOS los divs


//? 2. Información de la cuenta: Mostrar información relevante de la cuenta de usuario, como el saldo disponible, el numero de cuenta, el nombre del titular, etc.

let optionInicio = prompt("Bienvenido al home banking, que desea hacer \n 1- iniciar sesion \n 2-registrese \n 3-salir")

let userName;
let userPassword;
let validate; 
let confirmValidate;

// Mientras la opcion sea distinta de 3, se va a ejcutar el switch
while(option ==='3'){
    switch(optionInicio){
        case '1':
            userName = prompt("Ingresar tu nombre").toLocaleLowerCase().trim() 
            userPassword = prompt("Ingresar contraseña")
            login()
            break;
        case '2':
            //registre usuario
            break;
        case '3':
            //
            break;
    }
}

