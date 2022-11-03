"use strict";
console.log("Ejemplo de let:");
let saludar = "Hola";
if (true) {
    let saludar = "Hola como estás?";
    console.log(saludar);
}
console.log(saludar);
console.log("Ejemplo de const:");
const numero = [55, 60, 30];
numero.push(10);
console.log(numero);
