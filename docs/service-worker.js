!function(){"use strict";const e=["client/index.63f620fc.js","client/cleanTitle.d3efb4d7.js","client/[slug].362ab9b6.js","client/[slug].50117d0c.js","client/index.2e115dca.js","client/client.81e4eba3.js","client/hljsDefineSvelte.d7fa5feb.js","client/client.f0fb4cca.js"].concat(["service-worker-index.html",".nojekyll","CNAME","copy.svg","deps.json","favicon.png","global.css","hljs.css","icons/download.svg","icons/link.svg","layercake-logo-100.png","layercake-logo-1200.png","layercake-logo-128.png","layercake-logo-192.png","layercake-logo-500x400.png","layercake-logo-512.png","manifest.json","svelte-app.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1606513418147").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1606513418147"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1606513418147").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
