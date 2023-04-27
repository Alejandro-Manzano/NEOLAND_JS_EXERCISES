/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const moreNum = ages.filter((age) => age > 18);
console.log(moreNum)

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */

const agesTwo = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const moreNumTwo = agesTwo.filter((age) => age%2 == 0);
console.log(moreNumTwo);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.

let newStreamer = [];
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const gamePlayed = streamers.filter((streamer) => streamer.gameMorePlayed == "League of Legends");
console.log(gamePlayed);

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */

const youTubers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const ytIncludesU = youTubers.filter((youTuber) => youTuber.name.includes("u"))
console.log(ytIncludesU);

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */

 const influencers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const influencersPlays = influencers.filter((influencer) => influencer.gameMorePlayed.includes("Legends"))
console.log(influencersPlays)


const influencersPlayTwo = influencersPlays.map(influencerTwo => {
	if (influencerTwo.age > 35) {
	  influencerTwo.gameMorePlayed = influencerTwo.gameMorePlayed.toUpperCase();
	}
	return influencerTwo;
  });

  console.log(influencersPlayTwo);


  /* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
  los streamers que incluyan la palabra introducida en el input. De esta forma, si 
  introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
  introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

  const famous = [
	  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
  ];

const searchInput = document.querySelector('[data-function="toFilterStreamers"]') //llamo al input

const searchYoutuber = () => {
	
	searchInput.addEventListener("change", (event) => {

		console.log(event.target.value);
		let value = event.target.value; //guardo en una variable el valor que escribo en el input

		const filterYoutuber = famous.filter((person) => person.name.toLowerCase().includes(value.toLowerCase())); //compruebo filtrando a ver so .name incluye esas letras
		console.log(filterYoutuber);
	}) 
}

searchYoutuber();


/* 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. */

const streamersFamous = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputSearch = document.querySelector('[data-function="toFilterStreamers"]');
const button = document.querySelector('[data-function="toShowFilterStreamers"]');

const printYoutuber = () => {
	
	const printTwo = () => {
		inputSearch.addEventListener("change", (event) => {
		let print = event.target.value;

		const filterYoutuberTwo = streamersFamous.filter((person) => person.name.toLowerCase().includes(value.toLowerCase()));
		console.log(filterYoutuberTwo); // creo una función como la de antes
		})
	}

	button.addEventListener("click", (event) => { //ahora lo guardo todo dentro de este evento para que se ejecute cuando le de al botón
		printTwo();
	});

}
printYoutuber();
