/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const userPerson = users.map((user) => user.name)
console.log(userPerson);

/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */

const usersTwo = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const userPersonTwo = usersTwo.map(( user) =>{  

	if (user.name.startsWith('A')) {
		return { ...user, name: 'Anacleto' };
	  }
	  return user;

})

console.log(userPersonTwo);


/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedCityes = cities.map ( city=>{

   city.isVisited == true && (city.name += " (Visitado)")
   
})

console.log(cities);