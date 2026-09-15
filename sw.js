// Service Worker mínimo para TrazaGO — permite que la app sea "instalable"
// No hace caché agresivo: siempre busca la versión más reciente en línea.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Deja pasar todas las peticiones directo a la red (sin caché offline por ahora)
  event.respondWith(fetch(event.request));
});
