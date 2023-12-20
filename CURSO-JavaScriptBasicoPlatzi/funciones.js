/* declarativas */

function miFuncion() {
    return 3;
} /* la funcion va a guradar ciertos valore, calculos o acciones dentro de la funcion */

/* expresion */

var miFuncion = function (a,b) {
    return a + b;
} /* LAS FUNCIONES NECESITAN PARAMETROS que estoy esperando recibir cmo valor para ejecutar el proceso dentro. este tipo de funcionn tambien se suele llmar anonima, por que estoy generando una variable que tiene como valor una funcion */

miFuncion(); /* ambas se mandan a llamar igual */

function sumar (a,b) {
    var resultado = a + b; return resultado;   
} /* luego llamo a la funcion con los 2 parametros que quiero que trabaje */

sumar(1, 5) /* y ya seberia hacer */

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


