/*3 ejemplos de uso de template literal
  - Debe contener string, number
  - Debe contener function flecha
  - Debe contener string y usar boolean para cambiar un texto*/

console.log("Template literal con string y number: ");
let nombre = 'Yeltsin';
let edad = 28;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);

console.log('-----------------------------------------------------------');
console.log('Template literal que contenga function flecha:');
const miFuncionF = (a:string) => a.toUpperCase();
console.log(miFuncionF(`hola como estas?`));


console.log('-----------------------------------------------------------');
console.log("Template literal con string y usar boolean para cambiar un texto: ");
