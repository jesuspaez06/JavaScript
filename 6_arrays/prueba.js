// Función para verificar la entrada de números
function verificacionNum(mensaje, variable) {
    let valor;
    do {
        valor = prompt(mensaje).trim();
    } while (valor === '' || isNaN(valor) || !Number.isInteger(parseFloat(valor)));
    
    // Devuelve la variable indicada por el segundo argumento
    return variable === 'tamaño' ? parseInt(valor, 10) : valor;
}

// Código principal
let tamaño = verificacionNum("Ingrese el tamaño del array", 'tamaño');
let num = verificacionNum("Ingrese qué múltiplo quieres", 'num');

let matriz = Array.from({ length: tamaño }, (_, index) => (index+1) * num);
console.table(matriz);
