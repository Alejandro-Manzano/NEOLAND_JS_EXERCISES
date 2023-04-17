/* Crea una función que reciba por parámetro un array y cuando es un valor number 

lo sume y de lo contrario cuente la longitud del string y lo sume. 

Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let sumaNumber = 0;
  

  for (let i=0; i<param.length; i++){

   /*  if (typeof(mixedElements[i]) === "number"){
        sumaNumber += mixedElements[i];
    }
    else sumaNumber += mixedElements[i].length; */

    (typeof(param[i]) === "number") ? sumaNumber += param[i] : sumaNumber += param[i].length;

  }
  return sumaNumber;

  
}

console.log(averageWord(mixedElements));