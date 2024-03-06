function generarNum(cantidad) {
    let numerosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = Math.floor(Math.random()*100);
        numerosAleatorios.push(numeroAleatorio);
    }
    console.log(numerosAleatorios)
    let indicemitad = Math.floor(numerosAleatorios.length/2)
    let numeromitad=numerosAleatorios[indicemitad]
    console.log(numeromitad)
    return numerosAleatorios;
}

generarNum(5)