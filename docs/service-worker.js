!function(){"use strict";const e=["client/index.e25f1784.js","client/cleanTitle.2eda1459.js","client/[slug].b4abbd75.js","client/[slug].99bf1bda.js","client/index.fc1b8e10.js","client/client.89f14af7.js","client/hljsDefineSvelte.d7fa5feb.js","client/client.ecbc90fe.js"].concat(["service-worker-index.html",".nojekyll","CNAME","copy.svg","deps.json","favicon.png","global.css","hljs.css","icons/download.svg","icons/link.svg","layercake-logo-100.png","layercake-logo-1200.png","layercake-logo-128.png","layercake-logo-192.png","layercake-logo-500x400.png","layercake-logo-512.png","manifest.json","svelte-app.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1614097321798").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1614097321798"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1614097321798").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
