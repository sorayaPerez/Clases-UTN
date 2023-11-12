import './App.css'
import Saludo from './components/saludo/Saludo'

//useState es un hook, que es una herramienta o una funcionalidad que sirve para controlar un estado de un componente.
// Un estado es un valor, puede tener un valor inicial. En este caso es 0
// El useState nos da una funcion para modificar ese estado y que se re renderice
// el componente con el nuevo estado

// count = valor del estado
// setCount = funcion que actualiza el estado

// La actualizacion se puede hacer por ejemplo con un EVENTO:
//   <button onClick={() => setCount((count) => count + 1)}>
//   count is {count}
//   </button>

function App() {

  return (
    <>
      <h1> Top de artistas musicales </h1>
      <Saludo nombre={'Pablo Picasso'} nacionalidad={'Español'} estilo={'Cubismo'} />
      <Saludo nombre={'Pablo Picasso'} nacionalidad={'Español'} estilo={'Cubismo'} />
      <Saludo nombre={'Pablo Picasso'} nacionalidad={'Español'} estilo={'Cubismo'} />


    </>
  )
}

export default App
