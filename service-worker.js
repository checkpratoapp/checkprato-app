self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// ESSA PARTE É A QUE FALTAVA:
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
