
// esta es una forma de loop:

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    //console.log(estudiantes[i]);
    saludarEstudiante(estudiantes[i]);
}

// lo que hace es ir recooriendo i desde 0 hasta que sea 3 que es menor a  4 que es la cantidad de estudiantes + 1, y luego usa la funcion para saludarlo


// esta es otra forma de loop:
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiante(estudiante)
}
// esto se entiende asi: en el array estamos hablando en plural de mas de una ersona y le estamos pasando el singular (estudiante) y ya le llamamos la funcion.

// en ultimas hay dos formas de loops, con una variable i y con for of que es con singular o plural



// esta es una forma usando WHILE:

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(){
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) { // mientras lo que este entre parentesis sea verdad, lo que este dentro va a seguir corriendo
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}// LO QUE hace es ir saludando a cada estudiante y mientras lo hace, con shift va sacando elementos del arreglo, hasta que la cantidad de elementos es igual a 0 y al ya no cumplirse la la condicion del while, termina el proceso

//////////////////


😎🤞👇

//Aqui viene un ejercicio  para usar loops:

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


export function solution(estudiantes, deathCount, nuevo) {

    if (deathCount === Number){
        
        switch (deathCount) {
            case deathCount === 0:
                console.log("es igual que 0");
                break;
            case deathCount > 0:
                console.log("es mayor o igual que 0");
                break;
        }
    } else {
        return("error, debes poner un numero entero");
    }
}
