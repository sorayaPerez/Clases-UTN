/******************************** Clase 8 **************************************************/

/******* Variables  ********/

console.log("************************ Variables **********************");
console.log('        ');


let variableLet= "Let"           /* Con = asignas un valor */

var variableVar= "Var"

const variableConst= "Const"


console.log(variableLet);
console.log(variableVar);
console.log(variableConst);

console.log('        ');





/************* Valores que puede tomar una variable */


console.log("****************** Valores ***************");
console.log('        ');

let variable1= "Soy un string"

let variable2= "1 es un number"

let variable3= "true false = booleano"
let vartrue= true
let varfalse=false

let variable4= "NAN = not a number"

let variable5= "Undefined = sin valor"
let sinValor

let variable6= "None"

console.log(variable1);
console.log(variable2);

console.log(variable3);
console.log(vartrue);
console.log(varfalse);


console.log(variable4);

console.log(variable5);
console.log(sinValor);

console.log(variable6);

console.log('        ');



/*************************** Operaciones ******************/

console.log('**************** Operaciones Aritmeticas*********');
console.log('        ');

let suma= 2+2

let resta=2-2

let multiplicacion=2*2

let division=2/2

console.log(suma,resta,multiplicacion,division);

let comparacion= 2 > 4;
console.log(comparacion);

let comparacion1= 2 < 4;
console.log(comparacion1);

let comparacion2= 2 == 2;
console.log(comparacion2);


let comparacion3= 2 != 4; /*Distinto estricto*/ 
console.log(comparacion3);

let comparacion33= 2 !== "4"; /*Distinto no-estricto*/ 
console.log(comparacion3);



console.log('       ');
console.log('Comparaciones de igualdad');

let comparacion22 = 2 =="2";
let comparacion222 = 2 =="dos";
let comparacionEstricta= 2 === "2"; /* Igualdad estricta: concidir valor y tipo de dato*/
let comparacionEstricta1= 2 === "dos";

console.log(comparacion22);
console.log(comparacion222);
console.log(comparacionEstricta);
console.log(comparacionEstricta1);


/********** MODULO */

console.log('*********** Modulo ***********');

let modulo =  10 % 2 /* Es el resto de la division = 0 */
console.log(modulo);


let modulo1 =  10 % 3 /* Es el resto de la division = 1 */
console.log(modulo1);


console.log('*********** Operadores logicos ***********');


let comparacion4 = (2 > 2 ) && ( 2 == 2) /* &&  es Y se tienen que cumplir AMBAS*/ 
console.log(comparacion4);


let comparacion5 = (2 > 2 ) || ( 2 == 2) /* ||  es O se tiene que cumplir 1 SOLA*/ 
console.log(comparacion5);



