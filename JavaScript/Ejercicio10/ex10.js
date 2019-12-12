'use strict'

// formulario con los campos nombre apellidos y edad
// boton enviar formulario: evento submit
// al enviar formulario mostrar datos por pantalla   
// Boton que al darle click nos muestra los datos actuales del formulario

window.addEventListener('load', function () {
    var formulario = document.querySelector("#formulario");
    var box = document.querySelector(".DatosFormulario");

    formulario.addEventListener('submit', function () {
        console.log("Estas dentro");
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edat = document.querySelector("#edat").value;


        var parrafo = document.createElement("p");
        parrafo.append(nombre);
        parrafo.append(apellido);
        parrafo.append(edat);
        box.append(parrafo);

    });

});