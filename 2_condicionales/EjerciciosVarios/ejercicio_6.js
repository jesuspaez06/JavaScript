const n1 =+ prompt ("Ingrese el numero 1");
const n2 =+ prompt ("Ingrese el numero 2");
const n3 =+ prompt ("Ingrese el numero 3");
if(isNaN(n1)||isNaN(n2) ||isNaN(n3)){alert("Porfavor ingrese datos validos")}
else{console.log("La media aritmetica es: ",((n1+n2+n3)/3))
}