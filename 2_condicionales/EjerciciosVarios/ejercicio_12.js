const n1 =+ prompt ("Porfavor ingrese su gasto de luz electrica(wxh)");
if(isNaN(n1)||n1<0){alert("Porfavor ingrese datos validos")
}else{
    if(n1<1000){console.log("Su tarifa de este mes es 1.2")}
    else if(n1>=1000 && n1<=1850){console.log("Su tarifa de este mes es 1.0")}
    else{console.log("Su tarifa de este mes es 0.9")}
}