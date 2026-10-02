/* Old address: this service worker only cleans up after the move.
   It removes the old cached app and unregisters itself, so phones that
   had the app open get the redirect page (index.html) instead. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type:"window" });
    clients.forEach(c => c.navigate(c.url));
  })());
});
