var temp = 0
for (i = 1; i < 13; i++) {
  var num = prompt("Por favor ingrese la cantidad del deposito: ");
  if (isNaN(num) || num == "" || num < 0) { console.log("ingrese algun numero valido "); break } // anuncia error si no es un numero o esta vacio el espacio
  else {temp += parseFloat(num)
    console.log("el total ahorrado hasta el mes ", i, " es: ", temp)
  }
}
