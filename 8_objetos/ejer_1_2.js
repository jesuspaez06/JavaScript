class crearCuenta {
   nombre = ""
    saldo =0
    constructor() {
    }
    incrementar(monto) {
        this.saldo += monto;
    }
    reintegro(monto) {
        this.saldo -= monto;
    }
    transferencia(monto,cuentaDestino) {
        this.saldo -= monto;
        cuentaDestino.incrementar(monto);
        console.log(`Se ha transferido ${monto}$ de ${this.nombre} a ${cuentaDestino.nombre}.`);
    }
    getSaldoCuenta() {
        return this.saldo;
    }

    setCobroTarifaMensual(tarifa) {
        this.saldo -= tarifa;
    }

}

let cuentaDePedro = new crearCuenta();
cuentaDePedro.nombre = "Pedro";
cuentaDePedro.saldo = 1000;

let cuentaDeJuanito = new crearCuenta();
cuentaDeJuanito.nombre = "Juanito";
cuentaDeJuanito.saldo = 50;

console.log("Saldo inicial de Pedro:", cuentaDePedro.getSaldoCuenta());
console.log("Saldo inicial de Juanito:", cuentaDeJuanito.getSaldoCuenta());

cuentaDePedro.reintegro(10);
cuentaDeJuanito.reintegro(10);
console.log("Saldo después del reintegro de pedro:", cuentaDePedro.getSaldoCuenta()); // Salida: Saldo después de la tarifa mensual: 1250
console.log("Saldo después del reintegro de juanito:", cuentaDeJuanito.getSaldoCuenta()); // Salida: Saldo después de la tarifa mensual: 1250


cuentaDePedro.transferencia(100, cuentaDeJuanito);
console.log("Saldo de Pedro después de la transferencia:", cuentaDePedro.getSaldoCuenta()); // Salida: Saldo de Pedro después de la transferencia: 900
console.log("Saldo de Juanito después de la transferencia:", cuentaDeJuanito.getSaldoCuenta()); // Salida: Saldo de Juanito después de la transferencia: 100

// Establecer una tarifa mensual de 50$
cuentaDePedro.cobroTarifaMensual = 50;
cuentaDeJuanito.cobroTarifaMensual = 50;
console.log("Saldo después de la tarifa mensual de pedro:", cuentaDePedro.getSaldoCuenta()); // Salida: Saldo después de la tarifa mensual: 1250
console.log("Saldo después de la tarifa mensual de juanito:", cuentaDeJuanito.getSaldoCuenta()); // Salida: Saldo después de la tarifa mensual: 1250
