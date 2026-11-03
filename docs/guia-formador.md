# Guía para quien imparte el taller

Notas para preparar y dirigir el taller. El alumnado no necesita leer esto (aunque no pasa nada si lo hace: no hay soluciones aquí).

## Resumen

- **Público:** alumnado en prácticas, sin experiencia previa en JavaScript (o muy poca).
- **Formato por módulo:** una explicación breve en directo y después ejercicios que se corrigen solos.
- **Resultado:** cada persona termina con su portfolio funcionando y, quien quiera, publicado en GitHub Pages.
- **Ritmo:** cada módulo tiene ejercicios obligatorios y extra. Los extra absorben la diferencia de nivel: quien va rápido no se aburre y quien va lento no se queda atrás en lo esencial.

## Antes del taller

- [ ] El repositorio es **público** (para que puedan hacer fork).
- [ ] Los equipos tienen **Node 20 o superior** y **Git** (`node --version`, `git --version`).
- [ ] Prueba en un equipo de alumno: `npm run test:01` (debe salir todo en rojo) y `npm start` (debe abrir el servidor).
- [ ] Cada persona tiene cuenta de GitHub y sabe su contraseña.
- [ ] Ten la versión resuelta a mano (ver abajo) para enseñar el resultado final al empezar.

## Soluciones

Todas las soluciones están en la rama **`soluciones`**: los ejercicios de los 8 módulos resueltos y el portfolio completo con los 3 niveles.

```bash
git switch soluciones      # cambiar a las soluciones
npm run progreso           # debería salir todo en verde
git switch main            # volver
```

- Ver la solución de un módulo concreto: `git diff main soluciones -- modulos/03-bucles/ejercicios.js`
- Ver todas las diferencias en GitHub: [comparar `main` con `soluciones`](https://github.com/GonJimenezCampos/taller-javascript/compare/main...soluciones)
- Al hacer fork, GitHub copia por defecto **solo la rama `main`**, así que el alumnado no tendrá las soluciones en su copia (aunque podría verlas en el repo original: funciona por confianza).

## Guion

### Bienvenida y preparación

1. Enseña el **resultado final** para motivar: en la rama `soluciones`, `npm start` → <http://localhost:3000/proyecto-final/>.
2. Fork + clonar + `npm run test:01`. Que todo el mundo vea la pantalla en rojo.
3. Resuelve tú en directo el **ejercicio 2 del módulo 01** (`tipoDe`) para enseñar el ciclo: leer el mensaje → escribir código → volver a comprobar → verde.
4. Enseña `npm run progreso` y `npm run vigilar 01`.

### 01 · Variables, tipos y operadores

- **En directo:** `const` vs `let` (provoca el error de reasignar una `const`), `typeof '42'`, plantillas con `${}`, el operador `%`, redondear a 2 decimales.
- **Errores típicos:** poner comillas a los números; usar `=` en vez de `===`; borrar el `export` (el corrector avisa: "No encuentro la función…").
- El ejercicio 1 tiene trampas a propósito (`'25'` y `'true'` son textos): buen momento para hablar de tipos.

### 02 · Condicionales

- **En directo:** `calificar` con `if/else if` y mostrar que **el orden importa**; `&&`, `||`, `!`; el ternario.
- **Errores típicos:** escribir `nota > 5 && < 7` (falta repetir `nota`); el orden de las condiciones en FizzBuzz; `switch` sin `break`/`return`.

### 03 · Bucles

- **En directo:** el **patrón acumulador** con `sumarHasta`. Es la idea más importante del módulo (y la base de `reduce` en el 05).
- **Errores típicos:** `<` vs `<=` (uno de más o de menos); el acumulador del factorial empezando en 0; **bucles infinitos** (el corrector los corta y avisa).

### 04 · Funciones

- **En directo:** las tres sintaxis; un callback con `aplicar`; un closure con el ejemplo de la hucha del README.
- **Errores típicos:**
  - `console.log` en lugar de `return`.
  - Flecha con llaves y sin `return`: `(x) => { x * 2 }` devuelve `undefined`. **Es el error más común del taller**, aparecerá también en `map` y `filter`.
- Los closures (ejercicio 6) cuestan: si alguien no lo pilla del todo, que siga. Lo importante para la web son los callbacks.

### 05 · Arrays (el módulo clave)

- **En directo:** con un array de precios: `map`, `filter`, `reduce` y encadenarlos. Después, la trampa de `sort` (`[10, 1, 5, 100].sort()`).
- **Errores típicos:** callback con llaves sin `return`; `reduce` sin valor inicial (falla con arrays vacíos); `sort` modificando el original.
- Si vais con retraso, que no se salten este: es lo que más van a usar en el proyecto.

### 06 · Objetos y JSON

- **En directo:** objeto `persona`, punto vs corchetes, desestructuración, spread. Después un **array de proyectos** (puente directo al portfolio) y `JSON.stringify` / `JSON.parse`.
- **Errores típicos:** modificar el objeto en vez de copiarlo; `find` devuelve `undefined` y el ejercicio pide `null` (`?? null`).
- Los ejercicios 6 y 8 se reutilizan tal cual en el proyecto final.

### 07 · DOM y eventos

- **Este módulo es en el navegador:** `npm start` y abrir <http://localhost:3000/modulos/07-dom-y-eventos/>.
- **En directo:** pestaña *Elements* de las DevTools; `document.querySelector` en la consola; cambiar un texto; `addEventListener('click')`; un formulario con `preventDefault`.
- **El comprobador** (botón abajo a la derecha) carga la página en un iframe invisible, simula clics, escritura y envíos, y muestra qué falla. Tras usarlo una vez, se vuelve a lanzar solo cada vez que recargan.
- **Errores típicos:**
  - Selector mal escrito → `Cannot read properties of null`.
  - Olvidar `preventDefault` → la página se recarga y la tarea "desaparece".
  - Confundir `value` (inputs) con `textContent` (el resto).
  - Declarar dos veces la misma `const` en el archivo (`Identifier 'x' has already been declared`): **no se ejecuta nada**. El comprobador lo avisa arriba del todo.

### 08 · Asincronía

- **En directo:** el orden `1, 3, 2` con `setTimeout`; `obtenerUsuario` con `.then` y luego con `async/await`; `try/catch`; `Promise.all`. Para terminar, haz un `fetch('/proyecto-final/data/proyectos.json')` en la consola del navegador: es justo lo que harán en el proyecto.
- **Errores típicos:** olvidar el `await` (`Promise { <pending> }`); hacer los `await` uno detrás de otro cuando podían ir en paralelo (el test del ejercicio 5 lo comprueba).
- **Si vais con retraso, este es el módulo que hay que recortar:** ejercicios 1 a 4 y al proyecto. Del proyecto solo necesitan `fetch` (paso 1.6), que viene explicado en el README.

### Proyecto final

- Vuelve a enseñar la versión terminada y recorre `proyecto-final/js/main.js` por encima: cada paso es una función con instrucciones.
- **Nivel 1 es el mínimo.** La mayoría hará parte del Nivel 2. El Nivel 3 es para quien vaya rápido.
- Quien quiera hacer otra web en vez del portfolio puede, con los requisitos mínimos del README del proyecto. Ayúdales a recortar el alcance para que sea realista.
- **Errores típicos:**
  - Abrir `index.html` con doble clic (`file://`): los módulos y `fetch` no funcionan. Siempre con `npm start`.
  - Romper el JSON (una coma de más, comillas simples): `fetch` falla al hacer `.json()`. Mirar la consola.
  - Rutas: `fetch('data/proyectos.json')` es relativo a la **página HTML**, no al archivo `.js`.
- Antes de terminar, que todo el mundo haga commit y push, aunque no haya acabado. Quien pueda, que publique en GitHub Pages (instrucciones en el README del proyecto; el repo incluye `.nojekyll` para que Pages sirva los archivos tal cual).

### Demos y cierre

- Una demo breve por persona: qué ha hecho, algo de lo que esté orgulloso/a, algo que le haya costado.
- Cierre: recursos para seguir (al final del README principal) y qué viene después en las prácticas.

## Si vais con retraso

Reglas generales: **ningún ejercicio extra**, y pasa de módulo cuando la mayoría del grupo tenga los obligatorios. El resto puede terminarlos mientras explicas el siguiente.

| Bloque | Qué recortar |
|---|---|
| 02 y 03 | Juntarlos en una sola explicación; del 03 basta con los ejercicios 1–4 |
| 04 | El 6 (closure) se explica pero es opcional |
| 05 | Nada: es el módulo clave |
| 06 | Quedarse con los ejercicios 1, 3, 5, 6 y 8 |
| 08 | Solo los ejercicios 1–4 |
| Proyecto | Nivel 1 + filtros y buscador (pasos 2.1–2.4) |

## Cómo seguir el ritmo del grupo

- Pide que lancen `npm run progreso` de vez en cuando: muestra barras por módulo y el siguiente ejercicio pendiente.
- Si alguien se queda muy atrás, ponlo a trabajar en pareja (*pair programming*) con alguien que vaya bien: uno escribe, el otro dice qué escribir, y cambian cada ejercicio.
- Los commits al final de cada módulo te permiten ver en GitHub cómo va cada fork.

## Evaluación del proyecto (opcional)

| Criterio | 0 | 1 | 2 |
|---|---|---|---|
| Nivel 1 | Incompleto | Funciona con algún fallo | Completo y sin errores en consola |
| Nivel 2 | Nada | 1–3 pasos | 4 o más pasos |
| Código | Difícil de leer | Se entiende | Nombres claros, funciones pequeñas |
| Personalización | Datos de ejemplo | Sus datos | Sus datos y su estilo |
| Demo | No explica | Enseña lo que ha hecho | Explica cómo ha resuelto un problema |

## Problemas típicos

| Síntoma | Causa | Solución |
|---|---|---|
| `No se puede cargar el archivo …\npm.ps1 porque la ejecución de scripts está deshabilitada` | Política de ejecución de PowerShell en Windows | En VS Code, abrir una terminal **Command Prompt** o **Git Bash** en vez de PowerShell (o `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`) |
| Errores raros al lanzar cualquier `npm run` | Node antiguo | Instalar Node 20 o superior |
| La página sale sin estilos, "Failed to load module script" o errores de CORS | Abierta con doble clic (`file://`) | `npm start` y abrir la URL que imprime |
| No se ven los cambios | Caché del navegador | F5 (el servidor desactiva la caché); si no, Ctrl + F5 |
| El puerto 3000 está ocupado | Otro servidor abierto | El servidor prueba solo el siguiente puerto: usar la URL que imprime |
| "Se queda colgado (¿bucle infinito?)" | Bucle infinito | Revisar las condiciones de `for`/`while` |
| Módulo 07: no funciona nada | Error en un ejercicio anterior o `const` repetida | Consola (F12). El comprobador muestra el primer error |
| `git push` pide usuario y contraseña | Primera vez en ese equipo | Iniciar sesión en la ventana del navegador que abre Git |

## Cómo está montado (por si quieres cambiar algo)

- Cada módulo tiene `ejercicios.js` (lo que edita el alumnado) y `ejercicios.test.js` (tests con `node:test`, sin dependencias).
- Cada `describe('Ejercicio N · …')` es un ejercicio. Si el nombre termina en `(extra)`, cuenta como extra.
- `herramientas/comprobar.js` ejecuta los tests y traduce los resultados a mensajes claros; `herramientas/progreso.js` hace el resumen; `herramientas/servidor.js` es un servidor estático mínimo.
- Para añadir un ejercicio: añade la función en `ejercicios.js`, un `describe` en el test y la solución en la rama `soluciones`.
- También puedes lanzar los tests "a pelo", con el reporter estándar de Node: `node --test modulos/03-bucles/ejercicios.test.js`.
