// Ejecuta los tests de un módulo con el runner de Node (node:test)
// y devuelve los resultados agrupados por ejercicio.
import { run } from 'node:test';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { RAIZ } from './modulos.js';

// Si los tests de un módulo tardan más que esto, casi seguro que hay un bucle infinito
const LIMITE_MS = 10_000;

function mensajeDeError(error) {
  if (!error) return '';
  const causa = error.cause ?? error;
  if (causa.code === 'ERR_ASSERTION' || causa.name === 'AssertionError') {
    // Las versiones recientes de Node añaden una comparación tras el mensaje: nos quedamos solo con el mensaje
    return causa.message.split('\n+ actual - expected')[0].split('\n\n')[0].trim();
  }
  if (causa.message === 'test timed out') return 'El test ha tardado demasiado. ¿Hay una promesa que nunca termina?';
  return `Tu código ha lanzado un error → ${causa.name ?? 'Error'}: ${causa.message}`;
}

export async function ejecutarModulo(modulo) {
  const archivo = join(RAIZ, modulo.carpeta, 'ejercicios.test.js');
  const senal = AbortSignal.timeout(LIMITE_MS);
  const ejercicios = [];
  const consola = [];
  let casos = [];
  let errorCarga = null;

  const flujo = run({ files: [archivo], timeout: 5000, signal: senal });
  for await (const { type, data } of flujo) {
    if (type === 'test:stdout' || type === 'test:stderr') {
      consola.push(data.message);
      continue;
    }
    if (type !== 'test:pass' && type !== 'test:fail') continue;

    const ok = type === 'test:pass';
    if (data.nesting > 0) {
      casos.push({ nombre: data.name, ok, mensaje: ok ? '' : mensajeDeError(data.details?.error) });
      continue;
    }
    // Un "test" de primer nivel que no es un ejercicio = el archivo entero ha fallado
    if (!data.name.includes('Ejercicio')) {
      if (!ok) errorCarga = mensajeDeError(data.details?.error);
      continue;
    }
    ejercicios.push({ nombre: data.name, extra: data.name.endsWith('(extra)'), ok, casos });
    casos = [];
  }

  if (senal.aborted) return { modulo, ejercicios: [], consola, colgado: true };
  if (errorCarga !== null || (ejercicios.length === 0 && consola.length)) {
    // La salida de Node explica mejor el error (archivo, línea y tipo de error)
    errorCarga = consola.length ? limpiarTraza(consola.join('')) : errorCarga;
  }
  return { modulo, ejercicios, consola, errorCarga };
}

// Quita las rutas absolutas y las líneas internas de Node ("at …") para que se lea mejor
function limpiarTraza(texto) {
  const raizUrl = pathToFileURL(RAIZ).href;
  return texto
    .split('\n')
    .filter((linea) => !/^\s+at /.test(linea) && !/^Node\.js v/.test(linea))
    .map((linea) => linea.replaceAll(raizUrl, '').replaceAll(RAIZ, ''))
    .join('\n');
}
