console.log(miNombre)
var miNombre = "Camilo";/* imprime como undefined */

//este es un eemplo para funciones
hey();

function hey() {
    console.log("perra " + miNombre)
}/* estoy llamando a la funcion antes de inicializarla */

/* esto me causara que me imprima la frase "perra undefinided", por que si ejecutara la funcion y si se puede ejecutar funciones antes de declararlas, siempre y cuando se haya declarado las variables de dicha funcion, antes ejecutar la funcion. si no nos dara undefinided. cuando se esta ejecutando y encuentra un una funcion para ejecutar, sin haberla declarado, este la lleva al principio y la declara*/




