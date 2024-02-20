const n1 =+ prompt ("Porfavor ingrese el numero");
if(isNaN(n1)){alert("Porfavor ingrese datos validos")
}else{
    if(n1>0){console.log("el numero es positivo")}
    else if (n1<0){console.log("El numero es negativo")}
    else{console.log("El numero es 0")}
}