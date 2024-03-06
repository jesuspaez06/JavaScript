let personas = [
    { nombre: "juan", telefono: "3033333900", email: "juan1992@hotmail.com" },
    { nombre: "pedro", telefono: "3033333802", email: "pedro19@hotmail.com" },
    { nombre: "María", telefono: "3043433700", email: "mariaa@hotmail.com" },
    { nombre: "Ana", telefono: "3055333300", email: "ana@hotmail.com" },
    { nombre: "luis", telefono: "3044933200", email: "luis2001@hotmail.com" },
    { nombre: "juan", telefono: "4032233124", email: "gamerjuan@gmail.com" }
]

class agenda {
    constructor( num, nombre, telefono, email) {
        //this.personas = personas
        this.num = num
        this.nombre = nombre
        this.telefono = telefono
        this.email = email
    }
    menu() {
        do {
            this.num = prompt("Elija alguna de las opciones mediante los numeros mencionados \n1. Añadir contacto \n2. Lista de contactos \n3. Buscar contacto \n4. Editar contacto \n5. Cerrar agenda").trim()
        } while (this.num === '' || isNaN(this.num) || this.num < 1 || this.num > 5);
        if (this.num == 1) this.añadirContacto()
        if (this.num == 2) this.listarContactos()
        if (this.num == 3) this.buscarContacto()
        if (this.num == 4) this.editarContacto()
        if (this.num == 5) this.cerrarAgenda()



    }
    añadirContacto() {
        this.nombre = prompt("ingrese el nombre")
        this.telefono = prompt("ingrese el telefono")
        this.email = prompt("ingrese el correo")
        const persona = { nombre: this.nombre, telefono: this.telefono, email: this.email }
        personas.push(persona)
        this.menu()
    }
    mostrar(){
        const personasString = personas.map(persona => `Nombre: ${persona.nombre}, Teléfono: ${persona.telefono}, Email: ${persona.email}`).join('\n');
        return personasString
    }
    listarContactos() {
        const lista = this.mostrar();
        alert(lista)
        this.menu()
    }
    buscarContacto() {
        const buscarnombre = prompt("Ingrese el nombre de la persona que quiere buscar")
        const personaBuscar = personas.filter(personas => personas.nombre == buscarnombre)
        if (personaBuscar.length > 0) {
            const mensaje = personaBuscar.map(persona => `Nombre: ${persona.nombre}, Teléfono: ${persona.telefono}, Email: ${persona.email}`).join('\n');
            alert(mensaje);
        } else {
            alert("No se encontraron personas con ese nombre");
        }
        this.menu()
    }
    editarContacto() {
        const lista = this.mostrar();
       const buscarTelefono = prompt( `${lista} \nIngrese el numero del telefono de la persona que quiere editar:`)
        const personaBuscar = personas.findIndex(persona => persona.telefono == buscarTelefono);
        if (personaBuscar != -1) {
            this.nombre = prompt("ingrese el nombre")
            this.telefono = prompt("ingrese el telefono")
            this.email = prompt("ingrese el correo")

            personas[personaBuscar].nombre = this.nombre
            personas[personaBuscar].telefono = this.telefono
            personas[personaBuscar].email = this.email

            const personasString2 = personas.map(persona => `Nombre: ${persona.nombre}, Teléfono: ${persona.telefono}, Email: ${persona.email}`).join('\n');
            alert(personasString2)
        } else {
            alert("No se encontraron personas con ese telefono");
        }
        this.menu()
    }
    cerrarAgenda() {
        return
    }
}
const miAgenda = new agenda(personas);
miAgenda.menu()