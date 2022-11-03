"use strict";
class rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
let rectangulo1 = new rectangulo(5, 15);
let rectangulo2 = new rectangulo(8, 6);
console.log("El área del rectángulo 1 es: " + rectangulo1.area());
console.log("El área del rectángulo 2 es: " + rectangulo2.area());
