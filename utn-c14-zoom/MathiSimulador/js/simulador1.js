let div = document.querySelector('#container')

//?. Inicio de sesion: Permitir a los usuarios iniciar sesion con sus credenciales (nombre de usuario y contraseña) para acceder a su cuenta bancaria


//! NO es escalable el "database": tenes que repetir el array anterior para c/ usuario
//* Optimizas: pasas de 4 variables a un OBJETO {}
let user = {
    firstname: "lo",  //Propiedades del objeto
    lastName: "pez",
    password: "pez",
    email: 'perritofeliz@gmail.com',
}

// Ahora creas una estructura (ARRAY []) que agrupa TODOS los usuarios. Guarda el objeto user
//*! Antes login() chequeaba si el usuario se encotraba en user, no en users.
let users = [user]


console.log(users);

function login() {                                                               //* Para registrar o iniciar sesion necesitamos un prompt para tomar los datos
    div.innerHTML = " "                                                          // La pasas a un string vacio: CADA VEZ que se ejecuta la funcion, LIMPIA lo que tiene el div
                                                                                //*! innerHTML: Es el contenido que tiene dentro
    let findUser = users.find( u => u.firstname === userName )                   // Devuelve el PRIMER elemento que coincida
    if (findUser !== undefined && findUser.password === password) {                                               //* Validamos los datos: Deben coincidir los datos que ingresa el usuario con tu base de datos.
        let h1 = document.createElement('h1')                                        //*! Creamos el h1
        console.dir(h1);                                                            //! Podemos ver todas las propiedades que se pueden usar
        h1.textContent = 'Bienvenido ' + userName                                    //! Metes contenido al h1
        div.appendChild(h1)
        return true                                                                 //!Si cumple, devuelve un true
    } else {                                                                          //* Si el usuario se equivoca decirselo
        let h1 = document.createElement('h1')                                        //*! Creamos el h1
        h1.style.color = 'red'
        h1.textContent = 'Usuario o contraseña incorrecta'                           //! Metes contenido al h1
        div.appendChild(h1)                                                         //!Si NO cumple, devuelve un FALSE
        return false
    }
}                                                                               // Con login solo NO damos la opcion de //* Volver a intentarlo

//? Registrar el usuario: Pedis los datos, los validas, los guardas dentro de un objeto, y le guardas en el array de los users

function registerUser() {
    alert("Bienvenido le vamos a solicitar sus datos para generar el usuario")
    let firstname = prompt("Ingrese el nombre").toLocaleLowerCase().trim()
    let lastName = prompt("Ingrese su apellido").toLocaleLowerCase().trim()
    let password = prompt("Ingrese la contraseña").toLocaleLowerCase().trim()
    let email = prompt("Ingrese su email").toLocaleLowerCase().trim()

    if (firstname !== "" && lastName !== "" && password !== "" && email !== "") {
        let user = {
            firstname: firstname,
            lastName: lastName,
            password: password,
            email: email,
            cuenta: {
                cbu: Math.floor((Math.random() * 10000)) + 1,
                saldo: 0,
            }
        }
        console.log(user);
        users.push(user)
        alert(`Usuario ${user.firstname} registrado correctamente`)
    }
}


//* Para optimizar el código tenes que hacer funciones que se encarguen de un único objetivo.
//* Delegacion de responsabilidades: si una funcion que tiene muchas lineas se rompe, en una, se rompe todo el programa.
// En el ejemplo del login tendria que encargarse del logeo unicamente, y la interaccion con el html podria ser en otra funcion

//? 2. Información de la cuenta: Mostrar información relevante de la cuenta de usuario, como el saldo disponible, el numero de cuenta, el nombre del titular, etc.
//? registr 

//*Ofrecemos un menu de opciones*/

let optionInicio = prompt("Bienvenido al home banking, que desea hacer \n 1- iniciar sesion \n 2-registrese \n 3-salir")

let userName;
let userPassword;
let validate;
let confirmValidate;

// Mientras la opcion sea distinta de 3 (SALIR), se va a ejcutar el switch
while (optionInicio != '3') {
    switch (optionInicio) {
        case '1':
            userName = prompt("Ingresar tu nombre").toLocaleLowerCase().trim();
            userPassword = prompt("Ingresar contraseña");
            confirmValidate = login();
            break;
        case '2':
            registerUser()
            break;

        default:
            break;
    }

    if (confirmValidate == true) {
        break
    }

    // Sin esto, se entraria en un loop infinito
    optionInicio = prompt("Bienvenido al home banking, que desea hacer? \n 1- iniciar sesion \n 2-registrese \n 3-salir")
}


//? 3 Consulta de movimientos: permitit a los usuarios ver los movimientos de su cuenta como transacciones, depositos, retiros, pagos. etc.
//? 4. Transferecias: Permitir a los usarios realizar transferencias de dinero entre sus cuentas o cuentas de terceros
//? 5. Pagos de servicio: Permiti a los usuarios pagar servicios como facturas de luz, agua telefono, etc. 