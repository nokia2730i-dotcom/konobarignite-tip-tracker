// Minimal service worker — required by Android/Chrome for the "Install app" prompt to appear.
// It does not cache anything special; the app always loads fresh data from Supabase.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Pass-through: just let the network handle every request as normal.
  event.respondWith(fetch(event.request));
});
