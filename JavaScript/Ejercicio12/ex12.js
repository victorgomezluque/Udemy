'use strict'

//Formulario que nos permita añadir peliculas

var formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', function () {
    var titulo = document.querySelector("#pelicula").value;
    localStorage.setItem(titulo, titulo);
});

var pp = document.querySelector("#peliculasAñadidas");
for(var i in localStorage){
    
    var pl = document.createElement("p");
    pl.append(localStorage[i]);
    pp.append(pl);

}


var formulariob = document.querySelector("#borrarformulario");

formulariob.addEventListener('submit', function () {
    var titulo = document.querySelector("#pelicula").value;
    localStorage.removeItem(titulo);
});






