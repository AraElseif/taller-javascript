# 08 · Asincronía

**Objetivo:** trabajar con cosas que tardan: pedir datos a un servidor, esperar a un temporizador…

> **Si es tu primera vez:** céntrate en `async` / `await`, `try` / `catch` y `fetch`. Es lo que vas a usar en el proyecto. Lo marcado como *(extra)* es para los ejercicios extra.

```bash
npm run test:08
```

---

## El problema

JavaScript no se queda parado esperando. Si algo tarda, sigue con lo siguiente y vuelve cuando haya terminado:

```js
console.log('1');
setTimeout(() => console.log('2'), 1000);   // dentro de 1 segundo
console.log('3');
// Muestra: 1, 3, 2
```

## Promesas

Una **promesa** es un objeto que representa un valor que **llegará en el futuro**. Puede acabar bien (*resolve*) o mal (*reject*).

```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve('¡Listo!'), 1000);
});
```

### Consumirlas con `.then()` / `.catch()` (extra)

```js
obtenerUsuario(1)
  .then((usuario) => console.log(usuario.nombre))
  .catch((error) => console.log('Algo ha fallado:', error.message));
```

### Consumirlas con `async` / `await` (más fácil de leer)

```js
async function mostrarUsuario() {
  const usuario = await obtenerUsuario(1);   // espera aquí sin bloquear nada
  console.log(usuario.nombre);
}
```

- `await` solo funciona dentro de una función `async` (o en el nivel superior de un módulo).
- Una función `async` **siempre devuelve una promesa**.

> **Error típico:** olvidar el `await`. Entonces tienes la promesa, no el valor:
> ```js
> const usuario = obtenerUsuario(1);   // mal: Promise { <pending> }
> usuario.nombre;                      // undefined
> ```

## Errores con `try` / `catch`

```js
async function mostrarUsuario(id) {
  try {
    const usuario = await obtenerUsuario(id);
    console.log(usuario.nombre);
  } catch (error) {
    console.log('No se ha podido cargar:', error.message);
  }
}
```

## Varias a la vez: `Promise.all` (extra)

Si las peticiones no dependen unas de otras, lánzalas **en paralelo**:

```js
// Mal, en serie: 100 ms + 100 ms + 100 ms = 300 ms
const a = await obtenerUsuario(1);
const b = await obtenerUsuario(2);
const c = await obtenerUsuario(3);

// Bien, en paralelo: ~100 ms
const [a, b, c] = await Promise.all([obtenerUsuario(1), obtenerUsuario(2), obtenerUsuario(3)]);

// Con un array de ids:
const usuarios = await Promise.all(ids.map((id) => obtenerUsuario(id)));
```

## `fetch`: pedir datos de verdad

Es lo que usarás en el proyecto final para cargar tus proyectos desde un archivo JSON:

```js
async function cargarProyectos() {
  const respuesta = await fetch('data/proyectos.json');   // 1. pide el archivo
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status}`);         // 2. ¿ha ido bien?
  }
  const proyectos = await respuesta.json();               // 3. convierte el JSON en objetos
  return proyectos;
}
```

Fíjate: **dos** `await`. Uno para la respuesta y otro para leer su contenido.

---

## Ejercicios

Abre [`ejercicios.js`](ejercicios.js). Hay 3 obligatorios y 5 extra.
Usan las funciones de [`api-falsa.js`](api-falsa.js): `obtenerUsuario(id)` y `obtenerPosts(usuarioId)`. Las dos tardan 100 ms en responder.
