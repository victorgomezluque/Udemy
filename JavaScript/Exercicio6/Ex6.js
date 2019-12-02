'use strict'
var numero1 = parseInt(prompt("Numero"));


/* decir si es par o impar
1. prompt
2. decir si es valido
3. decir si es par
*/
while(isNaN(numero1)){
     numero1 = parseInt(prompt("Numero"));
}

if(numero1%2==0){
    alert('Es par');
}else{
    alert('Es impar');
}