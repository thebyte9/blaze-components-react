/*! For license information please see main.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports["@blaze-react"]=r(require("react")):e["@blaze-react"]=r(e.React)}(this,(function(e){return function(){"use strict";var r={320:function(e){var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,c){for(var i,a,l=o(e),s=1;s<arguments.length;s++){for(var f in i=Object(arguments[s]))t.call(i,f)&&(l[f]=i[f]);if(r){a=r(i);for(var u=0;u<a.length;u++)n.call(i,a[u])&&(l[a[u]]=i[a[u]])}}return l}},837:function(e,r,t){t(320);var n=t(787),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,c={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:i.current}}r.jsx=s,r.jsxs=s},322:function(e,r,t){e.exports=t(837)},787:function(r){r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var c=t[e]={exports:{}};return r[e](c,c.exports,n),c.exports}n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.r(o),n.d(o,{CustomIcon:function(){return c},Icon:function(){return i},IconDisplayType:function(){return e}}),n(787);var e,r=n(322),t=["classes","children"],c=function(e){var n=e.classes,o=void 0===n?"":n,c=e.children,i=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,t).content,a=void 0===i?"":i;return(0,r.jsx)("div",{className:o,dangerouslySetInnerHTML:{__html:a},children:c})};!function(e){e.Left="left",e.Right="right",e.NoIcon="no-icon"}(e||(e={}));var i=function(t){var n=t.display,o=t.label,i=t.iconOnly,a=t.icon;return(0,r.jsx)("div",{className:"flex items-center justify-center",children:n===e.Left?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{classes:"w-6 h-6 stroke-current fill-current",content:a}),!i&&(0,r.jsx)("span",{className:"mx-1",children:null!=o?o:"Blaze"})]}):(0,r.jsxs)(r.Fragment,{children:[!i&&(0,r.jsx)("span",{className:"mx-1",children:null!=o?o:"Blaze"}),n!==e.NoIcon&&(0,r.jsx)(c,{classes:"w-6 h-6 stroke-current fill-current",content:a})]})})}}(),o}()}));