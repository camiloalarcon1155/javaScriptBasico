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


