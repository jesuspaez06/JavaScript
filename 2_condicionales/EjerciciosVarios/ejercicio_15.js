const n1 =+ prompt ("Porfavor ingrese el numero");
if(isNaN(n1)|| n1==0){alert("Porfavor ingrese datos validos")
}else{
    if(n1<0){alert("El numero "+n1," tiene raíz imaginaria")
}else{console.log("La raiz cuadrada es: "+Math.sqrt(n1))}

}