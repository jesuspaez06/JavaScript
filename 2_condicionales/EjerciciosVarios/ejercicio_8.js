const n1 =+ prompt ("Cuantas horas a trabajado");
const n2 =+ prompt ("Ingrese el valor por hora");

if(isNaN(n1)||isNaN(n2)){alert("Porfavor ingrese datos validos")}
else{console.log("El total del salario es ",(n1*n2))
}