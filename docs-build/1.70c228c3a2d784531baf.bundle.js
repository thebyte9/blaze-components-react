(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{531:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _blaze_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);const Select=({label:label,required:required,onChange:onChange,options:options,selected:selected,keys:keys,error:error,validationMessage:validationMessage,disabled:disabled,defaultTextValue:defaultTextValue,utils:{classNames:classNames,ErrorMessage:ErrorMessage},...attrs})=>{const[selectedOption,setSelectedOption]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(selected);Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setSelectedOption(selected)},[selected]);const requiredClassName=classNames({required:required}),setOption=(value,text)=>{const isDisabled=disabled&&disabled.includes(value);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{key:value,value:value,disabled:isDisabled},text||value)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"form-field form-field--select"},label&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",{htmlFor:attrs.id,className:requiredClassName},label),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select",Object.assign({onChange:event=>{const{target:{value:value}}=event;setSelectedOption(value),onChange({event:event,value:value})},disabled:!options.length,value:selectedOption},attrs),!required&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{defaultValue:""},defaultTextValue),(()=>{const[first]=options;return"string"==typeof first?options.map(option=>setOption(option)):first instanceof Array?options.map(([value,text])=>setOption(value,text)):options.map(option=>{const[value,text]=keys;return setOption(option[value],option[text])})})()),error&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage,{message:validationMessage}))};Select.defaultProps={defaultTextValue:"Please Choose...",disabled:[],error:!1,keys:[],label:"",onChange:()=>{},options:[],required:!1,selected:"",validationMessage:"This field is required"},__webpack_exports__.default=_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0___default()(Select)}}]);
//# sourceMappingURL=1.70c228c3a2d784531baf.bundle.js.map