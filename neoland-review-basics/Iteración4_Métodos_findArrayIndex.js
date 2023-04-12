//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición 

//del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    let result = [];
    array.forEach((element, index) => {
        
        if(text == element) {
            result.push({
                "text": text,
                "index": index,
            })
        } 
    });
    return result;
}

console.log(findArrayIndex(animals, "Mosquito"));


