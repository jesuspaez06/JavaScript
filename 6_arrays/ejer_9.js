let alumnos = []

function verificacionnombre(nom) {
    do {
        nom = prompt("Ingrese el primer nombre").trim();
    } while (nom === '' || !isNaN(nom));
    bucle(nom);
}
function bucle(nom) {
    if (nom == "*") {
        estudiantemayor()
        console.log(alumnos)
        return;
    } else {
        verificacionedad(nom);

    }
}
function verificacionedad(nom) {
    do {
        num = prompt("Ingrese la edad").trim();
    } while (num === '' || isNaN(num) || !Number.isInteger(parseFloat(num)));
    guardarestu(nom, num);
}
function guardarestu(nom, num) {
    let nuevoestu = { nombre: nom, edad: parseInt(num) };
    alumnos.push(nuevoestu)
    verificacionnombre(nom)
}
function estudiantemayor() {
    let estudiantesMayores = alumnos.filter(alumno => alumno.edad > 18);
    let nombresEstudiantesMayores = estudiantesMayores.map(alumno => alumno.nombre);
    console.log("Estudiantes con más de 18 años son: " + nombresEstudiantesMayores.join(", "));
    estudiantemax()
}
function estudiantemax() {
    let alumnoMayor = alumnos.reduce((mayor, alumno) => {
        return mayor.edad > alumno.edad ? mayor : alumno;
    });

    console.log("El alumno más mayor es: " + alumnoMayor.nombre + " con " + alumnoMayor.edad + " años.");
}
verificacionnombre();