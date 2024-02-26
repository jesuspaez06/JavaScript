function verificacionNum(mensaje) {//verifica si lo ingresado es un numero entero
    let num;
    do {
        num = prompt(mensaje).trim();
    } while (num === '' || isNaN(num) || !Number.isInteger(parseFloat(num)));
    imprimir(num)
}
function imprimir(num) {// imprime el resultado
    const imprimir = comparartrescinco(parseInt(num))
    alert(imprimir)
}
function comparartrescinco(num) { //compara si es multiplo de 3 y 5 al tiempo
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizz y buzz";
    } else { return comparartres(num) }
}
function comparartres(num) {//compara si es multiplo de 3
    if (num % 3 == 0) {
        return "fizz";
    } else { return compararcinco(num) }
}
function compararcinco(num) {//compara si es multiplo de 5
    if (num % 5 == 0) { return "buzz" }
    return num //si no es multiplo de ambos casos solo retorna el numero
}

let num = verificacionNum("ingrese el numero ");//recibe la variable y la manda a la funcion de verificar
