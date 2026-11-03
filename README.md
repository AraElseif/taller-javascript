# Taller de JavaScript: de cero a tu primera web

Ocho módulos y un proyecto final. Empezarás guardando un número en una variable y terminarás con **tu propio portfolio publicado en internet**.

Cada módulo tiene una teoría exprés con ejemplos y unos ejercicios que se **corrigen solos**: escribes código, lanzas un comando y ves qué está bien y qué falla (y por qué).

## Contenido

| Bloque | Qué vas a aprender |
|---|---|
| Preparación | Tu copia del repo, Node y tu primer test |
| [01 · Variables, tipos y operadores](modulos/01-variables-y-tipos/) | `let`, `const`, textos, números, booleanos |
| [02 · Condicionales](modulos/02-condicionales/) | `if`, `else`, `switch`, `&&`, `\|\|` |
| [03 · Bucles](modulos/03-bucles/) | `for`, `while`, `for...of` |
| [04 · Funciones](modulos/04-funciones/) | Funciones flecha, callbacks, closures |
| [05 · Arrays](modulos/05-arrays/) | `map`, `filter`, `reduce`, `find`… |
| [06 · Objetos y JSON](modulos/06-objetos/) | Objetos, desestructuración, JSON |
| [07 · DOM y eventos](modulos/07-dom-y-eventos/) | Cambiar la página, clics, formularios |
| [08 · Asincronía](modulos/08-asincronia/) | Promesas, `async`/`await`, `fetch` |
| [Proyecto final](proyecto-final/) | Tu portfolio (o lo que tú quieras) |
| Demos | Enseña lo que has hecho |

> Cada módulo tiene ejercicios **obligatorios** y ejercicios **extra** para quien vaya rápido. Si te atascas, pide ayuda o pasa al siguiente y vuelve después.

---

## Preparación

### 1. Lo que necesitas

- [Node.js](https://nodejs.org) **20 o superior** (descarga la versión LTS)
- [Git](https://git-scm.com)
- [VS Code](https://code.visualstudio.com) (u otro editor)
- Una cuenta de [GitHub](https://github.com)

Compruébalo en una terminal:

```bash
node --version
```

```bash
git --version
```

### 2. Tu copia del taller

1. Entra en [el repositorio del taller](https://github.com/GonJimenezCampos/taller-javascript) y pulsa **Fork** (arriba a la derecha) para crear tu copia.
2. Clónala en tu ordenador (cambia `TU-USUARIO` por tu usuario de GitHub):

   ```bash
   git clone https://github.com/TU-USUARIO/taller-javascript.git
   ```

3. Entra en la carpeta y ábrela con VS Code:

   ```bash
   cd taller-javascript
   ```

   ```bash
   code .
   ```

4. Abre la terminal de VS Code (**Ctrl + ñ** o *Terminal → New Terminal*) y lanza:

   ```bash
   npm run test:01
   ```

   Verás una lista de ejercicios marcados en rojo. **Es lo esperado.** Tu trabajo es ponerlos en verde.

> No hace falta `npm install`: el taller no tiene dependencias.

---

## Cómo se trabaja en cada módulo

1. Lee el `README.md` del módulo (teoría exprés con ejemplos).
2. Abre su `ejercicios.js` y escribe tu código donde pone `Escribe tu código aquí`.
3. Comprueba con `npm run test:01` (cambia el número por el del módulo).
4. Lee el mensaje: te dice **qué esperaba** y **qué ha recibido**. Corrige y repite.
5. Cuando acabes el módulo, guarda tu avance en Git:

   ```bash
   git add .
   git commit -m "Módulo 01 completado"
   git push
   ```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run test:01` … `npm run test:08` | Comprueba los ejercicios de un módulo |
| `npm run vigilar 01` | Igual, pero vuelve a comprobar solo cada vez que guardas |
| `npm run progreso` | Resumen de cómo vas en todo el taller |
| `npm test` | Comprueba todos los módulos |
| `npm start` | Servidor local para ver las páginas web (módulo 07 y proyecto final) |
| `node ruta/al/archivo.js` | Ejecuta un archivo (útil para probar cosas con `console.log`) |

## Qué hay en el repositorio

```
taller-javascript/
├── modulos/
│   ├── 01-variables-y-tipos/   ← README.md (teoría) + ejercicios.js (tu código) + tests
│   ├── 02-condicionales/
│   ├── …
│   ├── 07-dom-y-eventos/       ← este se hace en el navegador
│   └── 08-asincronia/
├── proyecto-final/             ← tu portfolio
├── herramientas/               ← corrector, servidor… (no hace falta tocarlo)
└── docs/guia-formador.md       ← notas para quien imparte el taller
```

---

## Normas del taller

- **Pregunta.** Atascarse es parte de aprender, pero no te quedes bloqueado: pide ayuda.
- **Lee los errores.** Casi siempre dicen exactamente qué pasa y en qué línea.
- **Escribe tú el código.** El objetivo es que tu cabeza haga el trabajo: nada de copiar soluciones. Entender por qué funciona vale más que tenerlo hecho.
- **La documentación es tu amiga.** [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript) es la referencia.
- **Haz commit al terminar cada módulo.**
- **¿Vas rápido?** Haz los ejercicios extra o ayuda a quien tengas al lado: explicar algo es la mejor forma de aprenderlo.

## Para seguir aprendiendo

- [MDN · JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript): la referencia.
- [javascript.info](https://es.javascript.info): el mejor tutorial gratuito, en español.
- [Eloquent JavaScript](https://eloquentjavascript.net): un libro gratuito para ir más a fondo.
