
var resultado
var resultado2=0
const num =+ prompt ("Porfvor ingrese el numero positivo o mayor a 0 ");
if(isNaN(num)||num<1|| !Number.isInteger(num)){console.log("ingrese un numero valido ")}
else{
    for(i=1;i<=num;i++){
        resultado = 1/i
        resultado2 =resultado2+resultado
       }console.log(resultado2)}