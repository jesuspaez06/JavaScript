const num1 = prompt("ingrese ingrese el numero 1 ");//pide el dato numero 1 y lo guarda en la variable num1
const num2 = prompt("ingrese ingrese el numero 2 ");//pide el dato numero 2 y lo guarda en la variable num2
const num3 = prompt("ingrese ingrese el numero 3 ");//pide el dato numero 3 y lo guarda en la variable num3
const num4 = prompt("ingrese ingrese el numero 4 ");//pide el dato numero 4 y lo guarda en la variable num4
if (isNaN(num1) || num1 == "" || isNaN(num2) || num2 == "" || isNaN(num3) || num3 == "" || isNaN(num4) || num4 == "") { alert("ingrese algun numero valido "); } // anuncia error si no es un numero o esta vacio el espacio
else{alert("la media es "+ (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4)) / 4);}//imprime la media sumando los datos y luego dividiendolos por 4, usa el parse float para pasar de string a float el valor de cada numero

//Escribir un programa que pida por teclado cuatro números y calcule y presente la media de los cuatro. 