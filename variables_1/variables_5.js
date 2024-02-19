const num1 = prompt ("ingrese ingrese la resistencia 1 ");//pide la resistencia 1 y lo guarda en la variable num1
const num2 = prompt ("ingrese ingrese la resistencia 2 ");//pide la resistencia 2 y lo guarda en la variable num2
if (isNaN(num1) || num1 == ""||isNaN(num2) || num2 == "") {alert("ingrese algun numero valido ");} // anuncia error si no es un numero o esta vacio el espacio
else{const resis = (num1*num2)/(parseFloat(num1)+parseFloat(num2));// realiza la formula para encontrar la resistencia
console.log("la resistencia es ",resis);} // imprime la resistencia
