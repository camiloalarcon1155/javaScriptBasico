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

