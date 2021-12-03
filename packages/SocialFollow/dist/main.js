/*! For license information please see main.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["@blaze-react"]=t():e["@blaze-react"]=t()}(this,(function(){return function(){"use strict";var e={320:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,u,c=o(e),f=1;f<arguments.length;f++){for(var l in i=Object(arguments[f]))r.call(i,l)&&(c[l]=i[l]);if(t){u=t(i);for(var s=0;s<u.length;s++)n.call(i,u[s])&&(c[u[s]]=i[u[s]])}}return c}},837:function(e,t,r){r(320);var n=r(784),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,a={},f=null,l=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:f,ref:l,props:a,_owner:i.current}}t.jsx=f,t.jsxs=f},426:function(e,t,r){var n=r(320),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,u=60110,c=60112;t.Suspense=60113;var f=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),i=s("react.provider"),u=s("react.context"),c=s("react.forward_ref"),t.Suspense=s("react.suspense"),f=s("react.memo"),l=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var h=_.prototype=new b;h.constructor=_,n(h,m.prototype),h.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,a={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];a.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:g.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+x(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),E(i,t,r,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=n+x(u=e[f],f);c+=E(u,t,r,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),f=0;!(u=e.next()).done;)c+=E(u=u.value,t,r,l=n+x(u,f++),i);else if("object"===u)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function R(){var e=C.current;if(null===e)throw Error(y(321));return e}var N={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(y(143));return e}},t.Component=m,t.PureComponent=_,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var a=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=g.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)j.call(t,l)&&!w.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];a.children=f}return{$$typeof:o,type:e.type,key:i,ref:u,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},784:function(e,t,r){e.exports=r(426)},322:function(e,t,r){e.exports=r(837)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){r.r(n),r.d(n,{default:function(){return o}}),r(784);var e=r(322),t=function(t){var r=t.media,n=t.title,o=t.vertical,a=t.type,i={facebook:{class:"facebook",icon:"fab fa-facebook-f",name:"Facebook"},instagram:{class:"instagram",icon:"fab fa-instagram",isFollowing:!0,name:"Instagram"},linkedIn:{class:"linkedin",icon:"fab fa-linkedin-in",name:"Linkedin"},pinterest:{class:"pinterest",icon:"fab fa-pinterest-p",name:"Pinterest"},twitter:{class:"twitter",icon:"fab fa-twitter",name:"Twitter"},youtube:{class:"youtube",icon:"fab fa-youtube",isFollowing:!0,name:"Youtube"}},u=Object.keys(r).map((function(t){return"follow"!==a&&i[t].isFollowing?null:(0,e.jsx)("li",{className:"social__list-item social__list-item--".concat(a),children:(0,e.jsxs)("a",{href:r[t],rel:"noopener noreferrer",target:"_blank",className:i[t].class,children:[(0,e.jsx)("i",{className:i[t].icon}),(0,e.jsx)("span",{className:"hidden",children:i[t].name})]})},t)}));return(0,e.jsxs)("div",{className:"social social--".concat(a," ").concat(o?"social--vertical":""),children:[n&&(0,e.jsx)("p",{children:n}),(0,e.jsx)("ul",{className:"social__list social__list--".concat(a," ").concat(o?"social__list--vertical":""),children:u})]})};t.defaultProps={title:"",type:"share",vertical:!1};var o=t}(),n}()}));