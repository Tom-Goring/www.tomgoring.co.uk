!function(e){function n(n){for(var t,o,i=n[0],u=n[1],a=0,c=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(f&&f(n);c.length;)c.shift()()}var t={},r={0:0};var o={};var i={3:function(){return{"./web_emulator.js":{__wbindgen_object_drop_ref:function(e){return t[2].exports.e(e)},__wbindgen_string_new:function(e,n){return t[2].exports.f(e,n)},__wbg_new_59cb74e423758ede:function(){return t[2].exports.c()},__wbg_stack_558ba5917b466edd:function(e,n){return t[2].exports.d(e,n)},__wbg_error_4bb6c2a97407129a:function(e,n){return t[2].exports.b(e,n)},__widl_f_log_1_:function(e){return t[2].exports.h(e)},__wbindgen_throw:function(e,n){return t[2].exports.g(e,n)}}}}};function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=function(e){return u.p+""+e+".bootstrap.js"}(e);var f=new Error;c=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return({1:[3]}[e]||[]).forEach((function(e){var t=o[e];if(t)n.push(t);else{var r,a=i[e](),c=fetch(u.p+""+{3:"f1fcd83fb97b2d9d4d8f"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(c),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(c,a);else{r=c.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,a)}))}n.push(o[e]=r.then((function(n){return u.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e},u.w={};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var f=c;u(u.s=0)}([function(e,n,t){t.e(1).then(t.bind(null,1)).catch(e=>console.error("Error importing `index.js`:",e))}]);