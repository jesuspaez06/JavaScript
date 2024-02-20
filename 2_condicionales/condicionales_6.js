const Peli1 = parseFloat(prompt("Ingrese el precio de la película 1"));
const Peli2 = parseFloat(prompt("Ingrese el precio de la película 2"));
const Peli3 = parseFloat(prompt("Ingrese el precio de la película 3"));

if (isNaN(Peli1) || isNaN(Peli2) || isNaN(Peli3) || Peli1 < 0 || Peli2 < 0 || Peli3 < 0 ||Peli1 == ""||Peli2 == ""||Peli3 == "") {
    alert('Error, ingrese de nuevo los datos');
} else {
    let precioMenor1, precioMenor2;

    if (Peli1 <= Peli2 && Peli1 <= Peli3) {
        precioMenor1 = Peli1;
        precioMenor2 = (Peli2 <= Peli3) ? Peli2 : Peli3;
    } else if (Peli2 <= Peli1 && Peli2 <= Peli3) {
        precioMenor1 = Peli2;
        precioMenor2 = (Peli1 <= Peli3) ? Peli1 : Peli3;
    } else {
        precioMenor1 = Peli3;
        precioMenor2 = (Peli1 <= Peli2) ? Peli1 : Peli2;
    }

    let precioTotal = precioMenor1 + precioMenor2;
    console.log("El precio a pagar es", precioTotal);
}
