(function(e){function t(t){for(var c,o,a=t[0],l=t[1],i=t[2],p=0,b=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&b.push(u[o][0]),u[o]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==u[l]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},u={app:0},r=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/pop-up-test/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04de":function(e,t,n){},"0be3":function(e,t,n){"use strict";n("372b")},"118d":function(e,t,n){"use strict";n("7ca3")},"11af":function(e,t,n){"use strict";n("972a")},1347:function(e,t,n){"use strict";n("54e2")},"2a75":function(e,t,n){},"372b":function(e,t,n){},"54e2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),u=(n("a9e3"),{width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),r=Object(c["g"])("path",{d:"M4.45455 8.70149L1.11364 5.25373L0 6.40299L4.45455 11L14 1.14925L12.8864 0L4.45455 8.70149Z",fill:"white"},null,-1),o=[r];function a(e,t){return Object(c["j"])(),Object(c["f"])("svg",u,o)}var l=n("d959"),i=n.n(l);const s={},p=i()(s,[["render",a]]);var b=p,f={class:"checkbox"},j={class:"checkbox__active"},O={props:{isActive:{type:Boolean,required:!0}},setup:function(e){var t=e;return function(e,n){return Object(c["j"])(),Object(c["f"])("div",f,[Object(c["t"])(Object(c["g"])("span",j,[Object(c["h"])(Object(c["p"])(b))],512),[[c["r"],t.isActive]])])}}};n("1347");const v=i()(O,[["__scopeId","data-v-45fe14ba"]]);var d=v,g={key:0},_={key:1},m={class:"calc__item--grey"},y={props:{payment:{type:Number,required:!0},lastPayment:{type:Number,required:!0},itemNumber:{type:Number,required:!0}},setup:function(e){var t=e,n=Object(c["m"])(!1);function u(){n.value=!n.value}return function(r,o){return Object(c["j"])(),Object(c["f"])("li",{class:"calc__item",onClick:u},[Object(c["h"])(Object(c["p"])(d),{isActive:n.value},null,8,["isActive"]),e.itemNumber<4?(Object(c["j"])(),Object(c["f"])("span",g,Object(c["o"])(t.payment),1)):(Object(c["j"])(),Object(c["f"])("span",_,Object(c["o"])(t.lastPayment),1)),Object(c["g"])("span",m," в "+Object(c["o"])(e.itemNumber)+"-ый год",1)])}}};n("6ccf");const C=i()(y,[["__scopeId","data-v-738a9980"]]);var h=C,w=function(e){return Object(c["l"])("data-v-6885ea51"),e=e(),Object(c["k"])(),e},k=w((function(){return Object(c["g"])("h3",{class:"calc__title"},"Итого можете внести в качестве досрочных:",-1)})),L={class:"calc__list"},x={props:{salary:{type:Number,required:!1}},setup:function(e){var t=e,n=26e4,u=Object(c["b"])((function(){return 12*t.salary*.13})),r=Object(c["b"])((function(){return n-3*u.value}));return function(e,t){return Object(c["j"])(),Object(c["f"])(c["a"],null,[k,Object(c["g"])("ul",L,[(Object(c["j"])(),Object(c["f"])(c["a"],null,Object(c["n"])(4,(function(e){return Object(c["h"])(h,{key:e,payment:Object(c["p"])(u),lastPayment:Object(c["p"])(r),itemNumber:e},null,8,["payment","lastPayment","itemNumber"])})),64))])],64)}}};n("c0d9");const N=i()(x,[["__scopeId","data-v-6885ea51"]]);var P=N,q=function(e){return Object(c["l"])("data-v-057044d6"),e=e(),Object(c["k"])(),e},M={viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A=q((function(){return Object(c["g"])("path",{d:"M11.4226 9.00086L17.4771 2.94467C17.6407 2.78667 17.7712 2.59768 17.8609 2.38872C17.9507 2.17976 17.998 1.95502 17.9999 1.72761C18.0019 1.50019 17.9586 1.27466 17.8725 1.06417C17.7863 0.853686 17.6592 0.662457 17.4984 0.501645C17.3375 0.340833 17.1463 0.213657 16.9358 0.12754C16.7253 0.041423 16.4998 -0.0019115 16.2724 6.46674e-05C16.045 0.00204084 15.8202 0.0492885 15.6113 0.139051C15.4023 0.228813 15.2133 0.359291 15.0553 0.522874L8.99914 6.57735L2.94467 0.522874C2.78667 0.359291 2.59768 0.228813 2.38872 0.139051C2.17976 0.0492885 1.95502 0.00204084 1.72761 6.46674e-05C1.50019 -0.0019115 1.27466 0.041423 1.06417 0.12754C0.853686 0.213657 0.662457 0.340833 0.501645 0.501645C0.340833 0.662457 0.213657 0.853686 0.12754 1.06417C0.041423 1.27466 -0.0019115 1.50019 6.46674e-05 1.72761C0.00204084 1.95502 0.0492885 2.17976 0.139051 2.38872C0.228813 2.59768 0.359291 2.78667 0.522874 2.94467L6.57735 8.99914L0.522874 15.0553C0.359291 15.2133 0.228813 15.4023 0.139051 15.6113C0.0492885 15.8202 0.00204084 16.045 6.46674e-05 16.2724C-0.0019115 16.4998 0.041423 16.7253 0.12754 16.9358C0.213657 17.1463 0.340833 17.3375 0.501645 17.4984C0.662457 17.6592 0.853686 17.7863 1.06417 17.8725C1.27466 17.9586 1.50019 18.0019 1.72761 17.9999C1.95502 17.998 2.17976 17.9507 2.38872 17.8609C2.59768 17.7712 2.78667 17.6407 2.94467 17.4771L8.99914 11.4226L15.0553 17.4771C15.2133 17.6407 15.4023 17.7712 15.6113 17.8609C15.8202 17.9507 16.045 17.998 16.2724 17.9999C16.4998 18.0019 16.7253 17.9586 16.9358 17.8725C17.1463 17.7863 17.3375 17.6592 17.4984 17.4984C17.6592 17.3375 17.7863 17.1463 17.8725 16.9358C17.9586 16.7253 18.0019 16.4998 17.9999 16.2724C17.998 16.045 17.9507 15.8202 17.8609 15.6113C17.7712 15.4023 17.6407 15.2133 17.4771 15.0553L11.4226 8.99914V9.00086Z",fill:"#EA0029"},null,-1)})),S=[A];function I(e,t,n,u,r,o){return Object(c["j"])(),Object(c["f"])("svg",M,S)}var B={name:"popup-close-icon"};n("0be3");const J=i()(B,[["render",I],["__scopeId","data-v-057044d6"]]);var T=J,V=Object(c["g"])("h2",{class:"popup__title"},"Налоговый вычет",-1),Z=Object(c["g"])("p",{class:"popup__subtitle"}," Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода. ",-1),E=Object(c["g"])("h3",{class:"popup__input-title"},"Ваша зарплата в месяц",-1),U=["disabled"],z={class:"popup__select-wrapper"},D=Object(c["g"])("h3",{class:"popup__select-title"},"Что уменьшаем?",-1),F={class:"popup__toggler-wrapper"},G=Object(c["g"])("button",{class:"popup__submit"},"Добавить",-1),H={setup:function(e,t){var n=t.emit,u=Object(c["m"])(!1),r=Object(c["m"])(null),o=Object(c["m"])(!1),a=Object(c["m"])(0);function l(){null==r.value||isNaN(Number(r.value))?o.value=!0:(u.value=!0,r.value=Number(r.value))}function i(){n("closePopup",!1)}function s(e){a.value=e}return Object(c["s"])(r,(function(){o.value&&(o.value=!1)})),function(e,t){return Object(c["j"])(),Object(c["f"])("div",{class:"popup",onClick:t[3]||(t[3]=Object(c["u"])((function(){}),["stop"]))},[Object(c["g"])("button",{class:"popup__close",onClick:i},[Object(c["h"])(Object(c["p"])(T))]),V,Z,E,Object(c["g"])("div",{class:Object(c["i"])({"input-require":o.value})},[Object(c["t"])(Object(c["g"])("input",{type:"text",class:"popup__input",placeholder:"Введите данные","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.value=e}),disabled:u.value},null,8,U),[[c["q"],r.value]])],2),Object(c["g"])("button",{class:"popup__calc",onClick:l},"Рассчитать"),u.value&&null!=r.value?(Object(c["j"])(),Object(c["d"])(P,{key:0,salary:r.value},null,8,["salary"])):Object(c["e"])("",!0),Object(c["g"])("div",z,[D,Object(c["g"])("div",F,[Object(c["g"])("button",{class:Object(c["i"])(["popup__select-toggler",{"select-toggler--active":0===a.value}]),onClick:t[1]||(t[1]=function(e){return s(0)})}," Платёж ",2),Object(c["g"])("button",{class:Object(c["i"])(["popup__select-toggler",{"select-toggler--active":1===a.value}]),onClick:t[2]||(t[2]=function(e){return s(1)})}," Срок ",2)])]),G])}}};n("ab12"),n("7674"),n("11af");const K=H;var Q=K,R={key:0,class:"main-wrapper"},W={setup:function(e){var t=Object(c["m"])(!1);function n(e){t.value=e}return function(e,u){return t.value?(Object(c["j"])(),Object(c["f"])("div",{key:1,class:"popup-wrapper",onClick:u[1]||(u[1]=function(e){return n(!1)})},[Object(c["h"])(Q,{onClosePopup:n})])):(Object(c["j"])(),Object(c["f"])("div",R,[Object(c["g"])("button",{class:"open-popup",onClick:u[0]||(u[0]=function(e){return n(!0)})}," Налоговый вычет ")]))}}};n("fda2"),n("118d");const X=W;var Y=X;Object(c["c"])(Y).mount("#app")},"6ccf":function(e,t,n){"use strict";n("2a75")},7674:function(e,t,n){"use strict";n("9591")},"7ca3":function(e,t,n){},"80b4":function(e,t,n){},9591:function(e,t,n){},"972a":function(e,t,n){},ab12:function(e,t,n){"use strict";n("80b4")},bd66:function(e,t,n){},c0d9:function(e,t,n){"use strict";n("bd66")},fda2:function(e,t,n){"use strict";n("04de")}});
//# sourceMappingURL=app.741fa598.js.map