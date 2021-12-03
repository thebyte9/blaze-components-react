/*! For license information please see main.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["@blaze-react"]=e():t["@blaze-react"]=e()}(this,(function(){return function(){var t={360:function(){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,r=o(e);r;)r=o(e=r.ownerDocument);return e}(),e=[],r=null,n=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return r||(r=function(t,r){n=t&&r?f(t,r):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),r},s._resetCrossOriginUpdater=function(){r=null,n=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var r=e.defaultView;if(r&&-1==this._monitoringDocuments.indexOf(e)){var n=this._checkForIntersections,i=null,s=null;this.POLL_INTERVAL?i=r.setInterval(n,this.POLL_INTERVAL):(u(r,"resize",n,!0),u(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in r&&(s=new r.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),c(t,"resize",n,!0)),c(e,"scroll",n,!0),s&&s.disconnect()}));var a=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=a){var l=o(e);l&&this._monitorIntersections(l.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var r=this._monitoringDocuments.indexOf(e);if(-1!=r){var n=this.root&&(this.root.ownerDocument||this.root)||t;if(!this._observationTargets.some((function(t){var r=t.element.ownerDocument;if(r==e)return!0;for(;r&&r!=n;){var i=o(r);if((r=i&&i.ownerDocument)==e)return!0}return!1}))){var i=this._monitoringUnsubscribes[r];if(this._monitoringDocuments.splice(r,1),this._monitoringUnsubscribes.splice(r,1),i(),e!=n){var s=o(e);s&&this._unmonitorIntersections(s.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!r||n){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(n){var o=n.element,s=a(o),u=this._rootContainsTarget(o),c=n.entry,l=t&&u&&this._computeTargetAndRootIntersection(o,s,e),f=null;this._rootContainsTarget(o)?r&&!this.root||(f=e):f={top:0,bottom:0,left:0,right:0,width:0,height:0};var h=n.entry=new i({time:window.performance&&performance.now&&performance.now(),target:o,boundingClientRect:s,rootBounds:f,intersectionRect:l});c?t&&u?this._hasCrossedThreshold(c,h)&&this._queuedEntries.push(h):c&&c.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,o,i){if("none"!=window.getComputedStyle(e).display){for(var s,u,c,l,h,d,y,v,m=o,g=p(e),b=!1;!b&&g;){var _=null,w=1==g.nodeType?window.getComputedStyle(g):{};if("none"==w.display)return null;if(g==this.root||9==g.nodeType)if(b=!0,g==this.root||g==t)r&&!this.root?!n||0==n.width&&0==n.height?(g=null,_=null,m=null):_=n:_=i;else{var O=p(g),E=O&&a(O),j=O&&this._computeTargetAndRootIntersection(O,E,i);E&&j?(g=O,_=f(E,j)):(g=null,m=null)}else{var I=g.ownerDocument;g!=I.body&&g!=I.documentElement&&"visible"!=w.overflow&&(_=a(g))}if(_&&(s=_,u=m,void 0,void 0,void 0,void 0,void 0,void 0,c=Math.max(s.top,u.top),l=Math.min(s.bottom,u.bottom),h=Math.max(s.left,u.left),v=l-c,m=(y=(d=Math.min(s.right,u.right))-h)>=0&&v>=0&&{top:c,bottom:l,left:h,right:d,width:y,height:v}||null),!m)break;g=g&&p(g)}return m}},s.prototype._getRootRect=function(){var e;if(this.root&&!d(this.root))e=a(this.root);else{var r=d(this.root)?this.root:t,n=r.documentElement,o=r.body;e={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100})),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},s.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==n)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==r||i==n||i<r!=i<n)return!0}},s.prototype._rootIsInDom=function(){return!this.root||h(t,this.root)},s.prototype._rootContainsTarget=function(e){var r=this.root&&(this.root.ownerDocument||this.root)||t;return h(r,e)&&(!this.root||r==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=i}function o(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=l(t.rootBounds),this.boundingClientRect=l(t.boundingClientRect),this.intersectionRect=l(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,n=this.intersectionRect,o=n.width*n.height;this.intersectionRatio=r?Number((o/r).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var r,n,o,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout((function(){r(),o=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function u(t,e,r,n){"function"==typeof t.addEventListener?t.addEventListener(e,r,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function c(t,e,r,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function f(t,e){var r=e.top-t.top,n=e.left-t.left;return{top:r,left:n,height:e.height,width:e.width,bottom:r+e.height,right:n+e.width}}function h(t,e){for(var r=e;r;){if(r==t)return!0;r=p(r)}return!1}function p(e){var r=e.parentNode;return 9==e.nodeType&&e!=t?o(e):(r&&r.assignedSlot&&(r=r.assignedSlot.parentNode),r&&11==r.nodeType&&r.host?r.host:r)}function d(t){return t&&9===t.nodeType}}()},320:function(t){"use strict";var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,i){for(var s,u,c=o(t),a=1;a<arguments.length;a++){for(var l in s=Object(arguments[a]))r.call(s,l)&&(c[l]=s[l]);if(e){u=e(s);for(var f=0;f<u.length;f++)n.call(s,u[f])&&(c[u[f]]=s[u[f]])}}return c}},837:function(t,e,r){"use strict";r(320);var n=r(784),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,r){var n,i={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(l=e.ref),e)u.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:a,ref:l,props:i,_owner:s.current}}e.jsx=a,e.jsxs=a},426:function(t,e,r){"use strict";var n=r(320),o=60103,i=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var s=60109,u=60110,c=60112;e.Suspense=60113;var a=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),e.Fragment=f("react.fragment"),e.StrictMode=f("react.strict_mode"),e.Profiler=f("react.profiler"),s=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),e.Suspense=f("react.suspense"),a=f("react.memo"),l=f("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function v(t,e,r){this.props=t,this.context=e,this.refs=y,this.updater=r||d}function m(){}function g(t,e,r){this.props=t,this.context=e,this.refs=y,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(p(85));this.updater.enqueueSetState(this,t,e,"setState")},v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},m.prototype=v.prototype;var b=g.prototype=new m;b.constructor=g,n(b,v.prototype),b.isPureReactComponent=!0;var _={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function E(t,e,r){var n,i={},s=null,u=null;if(null!=e)for(n in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(s=""+e.key),e)w.call(e,n)&&!O.hasOwnProperty(n)&&(i[n]=e[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];i.children=a}if(t&&t.defaultProps)for(n in c=t.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:t,key:s,ref:u,props:i,_owner:_.current}}function j(t){return"object"==typeof t&&null!==t&&t.$$typeof===o}var I=/\/+/g;function R(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function T(t,e,r,n,s){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=t),t=""===n?"."+R(c,0):n,Array.isArray(s)?(r="",null!=t&&(r=t.replace(I,"$&/")+"/"),T(s,e,r,"",(function(t){return t}))):null!=s&&(j(s)&&(s=function(t,e){return{$$typeof:o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(I,"$&/")+"/")+t)),e.push(s)),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var l=n+R(u=t[a],a);c+=T(u,e,r,l,s)}else if("function"==typeof(l=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=h&&t[h]||t["@@iterator"])?t:null}(t)))for(t=l.call(t),a=0;!(u=t.next()).done;)c+=T(u=u.value,e,r,l=n+R(u,a++),s);else if("object"===u)throw e=""+t,Error(p(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return c}function S(t,e,r){if(null==t)return t;var n=[],o=0;return T(t,n,"","",(function(t){return e.call(r,t,o++)})),n}function x(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var k={current:null};function C(){var t=k.current;if(null===t)throw Error(p(321));return t}var P={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};e.Children={map:S,forEach:function(t,e,r){S(t,(function(){e.apply(this,arguments)}),r)},count:function(t){var e=0;return S(t,(function(){e++})),e},toArray:function(t){return S(t,(function(t){return t}))||[]},only:function(t){if(!j(t))throw Error(p(143));return t}},e.Component=v,e.PureComponent=g,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,e.cloneElement=function(t,e,r){if(null==t)throw Error(p(267,t));var i=n({},t.props),s=t.key,u=t.ref,c=t._owner;if(null!=e){if(void 0!==e.ref&&(u=e.ref,c=_.current),void 0!==e.key&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)w.call(e,l)&&!O.hasOwnProperty(l)&&(i[l]=void 0===e[l]&&void 0!==a?a[l]:e[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];i.children=a}return{$$typeof:o,type:t.type,key:s,ref:u,props:i,_owner:c}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:u,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:t},t.Consumer=t},e.createElement=E,e.createFactory=function(t){var e=E.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:c,render:t}},e.isValidElement=j,e.lazy=function(t){return{$$typeof:l,_payload:{_status:-1,_result:t},_init:x}},e.memo=function(t,e){return{$$typeof:a,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return C().useCallback(t,e)},e.useContext=function(t,e){return C().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return C().useEffect(t,e)},e.useImperativeHandle=function(t,e,r){return C().useImperativeHandle(t,e,r)},e.useLayoutEffect=function(t,e){return C().useLayoutEffect(t,e)},e.useMemo=function(t,e){return C().useMemo(t,e)},e.useReducer=function(t,e,r){return C().useReducer(t,e,r)},e.useRef=function(t){return C().useRef(t)},e.useState=function(t){return C().useState(t)},e.version="17.0.2"},784:function(t,e,r){"use strict";t.exports=r(426)},322:function(t,e,r){"use strict";t.exports=r(837)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],s=!0,u=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{s||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,r)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(n),r.d(n,{default:function(){return d}});var i=function(t){return!!t&&Object.keys(t).filter((function(e){return!!t[e]})).map((function(t){return"".concat(t)})).join(" ")},s=r(784);r(360);var u=r(322),c=function(t){var e=t.message,r=t.icon;return(0,u.jsxs)("div",{className:"validation","data-testid":"validation-message",children:[(0,u.jsx)("i",{className:"material-icons",children:r}),e]})};c.defaultProps={icon:"warning"};var a=c,l=["value","label","limit","onChange","error","validationMessage","required","id"];function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(t){var e=t.value,r=t.label,n=t.limit,c=t.onChange,f=t.error,p=t.validationMessage,d=t.required,y=t.id,v=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,l),m=o((0,s.useState)(""),2),g=m[0],b=m[1];(0,s.useEffect)((function(){return b(e||"")}),[e]);var _=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="string"==typeof t?t:i(t),n=i(e);return n?"".concat(r," ").concat(n):r}({required:d}),w=n?n-g.length:0;return(0,u.jsxs)("div",{className:"form-field form-field--textarea",children:[r&&(0,u.jsx)("label",{htmlFor:y,className:_,children:r}),(0,u.jsx)("textarea",h({value:g,rows:v.rows,cols:v.cols,onChange:function(t){var e=t.target.value;n&&e.length>n&&(e=e.slice(0,n)),b(e),c({event:t,value:e})},required:d},v)),!!n&&(0,u.jsx)("span",{children:w}),f&&(0,u.jsx)(a,{message:p})]})};p.defaultProps={error:!1,label:"",limit:0,placeholder:"",required:!1,validationMessage:"This field is required",value:""};var d=p}(),n}()}));