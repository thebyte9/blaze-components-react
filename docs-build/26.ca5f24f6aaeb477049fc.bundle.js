(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{2034:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _blaze_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);const Textarea=({value:value,label:label,limit:limit,onChange:onChange,error:error,validationMessage:validationMessage,required:required,id:id,utils:{classNames:classNames,ErrorMessage:ErrorMessage},...attrs})=>{const[content,setContent]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("");Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setContent(value||""),[value]);const requiredClassName=classNames({required:required}),total=limit?limit-content.length:0;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"form-field form-field--textarea"},label&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",{htmlFor:id,className:requiredClassName},label),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea",Object.assign({value:content,rows:attrs.rows,cols:attrs.cols,onChange:event=>{let{target:{value:newContent}}=event;limit&&newContent.length>limit&&(newContent=newContent.slice(0,limit)),setContent(newContent),onChange({event:event,value:newContent})},required:required},attrs)),!!limit&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,total),error&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage,{message:validationMessage}))};Textarea.defaultProps={error:!1,label:"",limit:0,placeholder:"",required:!1,validationMessage:"This field is required",value:""},__webpack_exports__.default=_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0___default()(Textarea)}}]);
//# sourceMappingURL=26.ca5f24f6aaeb477049fc.bundle.js.map