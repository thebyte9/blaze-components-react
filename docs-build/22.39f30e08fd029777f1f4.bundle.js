(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{2191:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _blaze_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);const RadioButton=({onChange:onChange,options:options,required:required,error:error,validationMessage:validationMessage,utils:{ErrorMessage:ErrorMessage},...attrs})=>{const[selected,setSelected]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)({value:null});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,required&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"required"}),options.map(item=>{const{value:value,disabled:disabled,label:label,id:id}=item;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:label,className:"form-field form-field--radio",onClick:event=>(({event:event,item:item})=>{item.disabled||(setSelected(item),onChange({event:event,selected:item}))})({event:event,item:item}),role:"button"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",Object.assign({readOnly:!0,type:"radio",className:"form-radio",value:value,disabled:disabled,checked:value===selected.value,id:id},attrs)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",{htmlFor:id},label))}),error&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage,{message:validationMessage}))};RadioButton.defaultProps={error:!1,onChange:()=>{},options:[],required:!1,validationMessage:"This field is required"},__webpack_exports__.default=_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0___default()(RadioButton)}}]);
//# sourceMappingURL=22.39f30e08fd029777f1f4.bundle.js.map