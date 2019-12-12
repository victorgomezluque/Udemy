'use strict'

// programa que pida 6 numeros por pantalla y los meta en un array
// mostrar el array entero en el cuerpo de la pagina y consola
// Mostra array ordenado
// Mostrar array invertido
// mostrar cuantos elementos tiene el array
// busqueda de una valor introducido por el usuario y que nos diga si existe y su index.

var numero = 0;
var arrayNumeros = [];

for (let i = 0; i != 6; i++) {
    numero = prompt("Numero");
    arrayNumeros.push(numero);
}


for (var i in arrayNumeros) {
    document.write("<li>" + arrayNumeros[i] + "</li>");
    console.log(arrayNumeros[i]);
}



document.write("<h2>Numeros ordenados</h2>")
document.write("<li>" + arrayNumeros.sort(function(a,b){return a-b}) + "</li>");


document.write("<h2>Numeros ordenados Reverse</h2>")
document.write("<li>" + arrayNumeros.reverse() + "</li>");




document.write("<h2>Nuestro array tiene </h2>")
document.write(arrayNumeros.length);



//Busqueda de numero

function busqueda() {
    var numeroBusqueda = prompt("Que numero quieres buscar?");
    var existe = arrayNumeros.find(i => i == numeroBusqueda);
    var indexDondeEsta = arrayNumeros.findIndex(j => j == numeroBusqueda);
   
    if (existe) {

        document.write("El numero " + numeroBusqueda + " si existe, Esta en la posición " + indexDondeEsta);
    } else {

        document.write("El numero " + numeroBusqueda + " no existe");
    }
}