import{S as re,i as ie,s as fe,k as P,q as A,a as L,l as E,m as D,r as $,h as m,c as j,n as h,b as g,D as d,L as ne,u as M,H as B,O as oe,J as C,e as V,P as pe,g as K,d as X,f as ue,o as me,y as _e,z as ce,A as he,B as ke,v as de}from"../chunks/index.90227162.js";import{j as G}from"../chunks/singletons.ca581e35.js";import{r as I}from"../chunks/constants.28d593a4.js";G.disable_scroll_handling;const Z=G.goto;G.invalidate;G.invalidateAll;G.preload_data;G.preload_code;G.before_navigate;G.after_navigate;function y(s,e,f){const l=s.slice();return l[2]=e[f],l}function ve(s){let e,f;return{c(){e=P("img"),this.h()},l(l){e=E(l,"IMG",{class:!0,alt:!0}),this.h()},h(){h(e,"class","thubnail svelte-13388qk"),h(e,"alt",f=s[0].platformWallpapersPackName)},m(l,r){g(l,e,r)},p(l,r){r&1&&f!==(f=l[0].platformWallpapersPackName)&&h(e,"alt",f)},d(l){l&&m(e)}}}function be(s){let e,f,l;return{c(){e=P("img"),this.h()},l(r){e=E(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(e,"class","thubnail svelte-13388qk"),C(e.src,f=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].previewThumbnailFilename)||h(e,"src",f),h(e,"alt",l=s[0].platformWallpapersPackName)},m(r,a){g(r,e,a)},p(r,a){a&3&&!C(e.src,f=I+"/themes/platform_wallpapers_packs/"+r[1]+"/"+r[0].previewThumbnailFilename)&&h(e,"src",f),a&1&&l!==(l=r[0].platformWallpapersPackName)&&h(e,"alt",l)},d(r){r&&m(e)}}}function x(s){let e,f,l=s[0].hasDefaultWallpaper?"yes":"no",r,a=s[0].isNSFW?" • NSFW":"",i,n,u,k=s[0].description+"",v;return{c(){e=P("p"),f=A("Has default wallpaper: "),r=A(l),i=A(a),n=L(),u=P("p"),v=A(k)},l(p){e=E(p,"P",{});var t=D(e);f=$(t,"Has default wallpaper: "),r=$(t,l),i=$(t,a),t.forEach(m),n=j(p),u=E(p,"P",{});var c=D(u);v=$(c,k),c.forEach(m)},m(p,t){g(p,e,t),d(e,f),d(e,r),d(e,i),g(p,n,t),g(p,u,t),d(u,v)},p(p,t){t&1&&l!==(l=p[0].hasDefaultWallpaper?"yes":"no")&&M(r,l),t&1&&a!==(a=p[0].isNSFW?" • NSFW":"")&&M(i,a),t&1&&k!==(k=p[0].description+"")&&M(v,k)},d(p){p&&m(e),p&&m(n),p&&m(u)}}}function ee(s){let e,f,l=s[0].authors.join(", ")+"",r,a,i,n,u=s[0].sources.join(", ")+"",k,v;return{c(){e=P("p"),f=A("Authors: "),r=A(l),a=A("."),i=P("br"),n=A("Sources: "),k=A(u),v=A("."),this.h()},l(p){e=E(p,"P",{class:!0});var t=D(e);f=$(t,"Authors: "),r=$(t,l),a=$(t,"."),i=E(t,"BR",{}),n=$(t,"Sources: "),k=$(t,u),v=$(t,"."),t.forEach(m),this.h()},h(){h(e,"class","authors")},m(p,t){g(p,e,t),d(e,f),d(e,r),d(e,a),d(e,i),d(e,n),d(e,k),d(e,v)},p(p,t){t&1&&l!==(l=p[0].authors.join(", ")+"")&&M(r,l),t&1&&u!==(u=p[0].sources.join(", ")+"")&&M(k,u)},d(p){p&&m(e)}}}function le(s){let e,f,l,r,a,i,n,u,k,v=s[0].defaultWallpaperFilename+"",p;return{c(){e=P("h2"),f=A("default"),l=L(),r=P("a"),a=P("img"),u=L(),k=P("span"),p=A(v),this.h()},l(t){e=E(t,"H2",{});var c=D(e);f=$(c,"default"),c.forEach(m),l=j(t),r=E(t,"A",{href:!0,target:!0});var _=D(r);a=E(_,"IMG",{class:!0,src:!0,alt:!0}),_.forEach(m),u=j(t),k=E(t,"SPAN",{class:!0});var w=D(k);p=$(w,v),w.forEach(m),this.h()},h(){h(a,"class","wallpaper svelte-13388qk"),C(a.src,i=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].defaultWallpaperFilename)||h(a,"src",i),h(a,"alt","default"),h(r,"href",n=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].defaultWallpaperFilename),h(r,"target","_blank"),h(k,"class","filename svelte-13388qk")},m(t,c){g(t,e,c),d(e,f),g(t,l,c),g(t,r,c),d(r,a),g(t,u,c),g(t,k,c),d(k,p)},p(t,c){c&3&&!C(a.src,i=I+"/themes/platform_wallpapers_packs/"+t[1]+"/"+t[0].defaultWallpaperFilename)&&h(a,"src",i),c&3&&n!==(n=I+"/themes/platform_wallpapers_packs/"+t[1]+"/"+t[0].defaultWallpaperFilename)&&h(r,"href",n),c&1&&v!==(v=t[0].defaultWallpaperFilename+"")&&M(p,v)},d(t){t&&m(e),t&&m(l),t&&m(r),t&&m(u),t&&m(k)}}}function ae(s){let e,f=s[2].matchPlatformShortname+"",l,r,a,i,n,u,k,v,p,t=s[2].filename+"",c;return{c(){e=P("h2"),l=A(f),r=L(),a=P("a"),i=P("img"),v=L(),p=P("span"),c=A(t),this.h()},l(_){e=E(_,"H2",{});var w=D(e);l=$(w,f),w.forEach(m),r=j(_),a=E(_,"A",{href:!0,target:!0});var R=D(a);i=E(R,"IMG",{class:!0,src:!0,alt:!0}),R.forEach(m),v=j(_),p=E(_,"SPAN",{class:!0});var z=D(p);c=$(z,t),z.forEach(m),this.h()},h(){h(i,"class","wallpaper svelte-13388qk"),C(i.src,n=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[2].filename)||h(i,"src",n),h(i,"alt",u=s[2].matchPlatformShortname),h(a,"href",k=I+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[2].filename),h(a,"target","_blank"),h(p,"class","filename svelte-13388qk")},m(_,w){g(_,e,w),d(e,l),g(_,r,w),g(_,a,w),d(a,i),g(_,v,w),g(_,p,w),d(p,c)},p(_,w){w&1&&f!==(f=_[2].matchPlatformShortname+"")&&M(l,f),w&3&&!C(i.src,n=I+"/themes/platform_wallpapers_packs/"+_[1]+"/"+_[2].filename)&&h(i,"src",n),w&1&&u!==(u=_[2].matchPlatformShortname)&&h(i,"alt",u),w&3&&k!==(k=I+"/themes/platform_wallpapers_packs/"+_[1]+"/"+_[2].filename)&&h(a,"href",k),w&1&&t!==(t=_[2].filename+"")&&M(c,t)},d(_){_&&m(e),_&&m(r),_&&m(a),_&&m(v),_&&m(p)}}}function we(s){let e,f,l,r,a,i,n,u=(s[0].name?s[0].name:"Loading…")+"",k,v,p,t,c,_,w,R;function z(o,b){return o[0].previewThumbnailFilename?be:ve}let O=z(s),H=O(s),F=s[0].name&&x(s),q=(s[0].authors&&s[0].authors.length>0||s[0].sources&&s[0].sources.length>0)&&ee(s),N=s[0].hasDefaultWallpaper&&le(s),T=s[0].wallpaperList,S=[];for(let o=0;o<T.length;o+=1)S[o]=ae(y(s,T,o));return{c(){e=P("article"),f=P("p"),l=P("a"),r=A("« back to list"),a=L(),H.c(),i=L(),n=P("h1"),k=A(u),v=L(),F&&F.c(),p=L(),q&&q.c(),t=L(),c=P("div"),N&&N.c(),_=L();for(let o=0;o<S.length;o+=1)S[o].c();this.h()},l(o){e=E(o,"ARTICLE",{class:!0});var b=D(e);f=E(b,"P",{});var W=D(f);l=E(W,"A",{class:!0,href:!0});var J=D(l);r=$(J,"« back to list"),J.forEach(m),W.forEach(m),a=j(b),H.l(b),i=j(b),n=E(b,"H1",{});var Y=D(n);k=$(Y,u),Y.forEach(m),v=j(b),F&&F.l(b),p=j(b),q&&q.l(b),b.forEach(m),t=j(o),c=E(o,"DIV",{class:!0});var U=D(c);N&&N.l(U),_=j(U);for(let Q=0;Q<S.length;Q+=1)S[Q].l(U);U.forEach(m),this.h()},h(){h(l,"class","back-link svelte-13388qk"),h(l,"href","../"),h(e,"class","svelte-13388qk"),h(c,"class","wallpapers svelte-13388qk")},m(o,b){g(o,e,b),d(e,f),d(f,l),d(l,r),d(e,a),H.m(e,null),d(e,i),d(e,n),d(n,k),d(e,v),F&&F.m(e,null),d(e,p),q&&q.m(e,null),g(o,t,b),g(o,c,b),N&&N.m(c,null),d(c,_);for(let W=0;W<S.length;W+=1)S[W]&&S[W].m(c,null);w||(R=ne(l,"click",ge),w=!0)},p(o,[b]){if(O===(O=z(o))&&H?H.p(o,b):(H.d(1),H=O(o),H&&(H.c(),H.m(e,i))),b&1&&u!==(u=(o[0].name?o[0].name:"Loading…")+"")&&M(k,u),o[0].name?F?F.p(o,b):(F=x(o),F.c(),F.m(e,p)):F&&(F.d(1),F=null),o[0].authors&&o[0].authors.length>0||o[0].sources&&o[0].sources.length>0?q?q.p(o,b):(q=ee(o),q.c(),q.m(e,null)):q&&(q.d(1),q=null),o[0].hasDefaultWallpaper?N?N.p(o,b):(N=le(o),N.c(),N.m(c,_)):N&&(N.d(1),N=null),b&3){T=o[0].wallpaperList;let W;for(W=0;W<T.length;W+=1){const J=y(o,T,W);S[W]?S[W].p(J,b):(S[W]=ae(J),S[W].c(),S[W].m(c,null))}for(;W<S.length;W+=1)S[W].d(1);S.length=T.length}},i:B,o:B,d(o){o&&m(e),H.d(),F&&F.d(),q&&q.d(),o&&m(t),o&&m(c),N&&N.d(),oe(S,o),w=!1,R()}}}function ge(){}function We(s,e,f){let{index:l}=e,{slug:r}=e;return s.$$set=a=>{"index"in a&&f(0,l=a.index),"slug"in a&&f(1,r=a.slug)},[l,r]}class Pe extends re{constructor(e){super(),ie(this,e,We,we,fe,{index:0,slug:1})}}function te(s){return document.title=" "+s[0].name+" ",{c:B,l:B,m:B,d:B}}function se(s){let e,f;return e=new Pe({props:{index:s[0],slug:s[1]}}),{c(){_e(e.$$.fragment)},l(l){ce(e.$$.fragment,l)},m(l,r){he(e,l,r),f=!0},p(l,r){const a={};r&1&&(a.index=l[0]),r&2&&(a.slug=l[1]),e.$set(a)},i(l){f||(K(e.$$.fragment,l),f=!0)},o(l){X(e.$$.fragment,l),f=!1},d(l){ke(e,l)}}}function Ee(s){let e,f,l,r,a=s[0].name&&te(s),i=s[0]&&se(s);return{c(){a&&a.c(),e=V(),f=L(),i&&i.c(),l=V()},l(n){const u=pe("svelte-rytn9h",document.head);a&&a.l(u),e=V(),u.forEach(m),f=j(n),i&&i.l(n),l=V()},m(n,u){a&&a.m(document.head,null),d(document.head,e),g(n,f,u),i&&i.m(n,u),g(n,l,u),r=!0},p(n,[u]){n[0].name?a||(a=te(n),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),n[0]?i?(i.p(n,u),u&1&&K(i,1)):(i=se(n),i.c(),K(i,1),i.m(l.parentNode,l)):i&&(de(),X(i,1,1,()=>{i=null}),ue())},i(n){r||(K(i),r=!0)},o(n){X(i),r=!1},d(n){a&&a.d(n),m(e),n&&m(f),i&&i.d(n),n&&m(l)}}}function Se(s,e,f){let l={name:null,description:"Loading…",wallpaperList:[],authors:[],sources:[]},r;return me(async()=>{let a=window.location.hash;if(a){f(1,r=a.substring(1));try{f(0,l=await fetch(`${I}/themes/platform_wallpapers_packs/${r}/index.json`).then(i=>i.json()))}catch(i){console.error(i),Z("/")}}else Z("/")}),[l,r]}class Ae extends re{constructor(e){super(),ie(this,e,Se,Ee,fe,{})}}export{Ae as default};