VALORES PRIMITIVOS:
40
"camilo alarcon" /* cadenas de texto */

true false /* valor booleaano */

null
unidentified /*  */

VALORES NO PREMITIVOS(TIPO objeto):

[1, 2, 3]
{nombre: "Camilo"}

//

var nombre = "oscar";

/* aqui declaramos (le pedimos a la memoria que nos reserve un espacio en memoria) un a varable: */

var edad;

/* aghora vamos a inicializarla: */
edad
edad = 30;

edad

var elementos = ["computadora", "celular"]; /* esta s una variable de arreglo(conjubt de elementos) */

var persona = {
    nombre: "CAMILO",
    edad: 30
}

persona;

/////////////
/* 
FUNCIONES: hay funciones declarativas y funciones de expresion */

/* declarativas */

function miFunction() {
    return 3;
} /* la funcion va a guradar ciertos valore, calculos o acciones dentro de la funcion */

/* expresion */

var miFunction = function (a,b) {
    return a + b;
} /* LAS FUNCIONES NECESITAN PARAMETROS que estoy esperando recibir cmo valor para ejecutar el proceso dentro */

miFunction(); /* ambas se mandan a llamar igual */

//en consola*:
function saludarEstudiantes(estudiante) {
      console.log(`hola perro ${estudiante}`);    
}

//luego lo llamamos asi:

saludarEstudiantes("Camilo"); /* aqui le envie el parametro que necesita la funcion para ejecutarse */

/* Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

Expresión de función:
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar. */


///////////////////////////////

🍀SCOPE

scope global y scope local


scope global:/*  depende de donde declare e inicialize una variable. */

scope local./*  es un pqueño universo dentro del scope global */
/* 
desde el scope local se puede acceder a las variables que estan en el scope global. pero desde e scope global no puedo acceder a las variables que estan en el scope LOCAL */


var miNombre = "camilo"; 

function nombre() {
    var miApellido = "Alarcon de los angeles";
    console.log("mi fabuloso nombre es " + miNombre + " " + miApellido);
}/* ahora llamo a la funcion */

nombre(); /* y ya deberia darme el nombre con la frase */

miApellido /* si llamo esta variable desde el scope global no puedo acceder, por que esta en el scope local en la funcion */




///////////////////////////////////

🎶hoistng /* 
sucede cuando se declaran variables y funciones al  inicio del codigo, antes de que se ejecute cualquier linea de codigo.  */
/* 
hoisting es diferente a hosting, hosting es pagar un DOMInio */

console.log(miNombre);
var miNombre = "Camilo";/* coo no esta declarada la varibale al prncipio, enonces el la declara y la deja undefined, por eso asi ya la inicialices despues, entonces te da undefined. */


var miNombre = undefined;
console.log(miNombre +  " soy ese hoisting");
miNombre = "CAMILOSY"

/* AQUI ME imprime el mensaje:  */

undefined soy ese hoisting /* por que esta declarada como indefinida, asi es como funciona en realidad internamente */


////////////////////////
COERCION //
/* 
2 TIPOS: implicitas: el lenguaje nos ayuda a cambiar de un tipo de valor a otro tipo de valor, de un valor tipo numero a otro tipo string o vicerversa.
EXPLICITAS: obligamos a que un valor de un tipo cambie a otro valor de otro tipo, si lo necesitmaos */

// ejemplo coecion implicita. sii creo:
var a = 4 + "7";
/* el tipo de dato de la variable a nos da tipo estring por que el lenguaje asume que es una concatenacion por el + que se pone, uniendo el 7 tipo string con el otro valor, por eso siemplemente los une como tipo cadena */
// ahora, si ponermos:
var b = 4 * "7"; /* el lenguaje asume que aqui si no quieres unir como tipo cadena, si no como tipo numero para hacer la multiplicacion. y por eso el valor de b es tipo numerico y el resultado es 28 */

COERCION EXPLICITA:

//si tengo una variable a

a = 20;

//y quiero pasarlo a tipo estring directamnet sin concatenar :

c = String(a);  /* y ya queda como tipo de dato string */

//y para hacer lo contrario:
var d = Number(c); 

/* 
sirve cuando recibo un dato como tipo string y debo pasarl a tipo numro, aqui me sirve */



////////////////////////////
🔥VALORES: TRUTHY Y FALSE
/* 
SE ocupa esto cuando hagamos condiciones en java script. aprendemos que valore s por default son verdaderos y cuales son falsos */

Boolean(0):
// 0 es falso
//null es falso
// NaN es falso
// undefined es falso
// FALSE es falso
// "" es falso

Boolean("a");
Boolean(1);
Boolean(function () { });
Boolean(true);
/* todos los anteriores son verdaderos */



//////////////////////////////
😒OPERADORES:

20 / 2 // operadores binarios, por que es un operador gererando algo entre 2 variables


// si tengo :

"camilo " + " alarcon" /* tiene 2 valores y solo los junta */

!false // el resultado es verdadro, ! me niega algo

var a = 1; // a inicialida con 1, este = nos ayuda a asiganar valores.

//si tenemos: 
3 == "3"; // estamos es comparando  el valor, no el tipo, nos debe generar verdadero
// ahora, si tenemos :
3 === "3", // nos debe generar falso, por que compara el valor y el tipo de dato.
    
5 < 3 //es false
5 > 3 // debe dar verdadero
5 <= 3 // debe DAR VERdadro por que es uno o el otro
a && b // deben cumplirse ambas para ser verdadero
a || b // si una o la otra se cumple, entonces dara verdadero
// si tengo:
var edad = 40
edad++ /* me aumentara la edad a 41, si quiero que aumente 2 entonces: */
edad += 2;


/* hicimos este ejercicio: 

En este desafío vas a recibir un parámetro secreto en la función solution. Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.

Input

solution(1)
solution(5)
solution(10)

Output

false
false
true*/

// esta fue mi solucion:
export function solution(secreto) {
  var a = secreto;
  var b = 5;
  if (a <= b) {
      return false
  }
  else {
    return true
  }
} /* estuvo bien, pero  */
// esta la hizo otra persona:

export function solution(secreto) {
  return !(secreto <= 5);
} //fue super corta











    












