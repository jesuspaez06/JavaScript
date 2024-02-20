var num1 = prompt("Por favor el numero 1 ");
var num2 = prompt("Por favor ingrese el numero 2");
if (num1 > num2) { var temporal = num1; num1 = num2; num2 = temporal }// intercambia valores si el primer numero es mayor que el segundo
if (isNaN(num1) || num1 == "" || isNaN(num2) || num2 == "") { console.log("ingrese numeros valido ") } // anuncia error si no es un numero o esta vacio el espacio
else {for (let i = parseFloat(num1); i < num2; i += 1) {// suma de 1 en 1
        if (i % 2 == 0) { console.log(i); } // imprime solo los numeros pares de i
    }
}