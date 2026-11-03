import { fileURLToPath } from 'node:url';

export const RAIZ = fileURLToPath(new URL('../../', import.meta.url));

export const MODULOS = [
  { numero: '01', titulo: 'Variables, tipos y operadores', carpeta: 'modulos/01-variables-y-tipos' },
  { numero: '02', titulo: 'Condicionales', carpeta: 'modulos/02-condicionales' },
  { numero: '03', titulo: 'Bucles', carpeta: 'modulos/03-bucles' },
  { numero: '04', titulo: 'Funciones', carpeta: 'modulos/04-funciones' },
  { numero: '05', titulo: 'Arrays', carpeta: 'modulos/05-arrays' },
  { numero: '06', titulo: 'Objetos y JSON', carpeta: 'modulos/06-objetos' },
  { numero: '07', titulo: 'DOM y eventos', carpeta: 'modulos/07-dom-y-eventos', navegador: true },
  { numero: '08', titulo: 'Asincronía', carpeta: 'modulos/08-asincronia' },
];
