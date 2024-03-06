let oracion = prompt("Ingrese la oracion") + " ";
let cantidadpalabras=0
while(oracion!==""){
    let posicion = oracion.indexOf(" ");
    cantidadpalabras += 1
    oracion = oracion.slice(posicion + 1);//borramos todo lo que hay antes de la posicion diciendo que guarde solo lo que hay despues de la posicion+1
}
alert("la cantidad de palabras en la oracion es: "+cantidadpalabras);