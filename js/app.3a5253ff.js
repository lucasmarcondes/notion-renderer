(function(e){function t(t){for(var c,a,u=t[0],b=t[1],i=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,u=1;u<n.length;u++){var b=n[u];0!==r[b]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/notion-renderer/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],b=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=b;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const r="My Website",o=[{homepage:!0,title:"Home",id:"Home-Page-9bb005b8c2fa4755a220481934f4be86"},{title:"About",id:"About-Me-69e7ac6e9f2a4cc9b985fd8c5b9bcc1c"}],a={class:"notion menu-bar"},u={class:"title"},b={class:"menu-item-container"},i=["onClick"];var l={__name:"Header",emits:["page-change"],setup(e,{emit:t}){const n=Object(c["x"])(0),l=(e,c)=>{t("page-change",e),n.value=c};return(e,t)=>(Object(c["v"])(),Object(c["f"])("nav",a,[Object(c["g"])("div",u,Object(c["C"])(Object(c["E"])(r)),1),Object(c["g"])("span",b,[(Object(c["v"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(Object(c["E"])(o),(e,t)=>(Object(c["v"])(),Object(c["f"])("div",{class:Object(c["p"])(["menu-item",{bold:t==n.value}]),onClick:n=>l(e,t)},Object(c["C"])(e.title),11,i))),256))])]))}};n("bddf");const f=l;var p=f,s=n("8cb8"),d={__name:"App",setup(e){const t=Object(c["x"])();Object(c["t"])(async()=>{const e=o.find(e=>e.homepage);n(e)});const n=async e=>{t.value=await Object(s["b"])(e.id),document.getElementById("pageTitle").innerHTML=e.title};return(e,r)=>(Object(c["v"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(p,{onPageChange:n}),t.value?(Object(c["v"])(),Object(c["d"])(Object(c["E"])(s["a"]),{key:0,blockMap:t.value,fullPage:""},null,8,["blockMap"])):Object(c["e"])("",!0)],64))}};const O=d;var j=O;n("594b"),n("a878"),n("be0f");Object(c["c"])(j).mount("#app")},"9f7b":function(e,t,n){},bddf:function(e,t,n){"use strict";n("9f7b")}});
//# sourceMappingURL=app.3a5253ff.js.map