// Este programa realiza operaciones aritméticas con números ingresados por el usuario
const numero1 = parseFloat(prompt("Ingresa un número:"));
const numero2 = parseFloat(prompt("Ingresa otro número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;

    const resultado = `
        Suma: ${suma}<br>
        Resta: ${resta}<br>
        Multiplicación: ${multiplicacion}<br>
        División: ${division}
    `;

    document.getElementById('resultado').innerHTML = resultado;
} else {
    document.getElementById('resultado').innerHTML = "Por favor, ingresa números válidos.";
}
