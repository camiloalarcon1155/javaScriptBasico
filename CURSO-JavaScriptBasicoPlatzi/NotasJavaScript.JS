VALORES PRIMITIVOS:
40
"camilo alarcon" /* cadenas de texto */

true false /* valor booleaano */

null
unidentified /*  */

VALORES NO PRMITIVOS(TIPO objeto):

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
var miNombre = "Camilo";/* como no esta declarada la varibale al prncipio, enonces el la declara y la deja undefined, por eso asi ya la inicialices despues, entonces te da undefined. */


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

//////////////////////////
CONDICIONALES 
IF 

var edad = 18;

if (edad === 18) {
    console.log("puedes votar, sera tu primera vez")
} else if (edad > 18) { 
    console.log("vota de nuevo")
} else {
    console.log("ten fe, un dia votaras")                                           
} // es la forma de hacer un cndicional if

// ahora tenenmos operador ternario:

condition ? true : false;

// ejemplo:

var numero = 1;
//quieo validar que ese numero sea true

var resultado = numero === 1 ? "si sou un uno" : "no soy un uno" ;    

//luego imprimo resultado

console.log(resultado);

🔥 SWITCH:
// EL BREAk ES IMPORTATE PARA QUE NO VALIDE TODOS LOS CASOS


var numero = 1;

switch (numero) {// sirve para validar casos, no si se cumple o no, como en el if
    case 1:
        console.log("soy un uno");
        break; //sirve para que no salte al siguiente caso
    case 10:
        console.log("soy un 10");
        break;
    case 100:
        console.log("soy un 100");
        break;
    default:
        console.log("no soy nada"); // por si no se cumple ninguno d elos anteriores casos
} 



/////
😍 ARREGLOS

// es una forma de formar estructura de datos
// es una lista de datos.
// se pueden guardar inclusive objetos.

    var frutas = ["Manzana", "Platano", "Cereza", "fresa"]; // para acceder a este arreglo, se hace atravez de la variable.

// si estuvieramos en la consola del navegador usariaos esto:

console.log(frutas); //

// como saber si un elemento tienen elementos adentro si yo no lo cree

console.log(frutas.length); // asi se su longitud

console.log(frutas[2]); // para accceder a las posiciones del arreglo.

recordar: // siempre los arreglos inician desde posicon 0.



var masFrutas = frutas.push("uvas") // hace que se empujen mas datos denro del arreglo


// para borrar un ultimo elemento de m array

var ultimo = frutas.pop("uvas"); //me borro el elemento "uvas"

var nuevaLongitud = frutas.unshift("Peras");// la diferencia con push es que aqui se ingresa de primero

var borrarFruta = frutas.shift("Peras");//borra primer elemento.

var posicion = frutas.indexOf("Cereza"); //nos va a ayudar a ver la posicion del elemnto que le enviemos. ahora llamo la poscion:

posicion // aqui ya nos arrojara la posicion Cereza



❤ LOOPS. CICLOS

// vamos a generar una funcion, y  miemtras a dentro de este lopp se cumpla una condicion o hasta que se rompa, el loop seguira haciendo su recorrido.

loops.
// en ultimas hay dos formas de loops, con una variable i y con for of que es con singular o plural


🌫LOOPS. WHILE

//// mientras lo que este entre parentesis sea verdad, lo que este dentro va a seguir corriendo


🔥🔥🔥🔥🔥🔥🔥🔥OBJETOS

//JAVA SCRIP DISEÑADO EN PARADIGAM DE OBJETOS

//es cm llevamos este mundo de objetos a un paradigma de objetos en java script

//carro, tiene MediaStreamTrack, modelo, año de fabricacion. tiene llantas, puertas, etc

//para escribir un objeto en java script

var miAuto = {
    //los objetos se manejan con propiedades(combinacion de palabras clave y valores)
    marca: "Toyota",
    modelo: "Corola",
    annio: 2014 //tengo un obeto con 3 proiedades
};


//para acceder al objeto ponemos solo miAuto

//Para acceder a las propiedades del objeto:

miAuto.marca
miAuto.annio

//tabien se pueden generar funciones como propiedade del objetto. se llaman metodos de objetos.

//ejemplo:

var miAuto = {
    //los objetos se manejan con propiedades(combinacion de palabras clave y valores)
    marca: "Toyota",
    modelo: "Corola",
    annio: 2014, //tengo un obeto con 3 proiedades
    detalleDelAuto: function (){ //esto es un metodo...una ffuncion que imprime en consola
        console.log(`Auto ${this.modelo}  ${this.annio}`) //el this es una variable que hace referencia a su objeto. la forma de leerlo es this es mi auto.modelo, me va a taer el valor Toyota. el this hace referencia al mismo objeto. hay otros this, buscarlos...
    }
};

//para ingresar a este metodo:
miAuto.detalleDelAuto();

// i quisiera generar ejemplo 30 objetos 30, 50 carros y quiero pasarlos a objetos, que hacer?

//UNA FUNCION CONSTRUCTORA: Se genera un template de un objeto en donde vamos a generar ciertas opciones que son sus parametros y sus propiedades y despues vamos a poder hacer nuevas instancias con un operador especial.


function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// ya tenemos nuestra plantilla, ahora vamos a crear un objeto de ese template o plantilla. usaremos un operador llamado new, lo qu eva a hacer es generar una nueva istancia de nuestra funcion constructora y una instancia es generar un objeto que deriva de otro objeto.

var autoNuevo = new auto("Tesla", "Model 3", 2020); // es la forma de generar un nuevo objeto que va a ser autoNuevo, con relacion al template que hemos construido de esta funcion constructra. aqui ya llenamos la informacion de un auto.

var autoNuevo2 = new auto("NIISSAN","MODEL X", 2020);

var autoNuevo3 = new auto("ERRNO","MODEL PER", 2023);

//nos pone a hacer un loop donde se pueda ir llenando esta informacion de forma menos manual y mas auotomatica.

//sta es mi idea:


function carro(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio; 
}

//var carroNuevo = new carro("renault", "toyota", 2024);


function listarAutos(marcas, modelos, annios) {
    var cantidadAutos = [];
    for(var i = 0; i < 30; i++){
        //var carroNuevo = new carro(marcas[i], modelos[i], annios[i]);
        var carroN = new carro(marcas, modelos, annios);
        var carroNuevo = carroN[i];
        cantidadAutos.push(carroNuevo);
        return cantidadAutos;
}
}

var marcas = "RENAULT";
var modelos = "MODELOONE";
var annios = "2001";

var sumandoAutos = listarAutos(marcas, modelos, 2024)
console.log(sumandoAutos)





for(var i = 0; i < 30; i++){
    listarAutos[i](marca[i], modelo[i], annio[i])
}

console.log(listaDeAutos);