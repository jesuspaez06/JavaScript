const Num = prompt ("Ingrese el número 1 ");
const Num2 = prompt ("Ingrese el número 2 ");
if(isNaN(Num)||Num == ""||isNaN(Num2)||Num2 == "") {alert('Error, ingrese de nuevo los datos');}//si es letra, esta vacio o es 0 sale mensaje de error
else{
if (Num > Num2) {
    console.log("El ",Num," es mayor que ",Num2);
  }else if (Num<Num2) {
    console.log("El ",Num2," es mayor que ",Num);
  }else {
    console.log("Ocurrio un Eror o, los numeros son iguales, porfavor ingrese denuevo los numeros");
  }
}