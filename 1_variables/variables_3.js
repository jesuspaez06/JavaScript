const dolar = prompt ("ingrese la cantidad de dolares ");// pide la cantidad de dolares y lo guarda en la variable dolar
if (isNaN(dolar) || dolar == "" || dolar<0) {alert("Error,ingrese algun numero valido ");} // anuncia error si no es un numero, o si es negativo o esta vacio el espacio
else{alert("El cambio en euros es "+(dolar/1.33250))}; // imprime la cantidad de euros que valen esos dolares realizando la operacion en una alerta

//Suponiendo que 1 euro = 1.33250 dólares. Escribe un programa que pida al usuario un número de dólares 
//y calcule el cambio en euros. 