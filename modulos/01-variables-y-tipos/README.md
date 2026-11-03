# 01 · Variables, tipos y operadores

**Objetivo:** guardar datos en variables, conocer los tipos básicos y operar con ellos.

```bash
npm run test:01
```

---

## Declarar variables

```js
const nombre = 'Ada';   // const → no se puede reasignar (úsala por defecto)
let edad = 36;          // let   → se puede reasignar
edad = 37;              // bien
nombre = 'Grace';       // error: TypeError: Assignment to constant variable.
```

> **Consejo:** Usa `const` siempre que puedas y `let` solo cuando el valor vaya a cambiar.
> Verás `var` en código antiguo: no la uses, tiene comportamientos raros.

Los nombres de variables se escriben en `camelCase`: `precioFinal`, `esMayorDeEdad`, `numeroDeAlumnos`.

## Tipos básicos

| Tipo | Ejemplos | `typeof` |
|---|---|---|
| Texto (`string`) | `'hola'`, `"hola"`, `` `hola` `` | `'string'` |
| Número (`number`) | `42`, `3.14`, `-7`, `NaN` | `'number'` |
| Booleano (`boolean`) | `true`, `false` | `'boolean'` |
| Sin valor | `undefined` (no asignado), `null` (vacío a propósito) | `'undefined'` / `'object'` (un fallo histórico de JavaScript) |

```js
typeof 'hola';   // 'string'
typeof 42;       // 'number'
typeof '42';     // 'string'  ← ¡las comillas lo convierten en texto!
```

## Operadores

```js
7 + 2    // 9
7 - 2    // 5
7 * 2    // 14
7 / 2    // 3.5
7 % 2    // 1   → resto de la división (muy útil para saber si un número es par)
2 ** 3   // 8   → potencia
```

**Comparaciones** (devuelven `true` o `false`). Usa siempre los de tres caracteres:

```js
5 === 5      // true
5 === '5'    // false → distinto tipo
5 == '5'     // true  → por eso NO usamos ==
5 !== 3      // true
5 > 3, 5 >= 5, 2 < 1, 2 <= 2
```

## Textos

```js
const nombre = 'Ada';
'Hola, ' + nombre + '!'        // concatenar con +
`Hola, ${nombre}!`             // plantilla (template literal) → más cómodo

const texto = '  JavaScript  ';
texto.length          // 14
texto.trim()          // 'JavaScript'   → quita espacios de los extremos
texto.toUpperCase()   // '  JAVASCRIPT  '
texto.toLowerCase()   // '  javascript  '
texto.includes('Java')// true
```

## Convertir entre tipos

```js
Number('42')     // 42
Number('hola')   // NaN (Not a Number)
String(42)       // '42'
'5' + 1          // '51'  ← si hay un texto, + concatena
Number('5') + 1  // 6
```

## Math

```js
Math.round(2.5)   // 3   redondea
Math.floor(2.9)   // 2   redondea hacia abajo
Math.ceil(2.1)    // 3   redondea hacia arriba
Math.max(1, 9, 3) // 9
Math.PI           // 3.141592653589793

// Redondear a 2 decimales:
Math.round(12.3456 * 100) / 100   // 12.35
```

## `return` en 30 segundos

En los ejercicios vas a ver funciones. Las veremos a fondo en el módulo 04; por ahora basta con esto:

```js
export function doble(numero) {   // numero es lo que recibe (la entrada)
  return numero * 2;              // lo que pongas tras return es la respuesta (la salida)
}

doble(5);  // 10
```

> El `export` del principio sirve para que los tests puedan usar tu función. No lo borres.

---

## Probar cosas a mano

Puedes añadir `console.log(...)` al final de `ejercicios.js` y ejecutarlo:

```bash
node modulos/01-variables-y-tipos/ejercicios.js
```

## Ejercicios

Abre [`ejercicios.js`](ejercicios.js). Hay 6 obligatorios y 2 extra.
