# 05 · Arrays

**Objetivo:** trabajar con listas de datos. Es **el** módulo clave para la web: casi todo lo que pintarás en pantalla sale de un array.

```bash
npm run test:05
```

---

## Lo básico

```js
const frutas = ['manzana', 'pera', 'uva'];

frutas[0]                 // 'manzana' → los índices empiezan en 0
frutas[frutas.length - 1] // 'uva'     → el último
frutas.length             // 3
frutas.includes('pera')   // true
frutas.indexOf('uva')     // 2  (o -1 si no está)
```

## Añadir y quitar

```js
frutas.push('kiwi');     // añade al final      → ['manzana', 'pera', 'uva', 'kiwi']
frutas.pop();            // quita el último     → ['manzana', 'pera', 'uva']
frutas.unshift('fresa'); // añade al principio  → ['fresa', 'manzana', 'pera', 'uva']
frutas.shift();          // quita el primero    → ['manzana', 'pera', 'uva']
```

> **Ojo:** Estos métodos **modifican** el array original. Los de la siguiente sección, no: devuelven uno nuevo.

## Recorrer

```js
for (const fruta of frutas) {
  console.log(fruta);
}

frutas.forEach((fruta, indice) => {
  console.log(indice, fruta);
});
```

## Los métodos estrella

Reciben un **callback** (módulo 04) que se ejecuta una vez por cada elemento.

### `map` → transformar cada elemento (mismo número de elementos)

```js
const precios = [10, 20, 30];
const conIva = precios.map((precio) => precio * 1.21);
// [12.1, 24.2, 36.3]
```

### `filter` → quedarte con los que cumplen una condición

```js
const edades = [12, 25, 17, 40];
const adultos = edades.filter((edad) => edad >= 18);
// [25, 40]
```

### `find` → el **primero** que cumple la condición (o `undefined`)

```js
const primerAdulto = edades.find((edad) => edad >= 18);
// 25
```

### `some` / `every` → ¿alguno? / ¿todos?

```js
edades.some((edad) => edad < 18);   // true  → hay al menos un menor
edades.every((edad) => edad < 18);  // false → no todos son menores
```

### `reduce` → reducir el array a un único valor (extra)

```js
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
//                            ↑ lo que llevas  ↑ el actual              ↑ valor inicial
// 10
```

Es el patrón acumulador del módulo 03, pero en una línea. **Pon siempre el valor inicial.**

### Encadenar

```js
const total = [5, 12, 8, 20]
  .filter((n) => n > 6)      // [12, 8, 20]
  .map((n) => n * 2)         // [24, 16, 40]
  .reduce((a, n) => a + n, 0); // 80
```

## Ordenar (extra)

```js
const numeros = [10, 1, 5, 100];
numeros.sort();                      // [1, 10, 100, 5] ¡ordena como texto!
numeros.sort((a, b) => a - b);       // [1, 5, 10, 100] bien: de menor a mayor
```

> **Ojo:** `sort` **modifica** el array original. Para no tocarlo, haz antes una copia: `[...numeros].sort(...)`.

## Spread `...` y otros útiles

```js
const a = [1, 2];
const b = [3, 4];
const juntos = [...a, ...b];          // [1, 2, 3, 4]
const copia = [...a];                 // una copia independiente

'uno dos tres'.split(' ');            // ['uno', 'dos', 'tres']  → texto a array
['uno', 'dos', 'tres'].join(', ');    // 'uno, dos, tres'        → array a texto

[...new Set([1, 1, 2, 3, 3])];        // [1, 2, 3]  → quitar repetidos
```

---

## Ejercicios

Abre [`ejercicios.js`](ejercicios.js). Hay 6 obligatorios y 4 extra.
**Reto:** intenta resolverlos sin `for`, solo con los métodos de arrays.
