(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{531:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lib=__webpack_require__(7),lib_default=__webpack_require__.n(lib),react=__webpack_require__(0),react_default=__webpack_require__.n(react);var Label=({defaultId:defaultId,label:label})=>{if(Array.isArray(label)){const[labelText,labelLongerText]=label;return react_default.a.createElement("label",{htmlFor:defaultId},react_default.a.createElement("span",null,labelText),react_default.a.createElement("span",null,labelLongerText))}return react_default.a.createElement("label",{htmlFor:defaultId},react_default.a.createElement("span",null,label))};var src_Checkbox=lib_default()(({checked:checked,value:value,disabled:disabled,required:required,label:label,show:show,name:name,id:id,onChange:onChange,utils:{uniqueId:uniqueId,classNames:classNames},...attrs})=>{const[isChecked,setIsChecked]=Object(react.useState)(checked),defaultId=uniqueId(name),checkboxClassName=classNames("form-field form-field--checkbox",{required:required});return react_default.a.createElement("div",{"data-testid":attrs.testId,"data-cy":attrs["data-cy"],key:id,id:defaultId,className:checkboxClassName,onClick:event=>{onChange({event:event,value:{checked:!isChecked,disabled:disabled,id:id,label:label,name:name,required:required,show:show,value:value}}),setIsChecked(!isChecked)},role:"button"},react_default.a.createElement("input",{readOnly:!0,type:"checkbox",className:"form-checkbox",value:value,disabled:disabled,checked:checked,required:required,id:id||defaultId,name:name}),react_default.a.createElement(Label,{defaultId:defaultId,label:label}))});__webpack_require__.d(__webpack_exports__,"Checkboxes",function(){return Checkboxes}),__webpack_require__.d(__webpack_exports__,"Checkbox",function(){return src_Checkbox});const CheckBoxes=({returnBoolean:returnBoolean,onChange:onChangeCheckboxList,options:options,error:error,validationMessage:validationMessage,name:name,utils:{ErrorMessage:ErrorMessage},...attrs})=>{const formatedOptions=Array.isArray(options)?options:[options],[data,setData]=Object(react.useState)(formatedOptions);Object(react.useEffect)(()=>setData(formatedOptions),[options]);const onChange=({value:value})=>{if(value.disabled)return;const currentIndex=data.findIndex(({id:id})=>id===value.id);if(currentIndex<0)return;data[currentIndex].checked=value.checked,setData([...data]);let currentValues=data.filter(({checked:checked})=>checked);returnBoolean&&(currentValues=!!currentValues.length),onChangeCheckboxList({data:data,event:{target:{name:name}},value:currentValues})};return react_default.a.createElement(react_default.a.Fragment,null,data.map(({checked:checked=!1,disabled:disabled,id:id,label:label,name:checkboxName,required:required,show:show=!0,value:value},key)=>show?react_default.a.createElement(src_Checkbox,{key:id,onChange:onChange,checked:checked,disabled:disabled,id:id,label:label,name:checkboxName,required:required,show:show,value:value,"data-cy":attrs["data-cy"]?`${attrs["data-cy"]}-checkbox-cy-${key+1}`:`checkbox-cy-${key+1}`,testId:attrs["test-id"]||`checkbox-${key+1}`}):null),error&&react_default.a.createElement(ErrorMessage,{message:validationMessage}))};CheckBoxes.defaultProps={error:!1,options:[],returnBoolean:!1,validationMessage:"This field is required"};const Checkboxes=lib_default()(CheckBoxes)}}]);
//# sourceMappingURL=0.b479ddac895f331c6813.bundle.js.map