let letra;

function verificacionnombre(mensaje) {
    do { 
        letra = prompt(mensaje).trim();//imprime el mensaje enviado para luego recibirlo y quitarle espacios inesesarios
    } while (letra === '' || !isNaN(letra));//checa si esta vacio o si no es una letra para que no pase
    return letra//retorna el valor que recibio
}
function vocalverificacion(mensaje){
    do { 
        letra = prompt(mensaje).trim();//imprime el mensaje enviado para luego recibirlo y quitarle espacios inesesarios
    } while (letra === '' || !isNaN(letra)|| !'aeiou'.includes(letra));//checa si esta vacio o si no es una letra para que no pase
    return letra//retorna el valor que recibio
}
let frase = verificacionnombre("ingrese la frase: ");
let vocal = vocalverificacion("ingrese la vocal ").toLowerCase();
frase = frase.replace(vocal, vocal.toUpperCase());
console.log(frase)
