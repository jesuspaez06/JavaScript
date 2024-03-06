var matriz= Array.from({length:5},()=>
Array.from({length:5},(_,index)=> index+1)
);
console.table(matriz)
const sumaPorFila = matriz.map(fila => fila.reduce((acumulador, elemento) => acumulador + elemento, 0));

// Suma de cada columna usando reduce() y forEach()
const sumaPorColumna = matriz.reduce((acumulador, fila) => {
    fila.forEach((elemento, indice) => {
        acumulador[indice] = (acumulador[indice] || 0) + elemento;
    });
    return acumulador;
}, []);

// Organizar los datos en un objeto para mostrarlos con console.table()
const datosTabla = {
    "Suma por fila": sumaPorFila,
    "Suma por columna": sumaPorColumna
};

console.table(datosTabla);