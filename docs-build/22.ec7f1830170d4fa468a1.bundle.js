(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{2280:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const Progress=({progress:progress,steps:steps,type:type,onChange:onChange})=>{const[currentProgress,setProgress]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(progress),checkStep=step=>step===steps.length&&step===currentProgress?"final current":step===currentProgress?"current":step===steps.length?"final":step<=currentProgress?"visited":"",isTypeCount="count"===type?"progress-bar__list-item--dots":"",modifiers=()=>{const allModifiers=type.split(" ");return allModifiers.length?allModifiers.map(modifier=>`progress-bar__list-item--${modifier}`).join(" "):`progress-bar__list-item--${type}`};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",{className:"progress-bar"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",{className:"progress-bar__list"},steps.map((text,index)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:text,className:`progress-bar__list-item ${modifiers()} ${isTypeCount} ${checkStep(index+1)}`},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{onClick:event=>(({event:event,step:step})=>{setProgress(step),onChange({event:event,step:step})})({event:event,step:index+1}),role:"button"},text)))))};Progress.defaultProps={onChange:()=>{},progress:0,steps:[],type:"dots"},__webpack_exports__.default=Progress}}]);
//# sourceMappingURL=22.ec7f1830170d4fa468a1.bundle.js.map