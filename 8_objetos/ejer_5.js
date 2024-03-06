class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    resultadonota() {
        if (this.edad > 17) {
            alert(`${this.nombre} tiene ${this.edad} años y ya es mayor de edad`);
        } else {
            alert(`${this.nombre} tiene ${this.edad} años y es menor de edad`);
        }
    }
}

const persona1 = new persona("jesus", 10);
persona1.resultadonota();
