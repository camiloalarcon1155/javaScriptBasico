/* En este desafío tu función solution recibirá 3 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

Ejemplo 1:

El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi". Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.

// Input
solution(["Nico", "Zule"], 0, "Santi")

// Output
["Nico", "Zule", "Santi"]

Ejemplo 2:

El array estudiantes contiene los elementos "Juan". "Juanita" y "Daniela". El número deathCount es igual a 1. Y el nuevo estudiante es "Julian". Al deathCount ser igual a 1, el último elemento del array de estudiantes ("Daniela") se debe ir. Y agregamos "Julian" al final.

// Input
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")

// Output
["Juan", "Juanita", "Julian"]

Ejemplo 3:

El array estudiantes contiene los elementos "Nath". "Luisa" y "Noru". El número deathCount es igual a 2. Y el nuevo estudiante es "Cami". Al deathCount ser igual a 2, los últimos 2 elementos del array de estudiantes ("Luisa" y "Noru") se deben ir. Y agregamos "Cami" al final.

// Input
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

// Output
["Nath", "Cami"] */


😉😉😉😉😉😉😉😉😉 // mi primera solución fue esta://


var estudiante = [];
var deathCount;
var nuevo;
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
/* 
function solution(estudiante, deathCount, nuevo){
    if (deathCount == 0) {
        estudiante.push(nuevo);
        console.log(estudiante)
    } else if (deathCount == 1) {
        estudiante.pop(estudiante[estudiante.length -1])
        estudiante.push(nuevo);
        console.log(estudiante)
    } else if (deathCount == 2) { 
        estudiante.splice(-deathCount);  // Elimina los últimos dos elementos
        estudiante.push(nuevo);
        console.log(estudiante)
    } else {
        console.log("debe ser un numero entre")
    }
      
}
 */

😉😉😉😉😉😉😉😉😉 // mi segunda solución fue esta(deje las mismas variables de arriba)://



function solution(estudiante, deathCount, nuevo){
    if (deathCount == 0) {
        estudiante.push(nuevo);
        console.log(estudiante)
    } else if (deathCount > 0) {
        //estudiante.pop(estudiante[estudiante.length -deathCount])
        estudiante.splice(-deathCount);  // splice Elimina cantidad de estudiantes + de 1
        estudiante.push(nuevo);
        console.log(estudiante)
    } else {
        console.log("debe ser un numero entero")
    }
}

😉😉😉😉😉😉😉😉😉 // la  solución de un sabiondo://


export functionsolution(estudiantes, deathCount, nuevo) {
    for (deathCount; deathCount > 0; deathCount--) { //si viene un 2 en deathCount, hace la primera iteraccion y borra un elemento y si sigue siendo mayor que 0, hace otra iteraccion y borra otro elemento de estudiantes y ahora ya es 1, pero ya no se cumple la condicion, ose aque se queda hasta ahi y luego solo adiciona otro 
      estudiantes.pop();
    }
    estudiantes.push(nuevo);
    return estudiantes;
}
  