"use strict";
(function () {
    const persona = {
        usuario: 'Yeltsin',
        clave: '12345678',
        fecha: '3/11/2022',
        estado: true
    };
    function imprimirPersona({ usuario, clave, fecha, estado }) {
        console.log('Desestructuración de la primera variable: ' + usuario);
        console.log('Desestructuración de la segunda variable: ' + clave);
        console.log('Desestructuración de la tercera variable: ' + fecha);
        console.log('Desestructuración de la cuarta variable: ' + estado);
    }
    imprimirPersona(persona);
    console.log('-----------------------------------------------------------');
    console.log('Desestructuración de objecto (usando type)');
    const producto = {
        nombre: "Leche",
        precio: 1.80
    };
    function imprimirProducto({ nombre, precio }) {
        console.log(nombre);
        console.log(precio);
    }
    imprimirProducto(producto);
    console.log('-----------------------------------------------------------');
    console.log('Desestructuración de los dos ultimos elementos:');
    const personas = (nombres = ["Jhon", "Luis", "Mateo", "Ana"]) => {
        const [, , ...rest] = nombres;
        return rest;
    };
    console.log(personas());
})();
