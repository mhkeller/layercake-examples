import{S as t,i as e,s,e as a,c as l,b as n,f as c,h as r,j as o,t as i,d,k as h,C as f,E as u,a as m,g as p,B as g,n as v,u as $,y as b,F as y,p as E,l as w,m as k,o as D,q as x,x as C,w as I,G as L,z as j}from"./client.f0fb4cca.js";import{h as V,a as M}from"./hljsDefineSvelte.d7fa5feb.js";import{D as T,c as H,m as S}from"./cleanTitle.d3efb4d7.js";const{document:q}=L;function P(t,e,s){const a=t.slice();return a[11]=e[s],a}function R(t,e,s){const a=t.slice();return a[11]=e[s],a}function z(t){let e,s=t[5](t[2].dek)+"";return{c(){e=a("div"),this.h()},l(t){e=l(t,"DIV",{class:!0}),n(e).forEach(c),this.h()},h(){r(e,"class","dek svelte-1b77smd")},m(t,a){o(t,e,a),e.innerHTML=s},p(t,a){4&a&&s!==(s=t[5](t[2].dek)+"")&&(e.innerHTML=s)},d(t){t&&c(e)}}}function A(t){let e,s,m,p,g,v=t[11].title+"";function $(...e){return t[8](t[11],...e)}return{c(){e=a("li"),s=i(v),this.h()},l(t){e=l(t,"LI",{class:!0});var a=n(e);s=d(a,v),a.forEach(c),this.h()},h(){r(e,"class",m="tab "+(t[0]===H(t[11].title)?"active":"")+" svelte-1b77smd")},m(t,a){o(t,e,a),h(e,s),p||(g=f(e,"click",$),p=!0)},p(a,l){t=a,8&l&&v!==(v=t[11].title+"")&&u(s,v),9&l&&m!==(m="tab "+(t[0]===H(t[11].title)?"active":"")+" svelte-1b77smd")&&r(e,"class",m)},d(t){t&&c(e),p=!1,g()}}}function B(t){let e,s,i,d=t[6](t[11].contents,t[11].title)+"";return{c(){e=a("div"),s=a("pre"),i=m(),this.h()},l(t){e=l(t,"DIV",{class:!0,style:!0});var a=n(e);s=l(a,"PRE",{class:!0}),n(s).forEach(c),i=p(a),a.forEach(c),this.h()},h(){r(s,"class","svelte-1b77smd"),r(e,"class","contents"),g(e,"display",t[0]===H(t[11].title)?"block":"none")},m(t,a){o(t,e,a),h(e,s),s.innerHTML=d,h(e,i)},p(t,a){8&a&&d!==(d=t[6](t[11].contents,t[11].title)+"")&&(s.innerHTML=d),9&a&&g(e,"display",t[0]===H(t[11].title)?"block":"none")},d(t){t&&c(e)}}}function F(t){let e,s,g,I,L,V,M,H,S,F,G,K,N,U,_,J,O,Q,W,X,Y,Z,tt,et,st,at,lt,nt,ct=t[4].title+"";q.title=e=t[4].title;var rt=t[4].component;rt&&(K=new rt({})),J=new T({props:{data:t[2],slug:t[1],ssr:!0}});let ot=t[2].dek&&z(t),it=t[3],dt=[];for(let e=0;e<it.length;e+=1)dt[e]=A(R(t,it,e));let ht=t[3],ft=[];for(let e=0;e<ht.length;e+=1)ft[e]=B(P(t,ht,e));return{c(){s=a("link"),g=m(),I=a("div"),L=a("h1"),V=i(ct),M=a("a"),H=i("Edit"),F=m(),G=a("div"),K&&v(K.$$.fragment),U=m(),_=a("div"),v(J.$$.fragment),O=m(),ot&&ot.c(),Q=m(),W=a("div"),X=a("ul");for(let t=0;t<dt.length;t+=1)dt[t].c();Y=m(),Z=a("div"),tt=a("div"),et=m();for(let t=0;t<ft.length;t+=1)ft[t].c();this.h()},l(t){const e=$('[data-svelte="svelte-dklk17"]',q.head);s=l(e,"LINK",{rel:!0,href:!0}),e.forEach(c),g=p(t),I=l(t,"DIV",{class:!0,"data-label":!0});var a=n(I);L=l(a,"H1",{});var r=n(L);V=d(r,ct),M=l(r,"A",{class:!0,href:!0,target:!0,rel:!0});var o=n(M);H=d(o,"Edit"),o.forEach(c),r.forEach(c),F=p(a),G=l(a,"DIV",{class:!0,"data-slug":!0});var i=n(G);K&&b(K.$$.fragment,i),i.forEach(c),U=p(a),_=l(a,"DIV",{class:!0});var h=n(_);b(J.$$.fragment,h),h.forEach(c),O=p(a),ot&&ot.l(a),Q=p(a),W=l(a,"DIV",{id:!0,class:!0});var f=n(W);X=l(f,"UL",{id:!0,class:!0});var u=n(X);for(let t=0;t<dt.length;t+=1)dt[t].l(u);u.forEach(c),Y=p(f),Z=l(f,"DIV",{id:!0,class:!0});var m=n(Z);tt=l(m,"DIV",{class:!0}),n(tt).forEach(c),et=p(m);for(let t=0;t<ft.length;t+=1)ft[t].l(m);m.forEach(c),f.forEach(c),a.forEach(c),this.h()},h(){r(s,"rel","stylesheet"),r(s,"href","hljs.css"),r(M,"class","edit-repl svelte-1b77smd"),r(M,"href",S="https://svelte.dev/repl/"+t[4].replPath),r(M,"target","_blank"),r(M,"rel","nofollow"),r(G,"class","chart-hero svelte-1b77smd"),r(G,"data-slug",N=t[1].toLowerCase()),r(_,"class","download svelte-1b77smd"),r(X,"id","page-nav"),r(X,"class","svelte-1b77smd"),r(tt,"class","copy svelte-1b77smd"),r(Z,"id","contents-container"),r(Z,"class","svelte-1b77smd"),r(W,"id","pages"),r(W,"class",st=y(t[2].dek?"has-dek":"")+" svelte-1b77smd"),r(I,"class","main svelte-1b77smd"),r(I,"data-label","Server-side")},m(e,a){h(q.head,s),o(e,g,a),o(e,I,a),h(I,L),h(L,V),h(L,M),h(M,H),h(I,F),h(I,G),K&&E(K,G,null),h(I,U),h(I,_),E(J,_,null),h(I,O),ot&&ot.m(I,null),h(I,Q),h(I,W),h(W,X);for(let t=0;t<dt.length;t+=1)dt[t].m(X,null);h(W,Y),h(W,Z),h(Z,tt),h(Z,et);for(let t=0;t<ft.length;t+=1)ft[t].m(Z,null);at=!0,lt||(nt=f(tt,"click",t[7]),lt=!0)},p(t,[s]){if((!at||16&s)&&e!==(e=t[4].title)&&(q.title=e),(!at||16&s)&&ct!==(ct=t[4].title+"")&&u(V,ct),(!at||16&s&&S!==(S="https://svelte.dev/repl/"+t[4].replPath))&&r(M,"href",S),rt!==(rt=t[4].component)){if(K){j();const t=K;w(t.$$.fragment,1,0,()=>{x(t,1)}),k()}rt?(K=new rt({}),v(K.$$.fragment),D(K.$$.fragment,1),E(K,G,null)):K=null}(!at||2&s&&N!==(N=t[1].toLowerCase()))&&r(G,"data-slug",N);const a={};if(4&s&&(a.data=t[2]),2&s&&(a.slug=t[1]),J.$set(a),t[2].dek?ot?ot.p(t,s):(ot=z(t),ot.c(),ot.m(I,Q)):ot&&(ot.d(1),ot=null),9&s){let e;for(it=t[3],e=0;e<it.length;e+=1){const a=R(t,it,e);dt[e]?dt[e].p(a,s):(dt[e]=A(a),dt[e].c(),dt[e].m(X,null))}for(;e<dt.length;e+=1)dt[e].d(1);dt.length=it.length}if(73&s){let e;for(ht=t[3],e=0;e<ht.length;e+=1){const a=P(t,ht,e);ft[e]?ft[e].p(a,s):(ft[e]=B(a),ft[e].c(),ft[e].m(Z,null))}for(;e<ft.length;e+=1)ft[e].d(1);ft.length=ht.length}(!at||4&s&&st!==(st=y(t[2].dek?"has-dek":"")+" svelte-1b77smd"))&&r(W,"class",st)},i(t){at||(K&&D(K.$$.fragment,t),D(J.$$.fragment,t),at=!0)},o(t){K&&w(K.$$.fragment,t),w(J.$$.fragment,t),at=!1},d(t){c(s),t&&c(g),t&&c(I),K&&x(K),x(J),ot&&ot.d(),C(dt,t),C(ft,t),lt=!1,nt()}}}async function G({params:t,query:e}){const s=await this.fetch(`example-ssr/${t.slug}.json`),a=await s.json();if(200===s.status)return{slug:t.slug,data:a,active:"index"};this.error(s.status,a.message)}function K(t,e,s){V.registerLanguage("svelte",M),M(V);let{slug:a}=e,{data:l}=e,{active:n="index"}=e;const c=new S.Renderer;const r=new Map;I.forEach(t=>{r.set(t.slug,t)});let o,i;return t.$set=t=>{"slug"in t&&s(1,a=t.slug),"data"in t&&s(2,l=t.data),"active"in t&&s(0,n=t.active)},t.$$.update=()=>{4&t.$$.dirty&&s(3,o=[l.main].concat(l.components).concat(l.modules).concat(l.componentModules).concat(l.componentComponents).concat(l.csvs)),2&t.$$.dirty&&s(4,i=r.get(a))},[n,a,l,o,i,function(t){return S(t,{renderer:c})},function(t,e){const s=e.split(".");let a=s[s.length-1];return"csv"===a&&(a="diff"),V.highlight(a,t).value},function(){const t=o.filter(t=>H(t.title)===n)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const e=document.createElement("textarea");e.textContent=t,e.style.position="fixed",document.body.appendChild(e),e.select();try{return document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(e)}}},t=>s(0,n=H(t.title))]}export default class extends t{constructor(t){super(),e(this,t,K,F,s,{slug:1,data:2,active:0})}}export{G as preload};
