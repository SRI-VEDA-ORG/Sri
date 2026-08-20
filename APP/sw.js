self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('sri-marketing-store').then((cache) => cache.addAll([
      './index.html',
      './manifest.json',
      'https://sri-veda-org.github.io/Sri/LOGO-CIRCLE.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
