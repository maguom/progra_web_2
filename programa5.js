// Este programa combina operaciones aritméticas y manipulación de cadenas de texto
const numero = parseFloat(prompt("Ingresa un número:"));
const texto = prompt("Ingresa una palabra o frase:");

const duplicado = numero * 2;
const mensaje = "El doble de " + numero + " es " + duplicado + ". Tu mensaje es: " + texto;

console.log(mensaje);
