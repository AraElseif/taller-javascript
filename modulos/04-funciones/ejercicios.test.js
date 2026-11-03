// Tests del módulo 04. No hace falta que toques este archivo.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { casos, funcion, igual, mostrar } from '../../herramientas/lib/ayudas-test.js';
import * as ej from './ejercicios.js';

function esFuncion(valor, descripcion) {
  assert.equal(typeof valor, 'function', `${descripcion} debería devolver una función, pero devolvió ${mostrar(valor)}`);
}

describe('Ejercicio 1 · Tu primera función flecha', () => {
  it('triple es una función flecha', () => {
    const triple = funcion(ej, 'triple');
    assert.equal(triple.prototype, undefined, 'triple es una función, pero no una función flecha: usa la sintaxis (numero) => …');
  });
  casos(ej, 'triple', [
    [[4], 12],
    [[0], 0],
    [[-2], -6],
  ]);
});

describe('Ejercicio 2 · Valor por defecto', () => {
  casos(ej, 'saludo', [
    [['Ada'], 'Hola, Ada'],
    [[], 'Hola, invitado'],
  ]);
});

describe('Ejercicio 3 · Callbacks', () => {
  it('aplicar((x) => x * 2, 5) → 10', () => {
    igual(funcion(ej, 'aplicar')((x) => x * 2, 5), 10, 'aplicar((x) => x * 2, 5)');
  });
  it("aplicar((t) => t.toUpperCase(), 'hola') → 'HOLA'", () => {
    igual(funcion(ej, 'aplicar')((t) => t.toUpperCase(), 'hola'), 'HOLA', "aplicar((t) => t.toUpperCase(), 'hola')");
  });
});

describe('Ejercicio 4 · Aplicar n veces', () => {
  it('aplicarNVeces((x) => x * 2, 3, 1) → 8', () => {
    igual(funcion(ej, 'aplicarNVeces')((x) => x * 2, 3, 1), 8, 'aplicarNVeces((x) => x * 2, 3, 1)');
  });
  it("aplicarNVeces((t) => t + '!', 2, 'hola') → 'hola!!'", () => {
    igual(funcion(ej, 'aplicarNVeces')((t) => t + '!', 2, 'hola'), 'hola!!', "aplicarNVeces((t) => t + '!', 2, 'hola')");
  });
  it('aplicarNVeces((x) => x * 2, 0, 5) → 5', () => {
    igual(funcion(ej, 'aplicarNVeces')((x) => x * 2, 0, 5), 5, 'aplicarNVeces((x) => x * 2, 0, 5)');
  });
});

describe('Ejercicio 5 · Fábrica de multiplicadores (extra)', () => {
  it('crearMultiplicador(2) devuelve una función que dobla', () => {
    const doble = funcion(ej, 'crearMultiplicador')(2);
    esFuncion(doble, 'crearMultiplicador(2)');
    igual(doble(5), 10, 'crearMultiplicador(2)(5)');
  });
  it('crearMultiplicador(3) devuelve una función que triplica', () => {
    const triple = funcion(ej, 'crearMultiplicador')(3);
    esFuncion(triple, 'crearMultiplicador(3)');
    igual(triple(5), 15, 'crearMultiplicador(3)(5)');
  });
});

describe('Ejercicio 6 · Contador con memoria (closure) (extra)', () => {
  it('cuenta 1, 2, 3', () => {
    const contador = funcion(ej, 'crearContador')();
    esFuncion(contador, 'crearContador()');
    igual(contador(), 1, 'La primera llamada a contador()');
    igual(contador(), 2, 'La segunda llamada a contador()');
    igual(contador(), 3, 'La tercera llamada a contador()');
  });
  it('cada contador lleva su propia cuenta', () => {
    const crearContador = funcion(ej, 'crearContador');
    const a = crearContador();
    const b = crearContador();
    esFuncion(a, 'crearContador()');
    a();
    a();
    igual(b(), 1, 'Un contador nuevo, en su primera llamada,');
    igual(a(), 3, 'El primer contador, en su tercera llamada,');
  });
});

describe('Ejercicio 7 · Componer funciones (extra)', () => {
  it('componer(doblar, sumarUno)(3) → 8', () => {
    const compuesta = funcion(ej, 'componer')((x) => x * 2, (x) => x + 1);
    esFuncion(compuesta, 'componer(f, g)');
    igual(compuesta(3), 8, 'componer((x) => x * 2, (x) => x + 1)(3)');
  });
  it("componer(exclamar, mayusculas)('hola') → 'HOLA!'", () => {
    const compuesta = funcion(ej, 'componer')((t) => t + '!', (t) => t.toUpperCase());
    esFuncion(compuesta, 'componer(f, g)');
    igual(compuesta('hola'), 'HOLA!', "componer((t) => t + '!', (t) => t.toUpperCase())('hola')");
  });
});

describe('Ejercicio 8 · Solo una vez (extra)', () => {
  it('ejecuta la función original solo la primera vez', () => {
    let llamadas = 0;
    const iniciar = funcion(ej, 'unaSolaVez')(() => {
      llamadas++;
      return 'ok';
    });
    esFuncion(iniciar, 'unaSolaVez(fn)');
    igual(iniciar(), 'ok', 'La primera llamada');
    igual(iniciar(), 'ok', 'La segunda llamada');
    iniciar();
    assert.equal(llamadas, 1, `La función original se ha ejecutado ${llamadas} veces, pero debería ejecutarse solo 1`);
  });
});
