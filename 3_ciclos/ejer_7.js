var cont=0
for (let i = 1; i < 6; i++) {
    const nota =+ prompt ("Por favor ingrese la nota: ");
    if(isNaN(nota)||nota<0||nota>5||nota==""){console.log("ingrese un numero valido ")
break}
    else{
        if(nota>2.9){
        cont +=1
        }
        
    }
    if(i==5){console.log("la cantidad de estudiantes que pasaron la nota con 3 o mas son: "+ cont);}
}
