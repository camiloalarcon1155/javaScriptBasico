//Aqui va el anterior ejercicio pero con switch:


var piedra, papel, tijera; // primero definir variables
var enemigo;

function validacionPPP(parametro) {
      
    
    //var parametro = opcion.toLowerCase(); // Convierte la opción a minúsculas para hacer la comparación más flexible
    

    switch (parametro) { 
        case piedra: 
            piedra = "piedra";
            break;
        case papel:
            papel = "papel";
            break;
        case tijera:
            tijera = "tijera";
            break;
        default: 
            console.log("Debes poner una opcion adecuada")
    }

    //generamos un numero aleatorio entre 1 y 3 para escoger una opcion de piedra, papel o tijera:

    var numeroAleatorio = Math.floor(Math.random() * 3) + 1;  

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


//ejercicio de platzi:


export function solution(article) {
    var parametro = article.toLowerCase();
  switch (parametro) {
    case "computadora":
      console.log("Con mi computadora puedo programar usando JavaScript");
      break;
    case "celular":
      console.log("En mi celular puedo aprender usando la app de Platzi");
      break;
    case "cable":
      console.log("C¡Hay un cable en mi bota!");
      break;
    default:
      console.log("Artículo no encontrado")
    }
}