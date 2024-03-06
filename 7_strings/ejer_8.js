let fecha = prompt("Ingrese los productos de una cesta de la compra, separados por comas") + ",";
for (let i = 0; i < 3; i++) {
    let posicion = fecha.indexOf(",");
    let temporal = fecha.slice(0, posicion);
    fecha = fecha.slice(posicion + 1);//borramos todo lo que hay antes de la posicion diciendo que guarde solo lo que hay despues de la posicion+1
    console.log(temporal);
}
