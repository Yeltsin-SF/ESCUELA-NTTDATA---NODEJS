"use strict";
const operaciones = ['suma', 'resta', 'multiplicacion', 'division'];
const calcular = (valor1, valor2, valor3) => {
    if (!operaciones.includes(valor3)) {
        console.log('La operacion no esta definida');
    }
    if (valor3 == 'suma') {
        return valor1 + valor2;
    }
    if (valor3 == 'resta') {
        return valor1 - valor2;
    }
    if (valor3 == 'multiplicacion') {
        return valor1 * valor2;
    }
    if (valor3 == 'division') {
        if (valor2 === 0) {
            return "No existe la division entre 0";
        }
        return valor1 / valor2;
    }
};
const resultado1 = calcular(1, 3, 'suma');
const resultado2 = calcular(7, 3, 'resta');
const resultado3 = calcular(8, 3, 'multiplicacion');
const resultado4 = calcular(4, 2, 'division');
const resultado5 = calcular(45, 0, 'division');
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
