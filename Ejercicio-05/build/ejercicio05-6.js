"use strict";
console.log("Template literal con string y number: ");
let nombre = 'Yeltsin';
let edad = 28;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
console.log('-----------------------------------------------------------');
console.log('Template literal que contenga function flecha:');
const miFuncionF = (a, b) => `La suma de ${a} y ${b} es: ${a + b}`;
console.log(miFuncionF(2, 6));
console.log('-----------------------------------------------------------');
console.log("Template literal con string y usar boolean para cambiar un texto: ");
const cambiarTexto = (name, cambiar) => {
    if (cambiar == true) {
        return (`Hola me llamo ${name} y vivo en la ciudad de Arequipa`);
    }
    else {
        return (`Hola me llamo ${name} y vivo en Lima`);
    }
};
console.log(cambiarTexto('Yeltsin', true));
console.log(cambiarTexto('Yeltsin', false));
