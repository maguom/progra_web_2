// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
      return false
    }
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false
      }
    }
    return true;
  }

  // Función para imprimir los primeros "n" números primos
  function imprimirNPrimos(n) {
    var primosEncontrados = 0
    var numeroActual = 2 // Comenzamos con el primer número primo

    while (primosEncontrados < n) {
      if (esPrimo(numeroActual)) {
        document.write(numeroActual + " ")
        primosEncontrados++
      }
      numeroActual++
    }
  }

  var n = parseInt(prompt("Ingrese la cantidad de números primos que desea imprimir"))

  if (!isNaN(n) && n > 0) {
    document.write("Los primeros " + n + " números primos son los siguientes: ")
    imprimirNPrimos(n)
  } else {
    document.write("Por favor, ingrese una cantidad válida de números primos.")
  }