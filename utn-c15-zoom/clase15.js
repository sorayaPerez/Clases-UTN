// Funcion constructora
// Podes crear distintos objetos a partir de esa clase. En otros lenguajes se permite la herencia
function persona(nombre,apellido,edad,ciudad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.ciudad =ciudad;
}

// Podes crear otras personas usando la funcion constructora
const persona1 = new persona("Juan","Perez",30,"Buenos Aires")
const persona2 = new persona("Luis","Perez",35,"Buenos Aires")

console.log(persona1);
console.log(persona2);

//*********************************** Codigo Asincron */

function hacerAlgo(resultado){
    // El algo se cumple, si no cumple la condicion (no sabes cuando se va a cumplir por eso es asincrono. Es una request)
    return new Promise ((resolve1,resolve2) =>{
        
        setTimeout(() => {
            if(resultado){
                resolve1("Operacion exitosa")
            }
            else{
                resolve2("Error")
            }
        },2000);
    })
}

hacerAlgo(true)
.then((mensaje)=>{
    console.log(mensaje);
})