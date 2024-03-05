function verificacion(contador, array) {
    if (contador > 3) {
        console.log("Los números ingresados de mayor a menor son: " + DeMenorAMayor(array).join(', '));
        return;
    }
    let num;
    do {
        num = prompt("Ingrese el número").trim();
    } while (num === '' || isNaN(num));
    array.push(parseFloat(num)); // Convertimos el número ingresado a un número de punto flotante y lo agregamos al array
    return verificacion(contador + 1, array);
}
function DeMenorAMayor(array) {
    return array.sort((a, b) => b-a);
}
verificacion(1, []);
