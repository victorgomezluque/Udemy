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
    document.write("<li>"+arrayNumeros[i]+"</li>");
    console.log(arrayNumeros[i]);
}


//Array ordenado
var arrayNumerosOrdenados = arrayNumeros.sort();

//Array invertido
var arrayNumerosOrdenadosInvertido = arrayNumeros.reverse();

var texto = `
<h2>Texto ordenado </h2>
document.write("<li>"+arrayNumerosOrdenados+"</li>");

<h2>Texto ordenado Invertido</h2>
document.write("<li>"+arrayNumerosOrdenadosInvertido+"</li>");

`;

document.write(texto);