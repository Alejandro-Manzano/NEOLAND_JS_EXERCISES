//En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 3.

const animals = [ "Rintintín", "Cosmo", "Gato con botas", "Asno"];

let acc = 0;
for(let i=0; i<animals.length; i++){
    
    word = animals[i];

        for(let j=0; j<word.length; j++){

           (word[j] == "a" ||  word[j] == "A") && acc++
           
        }
     
}
console.log(`La letras a se repite ${acc} veces`);