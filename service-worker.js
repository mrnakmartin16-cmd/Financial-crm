// Service Worker pro offline funkčnost
const CACHE_NAME = 'financial-pwa-v1';
const urlsToCache = [
  './',
  './crm-system.html',
  './financni-analyzer.html'
];

// Instalace Service Workeru
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache otevřena');
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktivace Service Workeru
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch - obsluha požadavků
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - vrátit odpověď z cache
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
