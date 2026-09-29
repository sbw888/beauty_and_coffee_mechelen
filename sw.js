/* Beauty & Coffee — service worker
   Network-first for the app shell: online users always get the latest
   files immediately after a deploy. Offline users fall back to whatever
   was last cached, so the app still works without a connection. */
const CACHE_NAME = "beauty-coffee-v19";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./i18n.js",
  "./data.js",
  "./lang-fr.js",
  "./app.js",
  "./manifest.json",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/logo-transparent.png",
  "./assets/lib/qr-encoder.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  // Own files: always ask GitHub whether there is a newer version
  // ("no-cache" = revalidate, not "never store"), so a deploy is visible
  // at once instead of after the browser's own cache expires.
  const sameOrigin = new URL(event.request.url).origin === self.location.origin;
  const netFetch = sameOrigin
    ? fetch(event.request.url, { cache:"no-cache", credentials:"same-origin" })
    : fetch(event.request);
  event.respondWith(
    netFetch
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(()=>{});
        return res;
      })
      .catch(() =>
        caches.match(event.request).then(cached => cached || caches.match("./index.html"))
      )
  );
});
