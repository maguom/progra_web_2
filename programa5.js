// Este programa combina operaciones aritméticas y manipulación de cadenas de texto de manera interactiva

// Solicitar al usuario que ingrese un número
const numero = parseFloat(prompt("Por favor, ingresa un número:"));

if (!isNaN(numero)) {
    // Si el usuario ingresó un número válido, pedir una cadena de texto
    const texto = prompt("Ahora ingresa una palabra o frase:");

    // Comprobar si el usuario ingresó una cadena de texto
    if (texto !== null) {
        const duplicado = numero * 2;
        const mensaje = `El doble de ${numero} es ${duplicado}. Tu mensaje es: ${texto}`;
        console.log(mensaje);
    } else {
        console.log("No ingresaste una cadena de texto válida.");
    }
} else {
    console.log("Por favor, ingresa un valor numérico válido para el número.");
}
