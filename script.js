// script.js

// Función para mostrar un mensaje de bienvenida
function mostrarMensajeBienvenida() {
    alert("¡Bienvenido a las clases de baile salsa con Guss!");
}

// Asigna eventos a los elementos necesarios
document.addEventListener("DOMContentLoaded", function () {
    // Asigna la función mostrarMensajeBienvenida al evento click del título
    var titulo = document.querySelector("h1");
    titulo.addEventListener("click", mostrarMensajeBienvenida);

    // Puedes agregar más funciones y eventos según sea necesario
});
