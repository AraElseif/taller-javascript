// Una API "de mentira" que tarda un poco en responder, como una de verdad.
// No hace falta que la modifiques: úsala desde ejercicios.js.

const RETRASO_MS = 100;

const usuarios = [
  { id: 1, nombre: 'Ada Lovelace' },
  { id: 2, nombre: 'Alan Turing' },
  { id: 3, nombre: 'Grace Hopper' },
];

const posts = [
  { id: 1, usuarioId: 1, titulo: 'Notas sobre la máquina analítica' },
  { id: 2, usuarioId: 1, titulo: 'El primer algoritmo de la historia' },
  { id: 3, usuarioId: 2, titulo: '¿Pueden pensar las máquinas?' },
  { id: 4, usuarioId: 3, titulo: 'Encontré un bicho dentro del ordenador' },
  { id: 5, usuarioId: 3, titulo: 'COBOL para todo el mundo' },
  { id: 6, usuarioId: 3, titulo: 'Es más fácil pedir perdón que permiso' },
];

/**
 * Devuelve una promesa con el usuario { id, nombre }.
 * Si el usuario no existe, la promesa se rechaza con un Error.
 */
export function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = usuarios.find((u) => u.id === id);
      if (usuario) resolve({ ...usuario });
      else reject(new Error(`Usuario ${id} no encontrado`));
    }, RETRASO_MS);
  });
}

/**
 * Devuelve una promesa con el array de posts de un usuario
 * (vacío si no tiene ninguno).
 */
export function obtenerPosts(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts.filter((p) => p.usuarioId === usuarioId).map((p) => ({ ...p })));
    }, RETRASO_MS);
  });
}
