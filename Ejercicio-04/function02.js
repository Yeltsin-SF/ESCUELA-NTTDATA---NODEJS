"use strict";
function operar(valor1, valor2, func) {
    return func(valor1, valor2);
}
console.log(operar(100, 5, (x, y) => {
    return x + y;
}));
console.log(operar(100, 5, (x, y) => {
    return x - y;
}));
console.log(operar(100, 5, (x, y) => {
    return x * y;
}));
console.log(operar(100, 5, (x, y) => {
    return x / y;
}));
