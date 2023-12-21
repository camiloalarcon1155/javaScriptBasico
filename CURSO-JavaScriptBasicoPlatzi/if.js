// EJERCICIO PIEDRA, PAPEL O TIJERA.


// GENERAR VARIABLES

// GENERAR FUNCION SOBRE CON QUE VOY A JUGAR Y ME GENRE LA VALIDACION Y ME REGRESE COMO RESULTADO SI GANE O PERDI



var piedra, papel, tijera; // primero definir variables


function validacionPPP(parametro) {
      
    
    //var parametro = opcion.toLowerCase(); // Convierte la opción a minúsculas para hacer la comparación más flexible
    

      if (parametro === piedra) {
         piedra = "piedra";
    } else if (parametro === papel) {
         papel = "papel";
    } else if (parametro === tijera) { 
         tijera = "tijera";
    }

    //generamos un numero aleatorio entre 1 y 3 para escoger una opcion de piedra, papel o tijera:

    var numeroAleatorio = Math.floor(Math.random() * 3) + 1;  

    if (numeroAleatorio === 1) {
        var enemigo = "piedra";
    } else if (numeroAleatorio === 2) { 
        enemigo = "papel";
    } else {
        enemigo = "tijera";
    }

    //ahora hacemos la validacion:


    if ((parametro === "piedra" && enemigo === "tijera") ||
        (parametro === "papel" && enemigo === "piedra") ||
        (parametro === "tijera" && enemigo === "papel")) {
        console.log("IF. el enemigo escogió " + enemigo)
        return ("IF HAS GANADO");
    } else if (parametro === enemigo ) {
        console.log("ELSE IF. el enemigo escogió " + enemigo)
        return ("ELSE IF. HAS EMPATADO CON el enemigo");
    }else {
        console.log("ELSE. el enemigo escogió " + enemigo)
        return ("ELSE. TE GANO el enemigo");
    }

}



// esto fue lo primero que hice para entender como hacer funcion de piedra, papel o tijeras
function validacionPPP(parametro) {
    ///
    var enemigo = Math.floor(Math.random() * 3) + 1;  

    // piedra = 1
    // papel = 2
    // tijera = 3
    
    if ((parametro === 1 && enemigo === 3) || (parametro === 2 && enemigo === 1) || (parametro === 3 && enemigo === 2)) {
        console.log("el enemigo escogió " + enemigo)
        return ("jugador gana");
    } else if ((enemigo === 1 && parametro === 3) || (enemigo === 2 && parametro === 1) || (enemigo === 3 && parametro === 2)) {
        console.log("el enemigo escogió " + enemigo)
        return ("enemigo gana gana");
    } else {
        console.log("el enemigo escogió " + enemigo)
        return ("empataron");
    }
}

/// quedo bien hecho, pero esta es la forma como lo hizo chat gtp:

function validacionPPP(parametro) {
    // Generamos un número aleatorio entre 1 y 3 para la opción del enemigo
    var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    var enemigo;

    // Asignamos la opción del enemigo según el número aleatorio
    switch (numeroAleatorio) {
        case 1:
            enemigo = "piedra";
            break;
        case 2:
            enemigo = "papel";
            break;
        case 3:
            enemigo = "tijera";
            break;
    }

    console.log("El enemigo escogió " + enemigo);

    // Hacemos la validación
    if ((parametro === "piedra" && enemigo === "tijera") ||
        (parametro === "papel" && enemigo === "piedra") ||
        (parametro === "tijera" && enemigo === "papel")) {
        console.log("IF. Has ganado. El enemigo escogió " + enemigo);
        return "Has ganado";
    } else if (parametro === enemigo) {
        console.log("ELSE IF. Has empatado. El enemigo escogió " + enemigo);
        return "Has empatado con el enemigo";
    } else {
        console.log("ELSE. Te ganó el enemigo. El enemigo escogió " + enemigo);
        return "Te ganó el enemigo";
    }
}

// Ejemplo de uso:
console.log(validacionPPP("piedra")); // tambien se puede llamar 

//y eso fue todo