// Ayudas para que los tests den mensajes claros en español.
// No hace falta que mires este archivo para hacer el taller.
import { it } from 'node:test';
import assert from 'node:assert/strict';
import { inspect } from 'node:util';

export function mostrar(valor) {
  if (typeof valor === 'function') return 'una función';
  return inspect(valor, { depth: 5, breakLength: Infinity });
}

// Comprueba que el ejercicio exporta una función con ese nombre y la devuelve
export function funcion(modulo, nombre) {
  const valor = modulo[nombre];
  if (!(nombre in modulo)) {
    assert.fail(`No encuentro la función "${nombre}" en ejercicios.js. ¿La has borrado, renombrado o le has quitado el export?`);
  }
  assert.equal(typeof valor, 'function', `"${nombre}" debería ser una función, pero vale ${mostrar(valor)}`);
  return valor;
}

export function igual(actual, esperado, descripcion) {
  assert.deepStrictEqual(
    actual,
    esperado,
    `${descripcion} debería devolver ${mostrar(esperado)}, pero devolvió ${mostrar(actual)}`,
  );
}

// Crea un test por cada fila de la tabla: [[argumentos], resultadoEsperado]
export function casos(modulo, nombre, tabla) {
  for (const [argumentos, esperado] of tabla) {
    const llamada = `${nombre}(${argumentos.map(mostrar).join(', ')})`;
    it(`${llamada} → ${mostrar(esperado)}`, async () => {
      const fn = funcion(modulo, nombre);
      let resultado = fn(...argumentos);
      if (resultado instanceof Promise) resultado = await resultado;
      igual(resultado, esperado, llamada);
    });
  }
}
