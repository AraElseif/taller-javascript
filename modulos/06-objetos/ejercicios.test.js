// Tests del módulo 06. No hace falta que toques este archivo.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { casos, funcion, igual } from '../../herramientas/lib/ayudas-test.js';
import * as ej from './ejercicios.js';

const crearProyectos = () => [
  { id: 1, titulo: 'Tienda online', tecnologias: ['HTML', 'CSS', 'JavaScript'], destacado: true },
  { id: 2, titulo: 'Juego de memoria', tecnologias: ['JavaScript', 'CSS'], destacado: false },
  { id: 3, titulo: 'API de recetas', tecnologias: ['Node', 'JavaScript'], destacado: true },
  { id: 4, titulo: 'Landing page', tecnologias: ['HTML', 'CSS'], destacado: false },
];

describe('Ejercicio 1 · Crear un objeto', () => {
  casos(ej, 'crearPersona', [
    [['Ada', 36], { nombre: 'Ada', edad: 36 }],
    [['Linus', 21], { nombre: 'Linus', edad: 21 }],
  ]);
});

describe('Ejercicio 2 · Presentarse', () => {
  casos(ej, 'presentar', [
    [[{ nombre: 'Ada', edad: 36 }], 'Me llamo Ada y tengo 36 años.'],
    [[{ nombre: 'Grace', edad: 85, ciudad: 'Nueva York' }], 'Me llamo Grace y tengo 85 años.'],
  ]);
});

describe('Ejercicio 3 · Cumplir años', () => {
  casos(ej, 'cumplirAnios', [
    [[{ nombre: 'Ada', edad: 36 }], { nombre: 'Ada', edad: 37 }],
    [[{ nombre: 'Linus', edad: 21, pais: 'Finlandia' }], { nombre: 'Linus', edad: 22, pais: 'Finlandia' }],
  ]);
  it('no modifica el objeto original', () => {
    const original = { nombre: 'Ada', edad: 36 };
    const nuevo = funcion(ej, 'cumplirAnios')(original);
    igual(nuevo, { nombre: 'Ada', edad: 37 }, "cumplirAnios({ nombre: 'Ada', edad: 36 })");
    assert.equal(original.edad, 36, 'Has modificado el objeto original. Crea uno nuevo con { ...persona }');
    assert.notEqual(nuevo, original, 'Has devuelto el mismo objeto que recibiste: tiene que ser uno nuevo');
  });
});

describe('Ejercicio 4 · Contar propiedades', () => {
  casos(ej, 'contarPropiedades', [
    [[{ a: 1, b: 2, c: 3 }], 3],
    [[{ nombre: 'Ada' }], 1],
    [[{}], 0],
  ]);
});

describe('Ejercicio 5 · Solo los títulos', () => {
  it('devuelve los títulos en orden', () => {
    igual(
      funcion(ej, 'titulos')(crearProyectos()),
      ['Tienda online', 'Juego de memoria', 'API de recetas', 'Landing page'],
      'titulos(proyectos)',
    );
  });
  casos(ej, 'titulos', [[[[]], []]]);
});

describe('Ejercicio 6 · Filtrar por tecnología', () => {
  it("filtrarPorTecnologia(proyectos, 'HTML') → Tienda online y Landing page", () => {
    const resultado = funcion(ej, 'filtrarPorTecnologia')(crearProyectos(), 'HTML');
    igual(resultado?.map?.((p) => p.id), [1, 4], "filtrarPorTecnologia(proyectos, 'HTML') (mostrando solo los id)");
  });
  it("filtrarPorTecnologia(proyectos, 'Node') → API de recetas", () => {
    const resultado = funcion(ej, 'filtrarPorTecnologia')(crearProyectos(), 'Node');
    igual(resultado?.map?.((p) => p.id), [3], "filtrarPorTecnologia(proyectos, 'Node') (mostrando solo los id)");
  });
  it("filtrarPorTecnologia(proyectos, 'Python') → []", () => {
    igual(funcion(ej, 'filtrarPorTecnologia')(crearProyectos(), 'Python'), [], "filtrarPorTecnologia(proyectos, 'Python')");
  });
});

describe('Ejercicio 7 · Buscar por id', () => {
  it('buscarPorId(proyectos, 2) → Juego de memoria', () => {
    igual(funcion(ej, 'buscarPorId')(crearProyectos(), 2), crearProyectos()[1], 'buscarPorId(proyectos, 2)');
  });
  it('buscarPorId(proyectos, 99) → null', () => {
    igual(funcion(ej, 'buscarPorId')(crearProyectos(), 99), null, 'buscarPorId(proyectos, 99)');
  });
});

describe('Ejercicio 8 · Todas las tecnologías', () => {
  it('sin repetir y en orden alfabético', () => {
    igual(funcion(ej, 'tecnologiasUnicas')(crearProyectos()), ['CSS', 'HTML', 'JavaScript', 'Node'], 'tecnologiasUnicas(proyectos)');
  });
  casos(ej, 'tecnologiasUnicas', [[[[]], []]]);
});

describe('Ejercicio 9 · ¿Cuántas veces se usa cada tecnología? (extra)', () => {
  it('cuenta los proyectos de cada tecnología', () => {
    igual(
      funcion(ej, 'contarPorTecnologia')(crearProyectos()),
      { HTML: 2, CSS: 3, JavaScript: 3, Node: 1 },
      'contarPorTecnologia(proyectos)',
    );
  });
  casos(ej, 'contarPorTecnologia', [[[[]], {}]]);
});

describe('Ejercicio 10 · Clonar con JSON (extra)', () => {
  it('la copia es igual pero independiente', () => {
    const original = { nombre: 'Ada', direccion: { ciudad: 'Londres' }, lenguajes: ['JS'] };
    const copia = funcion(ej, 'clonarConJSON')(original);
    igual(copia, original, 'clonarConJSON(objeto)');
    assert.notEqual(copia, original, 'Has devuelto el mismo objeto, no una copia');
    copia.direccion.ciudad = 'Madrid';
    copia.lenguajes.push('Python');
    assert.equal(original.direccion.ciudad, 'Londres', 'Al cambiar la copia ha cambiado el original: la copia no es profunda');
    assert.deepEqual(original.lenguajes, ['JS'], 'Al cambiar la copia ha cambiado el original: la copia no es profunda');
  });
});
