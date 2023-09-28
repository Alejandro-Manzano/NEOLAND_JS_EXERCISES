let examen1 = 6;
let examen2 = 8.5;
let practica1 = 6.6;
let practica2 = 9;

console.log(((examen1+examen2) / 2)*0.60);
console.log(((practica1+practica2) / 2)*0.40)

let mediaTotal = [(((examen1+examen2) / 2)*0.60) + (((practica1+practica2) / 2)*0.40)]
console.log(mediaTotal);

if (mediaTotal >= 9) {
    console.log("A");
} else if (9 > mediaTotal && mediaTotal >= 7) {
    console.log("B");
} else if (7 > mediaTotal && mediaTotal >= 5) {
    console.log("C");
} else if (mediaTotal < 5) {
    console.log("D");
}
