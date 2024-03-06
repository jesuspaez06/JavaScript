const personas = [
  { nombre: "juan", telefono: "3033333900", email: "juan1992@hotmail.com" },
  { nombre: "pedro", telefono: "3033333802", email: "pedro1998@hotmail.com" },
  { nombre: "María", telefono: "3043433700", email: "marialuisa@hotmail.com" },
  { nombre: "Ana", telefono: "3055333300", email: "anapeñaranda@hotmail.com" },
  { nombre: "María", telefono: "3044933200", email: "maria2001@hotmail.com" }
];

// Buscar todas las personas con nombre "María"
const personasMaria = personas.filter(persona => persona.nombre === "María");

if (personasMaria.length > 0) {
  console.log("Personas encontradas:", personasMaria);
} else {
  console.log("No se encontraron personas con nombre María");
}
