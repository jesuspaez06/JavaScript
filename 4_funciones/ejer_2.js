const sumflecha = (num) => (parseFloat(num)+parseFloat(num2))/2 
let num = prompt("Por favor ingrese el numero 1 "); let num2 = prompt("Por favor ingrese el numero 2 ");
  if (isNaN(num) ||!num||isNaN(num2) ||!num2 ) {alert("ingrese un numero valido ")}
  else { console.log(sumflecha(num,num2));}
