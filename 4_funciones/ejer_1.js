const parflecha = (num) => num%2==0 ?`es par`:`es impar` ;
do {num = prompt("Por favor ingrese el numero ");
} while (num.trim() === '' || isNaN(num.trim()) || +num.trim() == 0);
console.log(parflecha(num));
