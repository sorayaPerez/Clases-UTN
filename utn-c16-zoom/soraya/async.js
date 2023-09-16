// Se ejecuta el codigo recien cuando se cumpla la request, como es una promesa no sabes cuando se cumple
// Asincrona que cuando se cumpla la funcion, recien ahi se ejecuta el codigo
async function obtenerDatosJson (url){
    try{
        const response = await fetch(url);
        const datosJson = await response.json();
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