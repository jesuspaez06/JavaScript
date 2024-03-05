function verificacion(num) {
    do {
        num = prompt("Ingrese la cantidad de numeros fionachi que quieres").trim();
    } while (num === '' || isNaN(num) || num < 1);
    generarFibonacci(parseInt(num))
}
function generarFibonacci(num) {
    if (num === 1) {
        console.log(0);
    } else {
        console.log(0);
        console.log(1);
        fio(parseInt(num), 0, 1, 3);
    }
}
function fio(num, fio1, fio2, cont) {
    if (cont > num) return;
    sumfio(fio1, fio2);
    fio(num, fio2, fio1 + fio2, cont + 1);
}
const sumfio = (fio1, fio2) => {
    let fio3 = fio1 + fio2
    return console.log(fio3)
}

verificacion();
