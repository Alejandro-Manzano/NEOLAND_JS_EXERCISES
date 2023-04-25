//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement("div"); //creo un elemento div vacío
console.log(emptyDiv);

document.body.appendChild(emptyDiv); //lo agrego dentro de su padre

////2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const emptyDivTwo = document.createElement("div");
const createP = document.createElement("p");

document.body.appendChild(emptyDivTwo);
emptyDivTwo.appendChild(createP);


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const loopDiv = document.createElement("div");

for (let i=1; i<7; i++){

    const newP = document.createElement("p")

    newP.innerText = ` Esta es mi p número ${i} `

    loopDiv.appendChild(newP);
}
document.body.appendChild(loopDiv);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const imDinamic = document.createElement("p");
imDinamic.innerText = "Soy dinámico!"
document.body.append(imDinamic);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const insertText = document.querySelector(".fn-insert-here");

insertText.innerText = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; 

const newUl = document.createElement("ul");

for (let i=0; i<apps.length; i++){
    const newLi = document.createElement("li");
    newLi.innerText = apps[i];
    newUl.appendChild(newLi);
}
document.body.appendChild(newUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
  const selectAllClass = document.querySelectorAll(".fn-remove-me");

selectAllClass.forEach(element => {
    element.remove();
});  

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

    const divContainer = document.querySelector("div");
    divContainer.insertAdjacentHTML("afterbegin", `<p>Voy en medio!<p>`);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here;

const divClassFn = document.querySelectorAll(".fn-insert-here");


    divClassFn.forEach(element => {
        const divNewP = document.createElement("p");
        divNewP.innerText = 'Voy dentro!';
        element.append(divNewP);
    });

   

