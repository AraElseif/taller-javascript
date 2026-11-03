# 02 · Condicionales

**Objetivo:** que tu código tome decisiones.

```bash
npm run test:02
```

---

## if / else if / else

```js
const temperatura = 28;

if (temperatura > 30) {
  console.log('Hace mucho calor');
} else if (temperatura > 20) {
  console.log('Se está bien');      // ← entra aquí
} else {
  console.log('Abrígate');
}
```

Las condiciones se evalúan **de arriba abajo** y solo se ejecuta el **primer** bloque que se cumpla. El orden importa.

## Operadores lógicos

| Operador | Significa | Ejemplo | Resultado |
|---|---|---|---|
| `&&` | Y (las dos) | `edad >= 18 && tieneEntrada` | `true` solo si ambas son `true` |
| `\|\|` | O (alguna) | `esAdmin \|\| esPropietario` | `true` si al menos una es `true` |
| `!` | NO | `!estaBloqueado` | le da la vuelta |

```js
const edad = 20;
const tieneEntrada = false;

if (edad >= 18 && tieneEntrada) {
  console.log('Adelante');
} else {
  console.log('No puedes pasar');   // ← entra aquí
}
```

## Truthy y falsy

En un `if` cualquier valor se convierte en booleano. Estos valores cuentan como `false` (*falsy*):

```js
false, 0, '', null, undefined, NaN
```

Todo lo demás cuenta como `true` (*truthy*): `'hola'`, `42`, `[]`, `{}`…

```js
const nombre = '';
if (!nombre) {
  console.log('Escribe tu nombre');   // '' es falsy → entra
}
```

## Operador ternario

Un `if/else` en una línea, para **elegir entre dos valores**:

```js
const edad = 16;
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
//              condición  ?  si es true      :  si es false
```

## switch

Útil cuando comparas **una misma variable** con muchos valores concretos:

```js
switch (semaforo) {
  case 'verde':
    accion = 'Pasa';
    break;               // ← sin break, sigue ejecutando el siguiente case
  case 'ámbar':
    accion = 'Frena';
    break;
  case 'rojo':
    accion = 'Para';
    break;
  default:
    accion = 'Semáforo roto';
}
```

> **Consejo:** Dentro de una función, `return` también sirve para salir: si haces `return` en un `case`, no necesitas `break`.

## Salir pronto (early return)

En vez de anidar muchos `if`, descarta primero los casos raros:

```js
function dividir(a, b) {
  if (b === 0) {
    return 'No se puede dividir entre 0';
  }
  return a / b;
}
```

---

## Ejercicios

Abre [`ejercicios.js`](ejercicios.js). Hay 6 obligatorios y 2 extra.
