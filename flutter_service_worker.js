'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/LICENSE": "fc4270bdf69b4ddc6d943fd26b8cfaef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "a6e60510c64c9847d11db02443bd559d",
"FontManifest.json": "54c748edc5e8baaf1ae2b7d8da4497a1",
"icons/Icon-192.png": "b444194e2145b9816bbeed19385751f0",
"icons/Icon-512.png": "0ea23ff2402856365c13f7e84efadb32",
"index.html": "09e175a4897c09f8cbdaa6b01781738f",
"/": "09e175a4897c09f8cbdaa6b01781738f",
"main.dart.js": "b09a2608bc8dbe261a5d69ea337832b9",
"manifest.json": "f30d99701d10b4468b00432dda4c9a06"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
