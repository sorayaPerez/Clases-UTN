let div = document.querySelector('#container')

//?. Inicio de sesion: Permitir a los usuarios iniciar sesion con sus credenciales (nombre de usuario y contraseña) para acceder a su cuenta bancaria

// ===== USUARIO (Simula un database)
let firstname= 'lo'
let lastName= 'perez'
let password ='pez'
let email = 'perritofeliz@gmail.com'

// ===== Pedis datos al usuario
let userName = prompt('ingrese el nombre').toLocaleLowerCase().trim();
let userPassword = prompt('ingrese contraseña').toLocaleLowerCase().trim();


// function login(){                                                               //* Para registrar o iniciar sesion necesitamos un prompt para tomar los datos
                                                                                //*! innerHTML: Es el contenido que tiene dentro
if ((userName === firstname) && (userPassword = password)) {                    //* Validamos los datos: Deben coincidir los datos que ingresa el usuario con tu base de datos.
    let h1= document.createElement('h1')                                        //*! Creamos el h1
    console.dir(h1);                                                            //! Podemos ver todas las propiedades que se pueden usar
    h1.textContent ='Bienvenido ' + userName                                    //! Metes contenido al h1
    console.log('Bienvenido ' + userName);                                      // Chequeo
    div.appendChild(h1)
                                                                                //!Si cumple, devuelve un true
}else{                                                                          //* Si el usuario se equivoca decirselo
    let h1= document.createElement('h1')                                        //*! Creamos el h1
    h1.style.color=  'red'
    h1.textContent ='Usuario o contraseña incorrecta'                           //! Metes contenido al h1
    div.appendChild(h1)                                                         //!Si NO cumple, devuelve un FALSE
}
// }                                                                               // Con login solo NO damos la opcion de //* Volver a intentarlo


//== EXTRA AL EJERCICIO
// querySelector('#') //*Aca agarra el PRIMERO que encuentra
// querySelector('.')
// querySelector('h1')
// querySelector('#')
// querySelector('div > h1')
// querySelector('input[type="text"]')
// querySelectorAll('div') //* Si tenes que agarrar TODOS los divs
//=====================================================================


