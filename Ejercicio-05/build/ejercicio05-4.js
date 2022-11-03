"use strict";
(function () {
    function usuario(nombre, edad, apellido, esPeruano = true) {
        if (esPeruano == false) {
            console.log("El nombre del usuario es " + nombre + " " + apellido + " " + "con edad de " + edad + " " + "sin nacionalidad peruana");
        }
        else {
            console.log("El nombre del usuario es " + nombre + " " + apellido + " " + "con edad de " + edad + " " + "con nacionalidad peruana");
        }
    }
    usuario('Yeltsin', 28, 'Sanchez', false);
})();
