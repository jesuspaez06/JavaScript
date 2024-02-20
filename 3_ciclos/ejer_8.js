const num =+ prompt ("Por favor ingrese un  numero positivo entero: ");
if(isNaN(num)||num<0||num==""||!Number.isInteger(num)){console.log("ingrese un numero valido ")}
else{
    var temp=1
    for(i=0;i<num;i++){
        temp +=temp*i
        console.log(temp)
    }
}