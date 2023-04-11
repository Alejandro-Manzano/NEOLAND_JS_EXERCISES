//Usa un bucle for of para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

const travel = (array) => {

    for(let city of array){
        console.log(city);
    }

}

travel(placesToTravel);