# 06 · Objetos y JSON

**Objetivo:** agrupar datos relacionados y trabajar con listas de objetos: el formato en el que te llegan los datos en cualquier web.

```bash
npm run test:06
```

---

## Crear y leer objetos

Un objeto es un conjunto de pares **clave: valor**.

```js
const persona = {
  nombre: 'Ada',
  edad: 36,
  lenguajes: ['JavaScript', 'Python'],
  direccion: { ciudad: 'Londres', pais: 'Reino Unido' },
};

persona.nombre                 // 'Ada'           → notación punto
persona['edad']                // 36              → notación corchetes
persona.direccion.ciudad       // 'Londres'
persona.lenguajes[0]           // 'JavaScript'
persona.telefono               // undefined (no existe)
persona.telefono?.prefijo      // undefined (?. evita el error si no existe)

const clave = 'edad';
persona[clave]                 // 36 → corchetes cuando la clave está en una variable
```

## Modificar

```js
persona.edad = 37;             // cambiar
persona.email = 'ada@ej.com';  // añadir
delete persona.email;          // borrar
```

> **Consejo:** Aunque el objeto sea `const`, puedes cambiar sus propiedades. Lo que no puedes es reasignar la variable entera.

## Atajos muy usados

```js
// Propiedades abreviadas: si la variable se llama igual que la clave
const nombre = 'Ada';
const edad = 36;
const persona = { nombre, edad };     // igual que { nombre: nombre, edad: edad }

// Desestructuración: sacar propiedades a variables
const { nombre, edad } = persona;

// …también en los parámetros de una función
function presentar({ nombre, edad }) {
  return `${nombre} tiene ${edad} años`;
}

// Spread: copiar un objeto y cambiar algo (sin tocar el original)
const mayor = { ...persona, edad: persona.edad + 1 };
```

## Recorrer un objeto

```js
const notas = { mates: 8, historia: 6, ingles: 9 };

Object.keys(notas)     // ['mates', 'historia', 'ingles']
Object.values(notas)   // [8, 6, 9]
Object.entries(notas)  // [['mates', 8], ['historia', 6], ['ingles', 9]]

for (const [asignatura, nota] of Object.entries(notas)) {
  console.log(`${asignatura}: ${nota}`);
}
```

## Arrays de objetos

Así es como llegan los datos de verdad. Y aquí se juntan todos los módulos anteriores:

```js
const proyectos = [
  { titulo: 'Calculadora', tecnologias: ['HTML', 'JavaScript'], destacado: true },
  { titulo: 'Blog', tecnologias: ['HTML', 'CSS'], destacado: false },
];

proyectos.map((p) => p.titulo);                          // ['Calculadora', 'Blog']
proyectos.filter((p) => p.destacado);                    // [{ titulo: 'Calculadora', … }]
proyectos.find((p) => p.titulo === 'Blog');              // { titulo: 'Blog', … }
proyectos.filter((p) => p.tecnologias.includes('CSS'));  // [{ titulo: 'Blog', … }]
proyectos.flatMap((p) => p.tecnologias);                 // ['HTML', 'JavaScript', 'HTML', 'CSS']
```

## JSON

JSON es **texto** con formato de objeto JavaScript. Es como viajan los datos entre un servidor y tu web.

```js
const texto = JSON.stringify({ nombre: 'Ada', edad: 36 });
// '{"nombre":"Ada","edad":36}'   → objeto a texto

const objeto = JSON.parse('{"nombre":"Ada","edad":36}');
// { nombre: 'Ada', edad: 36 }    → texto a objeto
```

Diferencias con un objeto JS: las claves van **siempre entre comillas dobles**, no hay funciones ni comentarios, y no puede haber una coma al final.

---

## Ejercicios

Abre [`ejercicios.js`](ejercicios.js). Hay 7 obligatorios y 3 extra.
Los ejercicios 4 a 7 usan una lista de proyectos: **los volverás a usar en el proyecto final**.
