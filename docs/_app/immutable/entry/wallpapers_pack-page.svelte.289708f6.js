import{S as te,i as se,s as re,k as P,q as A,a as L,l as E,m as j,r as $,h as m,c as H,n as h,b as w,D as v,u as M,H as C,O as ie,J as R,e as O,P as fe,g as U,d as K,f as ne,o as oe,y as pe,z as ue,A as me,B as _e,v as ce}from"../chunks/index.90227162.js";import{j as G}from"../chunks/singletons.1bca0556.js";import{r as I}from"../chunks/constants.28d593a4.js";G.disable_scroll_handling;const X=G.goto;G.invalidate;G.invalidateAll;G.preload_data;G.preload_code;G.before_navigate;G.after_navigate;function Y(s,e,f){const l=s.slice();return l[2]=e[f],l}function he(s){let e,f;return{c(){e=P("img"),this.h()},l(l){e=E(l,"IMG",{class:!0,alt:!0}),this.h()},h(){h(e,"class","thubnail svelte-13388qk"),h(e,"alt",f=s[0].platformWallpapersPackName)},m(l,r){w(l,e,r)},p(l,r){r&1&&f!==(f=l[0].platformWallpapersPackName)&&h(e,"alt",f)},d(l){l&&m(e)}}}function ke(s){let e,f,l;return{c(){e=P("img"),this.h()},l(r){e=E(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(e,"class","thubnail svelte-13388qk"),R(e.src,f=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].previewThumbnailFilename)||h(e,"src",f),h(e,"alt",l=s[0].platformWallpapersPackName)},m(r,a){w(r,e,a)},p(r,a){a&3&&!R(e.src,f=I+"/themes/platform_wallpapers_packs/"+r[1]+"/"+r[0].previewThumbnailFilename)&&h(e,"src",f),a&1&&l!==(l=r[0].platformWallpapersPackName)&&h(e,"alt",l)},d(r){r&&m(e)}}}function Z(s){let e,f,l=s[0].hasDefaultWallpaper?"yes":"no",r,a=s[0].isNSFW?" • NSFW":"",i,n,u,k=s[0].description+"",d;return{c(){e=P("p"),f=A("Has default wallpaper: "),r=A(l),i=A(a),n=L(),u=P("p"),d=A(k)},l(p){e=E(p,"P",{});var t=j(e);f=$(t,"Has default wallpaper: "),r=$(t,l),i=$(t,a),t.forEach(m),n=H(p),u=E(p,"P",{});var c=j(u);d=$(c,k),c.forEach(m)},m(p,t){w(p,e,t),v(e,f),v(e,r),v(e,i),w(p,n,t),w(p,u,t),v(u,d)},p(p,t){t&1&&l!==(l=p[0].hasDefaultWallpaper?"yes":"no")&&M(r,l),t&1&&a!==(a=p[0].isNSFW?" • NSFW":"")&&M(i,a),t&1&&k!==(k=p[0].description+"")&&M(d,k)},d(p){p&&m(e),p&&m(n),p&&m(u)}}}function y(s){let e,f,l=s[0].authors.join(", ")+"",r,a,i,n,u=s[0].sources.join(", ")+"",k,d;return{c(){e=P("p"),f=A("Authors: "),r=A(l),a=A("."),i=P("br"),n=A("Sources: "),k=A(u),d=A("."),this.h()},l(p){e=E(p,"P",{class:!0});var t=j(e);f=$(t,"Authors: "),r=$(t,l),a=$(t,"."),i=E(t,"BR",{}),n=$(t,"Sources: "),k=$(t,u),d=$(t,"."),t.forEach(m),this.h()},h(){h(e,"class","authors")},m(p,t){w(p,e,t),v(e,f),v(e,r),v(e,a),v(e,i),v(e,n),v(e,k),v(e,d)},p(p,t){t&1&&l!==(l=p[0].authors.join(", ")+"")&&M(r,l),t&1&&u!==(u=p[0].sources.join(", ")+"")&&M(k,u)},d(p){p&&m(e)}}}function x(s){let e,f,l,r,a,i,n,u,k,d=s[0].defaultWallpaperFilename+"",p;return{c(){e=P("h2"),f=A("default"),l=L(),r=P("a"),a=P("img"),u=L(),k=P("span"),p=A(d),this.h()},l(t){e=E(t,"H2",{});var c=j(e);f=$(c,"default"),c.forEach(m),l=H(t),r=E(t,"A",{href:!0,target:!0});var _=j(r);a=E(_,"IMG",{class:!0,src:!0,alt:!0}),_.forEach(m),u=H(t),k=E(t,"SPAN",{class:!0});var g=j(k);p=$(g,d),g.forEach(m),this.h()},h(){h(a,"class","wallpaper svelte-13388qk"),R(a.src,i=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].defaultWallpaperFilename)||h(a,"src",i),h(a,"alt","default"),h(r,"href",n=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].defaultWallpaperFilename),h(r,"target","_blank"),h(k,"class","filename svelte-13388qk")},m(t,c){w(t,e,c),v(e,f),w(t,l,c),w(t,r,c),v(r,a),w(t,u,c),w(t,k,c),v(k,p)},p(t,c){c&3&&!R(a.src,i=I+"/themes/platform_wallpapers_packs/"+t[1]+"/"+t[0].defaultWallpaperFilename)&&h(a,"src",i),c&3&&n!==(n=I+"/themes/platform_wallpapers_packs/"+t[1]+"/"+t[0].defaultWallpaperFilename)&&h(r,"href",n),c&1&&d!==(d=t[0].defaultWallpaperFilename+"")&&M(p,d)},d(t){t&&m(e),t&&m(l),t&&m(r),t&&m(u),t&&m(k)}}}function ee(s){let e,f=s[2].matchPlatformShortname+"",l,r,a,i,n,u,k,d,p,t=s[2].filename+"",c;return{c(){e=P("h2"),l=A(f),r=L(),a=P("a"),i=P("img"),d=L(),p=P("span"),c=A(t),this.h()},l(_){e=E(_,"H2",{});var g=j(e);l=$(g,f),g.forEach(m),r=H(_),a=E(_,"A",{href:!0,target:!0});var T=j(a);i=E(T,"IMG",{class:!0,src:!0,alt:!0}),T.forEach(m),d=H(_),p=E(_,"SPAN",{class:!0});var D=j(p);c=$(D,t),D.forEach(m),this.h()},h(){h(i,"class","wallpaper svelte-13388qk"),R(i.src,n=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[2].filename)||h(i,"src",n),h(i,"alt",u=s[2].matchPlatformShortname),h(a,"href",k=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[2].filename),h(a,"target","_blank"),h(p,"class","filename svelte-13388qk")},m(_,g){w(_,e,g),v(e,l),w(_,r,g),w(_,a,g),v(a,i),w(_,d,g),w(_,p,g),v(p,c)},p(_,g){g&1&&f!==(f=_[2].matchPlatformShortname+"")&&M(l,f),g&3&&!R(i.src,n=I+"/themes/platform_wallpapers_packs/"+_[1]+"/"+_[2].filename)&&h(i,"src",n),g&1&&u!==(u=_[2].matchPlatformShortname)&&h(i,"alt",u),g&3&&k!==(k=I+"/themes/platform_wallpapers_packs/"+_[1]+"/"+_[2].filename)&&h(a,"href",k),g&1&&t!==(t=_[2].filename+"")&&M(c,t)},d(_){_&&m(e),_&&m(r),_&&m(a),_&&m(d),_&&m(p)}}}function ve(s){let e,f,l,r,a,i,n,u=(s[0].name?s[0].name:"Loading…")+"",k,d,p,t,c,_;function g(o,b){return o[0].previewThumbnailFilename?ke:he}let T=g(s),D=T(s),F=s[0].name&&Z(s),q=(s[0].authors&&s[0].authors.length>0||s[0].sources&&s[0].sources.length>0)&&y(s),N=s[0].hasDefaultWallpaper&&x(s),B=s[0].wallpaperList,S=[];for(let o=0;o<B.length;o+=1)S[o]=ee(Y(s,B,o));return{c(){e=P("article"),f=P("p"),l=P("a"),r=A("« back to list"),a=L(),D.c(),i=L(),n=P("h1"),k=A(u),d=L(),F&&F.c(),p=L(),q&&q.c(),t=L(),c=P("div"),N&&N.c(),_=L();for(let o=0;o<S.length;o+=1)S[o].c();this.h()},l(o){e=E(o,"ARTICLE",{class:!0});var b=j(e);f=E(b,"P",{});var W=j(f);l=E(W,"A",{class:!0,href:!0});var z=j(l);r=$(z,"« back to list"),z.forEach(m),W.forEach(m),a=H(b),D.l(b),i=H(b),n=E(b,"H1",{});var Q=j(n);k=$(Q,u),Q.forEach(m),d=H(b),F&&F.l(b),p=H(b),q&&q.l(b),b.forEach(m),t=H(o),c=E(o,"DIV",{class:!0});var J=j(c);N&&N.l(J),_=H(J);for(let V=0;V<S.length;V+=1)S[V].l(J);J.forEach(m),this.h()},h(){h(l,"class","back-link svelte-13388qk"),h(l,"href","../"),h(e,"class","svelte-13388qk"),h(c,"class","wallpapers svelte-13388qk")},m(o,b){w(o,e,b),v(e,f),v(f,l),v(l,r),v(e,a),D.m(e,null),v(e,i),v(e,n),v(n,k),v(e,d),F&&F.m(e,null),v(e,p),q&&q.m(e,null),w(o,t,b),w(o,c,b),N&&N.m(c,null),v(c,_);for(let W=0;W<S.length;W+=1)S[W]&&S[W].m(c,null)},p(o,[b]){if(T===(T=g(o))&&D?D.p(o,b):(D.d(1),D=T(o),D&&(D.c(),D.m(e,i))),b&1&&u!==(u=(o[0].name?o[0].name:"Loading…")+"")&&M(k,u),o[0].name?F?F.p(o,b):(F=Z(o),F.c(),F.m(e,p)):F&&(F.d(1),F=null),o[0].authors&&o[0].authors.length>0||o[0].sources&&o[0].sources.length>0?q?q.p(o,b):(q=y(o),q.c(),q.m(e,null)):q&&(q.d(1),q=null),o[0].hasDefaultWallpaper?N?N.p(o,b):(N=x(o),N.c(),N.m(c,_)):N&&(N.d(1),N=null),b&3){B=o[0].wallpaperList;let W;for(W=0;W<B.length;W+=1){const z=Y(o,B,W);S[W]?S[W].p(z,b):(S[W]=ee(z),S[W].c(),S[W].m(c,null))}for(;W<S.length;W+=1)S[W].d(1);S.length=B.length}},i:C,o:C,d(o){o&&m(e),D.d(),F&&F.d(),q&&q.d(),o&&m(t),o&&m(c),N&&N.d(),ie(S,o)}}}function de(s,e,f){let{index:l}=e,{slug:r}=e;return s.$$set=a=>{"index"in a&&f(0,l=a.index),"slug"in a&&f(1,r=a.slug)},[l,r]}class be extends te{constructor(e){super(),se(this,e,de,ve,re,{index:0,slug:1})}}function le(s){return document.title=" "+s[0].name+" ",{c:C,l:C,m:C,d:C}}function ae(s){let e,f;return e=new be({props:{index:s[0],slug:s[1]}}),{c(){pe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){me(e,l,r),f=!0},p(l,r){const a={};r&1&&(a.index=l[0]),r&2&&(a.slug=l[1]),e.$set(a)},i(l){f||(U(e.$$.fragment,l),f=!0)},o(l){K(e.$$.fragment,l),f=!1},d(l){_e(e,l)}}}function we(s){let e,f,l,r,a=s[0].name&&le(s),i=s[0]&&ae(s);return{c(){a&&a.c(),e=O(),f=L(),i&&i.c(),l=O()},l(n){const u=fe("svelte-rytn9h",document.head);a&&a.l(u),e=O(),u.forEach(m),f=H(n),i&&i.l(n),l=O()},m(n,u){a&&a.m(document.head,null),v(document.head,e),w(n,f,u),i&&i.m(n,u),w(n,l,u),r=!0},p(n,[u]){n[0].name?a||(a=le(n),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),n[0]?i?(i.p(n,u),u&1&&U(i,1)):(i=ae(n),i.c(),U(i,1),i.m(l.parentNode,l)):i&&(ce(),K(i,1,1,()=>{i=null}),ne())},i(n){r||(U(i),r=!0)},o(n){K(i),r=!1},d(n){a&&a.d(n),m(e),n&&m(f),i&&i.d(n),n&&m(l)}}}function ge(s,e,f){let l={name:null,description:"Loading…",wallpaperList:[],authors:[],sources:[]},r;return oe(async()=>{let a=window.location.hash;if(a){f(1,r=a.substring(1));try{f(0,l=await fetch(`${I}/themes/platform_wallpapers_packs/${r}/index.json`).then(i=>i.json()))}catch(i){console.error(i),X("/")}}else X("/")}),[l,r]}class Se extends te{constructor(e){super(),se(this,e,ge,we,re,{})}}export{Se as default};
