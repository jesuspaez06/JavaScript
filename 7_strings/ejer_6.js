let letra;
function verificacionnombre(mensaje) {
    do { 
        letra = prompt(mensaje).trim();//imprime el mensaje enviado para luego recibirlo y quitarle espacios inesesarios
    } while (letra === '' || !isNaN(letra));//checa si esta vacio o si no es una letra para que no pase
    return letra//retorna el valor que recibio
}
let correo = verificacionnombre("ingrese el correo: ");
let nuevaCadena = correo.replace(/@(.*)/,"@ceu.es"); // Coincide con el punto seguido de cualquier número de letras y lo reemplaza por solo un punto    
console.log(nuevaCadena); 