(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{2271:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _blaze_react_input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_blaze_react_input__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_blaze_react_input__WEBPACK_IMPORTED_MODULE_0__),_blaze_react_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_blaze_react_utils__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_blaze_react_utils__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);const Autocomplete=({data:{data:data,filterBy:keys,keyValue:keyValue},disabled:disabled,label:label,placeholder:placeholder,selected:selected,utils:{uniqueId:uniqueId},inputProps:inputProps})=>{const[inputValue,setInputValue]=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),[showSelect,setShowSelect]=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),filterByValue=value=>data.filter(copy=>!!keys.some(key=>copy[key].toLowerCase().includes(value.toLowerCase())));return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_blaze_react_input__WEBPACK_IMPORTED_MODULE_0___default.a,Object.assign({},inputProps,{placeholder:placeholder,label:label,onChange:({value:value})=>{setShowSelect(!0),setInputValue(value),filterByValue(value)},value:inputValue,disabled:disabled})),showSelect&&filterByValue(inputValue).map((copiedData,key)=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"panel",key:uniqueId(copiedData),onClick:()=>(copiedData=>{setInputValue(copiedData[keyValue]),setShowSelect(!1),selected(copiedData)})(copiedData),role:"button","data-testid":`option-${key+1}`},copiedData[keyValue])))};Autocomplete.defaultProps={disabled:!1,label:"",placeholder:"Search",selected:()=>{}},__webpack_exports__.default=_blaze_react_utils__WEBPACK_IMPORTED_MODULE_1___default()(Autocomplete)}}]);
//# sourceMappingURL=10.88045b8a59609266c578.bundle.js.map