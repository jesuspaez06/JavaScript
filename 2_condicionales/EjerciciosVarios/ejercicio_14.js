const n1 =+ prompt ("Porfavor ingrese el numero 1");
const n2 =+ prompt ("Porfavor ingrese el numero 2");
if(isNaN(n1)||isNaN(n2)){alert("Porfavor ingrese datos validos")
}else{
    if(n1>n2){alert("El mayor es: "+n1)
}else if (n2>n2){alert("El mayor es: "+n2)}
else{alert("Error, los dos numeros son iguales")}
}