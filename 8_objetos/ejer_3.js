class cuenta{
    constructor(nombre, saldoInicial){
        this.nombre= nombre
        this.saldo =0
        this.saldo+=saldoInicial
    }
    setIngresarCantidad(monto) {
        if (monto >0)this.saldo += monto;
    }
    setRetirarCantidad(monto) {
        if(monto>this.saldo)this.saldo=0
        else this.saldo -= monto;
    }
    toString(){
        let mensaje=`el saldo final de ${this.nombre} es de ${this.saldo}`
        return mensaje
    }
    getMensaje() {
        return this.toString();
    }
}  
function verificacion(nombre, saldoInicial) {
    if (nombre !== "")return new cuenta(nombre, saldoInicial);
}

let cuentaDePedro = new verificacion("pedro", 1000);
let cuentaDeJuanito = new verificacion("juanito", 50);

cuentaDePedro.setIngresarCantidad(-50);
cuentaDeJuanito.setIngresarCantidad(20);

cuentaDePedro.setRetirarCantidad(10);
cuentaDeJuanito.setRetirarCantidad(100);


console.log(cuentaDePedro.getMensaje());
console.log(cuentaDeJuanito.getMensaje()); 