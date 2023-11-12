import React, {useState} from 'react'

// Count = el estado del contador
// setCount = funcion para actualizar el estado
// useState = hook
// (0) arranca en 0



const EjemploUseState = () => {

    const [count, setCount]= useState(0)

    //! No se modifica el estado, si no que se ACTUALIZA
    const addCount = () => {
        setCount(count + 1)
    }

    const restCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div>
            <h1> El valor del contador es: {count} </h1>
            <button onClick={addCount} > ↑ cantidad </button>
            <button onClick={restCount} > ↓ cantidad </button>
            <button onClick={resetCount} > 0 cantidad </button>


        </div>
    )
}

export default EjemploUseState