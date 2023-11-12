import React from 'react';
import './Saludo.css'
// var artistas = [
//   {
//   nombre: "Picasso",
//   estilo:"Cubismo",
//   nacionalidad:"Español"
// },
// {
//   nombre: "Vincent van Gogh",
//   estilo:"Postimpreionismo",
//   nacionalidad:"Holandes"
// },
// {
//   nombre: "Leo da vinci",
//   estilo:"Renacimiento",
//   nacionalidad:"Italiano"
// }
// ]

/* Al ponerle {} lo interpreta como variables */
// Al poner nombre, nacionalidad, estilo desestrucutras el objetoS.
const Saludo = ({nombre,nacionalidad,estilo,img}) => {
  return (
    <div className='card'>
      <div>
        <h2>Nombre del artista: {nombre}  </h2> 
        <h3>Estilo: {estilo} </h3>
        <h3>Nacionalidad: {nacionalidad} </h3>
      </div>


    </div>
  );
}

export default Saludo;

