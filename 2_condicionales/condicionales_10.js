const edad = prompt ("Cuantos años tienes? ");
if(isNaN(edad)|| edad<0 || edad>200 ||edad == ""){alert("ingresaste mal la edad")}
else{
const genero = prompt ("Ingrese su genero porfavor (M) para hombre y (F) para mujer ").toLowerCase();
if(genero !="m" && genero !="f"){alert("Error Porfavor ingrese denuevo el genero")}
else if (genero=="m" && edad>=60 ) {
    console.log("Felicidades ya puedes jubilarte");
}else if(genero=="f" && edad>=54 ) {
    console.log("Felicidades ya puedes jubilarte");   
}else{console.log("todabia no puedes jubilarte");  
 }
}