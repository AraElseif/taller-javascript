// Servidor web mínimo para ver las páginas del taller en el navegador.
//   npm start  →  http://localhost:3000
// (Hace falta porque los navegadores no permiten `import` ni `fetch` en archivos abiertos con doble clic)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, sep } from 'node:path';
import { RAIZ } from './lib/modulos.js';
import { negrita, cian, gris, rojo } from './lib/color.js';

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

const raiz = RAIZ.endsWith(sep) ? RAIZ.slice(0, -1) : RAIZ;

function responder(respuesta, codigo, texto) {
  respuesta.writeHead(codigo, { 'Content-Type': 'text/plain; charset=utf-8' });
  respuesta.end(texto);
}

const servidor = createServer(async (peticion, respuesta) => {
  let url;
  try {
    url = new URL(peticion.url, 'http://localhost');
    let ruta = join(raiz, decodeURIComponent(url.pathname));
    if (ruta !== raiz && !ruta.startsWith(raiz + sep)) return responder(respuesta, 403, 'Prohibido');

    let info = await stat(ruta).catch(() => null);
    if (info?.isDirectory()) {
      // /carpeta → /carpeta/ para que las rutas relativas (css/, js/, data/) funcionen
      if (!url.pathname.endsWith('/')) {
        respuesta.writeHead(301, { Location: url.pathname + '/' + url.search });
        return respuesta.end();
      }
      ruta = join(ruta, 'index.html');
      info = await stat(ruta).catch(() => null);
    }
    if (!info?.isFile()) {
      console.log(gris(`  404 ${url.pathname}`));
      return responder(respuesta, 404, `No encontrado: ${url.pathname}`);
    }

    respuesta.writeHead(200, {
      'Content-Type': TIPOS[extname(ruta).toLowerCase()] ?? 'application/octet-stream',
      'Cache-Control': 'no-store', // siempre la última versión de tus archivos
    });
    respuesta.end(await readFile(ruta));
  } catch {
    responder(respuesta, 400, 'Petición no válida');
  }
});

function arrancar(puerto, intentos = 10) {
  servidor.once('error', (error) => {
    if (error.code === 'EADDRINUSE' && intentos > 0) return arrancar(puerto + 1, intentos - 1);
    console.error(rojo(`No se ha podido arrancar el servidor: ${error.message}`));
    process.exit(1);
  });
  servidor.listen(puerto, 'localhost', () => {
    const base = `http://localhost:${puerto}`;
    console.log(negrita('\nServidor del taller en marcha\n'));
    console.log(`   Inicio:          ${cian(base + '/')}`);
    console.log(`   Módulo 07 (DOM): ${cian(base + '/modulos/07-dom-y-eventos/')}`);
    console.log(`   Proyecto final:  ${cian(base + '/proyecto-final/')}`);
    console.log(gris('\n   Deja esta terminal abierta. Para pararlo: Ctrl + C\n'));
  });
}

arrancar(Number(process.argv[2]) || Number(process.env.PORT) || 3000);
