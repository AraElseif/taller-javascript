const activo = process.stdout.isTTY && !process.env.NO_COLOR;
const envolver = (codigo) => (texto) => (activo ? `\x1b[${codigo}m${texto}\x1b[0m` : String(texto));

export const negrita = envolver('1');
export const gris = envolver('90');
export const rojo = envolver('31');
export const verde = envolver('32');
export const amarillo = envolver('33');
export const cian = envolver('36');
