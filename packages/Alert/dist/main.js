/*! For license information please see main.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports["@blaze-react"]=e(require("react")):t["@blaze-react"]=e(t.React)}(this,(function(t){return function(){var e={360:function(){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,n=r(e);n;)n=r(e=n.ownerDocument);return e}(),e=[],n=null,o=null;u.prototype.THROTTLE_TIMEOUT=100,u.prototype.POLL_INTERVAL=null,u.prototype.USE_MUTATION_OBSERVER=!0,u._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?d(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},u._resetCrossOriginUpdater=function(){n=null,o=null},u.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},u.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},u.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},u.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},u.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},u.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},u.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,u=null;this.POLL_INTERVAL?i=n.setInterval(o,this.POLL_INTERVAL):(a(n,"resize",o,!0),a(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(u=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),s(t,"resize",o,!0)),s(e,"scroll",o,!0),u&&u.disconnect()}));var l=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=l){var b=r(e);b&&this._monitorIntersections(b.ownerDocument)}}},u.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&(this.root.ownerDocument||this.root)||t,i=this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var i=r(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}));if(!i){var u=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),u(),e!=o){var a=r(e);a&&this._unmonitorIntersections(a.ownerDocument)}}}},u.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},u.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,u=l(r),a=this._rootContainsTarget(r),s=o.entry,b=t&&a&&this._computeTargetAndRootIntersection(r,u,e),d=null;this._rootContainsTarget(r)?n&&!this.root||(d=e):d={top:0,bottom:0,left:0,right:0,width:0,height:0};var c=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:u,rootBounds:d,intersectionRect:b});s?t&&a?this._hasCrossedThreshold(s,c)&&this._queuedEntries.push(c):s&&s.isIntersecting&&this._queuedEntries.push(c):this._queuedEntries.push(c)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},u.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var u,a,s,b,c,f,m,h,g=r,y=p(e),v=!1;!v&&y;){var x=null,w=1==y.nodeType?window.getComputedStyle(y):{};if("none"==w.display)return null;if(y==this.root||9==y.nodeType)if(v=!0,y==this.root||y==t)n&&!this.root?!o||0==o.width&&0==o.height?(y=null,x=null,g=null):x=o:x=i;else{var O=p(y),j=O&&l(O),_=O&&this._computeTargetAndRootIntersection(O,j,i);j&&_?(y=O,x=d(j,_)):(y=null,g=null)}else{var k=y.ownerDocument;y!=k.body&&y!=k.documentElement&&"visible"!=w.overflow&&(x=l(y))}if(x&&(u=x,a=g,void 0,void 0,void 0,void 0,void 0,void 0,s=Math.max(u.top,a.top),b=Math.min(u.bottom,a.bottom),c=Math.max(u.left,a.left),h=b-s,g=(m=(f=Math.min(u.right,a.right))-c)>=0&&h>=0&&{top:s,bottom:b,left:c,right:f,width:m,height:h}||null),!g)break;y=y&&p(y)}return g}},u.prototype._getRootRect=function(){var e;if(this.root&&!f(this.root))e=l(this.root);else{var n=f(this.root)?this.root:t,o=n.documentElement,r=n.body;e={top:0,left:0,right:o.clientWidth||r.clientWidth,width:o.clientWidth||r.clientWidth,bottom:o.clientHeight||r.clientHeight,height:o.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},u.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},u.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},u.prototype._rootIsInDom=function(){return!this.root||c(t,this.root)},u.prototype._rootContainsTarget=function(e){var n=this.root&&(this.root.ownerDocument||this.root)||t;return c(n,e)&&(!this.root||n==e.ownerDocument)},u.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},u.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=u,window.IntersectionObserverEntry=i}function r(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=b(t.rootBounds),this.boundingClientRect=b(t.boundingClientRect),this.intersectionRect=b(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function u(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function l(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function b(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function d(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function c(t,e){for(var n=e;n;){if(n==t)return!0;n=p(n)}return!1}function p(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?r(e):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function f(t){return t&&9===t.nodeType}}()},320:function(t){"use strict";var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function r(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,i){for(var u,a,s=r(t),l=1;l<arguments.length;l++){for(var b in u=Object(arguments[l]))n.call(u,b)&&(s[b]=u[b]);if(e){a=e(u);for(var d=0;d<a.length;d++)o.call(u,a[d])&&(s[a[d]]=u[a[d]])}}return s}},837:function(t,e,n){"use strict";n(320);var o=n(787),r=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),i("react.fragment")}var u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,n){var o,i={},l=null,b=null;for(o in void 0!==n&&(l=""+n),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(b=e.ref),e)a.call(e,o)&&!s.hasOwnProperty(o)&&(i[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps)void 0===i[o]&&(i[o]=e[o]);return{$$typeof:r,type:t,key:l,ref:b,props:i,_owner:u.current}}e.jsx=l,e.jsxs=l},322:function(t,e,n){"use strict";t.exports=n(837)},787:function(e){"use strict";e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function n(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);u=!0);}catch(t){a=!0,r=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw r}}return i}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}o.r(r),o.d(r,{default:function(){return E}});var u,a,s=o(787),l=o(322);(a=u||(u={})).Left="left",a.Right="right",a.NoIcon="no-icon";var b=function(t){return!!t&&Object.keys(t).filter((function(e){return!!t[e]})).map((function(t){return"".concat(t)})).join(" ")},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="string"==typeof t?t:b(t),o=b(e),r=o?"".concat(n," ").concat(o):n;return r};o(360);var c=["children","classes"];function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?p(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m,h,g,y=function(e){var n=e.children,o=e.classes,r=void 0===o?"":o,u=i(e,c),a=u.modifiers,s=void 0===a?[]:a,b=u.disabled,p=u.type,m=void 0===p?"button":p,h=(0,l.jsx)("button",f(f({type:"button",className:r},u),{},{disabled:b,children:n}));return""!==r?h:function(){console.warn("Modifiers will be deprecated in the near future. You should use CSS classes classes instead.");var e=s.map((function(t){return"button--".concat(t)})).join(" "),o=d("button",t({},e,!!s));return(0,l.jsx)("button",f(f({disabled:b,className:o,type:m},u),{},{children:n}))}()};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function x(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?v(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function w(t){return{"--color-text-base":t.textBaseColor,"--color-text-primary":t.textPrimaryColor,"--color-text-muted":t.textMutedColor,"--color-text-inverted":t.textInvertedColor,"--color-text-outlined":t.textOutlinedColor,"--color-text-outlined-disabled":t.textOutlinedDisabledColor,"--color-button-primary":t.buttonPrimaryColor,"--color-button-primary-hover":t.buttonPrimaryHoverColor,"--color-button-disabled":t.buttonDisabledColor,"--color-button-pressed":t.buttonPressedColor,"--color-button-outlined":t.buttonOutlinedColor,"--color-button-outlined-hover":t.buttonOutlinedHoverColor,"--border-radius-button":t.buttonBorderRadius,"--border-radius-button-large":t.buttonBorderRadiusLarge,"--border-button-outlined":t.buttonBorderOutlinedColor,"--border-button-disabled":t.buttonBorderOutlinedDisabledColor,"--tab-color-text-base":t.tabTextBaseColor,"--tab-color-text-inverted":t.tabTextInvertedColor,"--tab-color-button-primary":t.tabPrimaryColor,"--tab-color-button-primary-hover":t.tabHoverColor,"--tab-border-radius":t.tabBorderRadius}}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?O(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}x({},{variants:{default:{container:["font-manrope","font-medium","rounded-button","bg-button-primary","text-button-primary","px-6","py-1","min-w-min","dark:bg-gray-800","dark:text-button-primary","hover:bg-button-hover","focus:outline-none","active:bg-button-pressed","disabled:text-button-primary","disabled:bg-button-disabled","disabled:cursor-not-allowed","disabled:border-button-disabled"],skeleton:{container:["bg-gray-400","rounded-button","w-28","h-8"]}},secondary:{container:["font-manrope","font-medium","text-bold","rounded-button","bg-button-outlined","text-button-outlined","px-6","py-1","min-w-min","dark:bg-gray-800","dark:text-button-primary","border-2","border-button-outlined","hover:bg-button-outlined-hover","hover:text-button-primary","focus:outline-none","active:bg-button-pressed","active:border-button-outlined-pressed","disabled:text-button-outlined-disabled","disabled:bg-transparent","disabled:border-button-outlined-disabled","disabled:cursor-not-allowed"],skeleton:{container:["bg-gray-400","rounded-button","w-28","h-8"]}}}}),x({},{variants:{default:{container:["font-manrope","font-light","justify-center","items-center","flex","overflow-x-hidden","overflow-y-auto","fixed","inset-0","z-50","outline-none","rounded-lg","focus:outline-none"],skeleton:{container:["z-50","items-center","justify-center","inset-0","px-1","py-4","mt-28"]},header:{container:["font-manrope","font-bold","flex","items-start","justify-between","px-1","py-4","rounded","rounded-lg","m-1","bg-modal-header","text-modal-header"],title:["text-xl","font-normal","text-modal-header","px-3","leading-5","font-manrope"],button:["ml-auto","bg-transparent","border-0","outline-none","focus:outline-none","pr-2"],skeleton:["justify-between","h-16","bg-gray-400","rounded-t-lg"]},content:{container:["font-manrope","font-medium","bg-modal-content"],skeleton:["bg-gray-300","w-full","h-96"]},footer:{container:["font-manrope","font-medium","bg-modal-footer","border-t","border-footer","py-4","pr-8","flex","justify-end","space-x-4","rounded","rounded-lg"],skeleton:["w-full","h-16","bg-gray-400","border-0","rounded-b-lg"]}}}}),x({},{variants:{default:{desktop:{container:["hidden","md:flex","items-center","space-x-8"],menuItem:["font-manrope","py-5","px-3","text-gray-400","transition","duration-300","hover:text-yellow-400","hover:cursor-pointer","cursor-pointer"],icon:["py-2","px-2","hover:bg-gray-100","text-yellow-400","rounded-full","transition","duration-300","cursor-pointer"],skeleton:{container:["z-50","items-center","justify-center","inset-0","px-1","py-4","mt-28"]}},mobile:{container:["hidden","md:hidden"],menuItem:["font-manrope","block","py-2","px-4","text-sm","hover:bg-gray-200","cursor-pointer"],skeleton:{container:["z-50","items-center","justify-center","inset-0","px-1","py-4","mt-28"]}}}}}),x({},{variants:{text:{default:["form-input","font-manrope","font-light","rounded-input","border-input-base","bg-input-base","text-input-primary","px-4","block","w-full","min-w-min","dark:bg-gray-800","dark:text-white","hover:border-input-hover","focus:outline-none","focus:border-input-focus","disabled:cursor-not-allowed","text-base"],error:{container:["flex flex-col relative"],label:["text-red-600","min-w-max","mr-8","text-base"],input:["mt-1","form-input","font-manrope","font-light","rounded-input","border-input-red","bg-input-base","text-input-red","pl-4","pr-10","w-full","min-w-min","dark:bg-gray-800","dark:text-white","hover:border-input-hover","focus:outline-none","focus:border-transparent","focus:ring-2","focus:ring-input-error","disabled:cursor-not-allowed","text-base"],message:["text-input-error","text-sm"],icon:["absolute","text-input-error","bg-transparent","h-5","w-5","right-3"]},loading:{container:["flex flex-col relative"],label:["text-input-loading","min-w-max","mr-8","text-base"],input:["mt-1","form-input","font-manrope","font-light","rounded-input","border-input-loading","bg-input-base","text-input-base","pl-4","pr-10","w-full","min-w-min","dark:bg-gray-800","dark:text-white","hover:border-input-hover","focus:outline-none","focus:border-transparent","focus:ring-2","focus:ring-input-loading","disabled:cursor-not-allowed","text-base"],message:["text-input-error","text-sm"],icon:["absolute","text-input-loading","bg-transparent","h-5","w-5","right-3","animate-spin"]},warning:{container:["flex flex-col relative"],label:["text-input-warning","min-w-max","mr-8","text-base"],input:["mt-1","form-input","font-manrope","font-light","rounded-input","border-input-warning","bg-input-base","text-input-base","pl-4","pr-10","w-full","min-w-min","dark:bg-gray-800","dark:text-white","hover:border-input-hover","focus:outline-none","focus:border-transparent","focus:ring-2","focus:ring-input-warning","disabled:cursor-not-allowed","text-base"],message:["text-input-error","text-sm"],icon:["absolute","text-input-warning","bg-transparent","h-5","w-5","right-3"]},success:{container:["flex flex-col relative"],label:["text-input-success","min-w-max","mr-8","text-base"],input:["mt-1","form-input","font-manrope","font-light","rounded-input","border-input-success","bg-input-base","text-input-base","pl-4","pr-10","w-full","min-w-min","dark:bg-gray-800","dark:text-white","hover:border-input-hover","focus:outline-none","focus:border-transparent","focus:ring-2","focus:ring-input-success","disabled:cursor-not-allowed","text-base"],message:["text-input-error","text-sm"],icon:["absolute","text-input-success","bg-transparent","h-5","w-5","right-3"]},label:{container:["text-gray-700","mr-6","min-w-max"]},skeleton:{vertical:{container:["animate-pulse"],label:["mt-1","bg-gray-400","rounded-input","w-20","h-4"],input:["mt-1","bg-gray-400","rounded-input","min-w-min","h-10","mt-1"]},horizontal:{container:["grid","grid-cols-3","gap-4","items-center","mt-1"],label:["bg-gray-400","rounded-input","h-4","animate-pulse"],input:["bg-gray-400","rounded-input","h-10","col-span-2","col-end-auto","animate-pulse"]}}}}}),x({},{variants:{default:{container:["bg-gray-400","w-full","h-full","animate-pulse"]}}}),w({textBaseColor:"66, 63, 63",textPrimaryColor:"255, 255, 255",textMutedColor:"199, 210, 254",textInvertedColor:"137, 155, 188",textOutlinedColor:"66, 133, 244",textOutlinedDisabledColor:"190, 190, 190",buttonPrimaryColor:"255, 173, 1",buttonPrimaryHoverColor:"147, 183, 243",buttonDisabledColor:"190, 190, 190",buttonPressedColor:"137, 155, 188",buttonOutlinedColor:"255, 255, 255",buttonOutlinedHoverColor:"66, 133, 244",buttonBorderRadius:"17px",buttonBorderRadiusLarge:"21px",buttonBorderOutlinedColor:"66, 133, 244",buttonBorderOutlinedDisabledColor:"66, 133, 244",tabTextBaseColor:"66, 63, 63",tabTextInvertedColor:"255, 255, 255",tabPrimaryColor:"215, 224, 240",tabHoverColor:"66, 133, 244",tabBorderRadius:"8px"}),w({textBaseColor:"66, 63, 63",textPrimaryColor:"255, 255, 255",textMutedColor:"199, 210, 254",textInvertedColor:"137, 155, 188",textOutlinedColor:"66, 133, 244",textOutlinedDisabledColor:"190, 190, 190",buttonPrimaryColor:"59, 130, 246",buttonPrimaryHoverColor:"29, 78, 216",buttonDisabledColor:"190, 190, 190",buttonPressedColor:"96, 165, 250",buttonOutlinedColor:"255, 255, 255",buttonOutlinedHoverColor:"66, 133, 244",buttonBorderRadius:"5px",buttonBorderRadiusLarge:"8px",buttonBorderOutlinedColor:"66, 133, 244",buttonBorderOutlinedDisabledColor:"66, 133, 244",tabTextBaseColor:"66, 63, 63",tabTextInvertedColor:"255, 255, 255",tabPrimaryColor:"215, 224, 240",tabHoverColor:"66, 133, 244",tabBorderRadius:"8px"}),function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?_(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):_(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}}({},j(j(j({},{filled:{primary:"\n      font-manrope\n      font-medium\n      rounded-button \n      bg-button-primary \n      text-button-primary \n      px-6 \n      py-1 \n      min-w-min \n      dark:bg-gray-800 \n      dark:text-button-primary \n      hover:bg-button-hover \n      focus:outline-none\n      mr-1 \n      active:bg-button-pressed",disabled:"\n        font-manrope\n        font-medium\n        rounded-button \n        bg-button-disabled \n        text-button-primary \n        px-6 \n        py-1 \n        min-w-min \n        dark:bg-gray-800 \n        dark:text-button-disabled \n        focus:outline-none\n    ",small:"\n        font-manrope\n        font-medium\n        rounded-button \n        bg-button-primary \n        text-button-primary \n        px-4 \n        py-1 \n        min-w-min \n        dark:bg-gray-800 \n        dark:text-button-primary \n        hover:bg-button-hover \n        focus:outline-none \n        active:bg-button-pressed\n        text-sm\n    ",medium:"\n      font-manrope\n      font-medium\n      rounded-button \n      bg-button-primary \n      text-button-primary \n      px-6 \n      py-1 \n      min-w-min \n      dark:bg-gray-800 \n      dark:text-button-primary \n      text-base-primary \n      hover:bg-button-hover \n      focus:outline-none \n      active:bg-button-pressed\n      text-md\n    ",large:"\n      font-manrope\n      font-medium\n      rounded-button-large \n      bg-button-primary \n      text-button-primary \n      px-6 \n      py-1 \n      min-w-min \n      dark:bg-gray-800 \n      dark:text-button-primary \n      text-base-primary \n      hover:bg-button-hover \n      focus:outline-none \n      active:bg-button-pressed\n      text-lg\n    ",stretched:"\n      font-manrope\n      font-medium\n      rounded-button \n      bg-button-primary \n      text-button-primary \n      px-6 \n      py-1 \n      w-full \n      dark:bg-gray-800 \n      dark:text-button-primary \n      hover:bg-button-hover \n      focus:outline-none \n      active:bg-button-pressed\n      text-lg\n    ",iconLeft:"\n      font-manrope\n      font-medium\n      rounded-button \n      bg-button-primary \n      text-button-primary \n      px-6 \n      py-1 \n      min-w-min \n      dark:bg-gray-800 \n      dark:text-button-primary \n      hover:bg-button-hover \n      focus:outline-none \n      active:bg-button-pressed     \n    ",iconRight:"\n      font-manrope\n      font-medium\n      rounded-button \n      bg-button-primary \n      text-button-primary \n      px-6 \n      py-1 \n      min-w-min \n      dark:bg-gray-800 \n      dark:text-button-primary \n      hover:bg-button-hover \n      focus:outline-none \n      active:bg-button-pressed\n    "}}),{outlined:{primary:"\n      font-manrope\n      font-medium\n      text-bold\n      rounded-button\n      bg-button-outlined\n      text-button-outlined\n      px-6\n      py-1\n      min-w-min\n      dark:bg-gray-800\n      dark:text-button-primary\n      border-2\n      border-button-outlined\n      hover:bg-button-outlined-hover\n      hover:text-button-primary\n      focus:outline-none\n      active:bg-button-pressed\n    ",disabled:"\n      font-manrope\n      font-medium  \n      text-bold\n      text-button-outlined-disabled\n      rounded-button\n      px-6\n      py-1\n      min-w-min \n      dark:bg-gray-800\n      dark:text-button-primary\n      border-2\n      border-button-outlined-disabled\n      hover:bg-button-outlined-hover\n      hover:text-button-primary\n      focus:outline-none\n      active:bg-button-pressed\n    ",small:"\n      font-manrope\n      font-medium  \n      text-bold\n      bg-button-outlined \n      text-button-outlined \n      rounded-button \n      bg-button-primary \n      text-button-primary \n      px-5 \n      py-1 \n      min-w-min\n      border-2\n      border-button-outlined\n      hover:bg-button-outlined-hover\n      hover:text-button-primary  \n      dark:bg-gray-800\n      dark:text-button-primary\n      focus:outline-none \n      active:bg-button-pressed\n      text-sm\n    ",medium:"\n      font-manrope\n      font-medium  \n      text-bold\n      bg-button-outlined \n      text-button-outlined \n      rounded-button \n      bg-button-primary \n      text-button-primary \n      px-6 \n      py-1 \n      min-w-min \n      border-2\n      border-button-outlined\n      hover:bg-button-outlined-hover\n      hover:text-button-primary  \n      dark:bg-gray-800\n      dark:text-button-primary\n      focus:outline-none \n      active:bg-button-pressed\n      text-md\n    ",large:"\n      font-manrope\n      font-medium  \n      text-bold\n      bg-button-outlined \n      text-button-outlined \n      rounded-button \n      bg-button-primary \n      text-button-primary \n      px-6 \n      py-1 \n      min-w-min\n      border-2\n      border-button-outlined\n      hover:bg-button-outlined-hover\n      hover:text-button-primary  \n      dark:bg-gray-800\n      dark:text-button-primary\n      focus:outline-none \n      active:bg-button-pressed\n      text-lg\n      ",stretched:"\n      font-manrope\n      font-medium\n      text-bold\n      bg-button-outlined\n      text-button-outlined\n      rounded-button\n      bg-button-primary\n      text-button-primary\n      px-6\n      py-1\n      w-full\n      border-2\n      border-button-outlined\n      hover:bg-button-outlined-hover\n      hover:text-button-primary\n      dark:bg-gray-800\n      dark:text-button-primary\n      focus:outline-none\n      active:bg-button-pressed\n      text-md\n    ",icon:{left:"\n      font-manrope\n      font-medium\n      text-bold\n      rounded-button\n      bg-button-outlined\n      text-button-outlined\n      px-6\n      py-1\n      min-w-min\n      dark:bg-gray-800\n      dark:text-button-primary\n      border-2\n      border-button-outlined\n      hover:bg-button-outlined-hover\n      hover:text-button-primary\n      focus:outline-none\n      active:bg-button-pressed\n    ",right:"\n      font-manrope\n      font-medium\n      text-bold\n      rounded-button\n      bg-button-outlined\n      text-button-outlined\n      px-6\n      py-1\n      min-w-min\n      dark:bg-gray-800\n      dark:text-button-primary\n      border-2\n      border-button-outlined\n      hover:bg-button-outlined-hover\n      hover:text-button-primary\n      focus:outline-none\n      active:bg-button-pressed    \n    "}}}),{text:{primary:"\n      font-manrope\n      font-medium\n      text-bold\n      rounded-button\n      text-button-outlined \n      min-w-min\n      dark:bg-gray-800\n      dark:text-button-primary\n      hover:text-button-muted\n      focus:outline-none\n      active:text-button-inverted\n      text-md\n    ",icon:{left:"\n        font-manrope\n        font-medium\n        text-bold\n        rounded-button\n        text-button-outlined \n        min-w-min\n        dark:bg-gray-800\n        dark:text-button-primary\n        hover:text-button-muted\n        focus:outline-none\n        active:text-button-inverted\n        text-md\n      ",right:"\n        font-manrope\n        font-medium\n        text-bold\n        rounded-button\n        text-button-outlined \n        min-w-min\n        dark:bg-gray-800\n        dark:text-button-primary\n        hover:text-button-muted\n        focus:outline-none\n        active:text-button-inverted\n        text-md\n      "}}})),function(t){t.Button="button",t.Submit="submit",t.Reset="reset"}(m||(m={})),function(t){t.Primary="primary",t.Secondary="secondary"}(h||(h={})),function(t){t.Left="left",t.Right="right",t.NoIcon="no-icon"}(g||(g={}));var k=["children","close","icon","type"];function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?P(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var I=function(e){var o=e.children,r=e.close,u=e.icon,a=e.type,b=i(e,k),c=n((0,s.useState)(!1),2),p=c[0],f=c[1],m=d("alert",t({"alert--dismissable":r,"alert--icon":!!u},"alert--".concat(a),!!a)),h=(0,l.jsxs)("div",C(C({className:m},b),{},{children:[u&&(0,l.jsx)("i",{className:"material-icons",children:u}),o,r&&(0,l.jsx)(y,{onClick:function(){return f(!0)},className:"icon-button icon-button--close",children:(0,l.jsx)("i",{className:"material-icons",children:"close"})})]}));return(0,l.jsx)(s.Fragment,{children:!p&&h})};I.defaultProps={children:"No content",close:!1,icon:"",type:""};var E=I}(),r}()}));