let num=[4,1,5,3,7,6,2,9,8]
num.sort()
let suma = num.reduce((acumulador, elemento) => acumulador + elemento);
console.log("El numero menor es: "+num[0]+" El numero mayor es: "+num[num.length-1])
console.log("el Promedio es: "+ (suma/num.length))
console.log(num)
