let letra;
function verificacionnombre(mensaje) {
    do { 
        letra = prompt(mensaje).trim();//imprime el mensaje enviado para luego recibirlo y quitarle espacios inesesarios
    } while (letra === '' || !isNaN(letra));//checa si esta vacio o si no es una letra para que no pase
    return letra//retorna el valor que recibio
}
let frase = verificacionnombre("ingrese la frase: ");
let palabraalrevez=  frase.split("").reverse().join("");
console.log(palabraalrevez)