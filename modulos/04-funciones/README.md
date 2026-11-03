# 04 · Funciones

**Objetivo:** escribir bloques de código reutilizables y entender que en JavaScript las funciones son valores.

```bash
npm run test:04
```

---

## Tres formas de escribir una función

```js
// 1. Declaración
function sumar(a, b) {
  return a + b;
}

// 2. Expresión (una función guardada en una variable)
const restar = function (a, b) {
  return a - b;
};

// 3. Función flecha (arrow function): la más usada hoy
const multiplicar = (a, b) => {
  return a * b;
};

// Si solo hay una expresión, puedes quitar las llaves y el return:
const dividir = (a, b) => a / b;

// Si solo hay un parámetro, puedes quitar los paréntesis:
const doble = n => n * 2;
```

## Parámetros y return

- Los **parámetros** son la entrada. Si no pasas uno, vale `undefined`.
- `return` devuelve un valor **y termina la función**. Si no hay `return`, la función devuelve `undefined`.

```js
function saludar(nombre = 'invitado') {   // valor por defecto
  return `Hola, ${nombre}`;
}

saludar('Ada');   // 'Hola, Ada'
saludar();        // 'Hola, invitado'
```

> **Error típico:** usar `console.log` en vez de `return`. `console.log` **muestra** un valor en la terminal; `return` lo **devuelve** para que otro código lo use.

## Ámbito (scope)

Las variables declaradas dentro de una función (o de unas llaves `{}`) solo existen ahí dentro:

```js
function prueba() {
  const secreto = 42;
}
console.log(secreto);   // error: ReferenceError: secreto is not defined
```

## Las funciones son valores

Puedes guardarlas en variables, **pasarlas como argumento** y **devolverlas** desde otras funciones.

### Callbacks: pasar una función a otra función

```js
function hacerDosVeces(accion) {
  accion();
  accion();
}

hacerDosVeces(() => console.log('¡Hola!'));   // ¡Hola! ¡Hola!
```

Lo usarás constantemente: `array.map(callback)`, `boton.addEventListener('click', callback)`, `setTimeout(callback, 1000)`…

### Funciones que fabrican funciones (extra)

```js
function crearSaludo(saludo) {
  return (nombre) => `${saludo}, ${nombre}`;
}

const saludoFormal = crearSaludo('Buenos días');
const saludoColega = crearSaludo('¿Qué pasa');

saludoFormal('Ada');    // 'Buenos días, Ada'
saludoColega('Linus');  // '¿Qué pasa, Linus'
```

### Closures: funciones con memoria (extra)

Una función "recuerda" las variables del sitio donde se creó, aunque esa función ya haya terminado:

```js
function crearHucha() {
  let ahorros = 0;               // esta variable sigue viva…
  return (cantidad) => {
    ahorros += cantidad;         // …porque esta función la usa
    return ahorros;
  };
}

const hucha = crearHucha();
hucha(5);    // 5
hucha(10);   // 15
```

---

## Ejercicios

Abre [`ejercicios.js`](ejercicios.js). Hay 4 obligatorios y 4 extra. Los extra son los de funciones que devuelven funciones.
