/*3 ejemplo de uso de desestructuración
  - Desestructuración de todas las variables de un objeto (funsionando interfaces). Las propiedades serian: 
    - usuario: string
    - clave: string
    - fecha: fecha actual
    - estado: boleano
  - Desestructuración de objecto (usando type). La estructura seria: nombre: string, precio: number
  - En una funcion flecha, realizar la desestructuración solo de los 2 ultimos elementos del array. El contenido del array es el siguiente:
    ['Jhon','Luis','Mateo','Ana']*/

(function() {

    interface Persona {
        usuario: string
        clave: string
        fecha: string
        estado: boolean
    }

    const persona: Persona = {
        usuario: 'Yeltsin',
        clave: '12345678',
        fecha: '3/11/2022',
        estado: true
    }
    function imprimirPersona({usuario,clave,fecha,estado}: Persona){
        console.log('Desestructuración de la primera variable: ' + usuario)
        console.log('Desestructuración de la segunda variable: ' + clave)
        console.log('Desestructuración de la tercera variable: ' + fecha)
        console.log('Desestructuración de la cuarta variable: ' + estado)
    }

    imprimirPersona(persona);

    console.log('-----------------------------------------------------------');
    console.log('Desestructuración de objecto (usando type)');
    type Producto = {
        nombre: string
        precio: number
    };
    const producto: Producto = {
        nombre: "Leche",
        precio: 1.80
    };

    function imprimirProducto({nombre,precio}: Producto){
        console.log(nombre)
        console.log(precio)
    }
    imprimirProducto(producto);

    console.log('-----------------------------------------------------------');

    console.log('Desestructuración de los dos ultimos elementos:');
    const personas = (nombres = ["Jhon", "Luis", "Mateo", "Ana"]) => {
        const [, , ...rest] = nombres;
        return rest
    }
    console.log(personas())



})();