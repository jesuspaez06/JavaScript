class triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }
    ladomayor() {
        if (this.lado1 >= this.lado2 && this.lado1 >= this.lado3) return this.lado1;
        else if (this.lado2 >= this.lado3 && this.lado2 >= this.lado1) return this.lado2;
        else return this.lado3;
    }

    resuladolados() {
        if (this.lado1 == this.lado2 && this.lado2 == this.lado3) return "equilátero";
        else if (this.lado1 == this.lado2 || this.lado2 == this.lado3 || this.lado1 == this.lado3) return "isósceles";
        else return "escaleno";
    }
}

const triangulo1 = new triangulo(2, 3, 4)
mayor = triangulo1.ladomayor()
resultado = triangulo1.resuladolados()
console.log(`el lado mayor es de ${mayor} y es ${resultado}`)
