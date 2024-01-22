/* 
En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:

Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado".
Input

solution('computadora')
solution('celular')
solution('cable')
solution('ornitorrinco')

Output */


// asi funciona el ejercicio bien en mi html y navegador, sin el export

 /* export  function solution(article) {
    var parametro = article.toLowerCase();
    var objetoEscogido = document.getElementById("resultado")
  switch (parametro) {
    case "computadora":
      //console.log("Con mi computadora puedo programar usando JavaScript");
          objetoEscogido.textContent = "Con mi computadora puedo programar usando JavaScript"
      break;
    case "celular":
      //console.log("En mi celular puedo aprender usando la app de Platzi");
          objetoEscogido.textContent = "En mi celular puedo aprender usando la app de Platzi"
      break;
    case "cable":
      //console.log("C¡Hay un cable en mi bota!");
          objetoEscogido.textContent = "¡Hay un cable en mi bota!"
      break;
    default:
      //console.log("Artículo no encontrado")
          objetoEscogido.textContent = "Artículo no encontrado"
    }
}*/

// ahora, asi debe ir en platzi (con export):

 export function solution(article) {
    //var parametro = article.toLowerCase();
  switch (article) {
    case "computadora":
      return "Con mi computadora puedo programar usando JavaScript";
      //break;
    case "celular":
      return  "En mi celular puedo aprender usando la app de Platzi";
      //break;
    case "cable":
      return "¡Hay un cable en mi bota!";
      //break;
      default:
          return "Artículo no encontrado";
    }
}

// el error era que use console.log, pero era return, aunque con ese export si me sigue apareciendo error en mi navegador