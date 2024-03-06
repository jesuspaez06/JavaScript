class alumno {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    resultadonota() {
        if (this.nota > 59 && this.nota < 101) {
            alert(`La nota es ${this.nota} y aprobó`);
        } else {
            alert(`La nota es ${this.nota} y reprobó`);
        }
    }
}

const alumno1 = new alumno("jesus", 60);
alumno1.resultadonota();
