(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{2223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lib=__webpack_require__(7),lib_default=__webpack_require__.n(lib),react=__webpack_require__(0),react_default=__webpack_require__.n(react);var src_ToggleInputType=({type:type,toggleType:toggleType})=>{const passwordDefaultClasses={icon:"visibility_off",status:"active",text:"Show"},passwordActiveClasses={icon:"visibility",status:"hide",text:"Hide"},[passwordClasses,setPasswordState]=Object(react.useState)(passwordDefaultClasses),isPassword="password"===type,{status:status,icon:icon,text:text}=passwordClasses;return react_default.a.createElement("span",{"data-testid":"toggle-input-type",onClick:()=>{isPassword?(setPasswordState(passwordActiveClasses),toggleType("text")):(setPasswordState(passwordDefaultClasses),toggleType("password"))},className:`show-hide-password ${status}`,role:"button"},text,react_default.a.createElement("i",{className:"material-icons"},icon))};const Input=({disabled:disabled,hideTypeToggle:hideTypeToggle,label:label,modifier:modifier,onChange:onChange,required:required,type:type,error:error,validationMessage:validationMessage,value:value,utils:{classNames:classNames,ErrorMessage:ErrorMessage},...attrs})=>{const initialValue=value||"",[newValue,setNewValue]=Object(react.useState)(initialValue),[newType,setType]=Object(react.useState)(type),[newError,setError]=Object(react.useState)(error);Object(react.useEffect)(()=>{setError(error)},[error]),Object(react.useEffect)(()=>setNewValue(value||""),[value]);const isPassword="password"===type,requiredClassName=classNames({required:required}),passwordClassName=classNames({"form-field--password":isPassword}),modifierClassName=classNames({[`form-field--${modifier}`]:!!modifier});return react_default.a.createElement("div",{className:`form-field form-field--input ${modifierClassName} ${passwordClassName}`},react_default.a.createElement("label",{htmlFor:attrs.id,className:requiredClassName},label),react_default.a.createElement("input",Object.assign({"data-testid":"input",onChange:event=>{const{target:{value:targetValue}}=event;setNewValue(targetValue),onChange({event:event,value:targetValue})},value:newValue,disabled:disabled,type:newType,required:required},attrs)),newError&&react_default.a.createElement(ErrorMessage,{message:validationMessage}),!hideTypeToggle&&isPassword&&react_default.a.createElement(src_ToggleInputType,{toggleType:inputType=>{setType(inputType)},type:newType}))};Input.defaultProps={disabled:!1,error:!1,hideTypeToggle:!1,label:"",modifier:"",required:!1,type:"text",validationMessage:"This field is required"};__webpack_exports__.default=lib_default()(Input)}}]);
//# sourceMappingURL=19.b479ddac895f331c6813.bundle.js.map