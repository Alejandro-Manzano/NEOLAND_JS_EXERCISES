//3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];
const numbersES6 = [...pointsList];
console.log(numbersES6);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const objectES6 = {...toy};
console.log(objectES6);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
//spread operatos.

const pointsListt = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const joinList = [...pointsList, ...pointsLis2]
console.log(joinList);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
//con spread operators.

const toyy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const joinToys = {...toyy, ...toyUpdate};
console.log(joinToys);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// elimina desde el indice hasta el 2 sin incluirlo console.log(colors.slice(0,2)) 
//console.log(colors.splice(3)); (te crea un array desde el indice que el das)

const copyColor = [...colors.slice(0,2), ...colors.slice(2)];
copyColor.splice(2,1);
console.log(copyColor);