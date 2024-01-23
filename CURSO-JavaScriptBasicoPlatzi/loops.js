
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
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; //**le das el arreglo**

function saludarEstudiante(estudiante){ //**generas la funcion**
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiante(estudiante)//**llamas a la funcion con el loop**
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

