let numerostring ="1,2,3,4,5"
let array=numerostring.split(",").map(numero => parseFloat(numero));
console.log (array)