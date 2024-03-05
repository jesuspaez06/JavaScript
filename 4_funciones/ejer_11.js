function verificacion(num) {
    do {
        num = prompt("Ingrese un numero entero").trim();
    } while (num === '' || isNaN(num) || !Number.isInteger(parseFloat(num)));
    IsCero(parseInt(num));
}
function IsCero(num) {
    if (num == 0) { console.log(0) }
    else { DeciToBina(num) }
}
function DeciToBina(num, bina = "") {
    if (num == 0) {
        alert("El número en binario es: " + bina);
        return
    }
    bina = num % 2 + bina
    DeciToBina(parseInt(num / 2), bina)
}
verificacion();
