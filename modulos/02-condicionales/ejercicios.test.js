// Tests del módulo 02. No hace falta que toques este archivo.
import { describe } from 'node:test';
import { casos } from '../../herramientas/lib/ayudas-test.js';
import * as ej from './ejercicios.js';

describe('Ejercicio 1 · ¿Mayor de edad?', () => {
  casos(ej, 'esMayorDeEdad', [
    [[18], true],
    [[17], false],
    [[40], true],
    [[0], false],
  ]);
});

describe('Ejercicio 2 · Poner nota', () => {
  casos(ej, 'calificar', [
    [[4.9], 'Suspenso'],
    [[5], 'Aprobado'],
    [[6.9], 'Aprobado'],
    [[7], 'Notable'],
    [[8.99], 'Notable'],
    [[9], 'Sobresaliente'],
    [[10], 'Sobresaliente'],
    [[-1], 'Nota no válida'],
    [[11], 'Nota no válida'],
  ]);
});

describe('Ejercicio 3 · Precio de la entrada', () => {
  casos(ej, 'precioEntrada', [
    [[2], 0],
    [[4], 5],
    [[17], 5],
    [[18], 10],
    [[64], 10],
    [[65], 6],
    [[90], 6],
  ]);
});

describe('Ejercicio 4 · Control de acceso', () => {
  casos(ej, 'accesoPermitido', [
    [[true, false, false], true],
    [[false, true, false], true],
    [[false, false, false], false],
    [[true, false, true], false],
    [[true, true, true], false],
  ]);
});

describe('Ejercicio 5 · Día de la semana', () => {
  casos(ej, 'nombreDelDia', [
    [[1], 'lunes'],
    [[3], 'miércoles'],
    [[5], 'viernes'],
    [[7], 'domingo'],
    [[0], 'desconocido'],
    [[8], 'desconocido'],
  ]);
});

describe('Ejercicio 6 · FizzBuzz', () => {
  casos(ej, 'fizzBuzz', [
    [[3], 'Fizz'],
    [[5], 'Buzz'],
    [[15], 'FizzBuzz'],
    [[30], 'FizzBuzz'],
    [[7], '7'],
    [[1], '1'],
  ]);
});

describe('Ejercicio 7 · Signo de un número (extra)', () => {
  casos(ej, 'signo', [
    [[5], 'positivo'],
    [[-3], 'negativo'],
    [[0], 'cero'],
  ]);
});

describe('Ejercicio 8 · Año bisiesto (extra)', () => {
  casos(ej, 'esBisiesto', [
    [[2024], true],
    [[2023], false],
    [[1900], false],
    [[2000], true],
  ]);
});
