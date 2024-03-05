const parflecha = (num) => num%2==0 ?`es par`:`es impar` ;
do {num = prompt("Por favor ingrese el numero ").trim();
} while (num === '' || isNaN(num) || +num == 0);
console.log(parflecha(num));
