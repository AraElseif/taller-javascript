// Comprobador automático del módulo 07. No hace falta que lo toques.
// Carga tu página en un marco invisible, simula clics, teclas y envíos,
// y mira si pasa lo que debería. Así no te desordena la página que estás viendo.

const CLAVE_AUTO = 'taller-comprobador-auto';

function exigir(condicion, mensaje) {
  if (!condicion) throw new Error(mensaje);
}

const EJERCICIOS = [
  {
    nombre: 'Ejercicio 1 · Cambiar el título',
    comprobar({ $ }) {
      const texto = $('#titulo').textContent.trim();
      exigir(texto === '¡Hola, DOM!', `#titulo dice "${texto}" y debería decir "¡Hola, DOM!"`);
    },
  },
  {
    nombre: 'Ejercicio 2 · Destacar un párrafo',
    comprobar({ $ }) {
      exigir($('#intro').classList.contains('destacado'), '#intro no tiene la clase "destacado"');
    },
  },
  {
    nombre: 'Ejercicio 3 · Pintar una lista',
    comprobar({ $ }) {
      const esperadas = ['Manzana', 'Plátano', 'Uvas', 'Naranja'];
      const items = [...$('#lista-frutas').querySelectorAll(':scope > li')].map((li) => li.textContent.trim());
      exigir(items.length === esperadas.length, `#lista-frutas tiene ${items.length} <li> y debería tener ${esperadas.length}`);
      exigir(
        esperadas.every((fruta, i) => items[i] === fruta),
        `Los <li> no coinciden con el array frutas. Hay: ${items.join(' | ')}`,
      );
    },
  },
  {
    nombre: 'Ejercicio 4 · Contador',
    comprobar({ $ }) {
      const valor = () => $('#contador').textContent.trim();
      const sumar = $('#btn-sumar');
      sumar.click();
      sumar.click();
      sumar.click();
      exigir(valor() === '3', `Tras 3 clics en +1, el contador muestra "${valor()}" y debería mostrar "3"`);
      $('#btn-reiniciar').click();
      exigir(valor() === '0', `Tras pulsar Reiniciar, el contador muestra "${valor()}" y debería mostrar "0"`);
      sumar.click();
      exigir(
        valor() === '1',
        `Tras reiniciar y pulsar +1, el contador muestra "${valor()}" y debería mostrar "1". ¿Reinicias también la variable, no solo el texto?`,
      );
    },
  },
  {
    nombre: 'Ejercicio 5 · Saludo en directo',
    comprobar({ $, win }) {
      const input = $('#input-nombre');
      const saludo = () => $('#saludo').textContent.trim();
      const escribir = (texto) => {
        input.value = texto;
        input.dispatchEvent(new win.Event('input', { bubbles: true }));
      };
      escribir('Ada');
      exigir(saludo() === 'Hola, Ada', `Al escribir "Ada", #saludo muestra "${saludo()}" y debería mostrar "Hola, Ada"`);
      escribir('Grace Hopper');
      exigir(saludo() === 'Hola, Grace Hopper', `Al escribir "Grace Hopper", #saludo muestra "${saludo()}"`);
      escribir('   ');
      exigir(
        saludo() === 'Hola, desconocido',
        `Si el input solo tiene espacios, #saludo muestra "${saludo()}" y debería mostrar "Hola, desconocido"`,
      );
    },
  },
  {
    nombre: 'Ejercicio 6 · Modo oscuro',
    comprobar({ $, doc }) {
      const boton = $('#btn-tema');
      const antes = doc.body.classList.contains('oscuro');
      boton.click();
      exigir(doc.body.classList.contains('oscuro') !== antes, 'Al pulsar #btn-tema, el <body> no cambia de clase "oscuro"');
      boton.click();
      exigir(
        doc.body.classList.contains('oscuro') === antes,
        'Al pulsar #btn-tema dos veces, el <body> debería volver a como estaba. Pista: classList.toggle',
      );
    },
  },
  {
    nombre: 'Ejercicio 7 · Lista de tareas',
    comprobar({ $, win }) {
      const formulario = $('#form-tarea');
      const input = $('#input-tarea');
      const tareas = () => [...$('#lista-tareas').querySelectorAll(':scope > li')];

      // Este listener se ejecuta después del tuyo: si nadie ha llamado a preventDefault, la página se recargaría
      let recargaria = false;
      const vigilante = (evento) => {
        recargaria = !evento.defaultPrevented;
        evento.preventDefault();
      };
      win.addEventListener('submit', vigilante);
      const enviar = (texto) => {
        input.value = texto;
        formulario.requestSubmit();
      };

      try {
        const antes = tareas().length;
        enviar('  Comprar pan  ');
        exigir(!recargaria, 'Al enviar el formulario la página se recarga. Falta evento.preventDefault()');
        const despues = tareas();
        exigir(despues.length === antes + 1, `Al enviar "Comprar pan" la lista tiene ${despues.length} tareas y debería tener ${antes + 1}`);
        const ultima = despues.at(-1).textContent;
        exigir(ultima.trim() === 'Comprar pan', `La nueva tarea dice "${ultima}" y debería decir "Comprar pan"`);
        exigir(ultima === 'Comprar pan', 'La tarea debería guardarse sin los espacios de los lados. Pista: .trim()');
        exigir(input.value === '', 'Después de añadir la tarea, el input debería quedarse vacío');
        enviar('   ');
        exigir(tareas().length === antes + 1, 'Si el input está vacío (o solo tiene espacios) no se debe añadir ninguna tarea');
      } finally {
        win.removeEventListener('submit', vigilante);
      }
    },
  },
  {
    nombre: 'Ejercicio 8 · Tachar tareas (extra)',
    extra: true,
    comprobar({ $, doc }) {
      // Creamos una tarea "nueva" a mano para ver si la delegación funciona con ella
      const tarea = doc.createElement('li');
      tarea.textContent = 'Tarea de prueba';
      $('#lista-tareas').append(tarea);
      tarea.click();
      exigir(tarea.classList.contains('completada'), 'Al hacer clic en una tarea nueva, no se le añade la clase "completada"');
      tarea.click();
      exigir(!tarea.classList.contains('completada'), 'Al hacer clic otra vez en la tarea, debería quitarse la clase "completada"');
    },
  },
];

async function cargarMarco() {
  const marco = document.createElement('iframe');
  marco.src = `${location.pathname}?comprobador=${Date.now()}`;
  marco.setAttribute('aria-hidden', 'true');
  marco.style.cssText = 'position:fixed;left:-10000px;top:0;width:1000px;height:800px;visibility:hidden;border:0';
  const cargado = new Promise((resolve) => marco.addEventListener('load', resolve, { once: true }));
  document.body.append(marco);
  await cargado;
  await new Promise((resolve) => setTimeout(resolve, 50));
  return marco;
}

async function ejecutar() {
  const marco = await cargarMarco();
  const win = marco.contentWindow;
  const doc = marco.contentDocument;
  const $ = (selector) => {
    const elemento = doc.querySelector(selector);
    if (!elemento) throw new Error(`No encuentro ${selector} en la página. ¿Has cambiado index.html?`);
    return elemento;
  };

  const erroresAlCargar = [...(win.__erroresDelTaller ?? [])];
  const resultados = [];
  for (const ejercicio of EJERCICIOS) {
    const erroresAntes = win.__erroresDelTaller?.length ?? 0;
    try {
      await ejercicio.comprobar({ $, doc, win });
      resultados.push({ ...ejercicio, ok: true });
    } catch (error) {
      const nuevos = (win.__erroresDelTaller ?? []).slice(erroresAntes);
      const mensaje = nuevos.length ? `${error.message}. Además, tu código ha lanzado: ${nuevos[0]}` : error.message;
      resultados.push({ ...ejercicio, ok: false, mensaje });
    }
  }
  marco.remove();
  return { resultados, erroresAlCargar };
}

// ---------- Panel ----------

const ESTILOS = `
  .cmp-panel { position: fixed; right: 16px; bottom: 16px; z-index: 99999; width: min(380px, calc(100vw - 32px));
    font: 14px/1.4 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; color: #1d1d2b; }
  .cmp-boton { all: unset; cursor: pointer; display: inline-flex; gap: .4rem; align-items: center; float: right;
    background: #1d1d2b; color: #fff; padding: .6rem 1rem; border-radius: 999px; box-shadow: 0 6px 20px rgba(0,0,0,.25); font-weight: 600; }
  .cmp-boton:focus-visible { outline: 3px solid #8b8bf0; outline-offset: 2px; }
  .cmp-caja { clear: both; margin-bottom: .6rem; background: #fff; border: 1px solid #e3e3ee; border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0,0,0,.18); max-height: 60vh; overflow: auto; }
  .cmp-cabecera { display: flex; justify-content: space-between; align-items: center; padding: .75rem 1rem; border-bottom: 1px solid #e3e3ee; font-weight: 700; }
  .cmp-cerrar { all: unset; cursor: pointer; padding: 0 .3rem; font-size: 1.1rem; color: #5b5b70; }
  .cmp-lista { list-style: none; margin: 0; padding: .5rem 1rem; }
  .cmp-lista li { padding: .35rem 0; font-weight: 500; }
  .cmp-ok { color: #1f8a55; }
  .cmp-fallo { color: #1d1d2b; }
  .cmp-mensaje { display: block; margin: .2rem 0 0 1.6rem; color: #b42318; font-size: 13px; }
  .cmp-aviso { margin: .75rem 1rem 0; padding: .6rem .75rem; background: #fff4e5; border-radius: 8px; color: #8a4b00; font-size: 13px; }
  .cmp-resumen { padding: .6rem 1rem .9rem; border-top: 1px solid #e3e3ee; color: #5b5b70; }
  .cmp-resumen strong { color: #1d1d2b; }
`;

function crear(etiqueta, clase, texto) {
  const elemento = document.createElement(etiqueta);
  if (clase) elemento.className = clase;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
}

function iniciarPanel() {
  const estilo = crear('style');
  estilo.textContent = ESTILOS;
  document.head.append(estilo);

  const panel = crear('div', 'cmp-panel');
  const caja = crear('div', 'cmp-caja');
  caja.hidden = true;
  const boton = crear('button', 'cmp-boton', 'Comprobar');
  boton.type = 'button';
  panel.append(caja, boton);
  document.body.append(panel);

  async function comprobar() {
    boton.disabled = true;
    boton.textContent = 'Comprobando…';
    const { resultados, erroresAlCargar } = await ejecutar();
    pintar(resultados, erroresAlCargar);
    boton.disabled = false;
    boton.textContent = 'Volver a comprobar';
    try {
      sessionStorage.setItem(CLAVE_AUTO, '1');
    } catch {}
  }

  function pintar(resultados, erroresAlCargar) {
    caja.replaceChildren();
    const cabecera = crear('div', 'cmp-cabecera', 'Comprobador · Módulo 07');
    const cerrar = crear('button', 'cmp-cerrar', '×');
    cerrar.type = 'button';
    cerrar.setAttribute('aria-label', 'Cerrar el comprobador');
    cerrar.addEventListener('click', () => {
      caja.hidden = true;
      boton.textContent = 'Comprobar';
      try {
        sessionStorage.removeItem(CLAVE_AUTO);
      } catch {}
    });
    cabecera.append(cerrar);
    caja.append(cabecera);

    if (erroresAlCargar.length) {
      caja.append(
        crear(
          'p',
          'cmp-aviso',
          `Atención: tu código ha lanzado un error al cargar: "${erroresAlCargar[0]}". Los ejercicios que van después no se han ejecutado. Abre la consola (F12) para ver en qué línea.`,
        ),
      );
    }

    const lista = crear('ul', 'cmp-lista');
    for (const r of resultados) {
      const item = crear('li', r.ok ? 'cmp-ok' : 'cmp-fallo', `${r.ok ? '✓' : '✗'} ${r.nombre}`);
      if (!r.ok) item.append(crear('span', 'cmp-mensaje', r.mensaje));
      lista.append(item);
    }
    caja.append(lista);

    const obligatorios = resultados.filter((r) => !r.extra);
    const extras = resultados.filter((r) => r.extra);
    const hechos = (lista) => lista.filter((r) => r.ok).length;
    const resumen = crear('div', 'cmp-resumen');
    resumen.append('Obligatorios: ', crear('strong', '', `${hechos(obligatorios)}/${obligatorios.length}`), ` · Extra: ${hechos(extras)}/${extras.length}`);
    if (hechos(obligatorios) === obligatorios.length) resumen.append(crear('div', '', '¡Módulo completado! Haz commit y pasa al siguiente.'));
    caja.append(resumen);
    caja.hidden = false;
  }

  boton.addEventListener('click', comprobar);

  // Si ya lo habías usado, vuelve a comprobar solo al recargar la página
  let auto = false;
  try {
    auto = sessionStorage.getItem(CLAVE_AUTO) === '1';
  } catch {}
  if (auto) comprobar();
}

if (window.top === window) iniciarPanel();
