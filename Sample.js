console.log("Hola");

console.log("Chau");

const a = 5;


let x= 4;
var y = 3;  //Let is similar to var but let is recommended unless you rellay needo to use var

(function SampleFuntion(){
    console.log("Some log");
})

console.log( 'suma incorrecta: ' + x + y);
console.log( 'suma correcta :' +(x+y));
let z =  x +y;

console.log( 'suma correcta :' + z);
console.log ("tipo de datos de x es : "+ typeof x);

let boolValue = true;

console.log ("tipo de datos de boolValue es : "+ typeof boolValue);

let variableIndefinida;

console.log ("tipo de datos de variableIndefinida es : "+ typeof variableIndefinida);

let notNumber = isNaN(boolValue);

console.log(notNumber);

console.log(y);
notNumber = isNaN(y);
console.log(notNumber);

notNumber = isNaN('Hola');
console.log(notNumber);
