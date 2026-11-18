// Online-only PWA. No Cache Storage entries are ever created.
// Never cache resident data, medication records, Supabase responses, QR values,
// authentication state, or the application HTML in a service worker.
'use strict';
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  // Keep the application shell online-only. Other requests use normal browser fetch.
  if (event.request.method !== 'GET' || event.request.mode !== 'navigate') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(event.request, { cache: 'no-store' }));
});
