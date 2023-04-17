/* Crea una función llamada splitName que divida un nombre completo en nombre y apellido. 

Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

De tal modo que si tenemos el texto "Peter Parker" obtendremos dos variables...una con el valor "Peter" y otra con el valor "Parker".

En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf() */

const splitName = (completeName) => {
    let position = completeName.indexOf(" "); //cojo el indice del espacio
    let partOne = completeName.substring(0, position); //con substring corto un string de donde quiero a donde quiero
    let partTwo = completeName.substring(position);
    console.log(`Primer nombre ${partOne} y segundo nombre ${partTwo}`);

}

splitName("Harry Potter");
