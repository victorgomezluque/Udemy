//Tenemos varios tipos de selectores

$(document).ready(function () {

    //Selector ID --> $ que signfica jquery y luego entre los parentesis # Nombre Selector
    $("#hola").css("background", "red").css("color", "blue");
    $("#adios").css("background", "green").css("color", "yellow");

    //Selector de clases 
    $('.SoyunaClasse').css("border", "2px solid green");
    $('.yono').css("background", "grey");
    $('.yono').click(function () {
        alert("No és una clase");
    });

    //Selector de etiqueta
    $('h1').click(function () {
        if (!$(this).hasClass('etiquetas')) {
            $(this).addClass('etiquetas')
        }else{
            $(this).removeClass('etiquetas')

        }
    })

    //Selector de Atributo
    $('[title="google"]').css("background","pink");
    $('[title="instagram"]').css("background","purple");

    //Find y Parent
    $('p,a').css("border","solid 2px red");

    $("#caja").find('.reslatado'); // Esto entra en el div caja y busca dentro del find los elementos con clase resaltado
    $("#caja").parent().find('.reslatado'); //Sale un nivel de por encima y buscas, tantos parents que pones tantos niveles que sales. es decir si pones 2 parent saltas dos etiquetas de la que estas buscando
    
    

});