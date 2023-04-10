/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  

Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

 const repeatCounter = (array) => {
    
    for(let i=0; i<array.length; i++){

        let acc = 0;

        for(let x=0; x<array.length; x++){

            if(counterWords[i] === counterWords [x]){

                acc += 1;

            }

        }
        if(acc > 1){
            console.log((counterWords[i]+ " se repite " +acc+ " veces")); 
        }else console.log(counterWords[i]+ " no se repite");
        
    }

  }

 repeatCounter(counterWords);