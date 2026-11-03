# 07 · DOM y eventos

**Objetivo:** usar JavaScript para cambiar una página web y reaccionar a lo que hace el usuario.

Este módulo se hace **en el navegador**:

```bash
npm start
```

Abre <http://localhost:3000/modulos/07-dom-y-eventos/>, abre las herramientas de desarrollo con **F12** (pestaña *Console*) y edita [`ejercicios.js`](ejercicios.js). Cada vez que guardes, recarga la página (**F5**). Cuando quieras comprobar, pulsa el botón **Comprobar** de la esquina inferior derecha.

> **Consejo:** ¿Por qué hace falta `npm start`? Los navegadores no dejan usar `import` ni `fetch` en archivos abiertos con doble clic (`file://`). Con un servidor local, sí.

---

## ¿Qué es el DOM?

Cuando el navegador lee tu HTML, construye un **árbol de objetos** (el DOM: *Document Object Model*). JavaScript puede leer y modificar ese árbol, y la página cambia al instante.

```
document
└── html
    ├── head
    └── body
        ├── h1#titulo
        └── ul#lista
            ├── li
            └── li
```

## Seleccionar elementos

```js
const titulo = document.querySelector('#titulo');       // por id → el primero que coincida
const boton = document.querySelector('.boton');          // por clase
const parrafo = document.querySelector('main p');        // cualquier selector CSS
const items = document.querySelectorAll('li');           // TODOS los que coincidan (una lista)

items.forEach((item) => console.log(item.textContent));
```

Si `querySelector` no encuentra nada devuelve `null`, y lo siguiente que hagas fallará con *Cannot read properties of null*. Revisa el selector.

## Cambiar contenido, clases y estilos

```js
titulo.textContent = 'Nuevo título';            // texto (seguro)
caja.innerHTML = '<strong>Hola</strong>';       // HTML (ojo: nunca con texto que escriba un usuario)

titulo.classList.add('destacado');              // añadir clase
titulo.classList.remove('destacado');           // quitar clase
titulo.classList.toggle('destacado');           // poner si no está, quitar si está
titulo.classList.contains('destacado');         // ¿la tiene?

enlace.href = 'https://developer.mozilla.org';  // atributos
input.value                                     // lo que hay escrito en un input
titulo.style.color = 'tomato';                  // estilos (mejor usar clases)
```

## Crear elementos

```js
const item = document.createElement('li');   // 1. crear
item.textContent = 'Nuevo elemento';         // 2. rellenar
lista.append(item);                          // 3. meter en la página

item.remove();                               // quitarlo
lista.innerHTML = '';                        // vaciar un contenedor
```

Pintar un array en la página (¡lo harás en el proyecto final!):

```js
const nombres = ['Ada', 'Grace', 'Linus'];
for (const nombre of nombres) {
  const li = document.createElement('li');
  li.textContent = nombre;
  lista.append(li);
}
```

## Eventos

```js
boton.addEventListener('click', () => {
  console.log('¡Me han pulsado!');
});
```

| Evento | Cuándo ocurre |
|---|---|
| `click` | al hacer clic |
| `input` | cada vez que cambia el texto de un input |
| `submit` | al enviar un formulario |
| `keydown` | al pulsar una tecla |
| `mouseenter` / `mouseleave` | al entrar / salir con el ratón |

El callback recibe un objeto **evento** con información útil:

```js
input.addEventListener('input', (evento) => {
  console.log(evento.target.value);   // evento.target → el elemento que lo ha provocado
});
```

### Formularios: `preventDefault`

Por defecto, enviar un formulario **recarga la página**. Para gestionarlo con JavaScript:

```js
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();   // que no recargue
  // …tu código
});
```

### Delegación de eventos

En vez de poner un listener en cada `<li>` (y en los que se creen después), ponlo **en el padre** y mira dónde se ha hecho clic:

```js
lista.addEventListener('click', (evento) => {
  if (evento.target.tagName === 'LI') {
    evento.target.classList.toggle('marcado');
  }
});
```

---

## Ejercicios

Abre [`ejercicios.js`](ejercicios.js) y mira [`index.html`](index.html) para conocer los `id` de cada elemento. Hay 7 obligatorios y 1 extra.

> **Ojo:** Todo el código está en un mismo archivo: si un ejercicio lanza un error, **los siguientes no se ejecutan**. Mira siempre la consola (F12).
