let array=[1,1,2,2,3,3,4,4,5,5]
let temp=[]
function verificacion() {
    let num;
    do {
        num = prompt("Ingrese un numero ");
        num=num.trim()
    } while (num === '' || isNaN(num));

    encontrarindex(Number(num));
}
function encontrarindex(num){
for (i=1; i<array.length; i++){
    var indice = array.findIndex(elemento => elemento == num);
    if (indice!=-1){
        temp.push(indice)
    array[indice]="";
    
    }
}
imprimir(temp)
}
function imprimir(temp){
    if (temp.length === 0){console.log("ningun elemento del array concide con el ingresado")}
    else{console.log(temp)}
}
verificacion()