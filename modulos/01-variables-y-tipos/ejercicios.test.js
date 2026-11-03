// Tests del módulo 01. No hace falta que toques este archivo.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { casos, mostrar } from '../../herramientas/lib/ayudas-test.js';
import * as ej from './ejercicios.js';

describe('Ejercicio 1 · Tus primeras variables', () => {
  it('nombre es un texto con algo dentro', () => {
    assert.equal(typeof ej.nombre, 'string', `nombre debe ser un texto (entre comillas), pero es ${mostrar(ej.nombre)}`);
    assert.ok(ej.nombre.trim().length > 0, 'nombre no puede ser un texto vacío: escribe tu nombre entre las comillas');
  });
  it('edad es un número mayor que 0', () => {
    assert.equal(typeof ej.edad, 'number', `edad debe ser un número, pero es ${mostrar(ej.edad)} (de tipo ${typeof ej.edad}). ¿Le sobran las comillas?`);
    assert.ok(ej.edad > 0, 'edad debe ser mayor que 0');
  });
  it('esEstudiante es un booleano', () => {
    assert.equal(typeof ej.esEstudiante, 'boolean', `esEstudiante debe ser true o false (sin comillas), pero es ${mostrar(ej.esEstudiante)}`);
  });
});

describe('Ejercicio 2 · ¿De qué tipo es?', () => {
  casos(ej, 'tipoDe', [
    [['hola'], 'string'],
    [[42], 'number'],
    [[true], 'boolean'],
    [[undefined], 'undefined'],
  ]);
});

describe('Ejercicio 3 · Preséntate', () => {
  casos(ej, 'saludar', [
    [['Ada', 'Londres'], 'Hola, soy Ada y vivo en Londres.'],
    [['Linus', 'Helsinki'], 'Hola, soy Linus y vivo en Helsinki.'],
  ]);
});

describe('Ejercicio 4 · Precio con IVA', () => {
  casos(ej, 'precioConIva', [
    [[100], 121],
    [[10], 12.1],
    [[19.99], 24.19],
    [[0], 0],
  ]);
});

describe('Ejercicio 5 · ¿Es par?', () => {
  casos(ej, 'esPar', [
    [[4], true],
    [[7], false],
    [[0], true],
    [[-3], false],
  ]);
});

describe('Ejercicio 6 · Minutos y segundos', () => {
  casos(ej, 'formatearDuracion', [
    [[125], '2 min 5 s'],
    [[60], '1 min 0 s'],
    [[59], '0 min 59 s'],
    [[3600], '60 min 0 s'],
  ]);
});

describe('Ejercicio 7 · Sumar textos (extra)', () => {
  casos(ej, 'sumarTextos', [
    [['5', '10'], 15],
    [['2.5', '0.5'], 3],
  ]);
});

describe('Ejercicio 8 · Limpiar un email (extra)', () => {
  casos(ej, 'normalizarEmail', [
    [['  Ada@Ejemplo.COM '], 'ada@ejemplo.com'],
    [['linus@kernel.org'], 'linus@kernel.org'],
  ]);
});
