(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{2194:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _blaze_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);const RangeFilter=({label:label,modifier:modifier,onChange:onChange,required:required,error:error,validationMessage:validationMessage,value:value,name:name,utils:{classNames:classNames,ErrorMessage:ErrorMessage},...attrs})=>{const[inputs,setInputs]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),[newError,setError]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(error);Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setError(error)},[error]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{value&&(setInputs(value),onChange({value:value}))},[value]);const modifierClassName=classNames({[`form-field--${modifier}`]:!!modifier}),requiredClassName=classNames({required:required});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:`form-field form-field--range ${modifierClassName}`},label&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",{htmlFor:attrs.id,className:requiredClassName},label),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"range_fields"},Object.keys(inputs).map(key=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{key:key},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",Object.assign({type:"range","data-testid":`input_${key}`,"data-key":key,name:`${name}${key}`,onChange:e=>((event,key)=>{const{target:{value:targetValue}}=event,newValues={...inputs,[key]:{...inputs[key],value:parseFloat(targetValue)}};setInputs(newValues),onChange({event:event,value:newValues})})(e,key)},inputs[key],attrs)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,inputs[key].value)))),newError&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage,{message:validationMessage}))};RangeFilter.defaultProps={error:!1,label:"",modifier:"",name:"",validationMessage:"This field is required"},__webpack_exports__.default=_blaze_react_utils__WEBPACK_IMPORTED_MODULE_0___default()(RangeFilter)}}]);
//# sourceMappingURL=23.d5e822a77b82da47137b.bundle.js.map