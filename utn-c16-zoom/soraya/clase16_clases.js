//?  ========================== CLASES =========================

// Una clase es la descripción de una entidad u objeto de forma tal que pueda usarse como MOLDE para crear muchos objetos que respondan a dicha descripción. Esto quiere decir que la clase va a ser un “molde  o planitlla para crear objetos”
// • Esto nos permite crear objetos a partir de la clase ( lo que se llama INSTANCIA de una clase )
// • La clase es única y describe la forma y el comportamiento de los muchos objetos de esa clase
// • Para crearlas utilizamos la palabar class seguido de el nombre de dicha clase ( por convencion se recomienda que el mismo sea en singular y con la primer letra en mayuscula); y luego entre llaves el contenido de la clase :sus comportamientos y caracteristicas


//? Ejemplo PDF

class Animal{
    //                propiedades
    constructor(name,age,weight,color){
        this.nombre = name,
        this.edad = age,
        this.peso = weight,
        this.color= color
    }

    saludar(){
        alert("Hola, soy un animal. Tengo", edad)
    }
}

// Una vez definida a clase, ya podemos empezar a crear nuestros objetos como INSTANCIAS particulares de las clases. De esta forma durante la ejecución de un programa sólo existen los objetos, no las clases 

const unPerro={
    nombre:"Dinamita",
    edad:2,
    peso:25,
    color:"marron"
}

const unGato={
    nombre:"Bigotes",
    edad:5,
    peso:15,
    color:"negro"
}

// Para instanciar una clase ( es decir crear nuestro objeto en base a la clase) utilizamos el operador new que crea una copia de esa clase y nos trae todas las caracteristicas y comportamientos que definimos en la clase, e incluso podemos sumar a estas caracteristicas y propiedades propias de este objeto en particular

const unElefante = new Animal("Trompita",6,1200,"gris")





//? Ejemplo profesor

//* Objeto persona
class Persona{
    constructor(name,age){  //this hace referencia al objeto, en este caso la clase
        this.name = name;
        this.age = age;
    }

getInfo(){ // Ingreasas a c/u de las propiedades que tiene el objeto 
    return `Name: ${this.name}, Age:${this.age}`;
}
}

//* Instancia Persona: tiene propiedades y metodos
//¿Como?        new nombreclase(argumentos)     
const persona0= new Persona("Juan",30)
console.log(persona0.getInfo());

// Extension del objeto persona
class Student extends Persona{            //Le agregas ademas que es un Studiante ()
    constructor(name, age , curse){
        super(name,age)   // super= pasas los argumentos que vos usas
        this.student = student
        // Podriamos agregar un nuevo metodo para estudiante o una propiedad
    }
}

