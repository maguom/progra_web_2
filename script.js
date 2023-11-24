// script.js


document.addEventListener("DOMContentLoaded", function() {

    // Configuración de la animación de palabras (copiada de tu código original)
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
            e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('active');
        });

        // Initial animation
        setTimeout(() => {
            span.classList.add('active');
        }, 150 * (idx + 1)); // Ajusta el tiempo de espera
    });

    // Configuración del formulario (copiada de tu código original)
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombreFormulario = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const clase = document.getElementById('clase').value;
        const mensaje = document.getElementById('mensaje').value;

        const alertMessage = `Datos enviados:\n\nNombre: ${nombreFormulario}\nEmail: ${email}\nTeléfono: ${telefono}\nClase: ${clase}\nMensaje: ${mensaje}`;

        alert(alertMessage);
    });
});

// Función para mostrar/ocultar el footer
function toggleFooter() {
    var footer = document.getElementById('contactFooter');
    footer.style.display = (footer.style.display === 'none' || footer.style.display === '') ? 'block' : 'none';
}
