let valor = (numero) => {
    let valor = numero
    if (numero % 3 == 0) valor = "fizz"
    if (numero % 5 == 0) valor += " buzz"
    return valor
}
const numero = prompt("Por favor ingrese el numero ");
alert(valor(numero))
