(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{2251:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lib=__webpack_require__(4),lib_default=__webpack_require__.n(lib),react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_datepicker_min=__webpack_require__(2291),react_datepicker_min_default=__webpack_require__.n(react_datepicker_min);const TYPE_DATE_TIME="dateTime",TYPE_TIME="time",DATE_FORMAT_MAP={date:"MMMM d, yyyy",[TYPE_DATE_TIME]:"MMMM d, yyyy HH:mm",[TYPE_TIME]:"HH:mm"},DateTimeInput=({disabled:disabled,id:id,label:label,modifier:modifier,onChange:onChange,required:required,error:error,type:type,validationMessage:validationMessage,value:value,utils:{buildClassNames:buildClassNames,ErrorMessage:ErrorMessage}})=>{const[newValue,setNewValue]=Object(react.useState)(value),[newError,setError]=Object(react.useState)(error),[newOpen,setOpen]=Object(react.useState)(!1);let whitelistedType=type;type!==TYPE_TIME&&"date"!==type&&(whitelistedType=TYPE_DATE_TIME),Object(react.useEffect)(()=>{setError(error)},[error]),Object(react.useEffect)(()=>{setNewValue(value)},[value]);const handleChange=(date,event,forceClose=!1)=>{setNewValue(date),setOpen(!forceClose);const{target:target={}}=event||{};target.name=id,target.value=date,onChange({event:{...event,target:target},value:date})},requiredClassName=buildClassNames({required:required}),rootClasses=buildClassNames("form-field form-field--date-time-input",{[`form-field--${modifier}`]:!!modifier});return react_default.a.createElement("div",{className:rootClasses},react_default.a.createElement("label",{htmlFor:id,className:requiredClassName},label),react_default.a.createElement(react_datepicker_min_default.a,{"data-testid":"date-time-input",id:id,name:id,onChange:handleChange,onFocus:()=>setOpen(!0),showTimeInput:[TYPE_TIME,TYPE_DATE_TIME].includes(whitelistedType),showTimeSelectOnly:whitelistedType===TYPE_TIME,onClickOutside:()=>setOpen(!1),popperModifiers:{flip:{enabled:!1}},dateFormat:DATE_FORMAT_MAP[whitelistedType],open:newOpen,isClearable:!0,selected:newValue,disabled:disabled,required:required},(whitelistedType===TYPE_DATE_TIME||"date"===whitelistedType)&&react_default.a.createElement("div",{className:"react-datepicker__today-button",onClick:e=>handleChange(new Date,e,!0)},"Today")),newError&&react_default.a.createElement(ErrorMessage,{message:validationMessage}))};DateTimeInput.defaultProps={disabled:!1,error:!1,label:"",modifier:"",required:!1,type:TYPE_DATE_TIME,validationMessage:"This field is required"};__webpack_exports__.default=lib_default()(DateTimeInput)}}]);
//# sourceMappingURL=16.5e53dfc901efe29d4cf0.bundle.js.map