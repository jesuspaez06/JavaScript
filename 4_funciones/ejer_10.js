function verificacion(num) {
    do {
        num = prompt("Ingrese el numero para imprimir de este hasta el 1 ");
    } while (num.trim() === '' || isNaN(num.trim()));
    checarMayorMenor(parseInt(num))
}
function checarMayorMenor(num){
    if (num <1){imprimirMenorMayor(num)}
    else{imprimirMayorMenor(num)}
}
function imprimirMenorMayor (num){
    if(num>1) return
    console.log(num)
    imprimirMenorMayor(num+1)
}
function imprimirMayorMenor (num){
    if(num<1) return
    console.log(num)
    imprimirMayorMenor(num-1)
}
verificacion();