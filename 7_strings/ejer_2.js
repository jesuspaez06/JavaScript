let letra;
function verificacionnombre(mensaje) {
    do { 
        letra = prompt(mensaje).trim();
    } while (letra === '' || !isNaN(letra));
    return letra
}


let nom = verificacionnombre("Ingrese el nombre");
console.log("Su nombre en mayuscula es: "+ nom.toUpperCase()+ " y la cantidad de letras que tiene es: "+nom.length)
