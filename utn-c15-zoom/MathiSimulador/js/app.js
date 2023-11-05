// ** Variables
let form = document.getElementById('form_login')
let userName = document.getElementById('username')
let password = document.getElementById('password')

//Array de objetos
const users = [ //array 
    // TODO hacer un alias
    { //objeto
        firstName: 'carlos',
        lastName: 'gonzalez',
        password: '1234',
        email: 'carlos@gonzalez.com',
        cuenta: {
            cbu: 4364,
            alias: '',
            saldo: 0
        }
    },
    { //objeto
        firstName: 'pepe',
        lastName: 'fernandez',
        password: 'soypepito',
        email: 'pepe@fernandez.com',
        cuenta: {
            cbu: 2233,
            alias: '',
            saldo: 0
        }
    },
]

console.log(form);
console.dir(userName);  //Podemos ver todas las propiedades del elemento HTML
console.log(password);

// ** Funciones 
function login(username, password) {
//                      metodo
    let findUser = users.find(u => u.firstName === username)
    // if ((userName === user[].firstName) && (userPassword === user.password))

    if (findUser !== undefined && findUser.password === password) {

        console.log('Bienvenido: ' + username)
        return true
    } else {
        // let h1 = document.createElement('h1');
        // console.dir(h1);
        // h1.textContent = 'No estas registrado';
        // h1.style.color = 'red'
        // div.appendChild(h1);
        return false
    }

}

// OPCION 1
// function submitForm(params) {

// }

// form.addEventListener('submit', submitForm )


// OPCION 2: funcion anonima 
// form.addEventListener('submit', function(){

// } )



// ** Ejecucion programa principal 

//|agregas evento al form| (evento=submit , (funcion que se ejecuta al realizar el evento=submit) opcion 1, opcion 2 o opcion 3 (fn flecha)
form.addEventListener('submit', (event) => { 
    event.preventDefault() //Prevenis que se recargue la pagina al accionar el submit
    // console.log(event); //Info del objeto EVENTO
    console.log(event.target);
    console.log(userName.value); //Ves el valor que ingresa despues de accionar el submit. Value es el valor que toma el input.
    let user = userName.value   // Capturas los datos del input. Ahora no es necesario el prompt
    let pass = password.value   // Capturas los datos del input.Ahora no es necesario el prompt
    let validate = login(user, pass)
    if (validate == true) { //si esta registrado
        window.location = '../index.html' // Redireccionas la pagina
    }
    form.reset() // Se limpian los campos
})


// console.log(event); Info del objeto EVENTO
//* SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form#form_login, currentTarget: form#form_login, …}
// Podes ver que fue el boton, el tipo de evento "submit" etc