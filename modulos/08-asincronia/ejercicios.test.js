// Tests del módulo 08. No hace falta que toques este archivo.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { casos, funcion, igual, mostrar } from '../../herramientas/lib/ayudas-test.js';
import { obtenerUsuario } from './api-falsa.js';
import * as ej from './ejercicios.js';

function esPromesa(valor, descripcion) {
  assert.ok(
    valor && typeof valor.then === 'function',
    `${descripcion} debería devolver una promesa, pero devolvió ${mostrar(valor)}`,
  );
}

async function cronometrar(fn) {
  const inicio = performance.now();
  const resultado = await fn();
  return { resultado, ms: performance.now() - inicio };
}

describe('Ejercicio 1 · Esperar', () => {
  it('devuelve una promesa', () => {
    const promesa = funcion(ej, 'esperar')(10);
    esPromesa(promesa, 'esperar(10)');
  });
  it('esperar(150) tarda unos 150 ms', async () => {
    const { ms } = await cronometrar(() => funcion(ej, 'esperar')(150));
    assert.ok(ms >= 140, `esperar(150) ha terminado en ${Math.round(ms)} ms: demasiado pronto`);
    assert.ok(ms < 1000, `esperar(150) ha tardado ${Math.round(ms)} ms: demasiado`);
  });
});

describe('Ejercicio 2 · Nombre de usuario', () => {
  casos(ej, 'nombreDeUsuario', [
    [[1], 'Ada Lovelace'],
    [[3], 'Grace Hopper'],
  ]);
});

describe('Ejercicio 3 · Si falla, \'Anónimo\'', () => {
  casos(ej, 'nombreOAnonimo', [
    [[2], 'Alan Turing'],
    [[99], 'Anónimo'],
  ]);
});

describe('Ejercicio 4 · Contar posts', () => {
  casos(ej, 'contarPosts', [
    [[1], 2],
    [[2], 1],
    [[3], 3],
    [[99], 0],
  ]);
});

describe('Ejercicio 5 · Todos a la vez', () => {
  casos(ej, 'nombresEnParalelo', [
    [[[1, 3]], ['Ada Lovelace', 'Grace Hopper']],
    [[[3, 2, 1]], ['Grace Hopper', 'Alan Turing', 'Ada Lovelace']],
    [[[]], []],
  ]);
  it('hace las peticiones en paralelo', async () => {
    const { resultado, ms } = await cronometrar(() => funcion(ej, 'nombresEnParalelo')([1, 2, 3]));
    igual(resultado, ['Ada Lovelace', 'Alan Turing', 'Grace Hopper'], 'nombresEnParalelo([1, 2, 3])');
    assert.ok(
      ms < 250,
      `Ha tardado ${Math.round(ms)} ms. En paralelo deberían ser unos 100 ms: ¿estás esperando las peticiones una a una?`,
    );
  });
});

describe('Ejercicio 6 · Ficha de usuario', () => {
  casos(ej, 'resumenUsuario', [
    [[1], { nombre: 'Ada Lovelace', totalPosts: 2 }],
    [[3], { nombre: 'Grace Hopper', totalPosts: 3 }],
  ]);
});

describe('Ejercicio 7 · A la antigua: .then() (extra)', () => {
  it("primerTitulo(2) → '¿Pueden pensar las máquinas?' (sin async)", async () => {
    const fn = funcion(ej, 'primerTitulo');
    const promesa = fn(2);
    esPromesa(promesa, 'primerTitulo(2)');
    igual(await promesa, '¿Pueden pensar las máquinas?', 'primerTitulo(2)');
    assert.notEqual(fn.constructor.name, 'AsyncFunction', 'Funciona, pero has usado async: en este ejercicio toca hacerlo con .then()');
  });
  it("primerTitulo(1) → 'Notas sobre la máquina analítica'", async () => {
    const promesa = funcion(ej, 'primerTitulo')(1);
    esPromesa(promesa, 'primerTitulo(1)');
    igual(await promesa, 'Notas sobre la máquina analítica', 'primerTitulo(1)');
  });
});

describe('Ejercicio 8 · Tiempo límite (extra)', () => {
  it('devuelve el valor si llega a tiempo', async () => {
    const promesa = funcion(ej, 'conTiempoLimite')(obtenerUsuario(1), 500);
    esPromesa(promesa, 'conTiempoLimite(obtenerUsuario(1), 500)');
    igual(await promesa, { id: 1, nombre: 'Ada Lovelace' }, 'conTiempoLimite(obtenerUsuario(1), 500)');
  });
  it("se rechaza con 'Tiempo agotado' si tarda demasiado", async () => {
    const promesa = funcion(ej, 'conTiempoLimite')(obtenerUsuario(1), 10);
    esPromesa(promesa, 'conTiempoLimite(obtenerUsuario(1), 10)');
    await assert.rejects(promesa, { message: 'Tiempo agotado' }, "conTiempoLimite(obtenerUsuario(1), 10) debería rechazarse con new Error('Tiempo agotado')");
  });
});
