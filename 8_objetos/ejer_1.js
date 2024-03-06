function crearCuenta(nombre, saldoInicial) {
    return {
        nombre: nombre,
        saldo: saldoInicial,

        ingreso: function(monto) {
            if (monto > 0 && !isNaN(monto)) {
                this.saldo += monto;
            } else {
                console.log("Error: El monto de ingreso debe ser un número mayor que cero.");
            }
        },

        reintegro: function(monto) {
            if (monto > 0 && !isNaN(monto) && monto <= this.saldo) {
                this.saldo -= monto;
            } else {
                console.log("Error: El monto de reintegro debe ser un número mayor que cero y no puede superar el saldo actual.");
            }
        },

        transferencia: function(monto, cuentaDestino) {
            if (monto > 0 && !isNaN(monto) && monto <= this.saldo) {
                this.saldo -= monto;
                cuentaDestino.ingreso(monto);
                console.log(`Se ha transferido ${monto}$ de ${this.nombre} a ${cuentaDestino.nombre}.`);
            } else {
                console.log("Error: El monto de transferencia debe ser un número mayor que cero y no puede superar el saldo actual.");
            }
        },

        get saldoCuenta() {
            return this.saldo;
        },

        set cobroTarifaMensual(tarifa) {
            this.saldo -= tarifa;
        }
    };
}

let cuentaDePedro = crearCuenta("Pedro", 1000);
let cuentaDeJuanito = crearCuenta("Juanito", 50);

console.log("Saldo inicial de Pedro:", cuentaDePedro.saldoCuenta); // Salida: Saldo inicial de Pedro: 1000
console.log("Saldo inicial de Juanito:", cuentaDeJuanito.saldoCuenta); // Salida: Saldo inicial de Juanito: 0


cuentaDePedro.reintegro(10);
cuentaDeJuanito.reintegro(10);
// Acceder al saldo de la cuenta después del reintegro
console.log("Saldo después del reintegro de pedro:", cuentaDePedro.saldoCuenta); // Salida: Saldo después de la tarifa mensual: 1250
console.log("Saldo después del reintegro de juanito:", cuentaDeJuanito.saldoCuenta); // Salida: Saldo después de la tarifa mensual: 1250


cuentaDePedro.transferencia(100, cuentaDeJuanito);

console.log("Saldo de Pedro después de la transferencia:", cuentaDePedro.saldoCuenta); // Salida: Saldo de Pedro después de la transferencia: 900
console.log("Saldo de Juanito después de la transferencia:", cuentaDeJuanito.saldoCuenta); // Salida: Saldo de Juanito después de la transferencia: 100

// Establecer una tarifa mensual de 50$
cuentaDePedro.cobroTarifaMensual = 50;
cuentaDeJuanito.cobroTarifaMensual = 50;

// Acceder al saldo de la cuenta después de aplicar la tarifa mensual
console.log("Saldo después de la tarifa mensual de pedro:", cuentaDePedro.saldoCuenta); // Salida: Saldo después de la tarifa mensual: 1250
console.log("Saldo después de la tarifa mensual de juanito:", cuentaDeJuanito.saldoCuenta); // Salida: Saldo después de la tarifa mensual: 1250
