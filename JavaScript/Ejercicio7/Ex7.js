'use strict'
var numero1 = parseInt(prompt("Numero"));


/* Tabla de multiplicar de un numero introducido por pantalla

for (let index = 0; index<=10; index++) {
    document.write(String(numero1) +"*"+ String(index) +"=" + numero1+"<br/>" );
}

*/

for (let index = 1; index < numero1; index++) {
    document.write("<h1>Tabla del </h1>" + String(index));
    for (let i2 = 1; i2 <=10; i2++) {
        var solucion = parseInt(index*i2);
        document.write(String(i2) +"*"+ String(index) +"=" + solucion+"<br/>" );
        
    }
    
}
