// Este programa solicita al usuario ingresar una cadena de texto
const mensaje = prompt("Por favor, ingresa una cadena de texto:");
if (mensaje !== null) {
    const resultado = "Has ingresado la siguiente cadena de texto: " + mensaje;
    document.getElementById('resultado').innerHTML = resultado;
} else {
    document.getElementById('resultado').innerHTML = "No ingresaste ninguna cadena de texto.";
}
