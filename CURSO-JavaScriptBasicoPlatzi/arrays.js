// en este ejercicio:

/* En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

Input

solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

Output

true
false */

// esta fue mi solocion:

export function solution(arraySecreto) {
  // Tu código aquí 👈

  if ((typeof arraySecreto[0]) == 'string') {
    return true
  } else {
    return false;
  }
}

// esta fue la solucion de un sabiondo:

export function solution(arraySecreto) {
  return(typeof arraySecreto[0] === "string"? true: false)
}
