import{M as t,N as e,a as n,b as a,d as r,e as s,i as c,s as o,f as l,S as i,g as u,j as f,k as h,m as d,o as v,p as m,t as p,l as g,q as $,K as y,O as k,h as w,n as E,J as D,v as x,A as b,F as C,P as I,x as L,B as j,r as V,u as M,w as R,y as H,E as P,C as S,Q as T,G as q}from"./client.86b10750.js";import{h as A,a as B}from"./hljsDefineSvelte.78676283.js";import{D as K,m as N}from"./DownloadBtn.c3c62558.js";function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return r(this,n)}}var G=T.document;function J(t,e,n){var a=t.slice();return a[11]=e[n],a}function O(t,e,n){var a=t.slice();return a[11]=e[n],a}function Q(t){var e,n=t[5](t[2].dek)+"";return{c:function(){e=u("div"),this.h()},l:function(t){e=f(t,"DIV",{class:!0}),h(e).forEach(d),this.h()},h:function(){v(e,"class","dek svelte-m4suor")},m:function(t,a){m(t,e,a),e.innerHTML=n},p:function(t,a){4&a&&n!==(n=t[5](t[2].dek)+"")&&(e.innerHTML=n)},d:function(t){t&&d(e)}}}function U(t){var e,n,a,r,s,c=t[11].title+"";function o(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t)[8].apply(e,[t[11]].concat(a))}return{c:function(){e=u("li"),n=p(c),this.h()},l:function(t){e=f(t,"LI",{class:!0});var a=h(e);n=g(a,c),a.forEach(d),this.h()},h:function(){v(e,"class",a="tab "+(t[0]===Y(t[11].title)?"active":"")+" svelte-m4suor")},m:function(t,a){m(t,e,a),$(e,n),r||(s=y(e,"click",o),r=!0)},p:function(r,s){t=r,8&s&&c!==(c=t[11].title+"")&&k(n,c),9&s&&a!==(a="tab "+(t[0]===Y(t[11].title)?"active":"")+" svelte-m4suor")&&v(e,"class",a)},d:function(t){t&&d(e),r=!1,s()}}}function _(t){var e,n,a,r=t[6](t[11].contents,t[11].title)+"";return{c:function(){e=u("div"),n=u("pre"),a=w(),this.h()},l:function(t){e=f(t,"DIV",{class:!0,style:!0});var r=h(e);n=f(r,"PRE",{class:!0}),h(n).forEach(d),a=E(r),r.forEach(d),this.h()},h:function(){v(n,"class","svelte-m4suor"),v(e,"class","contents"),D(e,"display",t[0]===Y(t[11].title)?"block":"none")},m:function(t,s){m(t,e,s),$(e,n),n.innerHTML=r,$(e,a)},p:function(t,a){8&a&&r!==(r=t[6](t[11].contents,t[11].title)+"")&&(n.innerHTML=r),9&a&&D(e,"display",t[0]===Y(t[11].title)?"block":"none")},d:function(t){t&&d(e)}}}function z(t){var e,n,a,r,s,c,o,l,i,D,S,T,A,B,N,F,z,W,X,Y,Z,tt,et,nt,at,rt,st,ct=t[4].title+"";G.title=e=t[4].title;var ot=t[4].component;ot&&(T=new ot({})),N=new K({props:{data:t[2],slug:t[1]}});for(var lt=t[2].dek&&Q(t),it=t[3],ut=[],ft=0;ft<it.length;ft+=1)ut[ft]=U(O(t,it,ft));for(var ht=t[3],dt=[],vt=0;vt<ht.length;vt+=1)dt[vt]=_(J(t,ht,vt));return{c:function(){n=u("link"),a=w(),r=u("div"),s=u("h1"),c=p(ct),o=u("a"),l=p("Edit"),D=w(),S=u("div"),T&&x(T.$$.fragment),A=w(),B=u("div"),x(N.$$.fragment),F=w(),lt&&lt.c(),z=w(),W=u("div"),X=u("ul");for(var t=0;t<ut.length;t+=1)ut[t].c();Y=w(),Z=u("div"),tt=u("div"),et=w();for(var e=0;e<dt.length;e+=1)dt[e].c();this.h()},l:function(t){var e=b('[data-svelte="svelte-dklk17"]',G.head);n=f(e,"LINK",{rel:!0,href:!0}),e.forEach(d),a=E(t),r=f(t,"DIV",{class:!0});var i=h(r);s=f(i,"H1",{});var u=h(s);c=g(u,ct),o=f(u,"A",{class:!0,href:!0,target:!0,rel:!0});var v=h(o);l=g(v,"Edit"),v.forEach(d),u.forEach(d),D=E(i),S=f(i,"DIV",{class:!0});var m=h(S);T&&C(T.$$.fragment,m),m.forEach(d),A=E(i),B=f(i,"DIV",{class:!0});var p=h(B);C(N.$$.fragment,p),p.forEach(d),F=E(i),lt&&lt.l(i),z=E(i),W=f(i,"DIV",{id:!0,class:!0});var $=h(W);X=f($,"UL",{id:!0,class:!0});for(var y=h(X),k=0;k<ut.length;k+=1)ut[k].l(y);y.forEach(d),Y=E($),Z=f($,"DIV",{id:!0,class:!0});var w=h(Z);tt=f(w,"DIV",{class:!0}),h(tt).forEach(d),et=E(w);for(var x=0;x<dt.length;x+=1)dt[x].l(w);w.forEach(d),$.forEach(d),i.forEach(d),this.h()},h:function(){v(n,"rel","stylesheet"),v(n,"href","hljs.css"),v(o,"class","edit-repl svelte-m4suor"),v(o,"href",i="https://svelte.dev/repl/"+t[4].replPath),v(o,"target","_blank"),v(o,"rel","nofollow"),v(S,"class","chart-hero svelte-m4suor"),v(B,"class","download svelte-m4suor"),v(X,"id","page-nav"),v(X,"class","svelte-m4suor"),v(tt,"class","copy svelte-m4suor"),v(Z,"id","contents-container"),v(Z,"class","svelte-m4suor"),v(W,"id","pages"),v(W,"class",nt=I(t[2].dek?"has-dek":"")+" svelte-m4suor"),v(r,"class","main svelte-m4suor")},m:function(e,i){$(G.head,n),m(e,a,i),m(e,r,i),$(r,s),$(s,c),$(s,o),$(o,l),$(r,D),$(r,S),T&&L(T,S,null),$(r,A),$(r,B),L(N,B,null),$(r,F),lt&&lt.m(r,null),$(r,z),$(r,W),$(W,X);for(var u=0;u<ut.length;u+=1)ut[u].m(X,null);$(W,Y),$(W,Z),$(Z,tt),$(Z,et);for(var f=0;f<dt.length;f+=1)dt[f].m(Z,null);at=!0,rt||(st=y(tt,"click",t[7]),rt=!0)},p:function(t,n){var a=j(n,1)[0];if((!at||16&a)&&e!==(e=t[4].title)&&(G.title=e),(!at||16&a)&&ct!==(ct=t[4].title+"")&&k(c,ct),(!at||16&a&&i!==(i="https://svelte.dev/repl/"+t[4].replPath))&&v(o,"href",i),ot!==(ot=t[4].component)){if(T){q();var s=T;V(s.$$.fragment,1,0,(function(){H(s,1)})),M()}ot?(T=new ot({}),x(T.$$.fragment),R(T.$$.fragment,1),L(T,S,null)):T=null}var l={};if(4&a&&(l.data=t[2]),2&a&&(l.slug=t[1]),N.$set(l),t[2].dek?lt?lt.p(t,a):((lt=Q(t)).c(),lt.m(r,z)):lt&&(lt.d(1),lt=null),9&a){var u;for(it=t[3],u=0;u<it.length;u+=1){var f=O(t,it,u);ut[u]?ut[u].p(f,a):(ut[u]=U(f),ut[u].c(),ut[u].m(X,null))}for(;u<ut.length;u+=1)ut[u].d(1);ut.length=it.length}if(73&a){var h;for(ht=t[3],h=0;h<ht.length;h+=1){var d=J(t,ht,h);dt[h]?dt[h].p(d,a):(dt[h]=_(d),dt[h].c(),dt[h].m(Z,null))}for(;h<dt.length;h+=1)dt[h].d(1);dt.length=ht.length}(!at||4&a&&nt!==(nt=I(t[2].dek?"has-dek":"")+" svelte-m4suor"))&&v(W,"class",nt)},i:function(t){at||(T&&R(T.$$.fragment,t),R(N.$$.fragment,t),at=!0)},o:function(t){T&&V(T.$$.fragment,t),V(N.$$.fragment,t),at=!1},d:function(t){d(n),t&&d(a),t&&d(r),T&&H(T),H(N),lt&&lt.d(),P(ut,t),P(dt,t),rt=!1,st()}}}function W(t){return X.apply(this,arguments)}function X(){return(X=t(e.mark((function t(n){var a,r,s;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.params,n.query,t.next=3,this.fetch("example/".concat(a.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(s=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{slug:a.slug,data:s,active:"index"});case 11:this.error(r.status,s.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Y(t){var e=t.split("/");return e[e.length-1].split(".")[0].toLowerCase()}function Z(t,e,n){A.registerLanguage("svelte",B),B(A);var a=e.slug,r=e.data,s=e.active,c=void 0===s?"index":s,o=new N.Renderer;var l=new Map;S.forEach((function(t){l.set(t.slug,t)}));var i,u;return t.$set=function(t){"slug"in t&&n(1,a=t.slug),"data"in t&&n(2,r=t.data),"active"in t&&n(0,c=t.active)},t.$$.update=function(){4&t.$$.dirty&&n(3,i=[r.main].concat(r.components).concat(r.modules).concat(r.componentModules).concat(r.componentComponents).concat(r.csvs)),2&t.$$.dirty&&n(4,u=l.get(a))},[c,a,r,i,u,function(t){return N(t,{renderer:o})},function(t,e){var n=e.split("."),a=n[n.length-1];return"csv"===a&&(a="diff"),A.highlight(a,t).value},function(){var t=i.filter((function(t){return Y(t.title)===c}))[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var e=document.createElement("textarea");e.textContent=t,e.style.position="fixed",document.body.appendChild(e),e.select();try{return document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(e)}}},function(t){return n(0,c=Y(t.title))}]}var tt=function(t){n(a,i);var e=F(a);function a(t){var n;return s(this,a),n=e.call(this),c(l(n),t,Z,z,o,{slug:1,data:2,active:0}),n}return a}();export default tt;export{W as preload};