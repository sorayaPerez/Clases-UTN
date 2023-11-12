import React, { useEffect, useState  } from 'react'


// Cuando se monta el componente hace el fetch, recibimos todo, seteamos el personaje se guarda en el estado const [personaje, setPersonaje] = useState({}) 
// y aca  se valida <h1> Nombre: {personaje.name} </h1>        }

function EjemploUseEffect() {

    const [personaje, setPersonaje] = useState({})



    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto') //Promesa
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => setPersonaje (data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {
                personaje.name === undefined ? "cargando...":
                <h1> Nombre: {personaje.name} </h1>        }
        
        <input type="text" placeholder='' />
        
        </div>
    )
}

export default EjemploUseEffect