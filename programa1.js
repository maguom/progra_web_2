// Este programa calcula el área de una circunferencia
const radio = parseFloat(prompt("Ingresa el radio de la circunferencia:"));

if (!isNaN(radio)) {
    const area = Math.PI * Math.pow(radio, 2);
    console.log("El área de la circunferencia con radio " + radio + " es " + area.toFixed(2));
} else {
    console.log("Por favor, ingresa un valor numérico válido para el radio.");
}
