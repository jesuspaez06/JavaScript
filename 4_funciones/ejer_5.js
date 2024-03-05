function verificacion(num) {
    do {
        num = prompt("Ingrese una temperatura en grados Celsius").trim();
    } while (num === '' || isNaN(num) || +num < 0);
    return num; // Agregar return para devolver el valor ingresado
}
function verificacionFarenjeiKelvin(FaKe, num) {
    do {
        FaKe = prompt("¿A cuál quieres convertir? (F) Fahrenheit o (K) Kelvin").toLowerCase();
    } while (FaKe.trim() !== 'f' && FaKe.trim() !== 'fahrenheit' && FaKe.trim() !== 'k' && FaKe.trim() !== 'kelvin');
    if (FaKe == 'f' || FaKe == 'fahrenheit') {
        alert("los grados en fahrenheit son: " + ((9 / 5) * num + 32))
    } else if (FaKe == 'k' || FaKe == 'kelvin') {
        alert("los grados en kelvin son: " + (parseFloat(num) + 273.15))
    } else {
        alert("Error");
    }
}
    let temperaturaCelsius = verificacion();
    verificacionFarenjeiKelvin(null, temperaturaCelsius);
