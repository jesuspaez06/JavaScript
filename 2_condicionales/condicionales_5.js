const Nota = prompt("Ingrese una nota de 0 a 10");
if (isNaN(Nota) || Nota == "" || Nota < 0 || Nota > 10) { alert('Error, ingrese de nuevo los datos'); }//si es letra, esta vacio o es 0 sale mensaje de error
else {
    if (Nota >= 8) {
        console.log("Su nota es Excelente, ¡Felicidades!");
    } else if (Nota == 7) {
        console.log("Su nota es Bien, ¡Felicidades!");
    } else if (Nota == 6) {
        console.log("Su nota es Suficiente");
    } else {
        console.log("Su nota es Insuficiente, toca recuperacion ");
    }
}