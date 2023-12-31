self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('pwa-cache').then((cache) => {
        return cache.addAll([
          'index.html',
          // Weitere Dateien, die gecacht werden sollen
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  