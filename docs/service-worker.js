!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["client/d0fcc2fc6e531ea84cd2/main.js","client/d0fcc2fc6e531ea84cd2/index.1.js","client/d0fcc2fc6e531ea84cd2/examples_$slug.2.js","client/d0fcc2fc6e531ea84cd2/guide.3.js","client/d0fcc2fc6e531ea84cd2/test.4.js","client/d0fcc2fc6e531ea84cd2/vendors~examples_$slug.5.js"].concat([".DS_Store","CNAME","copy.svg","deps.json","favicon.ico","favicon.png","global.css","hljs.css","icons/download.svg","icons/link.svg","layercake-logo-100.png","layercake-logo-1200.png","layercake-logo-128.png","layercake-logo-192.png","layercake-logo-500x400.png","layercake-logo-512.png","manifest.json","svelte-app.json"]),o=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1544986267524").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1544986267524"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method)return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&o.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1544986267524").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}]);