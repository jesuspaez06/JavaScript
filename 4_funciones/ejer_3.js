const sumflecha = (num) => parseFloat(num) + parseFloat(num2)
const restaflecha = (num) => parseFloat(num) - parseFloat(num2)
const multiflecha = (num) => parseFloat(num) * parseFloat(num2)
const diviflecha = (num) => parseFloat(num) / parseFloat(num2)
function menu(num, num2, c) {
    if (c == "s" || c == "suma" || c == "+" || c == "sumar") { return sumflecha(num, num2) }
    else if (c == "r" || c == "resta" || c == "-" || c == "restar") { return restaflecha(num, num2) }
    else if (c == "m" || c == "multiplicacion" || c == "*" || c == "multiplicar") { return multiflecha(num, num2) }
    if (parseFloat(num2) != 0) { if ( c == "d" || c == "divicion" || c == "/" || c == "dividir") { return diviflecha(num, num2) } }
    else { alert("Error!") }
}
let num = prompt("Por favor ingrese el numero 1 "); let num2 = prompt("Por favor ingrese el numero 2 ");
let c = prompt("Por favor ingrese la operacion a realizar, (S)Suma, (R)Resta,(M)multiplicacion,(D)Dividicion").toLowerCase();
if (isNaN(num) || !num || isNaN(num2) || !num2 || !isNaN(c) || !c) { alert("ingrese un numero valido ") }
else { console.log(menu(num, num2, c)); }
