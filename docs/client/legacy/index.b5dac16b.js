import{M as t,N as e,c as n,d as a,e as r,f as s,i,s as c,h as o,S as u,R as l,j as f,t as h,k as d,l as v,m,n as p,p as g,o as y,q as w,T as k,r as E,u as $,O as R,x as S,C as L,G as x,z as A,a as C,y as G,v as b,A as T,F as j,U as D,V as I,W as M,X as q}from"./client.5dbddf92.js";function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(s,arguments,i)}else n=s.apply(this,arguments);return r(this,n)}}function N(t,e,n){var a=t.slice();return a[10]=e[n],a}function z(t){var e,n,a,r,s,i,c,o,u,l,S,L,x=t[10].metadata.title+"",A=t[10].html+"";return{c:function(){e=f("section"),n=f("h2"),a=h(x),r=d(),s=f("small"),i=f("a"),c=h("edit this section"),u=d(),S=d(),this.h()},l:function(t){e=v(t,"SECTION",{id:!0,class:!0});var o=m(e);n=v(o,"H2",{class:!0});var l=m(n);a=p(l,x),r=g(l),s=v(l,"SMALL",{class:!0});var f=m(s);i=v(f,"A",{href:!0,target:!0,rel:!0});var h=m(i);c=p(h,"edit this section"),h.forEach(y),f.forEach(y),l.forEach(y),u=g(o),S=g(o),o.forEach(y),this.h()},h:function(){w(i,"href",o="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file),w(i,"target","_blank"),w(i,"rel","nofollow"),w(s,"class","svelte-1hckucs"),w(n,"class","svelte-1hckucs"),l=new k(S),w(e,"id",L=t[10].slug),w(e,"class","svelte-1hckucs")},m:function(t,o){E(t,e,o),$(e,n),$(n,a),$(n,r),$(n,s),$(s,i),$(i,c),$(e,u),l.m(A,e),$(e,S)},p:function(t,n){1&n&&x!==(x=t[10].metadata.title+"")&&R(a,x),1&n&&o!==(o="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file)&&w(i,"href",o),1&n&&A!==(A=t[10].html+"")&&l.p(A),1&n&&L!==(L=t[10].slug)&&w(e,"id",L)},d:function(t){t&&y(e)}}}function O(t){var e,n,a,r,s,i,c,o,u,h;function p(e){t[3].call(null,e)}var k={sections:t[0]};void 0!==t[2]&&(k.activeGuideSection=t[2]),i=new l({props:k}),I.push((function(){return M(i,"activeGuideSection",p)}));for(var R=t[0],D=[],B=0;B<R.length;B+=1)D[B]=z(N(t,R,B));return{c:function(){e=f("meta"),n=f("meta"),a=f("link"),r=d(),s=f("sidebar"),S(i.$$.fragment),o=d(),u=f("div");for(var t=0;t<D.length;t+=1)D[t].c();this.h()},l:function(t){var c=L('[data-svelte="svelte-1u1w7sg"]',document.head);e=v(c,"META",{name:!0,content:!0}),n=v(c,"META",{name:!0,content:!0}),a=v(c,"LINK",{rel:!0,href:!0}),c.forEach(y),r=g(t),s=v(t,"SIDEBAR",{class:!0});var l=m(s);x(i.$$.fragment,l),l.forEach(y),o=g(t),u=v(t,"DIV",{id:!0,class:!0});for(var f=m(u),h=0;h<D.length;h+=1)D[h].l(f);f.forEach(y),this.h()},h:function(){document.title="LayerCake - Guide",w(e,"name","og:title"),w(e,"content","Layer Cake — Guide"),w(n,"name","twitter:title"),w(n,"content","Layer Cake — Guide"),w(a,"rel","stylesheet"),w(a,"href","hljs.css"),w(s,"class","svelte-1hckucs"),w(u,"id","container"),w(u,"class","content svelte-1hckucs")},m:function(c,l){$(document.head,e),$(document.head,n),$(document.head,a),E(c,r,l),E(c,s,l),A(i,s,null),E(c,o,l),E(c,u,l);for(var f=0;f<D.length;f+=1)D[f].m(u,null);t[4](u),h=!0},p:function(t,e){var n=C(e,1)[0],a={};if(1&n&&(a.sections=t[0]),!c&&4&n&&(c=!0,a.activeGuideSection=t[2],q((function(){return c=!1}))),i.$set(a),1&n){var r;for(R=t[0],r=0;r<R.length;r+=1){var s=N(t,R,r);D[r]?D[r].p(s,n):(D[r]=z(s),D[r].c(),D[r].m(u,null))}for(;r<D.length;r+=1)D[r].d(1);D.length=R.length}},i:function(t){h||(G(i.$$.fragment,t),h=!0)},o:function(t){b(i.$$.fragment,t),h=!1},d:function(c){y(e),y(n),y(a),c&&y(r),c&&y(s),T(i),c&&y(o),c&&y(u),j(D,c),t[4](null)}}}function V(t){return F.apply(this,arguments)}function F(){return(F=t(e.mark((function t(n){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.query,t.abrupt("return",this.fetch("api/guide").then((function(t){return t.json()})).then((function(t){return{sections:t}})));case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function H(t,e,n){var a,r,s=e.sections,i=[],c="introduction",o=[];function u(){if(a){var t=a.getBoundingClientRect().top;i=[].map.call(o,(function(e){return e.getBoundingClientRect().top-t}))}}function l(){for(var t=-window.scrollY,e=o.length;e--;)if(i[e]+t<100){var a=o[e].id;return void(a!==c&&(n(2,r=a),c=a))}}return D((function(){if("undefined"!=typeof window){o=a.querySelectorAll("[id]"),c=window.location.hash.slice(1),n(2,r=c),u(),l(),window.addEventListener("scroll",l,!0),window.addEventListener("resize",u,!0);setTimeout(u,1e3),setTimeout(u,5e3)}})),t.$set=function(t){"sections"in t&&n(0,s=t.sections)},[s,a,r,function(t){n(2,r=t)},function(t){I[t?"unshift":"push"]((function(){n(1,a=t)}))}]}var K=function(t){n(a,u);var e=B(a);function a(t){var n;return s(this,a),n=e.call(this),i(o(n),t,H,O,c,{sections:0}),n}return a}();export default K;export{V as preload};
