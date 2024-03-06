let notas = [20, 10, 5, 15]
let NotasB = []
let NotasM = []
let sumnotasb = 0
let sumnotasm = 0
function EncontrarBuenasNotas() {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 12) {
            NotasB.push(notas[i]);
            sumnotasb += notas[i];
        } else {
            NotasM.push(notas[i]);
            sumnotasm += notas[i];
        }
    }
    console.log("las notas aprobadas son: " + NotasB + " el promedio es " + (sumnotasb / NotasB.length) + " y la cantidad de aprobados son " + NotasB.length)
    console.log("las notas desaprobadas son: " + NotasM + " el promedio es " + (sumnotasm / NotasM.length) + " y la cantidad de desaprobadas son " + NotasM.length)
}
EncontrarBuenasNotas()