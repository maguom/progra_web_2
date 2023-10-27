// Este programa calcula el área de una circunferencia
const radio = parseFloat(prompt("Ingresa el radio de la circunferencia:"));

if (!isNaN(radio)) {
    const area = Math.PI * Math.pow(radio, 2);
    const resultado = "El área de la circunferencia con radio " + radio + " es " + area.toFixed(2);
    document.getElementById('resultado').innerHTML = resultado;
} else {
    const mensajeError = "Por favor, ingresa un valor numérico válido para el radio.";
    document.getElementById('resultado').innerHTML = mensajeError;
}
