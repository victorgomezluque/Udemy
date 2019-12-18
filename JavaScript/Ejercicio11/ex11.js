'use strict'

// formulario con los campos nombre apellidos y edad
// boton enviar formulario: evento submit
// al enviar formulario mostrar datos por pantalla   
// Boton que al darle click nos muestra los datos actuales del formulario
// Validar formulario

window.addEventListener('load', function () {
    var formulario = document.querySelector("#formulario");
    var box = document.querySelector(".DatosFormulario");

    formulario.addEventListener('submit', function () {
        console.log("Estas dentro");
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edat = parseInt(document.querySelector("#edat").value);
        var todocorrecto = true;

        if (nombre.length == 0 || nombre == null) {
            alert("El nombre no és valido");
            todocorrecto = false;
            var error = document.querySelector("#nombre");
            error.style.background = "red";

        }else{
            var error = document.querySelector("#nombre");
            error.style.background = "green";

        }

        if (apellido.length == 0 || apellido == null) {
            alert("Apellidos no son validos");
            todocorrecto = false;
            var error = document.querySelector("#apellidos");
            error.style.background = "red";

        }else{
            var error = document.querySelector("#apellidos");

            error.style.background = "green";

        }

        if (edat == null || isNaN(edat)) {
            alert("la edad no es valida");
            todocorrecto = false;
            var error = document.querySelector("#edat");
            error.style.background = "red";

        }else{
            var error = document.querySelector("#edat");
            error.style.background = "green";

        }

        if (todocorrecto == true) {
            var parrafo = document.createElement("p");
            parrafo.append(nombre);
            parrafo.append(apellido);
            parrafo.append(edat);
            box.append(parrafo);
        }

    });

});