const Num = prompt("Ingrese el nunero 1 ");// pedir y guardar variable del 1 numero
const Num2 = prompt("Ingrese el nunero 2 ");// pedir y guardar variable del 2 numero
if (isNaN(Num) || Num == "" || Num == "0" || isNaN(Num2) || Num2 == "" || Num2 == "0") { alert('Error, ingrese de nuevo los datos'); }//si es letra, esta vacio o es 0 sale mensaje de error
else {
  if (Num % Num2 == 0 || Num2 % Num == 0) {//comparar ambos casos para determinar el si el residuo es 0
    console.log("Son multiplos");//si es 0 imprime que son multiplos
  } else {
    console.log("No son multiplos");// si no es 0 imprime que no lo son
  }
}
//Pedir dos números y decir si non múltiplos o no