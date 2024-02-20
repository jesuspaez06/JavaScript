const marca = prompt ("Porfavor ingrese la marca de su moto: (H) para Honda, (Y) para Yamaha, (S) para Suzuki  y (O) para otras marcas").toLowerCase();
const precio = prompt ("Porfavor ingrese el precio de la moto");

if (!/^[A-Za-z]+$/.test(marca)||isNaN(precio)||precio<1) 
{alert("Porfavor ingrese datos validos")
}else{
    if(marca=="h"||marca=="honda"){alert("el precio con el descuento es "+(precio-precio*0.05))}
else if(marca=="y"||marca=="yamaha"){alert("el precio con el descuento es "+(precio-precio*0.08))}
else if(marca=="s"||marca=="suzuki"){alert("el precio con el descuento es "+(precio-precio*0.1))}
else {alert("el precio con el descuento es "+(precio-precio*0.02))}
}