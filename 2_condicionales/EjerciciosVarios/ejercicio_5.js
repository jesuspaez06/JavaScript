const trap1 =+ prompt ("Ingrese la longitud de la base del trapecio 1");
const trap2 =+ prompt ("Ingrese la longitud de la base del trapecio 1");
const alt =+ prompt ("Ingrese la altura del trapecio");
if(isNaN(trap1)||isNaN(trap2) ||isNaN(alt)){alert("Porfavor ingrese datos validos")}
else{console.log("El area del trapecio es: ",(((trap1+trap2)*alt)/2))
}