    var numero1 = prompt("Numero uno");
    var numero2 = prompt("Numero dos");

    // isNana sirve para si el valor que introduces no es un numero te devuelve false.
    
while (numero1 < 0 ||numero2 < 0 ||isNaN(numero1) ||isNaN(numero2)) {
    var numero1 = prompt("Numero uno");
    var numero2 = prompt("Numero dos");
}
if (numero1 > numero2) {
    console.log("numero 1 mayor que 2");
} else if (numero2 > numero1) {
    console.log("Numero 2 mayor que 1");
} else {
    console.log("Son iguales")
}