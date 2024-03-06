let fechaarray = ["dia ", "mes ", "año "];
let fecha = prompt("Ingrese fecha de su nacimiento en formato dd/mm/aaaa ") + "/";
for (let i = 0; i < 3; i++) {
    let posicion = fecha.indexOf("/");
    let temporal = fecha.slice(0, posicion);
    fecha = fecha.slice(posicion + 1);//borramos todo lo que hay antes de la posicion diciendo que guarde solo lo que hay despues de la posicion+1
    console.log(fechaarray[i] + temporal);
}
