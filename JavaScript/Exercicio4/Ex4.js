'use strict'
var numero1 = parseInt(prompt("Numero 1"));
var numero2 = parseInt(prompt("Numero 2"));

// mostar numeros impares que hay entre dos numeros introducidos
if (numero1 < numero2) {
    for (numero1; numero1 <= numero2; numero1++) {
        if(numero1%2!=0){
        console.log(numero1);
        }
    }
} else if (numero2 < numero1) {
    for (numero2; numero2 <= numero1; numero2++) {
        if(numero2%2!=0){
            console.log(numero2);
            }
    }
}