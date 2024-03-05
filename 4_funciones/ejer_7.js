function verificacion(contador, array) {
    if (contador > 3) {
        console.log("Los números ingresados de menor a mayor son: " + ordenarDeMenorAMayor(array).join(', '));
        return;
    }
    let num;
    do {
        num = prompt("Ingrese el número").trim();
    } while (num === '' || isNaN(num));
    array.push(parseFloat(num)); // Convertimos el número ingresado a un número de punto flotante y lo agregamos al array
    return verificacion(contador + 1, array);
}

function ordenarDeMenorAMayor(array) {
    return array.sort((a, b) => a - b);
}

verificacion(1, []);
