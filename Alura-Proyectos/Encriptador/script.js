// Ajusta la altura del textarea automáticamente
const texto = document.getElementById('texto');
texto.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${Math.min(this.scrollHeight, 440)}px`;
});

// Función para encriptar el texto
function encriptarTexto() {
    const textoValue = document.getElementById('texto').value;

    // Verificar que el texto solo contiene letras minúsculas, espacios y sin acentos ni caracteres especiales
    if (!/^[a-z\s!]*$/.test(textoValue)) {
        alert("El texto debe contener solo letras minúsculas y espacios. Sin acentos ni caracteres especiales.");
        return;
    }
    const claves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Reemplazar cada letra según las claves
    const textoEncriptado = textoValue.split('').map(letra => claves[letra] || letra).join('');
    const respuesta = document.getElementById('respuesta');
    var copiar = document.getElementById('copiar');
    respuesta.innerHTML = textoEncriptado;
    respuesta.style.fontSize = '30px';
    copiar.style.display = 'block';
    texto.value = '';
}

// Función para desencriptar el texto
function desencriptarTexto() {
    const textoEncriptado = document.getElementById('texto').value;


    const claves = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Reemplazar cada clave según las claves de desencriptación
    const textoDesencriptado = textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, matched => claves[matched]);
    var respuesta = document.getElementById('respuesta');
    var copiar = document.getElementById('copiar');
    respuesta.innerHTML = textoDesencriptado;
    respuesta.style.fontSize = '30px';
    copiar.style.display = 'block';
    texto.value = '';
}

function copiarTexto() {
    var texto = document.getElementById("respuesta").innerText;
    navigator.clipboard.writeText(texto).catch(function (error) {
        alert("Error al copiar el texto: " + error);
    });
}
