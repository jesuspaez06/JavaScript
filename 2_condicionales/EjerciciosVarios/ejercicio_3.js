const Cat1 =+ prompt ("Ingrese el cateto 1");
const Cat2 =+ prompt ("Ingrese el cateto 2");
if(isNaN(Cat1)||isNaN(Cat2) ){alert("Porfavor ingrese datos validos")}
else{console.log("La hipotenusa es: ",((Cat1*Cat1+Cat2*Cat2)**0.5))
}