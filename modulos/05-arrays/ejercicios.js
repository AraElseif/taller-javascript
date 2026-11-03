// =============================================================
//  MÓDULO 05 · Arrays
//  Comprueba tu trabajo con:  npm run test:05
//  Reto: intenta resolverlos sin for, solo con métodos de arrays.
// =============================================================

// -------------------------------------------------------------
// Ejercicio 1 · El primero y el último
// Devuelve un array con el primer y el último elemento.
//   primeroYUltimo([1, 2, 3]) → [1, 3]
//   primeroYUltimo(['a'])     → ['a', 'a']
// -------------------------------------------------------------
export function primeroYUltimo(lista) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 2 · Doblar (map)
// Devuelve un array nuevo con cada número multiplicado por 2.
//   dobles([1, 2, 3]) → [2, 4, 6]
// -------------------------------------------------------------
export function dobles(numeros) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 3 · Solo los pares (filter)
//   soloPares([1, 2, 3, 4]) → [2, 4]
// -------------------------------------------------------------
export function soloPares(numeros) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 4 · Gritar nombres
// Devuelve los nombres en mayúsculas.
//   nombresEnMayusculas(['ada', 'linus']) → ['ADA', 'LINUS']
// -------------------------------------------------------------
export function nombresEnMayusculas(nombres) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 5 · El primero que supera el límite (find)
// Devuelve el primer número mayor que el límite, o undefined si no hay ninguno.
//   primeroMayorQue([3, 8, 12, 20], 10) → 12
//   primeroMayorQue([1, 2], 10)         → undefined
// -------------------------------------------------------------
export function primeroMayorQue(numeros, limite) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 6 · ¿Hay algún negativo? (some)
//   hayNegativos([3, -1, 5]) → true
//   hayNegativos([3, 1, 5])  → false
// -------------------------------------------------------------
export function hayNegativos(numeros) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 7 · Sumar todos (reduce) (extra)
//   sumarTodos([1, 2, 3, 4]) → 10
//   sumarTodos([])           → 0
// -------------------------------------------------------------
export function sumarTodos(numeros) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 8 · Ordenar sin estropear (extra)
// Devuelve los números ordenados de menor a mayor
// SIN modificar el array original.
//   ordenarSinTocar([10, 1, 5, 100]) → [1, 5, 10, 100]
// Pista: lee bien la sección "Ordenar" del README. Tiene dos trampas.
// -------------------------------------------------------------
export function ordenarSinTocar(numeros) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 9 · Sin repetidos (extra)
// Devuelve el array sin elementos repetidos, en el orden en que aparecen.
//   sinDuplicados([1, 2, 2, 3, 1]) → [1, 2, 3]
// -------------------------------------------------------------
export function sinDuplicados(lista) {
  // Escribe tu código aquí
}

// -------------------------------------------------------------
// Ejercicio 10 · Palabras largas (extra)
// Devuelve, en un texto separado por espacios, solo las palabras
// que tengan al menos `minimo` letras.
//   palabrasLargas('El taller de JavaScript es genial', 6) → 'taller JavaScript genial'
// Pista: split → filter → join
// -------------------------------------------------------------
export function palabrasLargas(frase, minimo) {
  // Escribe tu código aquí
}

// =============================================================
// Zona de pruebas: node modulos/05-arrays/ejercicios.js
// =============================================================
// console.log(dobles([1, 2, 3]));
