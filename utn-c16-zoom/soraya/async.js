//?============================= ASYNC-AWAIT         PDF

// Este conjunto de palabras nos sirve para generar una asincronia, donde la palabra ASYNC se ubica al inicio de la funcion indicando que la funcion a continuacion sera asincronica.

// Por su parte ,la palabra AWAIT se ubicara delante de la accion que se deba esperar a que culmine para poder proceder con los demas pasos

// Este tipo de estructura nos permite que el programa aguarde a la finalizacion de un proceso para proceder con el siguiente y es muy utilizado al momento de hacer llamados a APIs externas (Application Programming Interface, interfaz que nos probee un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones.) 


let ejemplo = async()=>{
    let ejemplo = await accionAResolverEnMinutos(20);
    return JSON.parse(ejemplo)
};
ejemplo()

// En este ejemplo la funcion aguardara a que se termine de ejecutar 
// accionAResolverEnMinutos() , para luego parsear el JSON y devolverlo.

// Con esto, la funcion accionAResolverEnMinutos() que requiere de unos minutos para 
// terminar su ejecucion , puede darnos una respuesta que necesitamos para luego 
// manipularla; caso contrario nos devolvera undefined ya que no podra terminar de 
// ejecutarla y querra continuar con el proceso.


//?============================================ FETCH 

// Fetch es una función disponible en JavaScript que forma parte de las promesas.

// Esta funcion va a recibir como parametro un llamado a un recurso de la red, devolviendo 
// una promesa que se cumple una vez que la respuesta está disponible.

// Como vimos en las promesas haremos uso de los metodos para poder manipular y 
// realizar las funciones callback dependiendo de la resolucion de la promesa

function ejemplo(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data=>  console.log(data))
    .catch(error => console.log)
}

// En el siguiente ejemplo podemos ver que estamos utilizando la funcion fetch() en donde 
// hacemos un llamado a este recurso externo y con los metodos .then() tomamos lo que 
// nos devuelve el llamado, lo analizamos como JSON y devuelve un objeto JavaScript todo 
// esto mediante el metodo json();que luego mostramos por consola.

// Por otra parte, armamos un .catch() para tomar cualquier error que pueda surgir al hacer 
// el llamado a ese recurso y lo mostramos por consola





//? =============================== PROFESOR

// Se ejecuta el codigo recien cuando se cumpla la request, como es una promesa no sabes cuando se cumple
// Asincrona que cuando se cumpla x funcion, recien ahi se ejecuta el codigo
// try catch es para manejo de errores

async function obtenerDatosJson (url){
    try{
        const response = await fetch(url);  // fetch: palabras reservadas para llamar a una api
        const datosJson = await response.json(); // parseas con json
        return datosJson;
    }
    catch (error) {
        console.log('Error al obtener los datos del json', error);
        return null
    }
}


async function mostrarDatosEnConsola (){
    const url = 'https://jsonplaceholder.typicode.com/posts/1'

    const obtenerJson = await obtenerDatosJson (url)

    if (obtenerJson){
        console.log('Datos Json obtenidos');
        console.log(obtenerJson);
    }
}

mostrarDatosEnConsola();

// Datos Json obtenidos
// {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit\n' +
//     'suscipit recusandae consequuntur expedita et cum\n' +        
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'
// }