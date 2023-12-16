
/* CURSO JAVA SCRIPT CON DALTO 

Tipos de datos: 
string = "cadena de texto"
number = 19. si pusiera "19" ya seria una cadena de texto
booleano = 1 o 0, false o verdadero
simbolo: despues lo veremos


casos especiales de datos: undefinided, null, NaN




/* para declarar una variable se declara como :

var, let, const .ejemplo: */

    let numero = 15; /* let solo sirve para uso local, var es general. las variable const no puede cambiar su valor y se debe inicializar si o si cuando se declara */

alert(numero);

let numero1 = 39; numero2 = 23; /* se pueden declaar  asi tambien */

/* ver: 
scope
hoisting
 */

/* podemos poner tambien */
let numero = null; /* la inicializamos a proposito AbortSignal, vacia */

NAN /* sgnifica que no es un numero, cuando intentamos hacer una operacion con algo que no es un numero  */

si hago esto:
let nombre = prompt("hola perra, dame tu nombre")

 prompt(nombre) 

/* comando para pedir informacion y se guardara en esa variable nombre */

alert ("hola " + nombre) /* pido su nombre y luego lo nombo*/



/* Operadores de asignacion (IMG),  */

let numero = 10;
numero += 5;

document.write(numero) /* el += significa que le suma 5 a numero y exiten todas estas funciones con cada operacion */



/* operadores aritmeticos: */

numero1 = 10;
alert(numero1--) /* decremento, pero no estaria bien*/

/* asi estaria bien: */

numero1 = 10;
numero1--
resultado= numero1
alert(resultado)

/////

numero1 = 10;
numero2 = 4;
resultado = numero1 ** 2;
alert(resultado)

///
/* y muchas mas operadores aritmeticos */


✌✌✌✌✌CONCATENACION✌✌✌✌✌✌

ES unir strings

saludo = "!hola pedro!"
pregunta = " ¿como estas?"

frase = saludo + pregunta;


document.write(frase)

si quiero que me una numeros y no me los Sume:

numero1 = 1;
numero2 = 21;

frase = "" + numero1 + numero2; /* s lee al principio el "" tipo cadena, asuuume todo como tipo cadena */


document.write(frase)
/* tambien se puede usar metodo concat */
frase = numero1.concat(numero2);/* pero ahi si numeros deben estar ingresados como tipo string */

/* 
es muy importante la concatenacion.

hay otra forma de concatenacion: */

nombre= "camilo alarcon"

frase = "soy " + nombre + " y estoy caminando";

document.write(frase);

/* se podria escribir AbortSignal, pero la mejor manera seria: */

nombre= "camilo alarcon"

frase = `soy ${nombre} y estoy caminando`;

document.write(frase);

/* muy importantes ese tipo de comillas  */
/* 
si queremos poner comillas dobles en un escrito y ue queden esas comillas, entonces debemos poner comillas simples afuera, funciona igual con los `` */





























































































