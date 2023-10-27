// Este programa calcula el factorial de un número
const numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));

if (!isNaN(numero)) {
    if (numero < 0) {
        console.log("El factorial no está definido para números negativos.");
    } else {
        const factorial = calcularFactorial(numero);
        console.log("El factorial de " + numero + " es " + factorial);
    }
} else {
    console.log("Por favor, ingresa un valor numérico válido.");
}

function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}
