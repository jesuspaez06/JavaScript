//Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el 
//método constructor. Calcular después la suma, resta, multiplicación y división. Utilizar un método 
//para cada una e imprimir los resultados obtenidos. Llamar a la clase Calculadora.
class Calcular {
    constructor(num1, num2) {
        //this.personas = personas
        this.num1 = num1
        this.num2 = num2
    }
    calculadora() {
        this.suma()
        this.resta()
        this.multiplicacion()
        this.division()
        alert(`la suma es ${this.suma()}, la resta es ${this.resta()}, la multiplicacion es ${this.multiplicacion()}, la division es ${this.division()}`)

    }
    suma() {
        let suma = this.num1 + this.num2
        return suma
    }
    resta() { 
        let resta = this.num1 - this.num2 
        return resta
    }
    multiplicacion() { 
        let multiplicacion = this.num1 * this.num2 
        return multiplicacion
    }
    division() { 
        let division = this.num1 / this.num2
        return division
    }
}
let num1 = parseInt(prompt("ingrese el numero 1:"));
let num2 = parseInt(prompt("ingrese el numero 2:"));
const miCalculadora = new Calcular(num1,num2);
miCalculadora.calculadora()