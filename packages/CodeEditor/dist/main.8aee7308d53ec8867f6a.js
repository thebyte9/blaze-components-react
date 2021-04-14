!function(){var e={262:function(e,t,n){"use strict";var r=n(586);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},980:function(e,t,n){e.exports=n(262)()},586:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function a(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function u(e){return{}.toString.call(e).includes("Object")}function c(e){return"function"==typeof e}var l=a((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),s=function(e,t){return u(t)||l("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&l("changeField"),t},f=function(e){c(e)||l("selectorType")},d=function(e){c(e)||u(e)||l("handlerType"),u(e)&&Object.values(e).some((function(e){return!c(e)}))&&l("handlersType")},g=function(e){var t;e||l("initialIsRequired"),u(e)||l("initialType"),t=e,Object.keys(t).length||l("initialContent")};function p(e,t){return c(t)?t(e.current):t}function h(e,t){return e.current=o(o({},e.current),t),t}function y(e,t,n){return c(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}var m,v,b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g(e),d(t);var n={current:e},r=a(y)(n,t),o=a(h)(n),u=a(s)(e),c=a(p)(n);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return f(e),e(n.current)}function m(e){i(r,o,u,c)(e)}return[l,m]},w={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},O=((m=function(e,t){throw new Error(e[t]||e.default)},function e(){for(var t=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return r.length>=m.length?m.apply(this,r):function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e.apply(t,[].concat(r,o))}})(w),{type:"cancelation",msg:"operation is manually canceled"}),j=function(e){var t=!1,n=new Promise((function(n,r){e.then((function(e){return t?r(O):n(e)})),e.catch(r)}));return n.cancel=function(){return t=!0},n},M=(2,function(e){if(Array.isArray(e))return e}(v=b({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.23.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),2!==n.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(v)||function(t,n){if(t){if("string"==typeof t)return e(t,2);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,2):void 0}}(v)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),E=M[0],T=M[1];function R(e){return document.body.appendChild(e)}function P(e){var t,n,r=E((function(e){return{config:e.config,reject:e.reject}})),o=(t="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),t&&(n.src=t),n);return o.onload=function(){return e()},o.onerror=r.reject,o}function S(){var e=E((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){C(t),e.resolve(t)}),(function(t){e.reject(t)}))}function C(e){E().monaco||T({monaco:e})}var k=new Promise((function(e,t){return T({resolve:e,reject:t})})),x=function(){if(!E((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return C(window.monaco),j(Promise.resolve(window.monaco));(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}})(R,P)(S),T({isInitialized:!0})}return j(k)},N=react,V=n.n(N),I=n(980),L=n.n(I);const A={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var _=function({content:e}){return V().createElement("div",{style:A},e)},q={display:"flex",position:"relative",textAlign:"initial"},D={width:"100%"},U={display:"none"};function z({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperClassName:a}){return V().createElement("section",{style:{...q,width:e,height:t},className:a},!n&&V().createElement(_,{content:r}),V().createElement("div",{ref:o,style:{...D,...!n&&U},className:i}))}z.propTypes={width:L().oneOfType([L().number,L().string]).isRequired,height:L().oneOfType([L().number,L().string]).isRequired,loading:L().oneOfType([L().element,L().string]).isRequired,isEditorReady:L().bool.isRequired,className:L().string,wrapperClassName:L().string};var F=z,W=(0,N.memo)(F),B=function(e){(0,N.useEffect)(e,[])},Y=function(e,t,n=!0){const r=(0,N.useRef)(!0);(0,N.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)};function H(){}function $(e,t,n,r){return function(e,t){return e.editor.getModel(G(e,t))}(e,r)||function(e,t,n,r){return e.editor.createModel(t,n,r&&G(e,r))}(e,t,n,r)}function G(e,t){return e.Uri.parse(t)}function J({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:a,theme:u,loading:c,options:l,height:s,width:f,className:d,wrapperClassName:g,beforeMount:p,onMount:h}){const[y,m]=(0,N.useState)(!1),[v,b]=(0,N.useState)(!0),w=(0,N.useRef)(null),O=(0,N.useRef)(null),j=(0,N.useRef)(null),M=(0,N.useRef)(h),E=(0,N.useRef)(p);B((()=>{const e=x();return e.then((e=>(O.current=e)&&b(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>w.current?P():e.cancel()})),Y((()=>{const e=w.current.getModifiedEditor();e.getOption(O.current.editor.EditorOption.readOnly)?e.setValue(t):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],y),Y((()=>{w.current.getModel().original.setValue(e)}),[e],y),Y((()=>{const{original:e,modified:t}=w.current.getModel();O.current.editor.setModelLanguage(e,r||n),O.current.editor.setModelLanguage(t,o||n)}),[n,r,o],y),Y((()=>{O.current.editor.setTheme(u)}),[u],y),Y((()=>{w.current.updateOptions(l)}),[l],y);const T=(0,N.useCallback)((()=>{E.current(O.current);const u=O.current.editor.createModel(e,r||n,i&&O.current.Uri.parse(i)),c=O.current.editor.createModel(t,o||n,a&&O.current.Uri.parse(a));w.current.setModel({original:u,modified:c})}),[n,t,o,e,r,i,a]),R=(0,N.useCallback)((()=>{w.current=O.current.editor.createDiffEditor(j.current,{automaticLayout:!0,...l}),T(),O.current.editor.setTheme(u),m(!0)}),[l,u,T]);(0,N.useEffect)((()=>{y&&M.current(w.current,O.current)}),[y]),(0,N.useEffect)((()=>{!v&&!y&&R()}),[v,y,R]);const P=()=>{var e,t;const n=w.current.getModel();null===(e=n.original)||void 0===e||e.dispose(),null===(t=n.modified)||void 0===t||t.dispose(),w.current.dispose()};return V().createElement(W,{width:f,height:s,isEditorReady:y,loading:c,_ref:j,className:d,wrapperClassName:g})}J.propTypes={original:L().string,modified:L().string,language:L().string,originalLanguage:L().string,modifiedLanguage:L().string,originalModelPath:L().string,modifiedModelPath:L().string,theme:L().string,loading:L().oneOfType([L().element,L().string]),options:L().object,width:L().oneOfType([L().number,L().string]),height:L().oneOfType([L().number,L().string]),className:L().string,wrapperClassName:L().string,beforeMount:L().func,onMount:L().func},J.defaultProps={theme:"light",loading:"Loading...",options:{},width:"100%",height:"100%",beforeMount:H,onMount:H};const[K,Q]=b({backup:null}),X=new Map;function Z({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:a,line:u,loading:c,options:l,overrideServices:s,saveViewState:f,keepCurrentModel:d,width:g,height:p,className:h,wrapperClassName:y,beforeMount:m,onMount:v,onChange:b,onValidate:w}){const[O,j]=(0,N.useState)(!1),[M,E]=(0,N.useState)(!0),T=(0,N.useRef)(null),R=(0,N.useRef)(null),P=(0,N.useRef)(null),S=(0,N.useRef)(v),C=(0,N.useRef)(m),k=(0,N.useRef)(null),I=(0,N.useRef)(r),L=function(e){const t=(0,N.useRef)();return(0,N.useEffect)((()=>{t.current=e}),[e]),t.current}(i);B((()=>{const e=x();return e.then((e=>(T.current=e)&&E(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>{return R.current?(null===(t=k.current)||void 0===t||t.dispose(),d?f&&X.set(i,R.current.saveViewState()):null===(n=R.current.getModel())||void 0===n||n.dispose(),void R.current.dispose()):e.cancel();var t,n}})),Y((()=>{const n=$(T.current,e||r,t||o,i);n!==R.current.getModel()&&(f&&X.set(L,R.current.saveViewState()),R.current.setModel(n),f&&R.current.restoreViewState(X.get(i)))}),[i],O),Y((()=>{R.current.updateOptions(l)}),[l],O),Y((()=>{R.current.getOption(T.current.editor.EditorOption.readOnly)?R.current.setValue(r):r!==R.current.getValue()&&(R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),R.current.pushUndoStop())}),[r],O),Y((()=>{T.current.editor.setModelLanguage(R.current.getModel(),o)}),[o],O),Y((()=>{void 0!==u&&R.current.revealLine(u)}),[u],O),Y((()=>{T.current.editor.setTheme(a)}),[a],O);const A=(0,N.useCallback)((()=>{C.current(T.current);const u=i||n,c=$(T.current,r||e,t||o,u);R.current=T.current.editor.create(P.current,{model:c,automaticLayout:!0,...l},s),f&&R.current.restoreViewState(X.get(u)),T.current.editor.setTheme(a),K().backup||Q({backup:T.current.editor.setModelMarkers}),j(!0)}),[e,t,n,r,o,i,l,s,f,a]);return(0,N.useEffect)((()=>{O&&S.current(R.current,T.current)}),[O]),(0,N.useEffect)((()=>{!M&&!O&&A()}),[M,O,A]),I.current=r,(0,N.useEffect)((()=>{var e,t;O&&b&&(null===(e=k.current)||void 0===e||e.dispose(),k.current=null===(t=R.current)||void 0===t?void 0:t.onDidChangeModelContent((e=>{const t=R.current.getValue();I.current!==t&&b(t,e)})))}),[O,b]),(0,N.useEffect)((()=>{O&&(T.current.editor.setModelMarkers=function(e,t,n){var r;null===(r=K().backup)||void 0===r||r.call(T.current.editor,e,t,n),null==w||w(n)})}),[O,w]),V().createElement(W,{width:g,height:p,isEditorReady:O,loading:c,_ref:P,className:h,wrapperClassName:y})}Z.propTypes={defaultValue:L().string,defaultPath:L().string,defaultLanguage:L().string,value:L().string,language:L().string,path:L().string,theme:L().string,line:L().number,loading:L().oneOfType([L().element,L().string]),options:L().object,overrideServices:L().object,saveViewState:L().bool,keepCurrentModel:L().bool,width:L().oneOfType([L().number,L().string]),height:L().oneOfType([L().number,L().string]),className:L().string,wrapperClassName:L().string,beforeMount:L().func,onMount:L().func,onChange:L().func,onValidate:L().func},Z.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",beforeMount:H,onMount:H,onValidate:H};var ee=Z,te=(0,N.memo)(ee);function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}(function(e){var t=e.value,n=e.onChange,r=e.language,o=e.height,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["value","onChange","language","height"]);return V().createElement(te,ne({height:o,language:r,value:t,onChange:n},i))}).defaultProps={height:"600px",language:"javascript",value:""}}()}();