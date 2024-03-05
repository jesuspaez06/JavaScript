function verificacion(num) {
    do {
        num = prompt("Ingrese el número").trim();
    } while (num === '' || isNaN(num));
    return imprimirMultiplicacion(parseInt(num), 1);
}
const multi = (numero, contador) => {return numero*contador}

function imprimirMultiplicacion(numero, contador) {
    if (contador > 20) {
        return;
    }
    console.log("La multiplicación es " + multi(numero, contador));
    imprimirMultiplicacion(numero, contador + 1);
}

verificacion();

