let letra;
function verificacionnombre(mensaje) {
    do { 
        letra = prompt(mensaje).trim();//imprime el mensaje enviado para luego recibirlo y quitarle espacios inesesarios
    } while (letra === '' || !isNaN(letra));//checa si esta vacio o si no es una letra para que no pase
    return letra//retorna el valor que recibio
}
function primeramayus(nom){
    let palabras = nom.split(" ");//guarda el nombre en un array separandolos teniendo encuenta el espacio (" ")
    for (let i = 0; i < palabras.length; i++) {
        // Capitalizar la primera letra de cada palabra
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }// reccorre el array con un for y despues a cada elemento con charAt(0) corta y coje nomas la primera letra y la vuelve mayuscula, luego con slice(1) coje desde la segunda letra y les convierte en minuscula
    let fraseCapitalizada = palabras.join(" ");//convierte el array en un string y luego lo separa con espacios(" ")  
    return fraseCapitalizada;
}
let nom = verificacionnombre("Ingrese el nombre completo");

console.log("Su nombre en minuscula es: "+ nom.toLowerCase())
console.log("Su nombre en mayuscula es: "+ nom.toUpperCase())
console.log("Su nombre en xd es: "+ primeramayus(nom)) 
