# 03 · Bucles

**Objetivo:** repetir cosas sin copiar y pegar.

```bash
npm run test:03
```

---

## for clásico

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);   // 1, 2, 3, 4, 5
}
//   inicio ; condición para seguir ; qué hacer al final de cada vuelta
```

Contando hacia atrás:

```js
for (let i = 3; i > 0; i--) {
  console.log(i);   // 3, 2, 1
}
```

## El patrón acumulador

Muchísimos problemas se resuelven igual: una variable que **empieza en un valor** y **se va actualizando** en cada vuelta.

```js
let total = 0;               // 1. empieza en 0
for (let i = 1; i <= 4; i++) {
  total = total + i;         // 2. se actualiza (también: total += i)
}
console.log(total);          // 3. 10
```

Lo mismo sirve para construir textos:

```js
let resultado = '';
for (let i = 0; i < 3; i++) {
  resultado += '*';
}
// resultado → '***'
```

## for...of

Recorre los elementos de algo "recorrible", como un texto (letra a letra) o un array:

```js
for (const letra of 'hola') {
  console.log(letra);   // 'h', 'o', 'l', 'a'
}
```

Y para acceder a una letra concreta de un texto: `'hola'[0]` → `'h'`, `'hola'.length` → `4`.

## while

Repite **mientras** se cumpla la condición. Úsalo cuando no sabes cuántas vueltas vas a dar:

```js
let numero = 1;
while (numero < 100) {
  numero = numero * 2;
}
console.log(numero);   // 128
```

> **Ojo:** Si la condición nunca deja de cumplirse tendrás un **bucle infinito** y el programa se quedará colgado. Para pararlo: `Ctrl + C` en la terminal.

## break y continue

```js
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue;   // salta esta vuelta y sigue con la siguiente
  if (i === 6) break;      // sale del bucle del todo
  console.log(i);          // 1, 2, 4, 5
}
```

Y dentro de una función, `return` también sale del bucle (y de la función).

---

## Ejercicios

Abre [`ejercicios.js`](ejercicios.js). Hay 4 obligatorios y 4 extra.
