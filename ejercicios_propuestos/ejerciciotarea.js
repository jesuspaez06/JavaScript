let multiplotrescinco = (numero) => {
    let valor =""
    if (numero % 3 == 0) valor = "fizz"
    if (numero % 5 == 0) valor += " buzz"
    return valor|| numero
}
const numero = prompt("Por favor ingrese el numero ");
alert(multiplotrescinco(numero))
