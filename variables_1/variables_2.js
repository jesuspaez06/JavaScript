const prec = prompt ("ingrese el precio "); // pide el precio y lo guarda en la variable prec
const desc = prompt ("ingrese el % de descuento "); //pide el descuento y lo guarda en la variable desc
if (isNaN(prec) || prec == ""||prec<1||isNaN(desc) || desc == ""||desc<0 ) {alert("Error, ingrese valores valido ");} // anuncia error si no es un numero, si es negativo o esta vacio el espacio
else {alert("El precio final con descuento es de "+(prec-desc/100*prec));} // imprime el descuento realizando la operacion en una alerta

//Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el precio con 
//descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el descuento 20%, el programa 
//dirá que el precio final con descuento es de 240. 