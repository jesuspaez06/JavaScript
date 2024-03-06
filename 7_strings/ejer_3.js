let num = prompt("Ingrese el numero");
let codigopais = num.split("-");
var numGuiones = num.replace(/-/g, "");
var numGuiones = numGuiones.replace(codigopais[0], "");
console.log(numGuiones)
