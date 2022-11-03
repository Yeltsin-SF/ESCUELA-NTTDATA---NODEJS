/*Convertir esta funcion a una funcion de flecha
  function caluloSumaCuadadro(x, y) {
    const resultado = (x + y)^2;
    return 'El resultado es ' + resultado;
  }*/

  (() => {
    // Función flecha
    const caluloSumaCuadrado = (x: number, y: number) => `El resultado es ${(x + y)^2}`;

    console.log(caluloSumaCuadrado(4,2))
})();