// Comprueba los ejercicios y explica qué falla.
//   npm test               → todos los módulos
//   npm run test:03        → solo el módulo 03
//   npm run vigilar 03     → el módulo 03, y se repite cada vez que guardas
import { watch } from 'node:fs';
import { join } from 'node:path';
import { MODULOS, RAIZ } from './lib/modulos.js';
import { ejecutarModulo } from './lib/resultados.js';
import { negrita, gris, rojo, verde, amarillo, cian } from './lib/color.js';

const argumentos = process.argv.slice(2);
const vigilar = argumentos.includes('--vigilar');
const numeros = argumentos.filter((a) => !a.startsWith('--')).map((a) => a.padStart(2, '0'));

const elegidos = numeros.length ? MODULOS.filter((m) => numeros.includes(m.numero)) : MODULOS;
if (elegidos.length === 0) {
  console.log(rojo(`No existe el módulo "${numeros.join(', ')}". Prueba con un número del 01 al 08.`));
  process.exit(0);
}

function imprimirModulo({ modulo, ejercicios, consola, errorCarga, colgado }) {
  console.log('\n' + negrita(cian(`━━━ Módulo ${modulo.numero} · ${modulo.titulo} ━━━`)));

  if (modulo.navegador) {
    console.log(`  Este módulo se comprueba en el navegador:`);
    console.log(`     1. Ejecuta ${negrita('npm start')}`);
    console.log(`     2. Abre ${cian('http://localhost:3000/' + modulo.carpeta + '/')}`);
    console.log(`     3. Pulsa el botón ${negrita('Comprobar')} de la esquina inferior derecha`);
    return;
  }

  if (colgado) {
    console.log(rojo('  Los tests no han terminado en 10 segundos: casi seguro que hay un bucle infinito.'));
    console.log(gris('     Revisa las condiciones de tus for y while: ¿llega a dejar de cumplirse alguna vez?'));
    console.log(gris('     Truco: comenta el último ejercicio que has tocado y vuelve a probar.'));
    return;
  }

  if (errorCarga) {
    console.log(rojo('  Error: no se ha podido cargar ejercicios.js. Seguramente hay un error de sintaxis.'));
    console.log(gris('     Lee el mensaje: suele indicar el archivo y la línea.\n'));
    for (const linea of errorCarga.split('\n').filter((l) => l.trim()).slice(0, 12)) {
      console.log('     ' + linea);
    }
    return;
  }

  const primerFallo = ejercicios.find((e) => !e.ok && !e.extra) ?? ejercicios.find((e) => !e.ok);
  for (const ejercicio of ejercicios) {
    const aprobados = ejercicio.casos.filter((c) => c.ok).length;
    const total = ejercicio.casos.length;
    const nombre = ejercicio.extra ? amarillo(ejercicio.nombre) : ejercicio.nombre;

    if (ejercicio.ok) {
      console.log(`  ${verde('✓')} ${nombre}`);
      continue;
    }
    console.log(`  ${rojo('✗')} ${nombre} ${gris(`(${aprobados}/${total} casos)`)}`);

    // Solo damos detalles del siguiente ejercicio y de los que están a medias
    if (ejercicio === primerFallo || aprobados > 0) {
      const fallos = ejercicio.casos.filter((c) => !c.ok);
      const [primero] = fallos;
      if (primero) {
        console.log(rojo(`       ✗ ${primero.nombre}`));
        for (const linea of primero.mensaje.split('\n').slice(0, 6)) console.log(`         ${linea}`);
        if (fallos.length > 1) console.log(gris(`       (+${fallos.length - 1} casos más fallan)`));
      }
    }
  }

  const obligatorios = ejercicios.filter((e) => !e.extra);
  const extras = ejercicios.filter((e) => e.extra);
  const hechos = (lista) => lista.filter((e) => e.ok).length;
  console.log(
    `\n  Obligatorios: ${negrita(`${hechos(obligatorios)}/${obligatorios.length}`)}` +
      gris(' · ') +
      amarillo(`Extra: ${hechos(extras)}/${extras.length}`),
  );

  if (hechos(obligatorios) === obligatorios.length) {
    console.log(verde(`  ¡Módulo completado! Haz commit y pasa al siguiente${extras.length ? ' (o atrévete con los extra)' : ''}.`));
  } else if (primerFallo) {
    console.log(`  Siguiente: ${negrita(primerFallo.nombre)}`);
  }

  if (consola.length) {
    console.log(gris('\n  Salida de tus console.log:'));
    for (const linea of consola.join('').split('\n').filter(Boolean).slice(0, 15)) {
      console.log(gris('     ' + linea));
    }
  }
}

async function comprobar() {
  for (const modulo of elegidos) {
    const resultado = modulo.navegador
      ? { modulo, ejercicios: [], consola: [] }
      : await ejecutarModulo(modulo);
    imprimirModulo(resultado);
  }
  console.log('');
}

await comprobar();

if (vigilar) {
  let temporizador;
  const repetir = () => {
    clearTimeout(temporizador);
    temporizador = setTimeout(async () => {
      console.clear();
      await comprobar();
      console.log(gris('Vigilando cambios… guarda el archivo para volver a comprobar (Ctrl + C para salir)'));
    }, 200);
  };
  for (const modulo of elegidos) watch(join(RAIZ, modulo.carpeta), repetir);
  console.log(gris('Vigilando cambios… guarda el archivo para volver a comprobar (Ctrl + C para salir)'));
}
