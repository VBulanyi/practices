!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=54)}([function(t,n,e){(function(n){var e="object",r=function(t){return t&&t.Math==Math&&t};t.exports=r(typeof globalThis==e&&globalThis)||r(typeof window==e&&window)||r(typeof self==e&&self)||r(typeof n==e&&n)||Function("return this")()}).call(this,e(27))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(4),o=e(10),i=e(7);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(0),o=e(11),i=e(32),c=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(29),o=e(16);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(4),o=e(17),i=e(18),c=e(9),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(6),i=e(20),c=e(52),a=r.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},function(t,n,e){var r=e(0),o=e(14).f,i=e(5),c=e(31),a=e(11),u=e(36),f=e(45);t.exports=function(t,n){var e,s,l,d,p,v=t.target,g=t.global,y=t.stat;if(e=g?r:y?r[v]||a(v,{}):(r[v]||{}).prototype)for(s in n){if(d=n[s],l=t.noTargetGet?(p=o(e,s))&&p.value:e[s],!f(g?s:v+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;u(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),c(e,s,d,t)}}},function(t,n,e){var r=e(4),o=e(28),i=e(7),c=e(8),a=e(9),u=e(3),f=e(17),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=a(n,!0),f)try{return s(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(4),o=e(1),i=e(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(6);t.exports=r("native-function-to-string",Function.toString)},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(8),o=e(23),i=e(42),c=function(t){return function(n,e,c){var a,u=r(n),f=o(u.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(13),o=e(22).indexOf,i=e(46),c=[].indexOf,a=!!c&&1/[1].indexOf(1,-0)<0,u=i("indexOf");r({target:"Array",proto:!0,forced:a||u},{indexOf:function(t){return a?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(1),o=e(15),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(0),o=e(2),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(6),i=e(5),c=e(3),a=e(11),u=e(19),f=e(33),s=f.get,l=f.enforce,d=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,n,e,o){var u=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),l(e).source=d.join("string"==typeof n?n:"")),t!==r?(u?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=e:i(t,n,e)):f?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u.call(this)}))},function(t,n){t.exports=!1},function(t,n,e){var r,o,i,c=e(34),a=e(0),u=e(2),f=e(5),s=e(3),l=e(35),d=e(21),p=a.WeakMap;if(c){var v=new p,g=v.get,y=v.has,m=v.set;r=function(t,n){return m.call(v,t,n),n},o=function(t){return g.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var h=l("state");d[h]=!0,r=function(t,n){return f(t,h,n),n},o=function(t){return s(t,h)?t[h]:{}},i=function(t){return s(t,h)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(19),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(6),o=e(20),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(3),o=e(37),i=e(14),c=e(10);t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||a(t,s,u(n,s))}}},function(t,n,e){var r=e(38),o=e(40),i=e(44),c=e(18);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(39),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(41),o=e(43).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(8),i=e(22).indexOf,c=e(21);t.exports=function(t,n){var e,a=o(t),u=0,f=[];for(e in a)!r(c,e)&&r(a,e)&&f.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(24),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==f||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){},function(t,n,e){"use strict";var r=e(13),o=e(1),i=e(25),c=e(2),a=e(49),u=e(23),f=e(50),s=e(51),l=e(53),d=e(12)("isConcatSpreadable"),p=!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),v=l("concat"),g=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!p||!v},{concat:function(t){var n,e,r,o,i,c=a(this),l=s(c,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(g(i=-1===n?c:arguments[n])){if(d+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,d++)e in i&&f(l,d,i[e])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,d++,i)}return l.length=d,l}})},function(t,n,e){var r=e(16);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(9),o=e(10),i=e(7);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(2),o=e(25),i=e(12)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(1),o=e(12)("species");t.exports=function(t){return!r((function(){var n=[];return(n.constructor={})[o]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){"use strict";e.r(n);e(26),e(47);var r=document.querySelector(".slidebar"),o=document.querySelector(".video");e(48);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(n,e,r,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.image=n,this.text=e,this.time=r,this.isLocked=o}var n,e,r;return n=t,(e=[{key:"renderUnlocked",value:function(){return'<div class="video__card">\n                <img src="'.concat(this.image,'" alt="" class="video__card-img">\n                <p class="video__card-text">').concat(this.text,'</p>\n                <div class="video__card-time">\n                    <span>').concat(this.time,"</span>\n                </div>\n            </div>")}},{key:"renderLocked",value:function(){return'<div class="video__card video__card_cover">\n                <img src="'.concat(this.image,'" alt="" class="video__card-img">\n                <p class="video__card-text">').concat(this.text,'</p>\n                <div class="video__card-time">\n                    <img src="./images/lock.png" alt="" class="video__card-img">\n                    <span>').concat(this.time,"</span>\n                </div>\n            </div>")}}])&&i(n.prototype,e),r&&i(n,r),t}();function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n}var n,e,r;return n=t,(e=[{key:"renderCards",value:function(t){for(var n="",e=0;e<t.length;e+=1)t[e].isLocked?n+=new c(t[e].image,t[e].text,t[e].time).renderLocked():n+=new c(t[e].image,t[e].text,t[e].time).renderUnlocked();return this.container.insertAdjacentHTML("beforeend",n)}},{key:"clearContainer",value:function(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}}])&&a(n.prototype,e),r&&a(n,r),t}(),f=[{id:1,time:"30 мин",text:"Комплекс асан на баланс (12 видео)",image:"./images/balance.png",isLocked:!1},{id:2,time:"30 мин",text:"Комплекс и Разбор асаны: Кармасана",image:"./images/karmasana.png",isLocked:!1},{id:3,time:"30 мин",text:"Комплекс и Разбор асаны: Матсьендрасана",image:"./images/matsemdrasana.png",isLocked:!1},{id:4,time:"3",text:"Комплекс асан 23 и Бхавасана",image:"./images/bhavasana.png",isLocked:!0},{id:5,time:"3",text:"Йога мудра, Дирга пранам  Бхуджангасана",image:"./images/bhudzangasana.png",isLocked:!0},{id:6,time:"5",text:"Разбор асаны: Кармасана",image:"./images/karmasana.png",isLocked:!0}],s=document.querySelector(".slidebar__round"),l=document.querySelector(".slidebar__round-check");var d=new u(document.querySelector(".video__container"));d.renderCards(f),r.style.backgroundColor="rgb(195, 203, 206)",r.style.flexDirection="row",o.style.alignItems="flex-start",document.addEventListener("click",(function(t){var n,e;t.target.classList.contains("video__btn")&&(document.querySelector(".video__btn_active").classList.remove("video__btn_active"),t.target.classList.add("video__btn_active"),n=t.target,e=[].indexOf.call(n.parentNode.children,n),o.style.alignItems=1===e?"center":2===e?"flex-end":"flex-start",d.clearContainer(),d.renderCards(f))})),s.addEventListener("click",(function(){var t,n;t=r.style.backgroundColor,n=r.style.flexDirection,"rgb(195, 203, 206)"===t&&"row"===n?(r.style.backgroundColor="rgb(70, 212, 68)",r.style.flexDirection="row-reverse",l.src="./images/checkGreen.png"):(r.style.flexDirection="row",r.style.backgroundColor="rgb(195, 203, 206)",l.src="./images/check.png")})),window.addEventListener("resize",(function(){canvas.width=window.innerWidth,canvas.height=window.innerHeight}))}]);