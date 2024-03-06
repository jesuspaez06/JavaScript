let num = prompt("Ingrese el numero");
let codigopais = num.slice(0,3);
var numGuiones = num.replace(/-/g, "");
var numGuiones = numGuiones.replace(codigopais, "");
console.log(numGuiones)
