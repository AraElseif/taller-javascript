// Tests del módulo 05. No hace falta que toques este archivo.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { casos, funcion, igual } from '../../herramientas/lib/ayudas-test.js';
import * as ej from './ejercicios.js';

describe('Ejercicio 1 · El primero y el último', () => {
  casos(ej, 'primeroYUltimo', [
    [[[1, 2, 3]], [1, 3]],
    [[['manzana', 'pera', 'uva', 'kiwi']], ['manzana', 'kiwi']],
    [[['a']], ['a', 'a']],
  ]);
});

describe('Ejercicio 2 · Doblar (map)', () => {
  casos(ej, 'dobles', [
    [[[1, 2, 3]], [2, 4, 6]],
    [[[-5, 0, 10]], [-10, 0, 20]],
    [[[]], []],
  ]);
});

describe('Ejercicio 3 · Solo los pares (filter)', () => {
  casos(ej, 'soloPares', [
    [[[1, 2, 3, 4]], [2, 4]],
    [[[1, 3, 5]], []],
    [[[10, 11, 12]], [10, 12]],
  ]);
});

describe('Ejercicio 4 · Gritar nombres', () => {
  casos(ej, 'nombresEnMayusculas', [
    [[['ada', 'linus']], ['ADA', 'LINUS']],
    [[['Grace']], ['GRACE']],
    [[[]], []],
  ]);
});

describe('Ejercicio 5 · El primero que supera el límite (find)', () => {
  casos(ej, 'primeroMayorQue', [
    [[[3, 8, 12, 20], 10], 12],
    [[[50, 1], 10], 50],
  ]);
  it('primeroMayorQue([1, 2], 10) → undefined', () => {
    const primeroMayorQue = funcion(ej, 'primeroMayorQue');
    igual(primeroMayorQue([1, 20], 10), 20, 'primeroMayorQue([1, 20], 10)');
    igual(primeroMayorQue([1, 2], 10), undefined, 'primeroMayorQue([1, 2], 10)');
  });
});

describe('Ejercicio 6 · ¿Hay algún negativo? (some)', () => {
  casos(ej, 'hayNegativos', [
    [[[3, -1, 5]], true],
    [[[3, 1, 5]], false],
    [[[]], false],
  ]);
});

describe('Ejercicio 7 · Sumar todos (reduce) (extra)', () => {
  casos(ej, 'sumarTodos', [
    [[[1, 2, 3, 4]], 10],
    [[[5]], 5],
    [[[]], 0],
  ]);
});

describe('Ejercicio 8 · Ordenar sin estropear (extra)', () => {
  casos(ej, 'ordenarSinTocar', [
    [[[3, 1, 2]], [1, 2, 3]],
    [[[10, 1, 5, 100]], [1, 5, 10, 100]],
  ]);
  it('no modifica el array original', () => {
    const original = [10, 1, 5, 100];
    const resultado = funcion(ej, 'ordenarSinTocar')(original);
    igual(resultado, [1, 5, 10, 100], 'ordenarSinTocar([10, 1, 5, 100])');
    assert.deepEqual(original, [10, 1, 5, 100], 'Has modificado el array original. Ordena una copia: [...numeros]');
  });
});

describe('Ejercicio 9 · Sin repetidos (extra)', () => {
  casos(ej, 'sinDuplicados', [
    [[[1, 2, 2, 3, 1]], [1, 2, 3]],
    [[['a', 'b', 'a']], ['a', 'b']],
    [[[]], []],
  ]);
});

describe('Ejercicio 10 · Palabras largas (extra)', () => {
  casos(ej, 'palabrasLargas', [
    [['El taller de JavaScript es genial', 6], 'taller JavaScript genial'],
    [['Hola mundo', 5], 'mundo'],
    [['a b c', 2], ''],
  ]);
  it('funciona con cualquier mínimo', () => {
    igual(funcion(ej, 'palabrasLargas')('uno dos tres', 1), 'uno dos tres', "palabrasLargas('uno dos tres', 1)");
  });
});
