import{S as C,i as H,s as M,k,a as U,q as L,l as g,m as P,c as D,r as E,h as _,n as m,J as K,b as A,D as f,u as B,H as $,e as I,v as Q,d as b,f as V,g as v,o as ee,K as te,y as X,z as Y,A as Z,B as x,L as ae}from"../chunks/index.2fe21cc9.js";import{r as le}from"../chunks/constants.28d593a4.js";function se(o){let e,l,a,t,i,r,n,s=o[0].platformWallpapersPackName+"",p,h,q,W,w=o[0].platformWallpapersPackDescription+"",N,R,d,S,y=o[0].platformWallpapersPackAuthors.join(", ")+"",j;return{c(){e=k("article"),l=k("img"),i=U(),r=k("h2"),n=k("a"),p=L(s),q=U(),W=k("p"),N=L(w),R=U(),d=k("p"),S=L("Author(s): "),j=L(y),this.h()},l(u){e=g(u,"ARTICLE",{class:!0});var c=P(e);l=g(c,"IMG",{class:!0,src:!0,alt:!0}),i=D(c),r=g(c,"H2",{});var z=P(r);n=g(z,"A",{href:!0,class:!0});var G=P(n);p=E(G,s),G.forEach(_),z.forEach(_),q=D(c),W=g(c,"P",{});var J=P(W);N=E(J,w),J.forEach(_),R=D(c),d=g(c,"P",{class:!0});var T=P(d);S=E(T,"Author(s): "),j=E(T,y),T.forEach(_),c.forEach(_),this.h()},h(){m(l,"class","thumbnail svelte-977nhd"),K(l.src,a=""+(window.baseUri+o[0].platformWallpapersPackPreviewThumbnailPath))||m(l,"src",a),m(l,"alt",t=o[0].platformWallpapersPackName),m(n,"href",h="./wallpapers_pack/#"+o[0].platformWallpapersPackRootPath),m(n,"class","svelte-977nhd"),m(d,"class","authors"),m(e,"class","svelte-977nhd")},m(u,c){A(u,e,c),f(e,l),f(e,i),f(e,r),f(r,n),f(n,p),f(e,q),f(e,W),f(W,N),f(e,R),f(e,d),f(d,S),f(d,j)},p(u,[c]){c&1&&!K(l.src,a=""+(window.baseUri+u[0].platformWallpapersPackPreviewThumbnailPath))&&m(l,"src",a),c&1&&t!==(t=u[0].platformWallpapersPackName)&&m(l,"alt",t),c&1&&s!==(s=u[0].platformWallpapersPackName+"")&&B(p,s),c&1&&h!==(h="./wallpapers_pack/#"+u[0].platformWallpapersPackRootPath)&&m(n,"href",h),c&1&&w!==(w=u[0].platformWallpapersPackDescription+"")&&B(N,w),c&1&&y!==(y=u[0].platformWallpapersPackAuthors.join(", ")+"")&&B(j,y)},i:$,o:$,d(u){u&&_(e)}}}function re(o,e,l){let{item:a}=e;return o.$$set=t=>{"item"in t&&l(0,a=t.item)},[a]}class ne extends C{constructor(e){super(),H(this,e,re,se,M,{item:0})}}function F(o,e,l){const a=o.slice();return a[1]=e[l],a}function oe(o){let e,l;return{c(){e=k("p"),l=L("Loading..."),this.h()},l(a){e=g(a,"P",{class:!0});var t=P(e);l=E(t,"Loading..."),t.forEach(_),this.h()},h(){m(e,"class","loading svelte-1uvpyab")},m(a,t){A(a,e,t),f(e,l)},p:$,i:$,o:$,d(a){a&&_(e)}}}function ce(o){let e,l,a=o[0],t=[];for(let r=0;r<a.length;r+=1)t[r]=O(F(o,a,r));const i=r=>b(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},l(r){for(let n=0;n<t.length;n+=1)t[n].l(r);e=I()},m(r,n){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(r,n);A(r,e,n),l=!0},p(r,n){if(n&1){a=r[0];let s;for(s=0;s<a.length;s+=1){const p=F(r,a,s);t[s]?(t[s].p(p,n),v(t[s],1)):(t[s]=O(p),t[s].c(),v(t[s],1),t[s].m(e.parentNode,e))}for(Q(),s=a.length;s<t.length;s+=1)i(s);V()}},i(r){if(!l){for(let n=0;n<a.length;n+=1)v(t[n]);l=!0}},o(r){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)b(t[n]);l=!1},d(r){te(t,r),r&&_(e)}}}function O(o){let e,l;return e=new ne({props:{item:o[1]}}),{c(){X(e.$$.fragment)},l(a){Y(e.$$.fragment,a)},m(a,t){Z(e,a,t),l=!0},p(a,t){const i={};t&1&&(i.item=a[1]),e.$set(i)},i(a){l||(v(e.$$.fragment,a),l=!0)},o(a){b(e.$$.fragment,a),l=!1},d(a){x(e,a)}}}function ie(o){let e,l,a,t;const i=[ce,oe],r=[];function n(s,p){return s[0]?0:1}return e=n(o),l=r[e]=i[e](o),{c(){l.c(),a=I()},l(s){l.l(s),a=I()},m(s,p){r[e].m(s,p),A(s,a,p),t=!0},p(s,[p]){let h=e;e=n(s),e===h?r[e].p(s,p):(Q(),b(r[h],1,1,()=>{r[h]=null}),V(),l=r[e],l?l.p(s,p):(l=r[e]=i[e](s),l.c()),v(l,1),l.m(a.parentNode,a))},i(s){t||(v(l),t=!0)},o(s){b(l),t=!1},d(s){r[e].d(s),s&&_(a)}}}function pe(o,e,l){let a;return ee(async()=>{a==null&&fetch(`${le}/themes/platform_wallpapers_packs/index.json`).then(t=>t.json()).then(t=>{l(0,a=t.platformWallpapersPackList),window.baseUri=t.baseUri})}),[a]}class fe extends C{constructor(e){super(),H(this,e,pe,ie,M,{})}}function ue(o){let e,l,a;return l=new fe({}),{c(){e=U(),X(l.$$.fragment),this.h()},l(t){ae("svelte-6ytk1g",document.head).forEach(_),e=D(t),Y(l.$$.fragment,t),this.h()},h(){document.title="Daijishō Wallpapers Packs"},m(t,i){A(t,e,i),Z(l,t,i),a=!0},p:$,i(t){a||(v(l.$$.fragment,t),a=!0)},o(t){b(l.$$.fragment,t),a=!1},d(t){t&&_(e),x(l,t)}}}class he extends C{constructor(e){super(),H(this,e,null,ue,M,{})}}export{he as default};
