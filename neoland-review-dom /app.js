/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulWorld = document.createElement("ul");
document.body.appendChild(ulWorld);

countries.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    ulWorld.appendChild(newLi);
})

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeClass = document.querySelector(".fn-remove-me");
removeClass.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const dataFn = document.querySelector('[data-function="printHere"]');
const ulData = document.createElement("ul");
dataFn.appendChild(ulData);

cars.forEach((element) => {
    const liData = document.createElement("li");
    liData.innerHTML = element;
    ulData.appendChild(liData);    
})

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countriesTwo = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(element of countriesTwo) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "container");
    const newH4 = document.createElement("h4");
    const newImg = document.createElement("img");

    newH4.innerHTML = element.title;
    newDiv.appendChild(newH4);

    newImg.setAttribute("src", element.imgUrl);
    newDiv.appendChild(newImg);

    document.body.appendChild(newDiv);
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */

const newButton = document.createElement("button");
newButton.innerHTML = "borrar";
document.body.appendChild(newButton);

const deleteLast = () => {
  const containerDiv = document.querySelectorAll(".container");
  const lastDiv = containerDiv[containerDiv.length - 1];
  lastDiv.innerHTML = "";
  lastDiv.setAttribute("class", "");
};

newButton.addEventListener("click", deleteLast);

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

const divContainer = document.querySelectorAll(".container");

const delteDiv = () => {

    for (element of divContainer) {

        const buttonDeleteDiv = document.createElement("button");
        element.appendChild(buttonDeleteDiv);
        buttonDeleteDiv.innerHTML = "Elimina Div";

        buttonDeleteDiv.addEventListener("click", (event) => {
            const divToDelete = event.target.parentNode;
            divToDelete.remove();
        });
    }
} 

delteDiv();




