
for (let i = 1; i <= 3; i++) {
    let n = prompt("Ingrese el numero " + i);
    if(isNaN(n)||n == "") {alert('Error, ingrese de nuevo los datos');break}//si es letra, esta vacio o es 0 sale mensaje de error
else{
    if (n % 2 == 0) {
        console.log("el numero", n, " es par")
    } else {
        console.log("el numero", n, " es impar")
    }
}
}
