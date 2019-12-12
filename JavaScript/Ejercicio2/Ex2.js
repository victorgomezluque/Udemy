'use strict'
var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("numero"));
    suma = suma + numero;
    contador++;
    console.log(parseInt(suma));
    console.log(parseInt(suma / contador));

}
while (numero >= 0) {}