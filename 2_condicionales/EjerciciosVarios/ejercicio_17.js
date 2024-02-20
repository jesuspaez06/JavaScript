const nom = prompt ("Porfavor ingrese su nombre");
const edad = prompt ("Porfavor ingrese su edad");
const sexo = prompt ("Porfavor ingrese su genero (M)para masculino y (F) para femenino").toLowerCase();
if (!/^[A-Za-z]+$/.test(nom)||isNaN(edad)||!/^[A-Za-z]+$/.test(sexo)||edad<0) 
{alert("Porfavor ingrese datos validos")
}else{
    if(sexo=="m" && edad>17){alert("Su nombre es: "+nom)}
    else(alert("no eres hombre y mayor de edad losiento"))
}