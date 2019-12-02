'use strict'
var numero1 = parseInt(prompt("Numero"));


// mostrar todos los numeros divisores de un numero introducido

for (var i = 0; i <= numero1;i++) {
    if (numero1%i == 0) {
        console.log(i);
    }
}