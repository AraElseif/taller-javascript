// Tests del módulo 03. No hace falta que toques este archivo.
import { describe } from 'node:test';
import { casos } from '../../herramientas/lib/ayudas-test.js';
import * as ej from './ejercicios.js';

describe('Ejercicio 1 · Sumar hasta n', () => {
  casos(ej, 'sumarHasta', [
    [[1], 1],
    [[5], 15],
    [[100], 5050],
    [[0], 0],
  ]);
});

describe('Ejercicio 2 · Factorial', () => {
  casos(ej, 'factorial', [
    [[0], 1],
    [[1], 1],
    [[5], 120],
    [[10], 3628800],
  ]);
});

describe('Ejercicio 3 · Contar vocales', () => {
  casos(ej, 'contarVocales', [
    [['hola'], 2],
    [['JavaScript'], 3],
    [['xyz'], 0],
    [['AEIOU aeiou'], 10],
  ]);
});

describe('Ejercicio 4 · Darle la vuelta a un texto', () => {
  casos(ej, 'invertirTexto', [
    [['hola'], 'aloh'],
    [['JavaScript'], 'tpircSavaJ'],
    [['a'], 'a'],
    [[''], ''],
  ]);
});

describe('Ejercicio 5 · ¿Es primo?', () => {
  casos(ej, 'esPrimo', [
    [[2], true],
    [[3], true],
    [[4], false],
    [[17], true],
    [[97], true],
    [[100], false],
    [[1], false],
    [[0], false],
  ]);
});

describe('Ejercicio 6 · Contar dígitos', () => {
  casos(ej, 'contarDigitos', [
    [[7], 1],
    [[42], 2],
    [[100], 3],
    [[12345], 5],
    [[0], 1],
  ]);
});

describe('Ejercicio 7 · Cuenta atrás (extra)', () => {
  casos(ej, 'cuentaAtras', [
    [[3], '3, 2, 1, ¡despegue!'],
    [[1], '1, ¡despegue!'],
    [[0], '¡despegue!'],
  ]);
});

describe('Ejercicio 8 · Escalera (extra)', () => {
  casos(ej, 'dibujarEscalera', [
    [[1], '#'],
    [[3], '#\n##\n###'],
    [[5], '#\n##\n###\n####\n#####'],
  ]);
});
