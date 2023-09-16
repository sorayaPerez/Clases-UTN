// Objeto perosona
class Persona{
    constructor(name,age){  //this hace referencia al objeto, en este caso la clase
        this.name = name;
        this.age = age;
    }


//Instancia Persona
// Ingreasas a c/u de las propiedades que tiene el objeto 
getInfo(){
    return `Name: ${this.name}, Age:${this.age}`;
}
}

// Instancia que tiene propiedades y metodos
const persona0= new Persona("Juan",30)
console.log(persona0.getInfo());

// Extension de la persona
class Student extends Persona{            //Le agregas ademas que es un Studiante ()
    constructor(name, age , curse){
        super(name,age)   // super pasa los argumentos que vos usas
        this.student = student
        // Podriamos agregar un nuevo metodo para estudiante o una propiedad
    }
}

