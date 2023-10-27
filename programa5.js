const celsiusInput = prompt("Ingresa la temperatura en grados Celsius:");
const resultado = document.getElementById("resultado");

const celsius = parseFloat(celsiusInput);

if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    resultado.textContent = `La temperatura en Fahrenheit es: ${fahrenheit} °F`;
} else {
    resultado.textContent = "Por favor, ingresa un valor numérico válido en grados Celsius.";
}
