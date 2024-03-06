// Función para verificar la entrada de números
function verificacionNum(mensaje) {
    let num;
    do {
        num = prompt(mensaje).trim();
    } while (num === '' || isNaN(num) || !Number.isInteger(parseFloat(num)));
    return num;
}

tamaño = verificacionNum("Ingrese el tamaño del array");
num = verificacionNum("Ingrese que multiplo quieres");
var matriz= Array.from({length:tamaño},(_,index)=> (index+1)*num);
console.table(matriz)