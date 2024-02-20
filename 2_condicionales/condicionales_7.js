const Nota1 = prompt("Ingrese la nota 1");
const Nota2 = prompt("Ingrese la nota 2");
const Nota3 = prompt("Ingrese la nota 3");
const Nota4 = prompt("Ingrese la nota 4");
if (isNaN(Nota1) || isNaN(Nota2) || isNaN(Nota3)|| isNaN(Nota4) || Nota1 < 0 || Nota2 < 0 || Nota3 < 0|| Nota4 < 0||Nota1 == ""||Nota2 == ""||Nota3 == ""||Nota4 == "") {
    alert('Error, ingrese de nuevo los datos');
} else {
const Prom= (parseFloat(Nota1)+parseFloat(Nota2)+parseFloat(Nota3)+parseFloat(Nota4))/4;
const NumAlto = Math.max(Nota1,Nota2,Nota3,Nota4);
const NumBajo = Math.min(Nota1,Nota2,Nota3,Nota4);
console.log("El promedio es ",Prom,  "\nla nota mas alta es ",NumAlto,"\nla nota mas baja es ",NumBajo );
}