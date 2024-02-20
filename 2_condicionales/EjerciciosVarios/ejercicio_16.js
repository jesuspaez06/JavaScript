const nom = prompt ("Porfavor ingrese el nombre");
const sig = prompt ("Porfavor ingrese su signo").toLowerCase();
if (!/^[A-Za-z]+$/.test(nom)||!/^[A-Za-z]+$/.test(sig)) 
{alert("Porfavor ingrese datos validos")
}else{ if(sig=="aries"){alert(nom)
}else{alert("usted no es Aries")}
}