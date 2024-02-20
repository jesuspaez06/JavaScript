const Num = prompt ("Ingrese un número ");// pedir el numero y guardarlo
if(isNaN(Num)||Num == ""||Num=="0") {alert('Error, ingrese de nuevo los datos');}//si es letra, esta vacio o es 0 sale mensaje de error
else{
if (Num %2 == 0) {//dividir el numero entre 2 y luego checar si el residuo es 0
    console.log("Es par");// si el residuo es 0 imprime par
  }else {
    console.log("Es impar");// en caso contrario es impar
  }}
//Determinar si un número es par o impar.