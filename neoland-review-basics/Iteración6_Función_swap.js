//Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 

//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 

//Retorna el array resultante.

const footballPlayers = ["Vinicius", "Messi", "Pogba", "Gavi", "Pedri"];

/* footballPlayers[1] = footballPlayers[2];
console.log(footballPlayers[1])
footballPlayers[2] = footballPlayers[1];        Esto no funciona porque se igualan
console.log(footballPlayers[1]); */

const swap = (array, num1, num2) => {

    let changePosition = ""; //creo una variable vacia para guardar la primera posición

    changePosition = array[num1] //guardo la primera posición para que luego no sean iguales

    array[num1] = array[num2]
    array[num2] = changePosition //porque esta igualada a num1

    return array;
}

console.log(swap(footballPlayers, 2,3));
   

