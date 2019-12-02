'use strict'
var numero1 = parseInt(prompt("Numero1"));
var numero2 = parseInt(prompt("Numero2"));


/* calculador que pida dos numeros por pantalla
si metemos uno mal que lo vuelva a padir
y mostrar resultado  sumar,restar,dividir,multiplicar
*/


while (isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt("Numero1"));
    var numero2 = parseInt(prompt("Numero2"));
    
}
document.write("Suma <br/>");
var suma = numero1+numero2
document.write(numero1 + "+ " + numero2 + "=" + suma + "<br/>");

document.write("Resta <br/>");
var resta = numero1-numero2
document.write(numero1 + "- " + numero2 + "=" + resta+ "<br/>");


document.write("Multiplicacion <br/>");
var multiplicacio = numero1*numero2
document.write(numero1 + "* " + numero2 + "=" + multiplicacio+ "<br/>");


document.write("Division <br/>");
if (numero1 > numero2) {
    var division = numero1 / numero2;
    document.write(numero1 + "/ " + numero2 + "=" + division+ "<br/>");
} else {
    division = numero2 / numero1;
    document.write(numero2 + "/ " + numero1 + "=" + division);
}