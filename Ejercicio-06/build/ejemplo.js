"use strict";
(() => {
    const fruits = [
        'apple',
        'melon',
        'mango',
        (fruta) => {
            const zumo = `Zumo de ${fruta}`;
            console.log(zumo);
            return zumo;
        }
    ];
    const [, , , fn1] = fruits;
    console.log('Coleccion array: ', fn1);
});
