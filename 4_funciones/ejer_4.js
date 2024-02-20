function numLetras(num) {
    const numeros = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];
    alert(numeros[num]);
}
let num = prompt("Por favor ingrese un numero del 1 al 10 ");
if (isNaN(num) || !num || num < 1 || num > 10) { alert("Error, ingrese un numero valido ") }
else { numLetras(num); }


