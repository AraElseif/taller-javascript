# Proyecto final · Tu portfolio

**Objetivo:** juntar todo lo aprendido en una web real que puedas enseñar (y publicar).

```bash
npm start
```

Abre <http://localhost:3000/proyecto-final/> y la consola del navegador (**F12**). Trabaja en [`js/main.js`](js/main.js): cada paso es una función con instrucciones. Completa una, guarda, recarga (**F5**) y mira el resultado.

El HTML y el CSS ya están hechos para que te centres en JavaScript. Pero es **tu** portfolio: cambia colores (variables al principio de [`css/estilos.css`](css/estilos.css)), textos y lo que quieras.

---

## Nivel 1 · Lo básico (obligatorio)

| Paso | Qué haces | Qué repasas |
|---|---|---|
| 1.1 | Pon tus datos en [`js/datos.js`](js/datos.js) y tus proyectos en [`data/proyectos.json`](data/proyectos.json) | Objetos, arrays, JSON |
| 1.2 | `pintarAnio()` → el año en el pie | DOM |
| 1.3 | `pintarPerfil()` → nombre, rol, intro e iniciales | DOM, métodos de texto y arrays |
| 1.4 | `pintarSobreMi()` → párrafos, email y redes | Crear elementos |
| 1.5 | `pintarHabilidades()` → habilidades con barra de nivel | Bucles + DOM |
| 1.6 | `cargarProyectos()` → `fetch` del JSON | Asincronía |
| 1.7 | `crearTarjetaProyecto()` → la tarjeta de un proyecto | Plantillas, condicionales |
| 1.8 | `pintarProyectos()` → todas las tarjetas | Bucles + DOM |

**Al acabar el Nivel 1** tienes una web completa con tus datos y tus proyectos.

## Nivel 2 · Interactividad

| Paso | Qué haces | Qué repasas |
|---|---|---|
| 2.1 | `obtenerTecnologias()` → lista sin repetir | Módulo 06, ejercicio 7 |
| 2.2 | `filtrarProyectos()` → aplica filtro y búsqueda | `filter`, `includes` |
| 2.3 | `pintarFiltros()` → botones de tecnologías | Eventos |
| 2.4 | `activarBuscador()` → buscar mientras escribes | Evento `input` |
| 2.5 | `pintarContador()` → "Mostrando 3 de 5 proyectos" | Plantillas |
| 2.6 | `validarContacto()` → reglas de validación | Condicionales, objetos |
| 2.7 | `activarFormulario()` → errores y mensaje de éxito | Evento `submit` |

## Nivel 3 · Extras (elige)

- **3.1 · Modo oscuro** que se recuerda al volver (`localStorage`).
- **3.2 · Animaciones** al hacer scroll (`IntersectionObserver`).
- **3.3 · Ventana de detalle** de cada proyecto (`<dialog>`).
- **3.4 · Publicar en internet** con GitHub Pages (más abajo).

### Más ideas

- Un efecto de "máquina de escribir" en tu rol.
- Ordenar los proyectos (destacados primero, por nombre…).
- Guardar el borrador del formulario de contacto en `localStorage` para no perderlo al recargar.
- Un botón "volver arriba" que aparezca al hacer scroll.
- Tu foto o un avatar en la sección de inicio.

---

## Publicar en GitHub Pages

1. Sube tus cambios: `git add .`, `git commit -m "Mi portfolio"`, `git push`.
2. En GitHub, en **tu** repositorio: **Settings → Pages**.
3. En *Build and deployment* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y pulsa **Save**.
4. Cuando GitHub termine de publicarlo, tu portfolio estará en:
   `https://TU-USUARIO.github.io/taller-javascript/proyecto-final/`

> Si más adelante quieres el portfolio en su propio repositorio, copia la carpeta `proyecto-final` a un repo nuevo y publícalo igual.

---

## ¿Prefieres hacer otra cosa?

¡Adelante! Puedes hacer otra web (una app de recetas, un juego de memoria, un quiz, un gestor de gastos, la web de un grupo de música…). Para que cuente como proyecto final, tiene que tener **como mínimo**:

- [ ] Datos en un **array de objetos** (mejor si se cargan de un `.json` con `fetch`).
- [ ] Esos datos **pintados en la página** con JavaScript.
- [ ] Al menos **dos tipos de eventos** distintos (`click`, `input`, `submit`…).
- [ ] Algún **filtro, búsqueda u orden** sobre los datos.
- [ ] Algo que se **guarde en `localStorage`**.

Coméntalo antes con quien imparte el taller para que el alcance sea realista. Puedes crear tu carpeta junto a `proyecto-final/` y reutilizar su estructura.
