# 00 · Primeros pasos

**Objetivo:** conocer las herramientas antes de programar: la terminal, VS Code, Node y los mensajes de error.

Si ya has programado antes, puedes saltarte este módulo.

---

## La terminal

La terminal es una ventana donde escribes órdenes para el ordenador. En este taller la usarás para ejecutar tu código y para comprobar los ejercicios.

En VS Code se abre con **Terminal → New Terminal** (o **Ctrl + ñ**). Se abre directamente en la carpeta del proyecto.

| Qué quieres hacer | Qué escribes |
|---|---|
| Ver en qué carpeta estás | Mira el texto que hay antes del cursor |
| Ver los archivos de la carpeta | `ls` (o `dir` en Windows) |
| Entrar en una carpeta | `cd nombre-de-la-carpeta` |
| Volver a la carpeta de arriba | `cd ..` |
| Repetir un comando anterior | Flecha **arriba** |
| Completar un nombre a medio escribir | Tecla **Tab** |
| Parar algo que se ha quedado colgado | **Ctrl + C** |

> **Importante:** los comandos del taller (`npm run test:01`, `npm start`…) se lanzan desde la carpeta `taller-javascript`. Si te dice que no encuentra `package.json`, estás en otra carpeta.

## VS Code

- Abre el taller con **File → Open Folder** y elige la carpeta `taller-javascript`.
- A la izquierda tienes el explorador de archivos: desde ahí abres cada módulo.
- **Guarda con Ctrl + S.** Si la pestaña del archivo tiene un punto blanco, hay cambios sin guardar, y el corrector solo ve lo guardado.

## Tu primer programa

Abre [`hola.js`](hola.js) y ejecútalo desde la terminal:

```bash
node modulos/00-primeros-pasos/hola.js
```

Verás en la terminal lo que hay dentro de cada `console.log(...)`. Cambia los textos, guarda y vuelve a ejecutarlo. Así probarás cosas durante todo el taller.

## Cómo se corrigen los ejercicios

Cuando lances `npm run test:01` verás algo así:

```
━━━ Módulo 01 · Variables, tipos y operadores ━━━
  ✓ Ejercicio 1 · Tus primeras variables
  ✗ Ejercicio 2 · ¿De qué tipo es? (0/4 casos)
       ✗ tipoDe('hola') → 'string'
         tipoDe('hola') debería devolver 'string', pero devolvió undefined
       (+3 casos más fallan)
  ✗ Ejercicio 3 · Preséntate (0/2 casos)
  ✗ Ejercicio 4 · Precio con IVA (0/4 casos)
  …

  Obligatorios: 1/6 · Extra: 0/2
  Siguiente: Ejercicio 2 · ¿De qué tipo es?
```

- **✓** el ejercicio está bien. **✗** todavía falla.
- **(0/4 casos)**: cada ejercicio se prueba con varios ejemplos. Aquí no ha pasado ninguno.
- **debería devolver… pero devolvió…**: lo que esperaba el test y lo que ha hecho tu código.
- **devolvió undefined** casi siempre significa que te falta el `return`.
- **Siguiente** te dice en qué ejercicio seguir.

## Leer un error

Equivocarse es normal: lo importante es saber leer el error. Estos son los tres que más verás:

| Error | Qué significa | Qué revisar |
|---|---|---|
| `SyntaxError` | Algo está mal escrito | Paréntesis, llaves o comillas sin cerrar. Mira la línea que indica y la anterior |
| `ReferenceError: x is not defined` | Usas un nombre que no existe | ¿Está bien escrito? Las mayúsculas cuentan: `nombre` y `Nombre` son distintos |
| `TypeError: Cannot read properties of undefined` | Intentas usar algo que no tiene valor | ¿Esa variable tiene el valor que crees? Compruébalo con `console.log` |

El error suele indicar el archivo y la línea, por ejemplo `ejercicios.js:29`. Empieza siempre por ahí.

## Trucos útiles

- **Guarda antes de comprobar.**
- Cada `(`, `{`, `[` y cada comilla que abres, ciérrala.
- Si no sabes qué vale algo, ponle un `console.log(...)` delante.
- `npm run vigilar 01` vuelve a comprobar solo cada vez que guardas.
- Si llevas un rato atascado, pregunta.
