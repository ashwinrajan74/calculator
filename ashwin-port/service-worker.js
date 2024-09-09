const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/bootstrap.min.css',
    '/style.css',
    '/responsive.css',
    '/jquery.mCustomScrollbar.min.css',
    '/jquery.min.js',
    '/popper.min.js',
    '/bootstrap.bundle.min.js',
    '/jquery.mCustomScrollbar.concat.min.js',
    '/custom.js',
    '/fevicon.png',
    '/play-icon.png',
    '/icon-4.png',
    '/icon-4.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
