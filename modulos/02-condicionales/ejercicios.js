// =============================================================
//  MÓDULO 02 · Condicionales
//  Comprueba tu trabajo con:  npm run test:02
// =============================================================

// -------------------------------------------------------------
// Ejercicio 1 · ¿Mayor de edad?
// Devuelve true si la edad es 18 o más, y false si no.
//   esMayorDeEdad(18) → true
//   esMayorDeEdad(17) → false
// -------------------------------------------------------------
export function esMayorDeEdad(edad) {
  // Escribe tu código aquí
  return edad >= 18;
}

// -------------------------------------------------------------
// Ejercicio 2 · Poner nota
// Devuelve la calificación según la nota:
//   menos de 5        → 'Suspenso'
//   de 5 a menos de 7 → 'Aprobado'
//   de 7 a menos de 9 → 'Notable'
//   de 9 a 10         → 'Sobresaliente'
//   menor que 0 o mayor que 10 → 'Nota no válida'
// Pista: descarta primero las notas no válidas.
// -------------------------------------------------------------
export function calificar(nota) {
  // Escribe tu código aquí
  if (nota < 0 || nota > 10) {
    return 'Nota no válida';
  } else if (nota >= 9) {
    return 'Sobresaliente';
  } else if (nota >= 7) {
    return 'Notable';
  } else if (nota >= 5) {
    return 'Aprobado';
  } else {
    return 'Suspenso';
  }
}

// -------------------------------------------------------------
// Ejercicio 3 · Precio de la entrada
// El cine cobra según la edad:
//   menores de 4 años → 0 (gratis)
//   de 4 a 17 años    → 5
//   65 años o más     → 6
//   el resto          → 10
// -------------------------------------------------------------
export function precioEntrada(edad) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 4 · Control de acceso
// Un usuario puede entrar si es administrador O propietario,
// Y además NO está bloqueado. Devuelve true o false.
//   accesoPermitido(true, false, false) → true
//   accesoPermitido(true, true, true)   → false (está bloqueado)
// Pista: && || ! (y paréntesis)
// -------------------------------------------------------------
export function accesoPermitido(esAdmin, esPropietario, estaBloqueado) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 5 · Día de la semana
// Recibes un número del 1 al 7 y devuelves el nombre del día en minúsculas
// (1 → 'lunes' … 7 → 'domingo'). Cualquier otro número → 'desconocido'.
// Usa switch.
// -------------------------------------------------------------
export function nombreDelDia(numero) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 6 · FizzBuzz (un clásico de las entrevistas)
// Devuelve:
//   'FizzBuzz' si el número es múltiplo de 3 y de 5
//   'Fizz'     si es múltiplo de 3
//   'Buzz'     si es múltiplo de 5
//   el propio número COMO TEXTO en cualquier otro caso
// Pista: el orden de las condiciones importa.
// -------------------------------------------------------------
export function fizzBuzz(numero) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 7 · Signo de un número (extra)
// Devuelve 'positivo', 'negativo' o 'cero'.
// Reto: hazlo en una sola línea con el operador ternario (puedes encadenar dos).
// -------------------------------------------------------------
export function signo(numero) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 8 · Año bisiesto (extra)
// Un año es bisiesto si es divisible entre 4,
// EXCEPTO los divisibles entre 100, que solo lo son si también son divisibles entre 400.
//   esBisiesto(2024) → true
//   esBisiesto(1900) → false
//   esBisiesto(2000) → true
// -------------------------------------------------------------
export function esBisiesto(anio) {
  // Escribe tu código aquí
}

// =============================================================
// Zona de pruebas: node modulos/02-condicionales/ejercicios.js
// =============================================================
// console.log(calificar(7.5));
