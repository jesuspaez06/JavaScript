var fio1 = 0;
var fio2 = 1;
var resultado = 0;
const num = parseInt(prompt("Por favor ingrese un número positivo mayor a 0:"));

if (isNaN(num) || num < 1 || !Number.isInteger(num)) {
    console.log("Ingrese un número válido.");
} else {
    console.log(fio1);
    if (num >= 2) {
        console.log(fio2);
    }
    for (let i = 2; i < num; i++) {
        resultado = fio1 + fio2;
        console.log(resultado);
        fio1 = fio2;
        fio2 = resultado;
    }
}

