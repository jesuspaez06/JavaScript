function verificacion(num) {
    do {
        num = prompt("Ingrese un numero entero").trim();
    } while (num === '' || isNaN(num) || !Number.isInteger(parseFloat(num)));
    let numeroVolteado = volteado(parseInt(num),0);
    console.log(numeroVolteado);
}
function volteado(num, resultado) {
    if (num === 0) {
        return resultado;
    }
    resultado = resultado * 10 + num % 10;
    return volteado(Math.floor(num / 10), resultado);
}

verificacion()
