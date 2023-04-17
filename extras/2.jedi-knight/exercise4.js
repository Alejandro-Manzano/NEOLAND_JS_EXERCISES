/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función: */

const mainCharacters = [ "Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan", ];

const findArrayIndex =(array, text) => {
    const indexArray = [];
    array.forEach((element, index) => {
        if(element == text){
            indexArray.push({
                word: element,
                post: index
            })
        }
    });
    return indexArray;
}
console.log(findArrayIndex(mainCharacters, "Leia"));