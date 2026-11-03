// Resumen de cómo vas en todo el taller:  npm run progreso
import { MODULOS } from './lib/modulos.js';
import { ejecutarModulo } from './lib/resultados.js';
import { negrita, gris, rojo, verde, amarillo, cian } from './lib/color.js';

const ANCHO_BARRA = 10;
const barra = (hechos, total) => {
  const llenos = total ? Math.round((hechos / total) * ANCHO_BARRA) : 0;
  const texto = '█'.repeat(llenos) + '░'.repeat(ANCHO_BARRA - llenos);
  return hechos === total ? verde(texto) : texto;
};

console.log(negrita('\nTu progreso en el taller\n'));

const resultados = await Promise.all(
  MODULOS.map((modulo) => (modulo.navegador ? { modulo } : ejecutarModulo(modulo))),
);

let totalObligatorios = 0;
let hechosObligatorios = 0;
let totalExtras = 0;
let hechosExtras = 0;
let siguiente = null;

for (const { modulo, ejercicios, errorCarga, colgado } of resultados) {
  const titulo = `${modulo.numero} ${modulo.titulo}`.padEnd(34);

  if (modulo.navegador) {
    console.log(`  ${titulo} ${gris('se comprueba en el navegador (npm start)')}`);
    continue;
  }
  if (colgado) {
    console.log(`  ${titulo} ${rojo('se queda colgado (¿bucle infinito?) → npm run test:' + modulo.numero)}`);
    siguiente ??= `${modulo.numero} ${modulo.titulo} → busca el bucle infinito`;
    continue;
  }
  if (errorCarga) {
    console.log(`  ${titulo} ${rojo('error al cargar ejercicios.js → npm run test:' + modulo.numero)}`);
    siguiente ??= `${modulo.numero} ${modulo.titulo} → arregla el error de sintaxis`;
    continue;
  }

  const obligatorios = ejercicios.filter((e) => !e.extra);
  const extras = ejercicios.filter((e) => e.extra);
  const ok = obligatorios.filter((e) => e.ok).length;
  const okExtra = extras.filter((e) => e.ok).length;

  totalObligatorios += obligatorios.length;
  hechosObligatorios += ok;
  totalExtras += extras.length;
  hechosExtras += okExtra;

  const pendiente = obligatorios.find((e) => !e.ok);
  if (pendiente) siguiente ??= `${modulo.numero} ${modulo.titulo} → ${pendiente.nombre}`;

  console.log(
    `  ${titulo} ${barra(ok, obligatorios.length)}  ${`${ok}/${obligatorios.length}`.padEnd(5)} ` +
      amarillo(`extra ${okExtra}/${extras.length}`),
  );
}

console.log(
  `\n  Total: ${negrita(`${hechosObligatorios}/${totalObligatorios}`)} obligatorios · ` +
    amarillo(`${hechosExtras}/${totalExtras} extra`),
);
if (siguiente) {
  console.log(`  Siguiente: ${cian(siguiente)}\n`);
} else {
  console.log(verde('  ¡Todos los obligatorios hechos! A por el proyecto final.\n'));
}
