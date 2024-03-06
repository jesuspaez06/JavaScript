let array = [];
let contador=1
function verificacion(contador) {
    let num;
    do {
        num = prompt("Ingrese un numero "+contador);
    } while (num.trim() === '' || isNaN(num.trim()));

    ingreso(num);
}

function ingreso(num) {
    contador++
    array.push(num);
    if (array.length >= 10) {
        let suma = array.reduce((acumulador, elemento) => parseInt(acumulador) + parseInt(elemento));
        alert("la media es "+(suma/array.length))
        return;
    }
    verificacion(contador);
}

verificacion(contador);
