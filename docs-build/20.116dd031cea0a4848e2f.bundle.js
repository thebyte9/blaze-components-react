(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2530:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lib=__webpack_require__(5),lib_default=__webpack_require__.n(lib),react=__webpack_require__(0),react_default=__webpack_require__.n(react);var src_isContentLoaded=function isContentLoaded(init,reInit){document.addEventListener("DOMContentLoaded",init),"interactive"!==document.readyState&&"complete"!==document.readyState||init(),reInit(5e3)};const SEPARATION_BETWEEN_HANDLERS=26;function getAttributes(parent,attributes){return attributes.map(attribute=>parseFloat(parent.getAttribute(attribute)))}function $(selector){return document.querySelector(`.${selector}`)}var logic=(selector,getMinMax)=>{let startX=0,xAxis=0;if(!$(selector))return;const{touchLeft:touchLeft,touchRight:touchRight,lineSpan:lineSpan}=function getElements(parent){return{touchLeft:parent.querySelector(".range__filter--left"),touchRight:parent.querySelector(".range__filter--right"),lineSpan:parent.querySelector(".range__filter--line span")}}($(selector)),attributes=getAttributes($(selector),["min","max","min-value","max-value","step"]),[min,max,...defaultAttributes]=attributes;let[defaultMinValue=min,defaultMaxValue=max,step=0]=defaultAttributes;step=Math.abs(step),defaultMinValue<min&&(defaultMinValue=min),defaultMaxValue>max&&(defaultMaxValue=max),defaultMinValue>defaultMaxValue&&(defaultMinValue=defaultMaxValue);const setValue=({typeValue:typeValue,attribute:attribute,isRight:isRight})=>{const ratio=(typeValue-min)/(max-min);(isRight?touchRight:touchLeft).style.left=function getLeftStyle({ratio:ratio,parent:parent,handler:handler,isRight:isRight}){const factor=isRight?SEPARATION_BETWEEN_HANDLERS:0;return`${Math.ceil(ratio*(parent.offsetWidth-(handler.offsetWidth+SEPARATION_BETWEEN_HANDLERS))+factor)}px`}({handler:touchLeft,isRight:isRight,parent:$(selector),ratio:ratio}),lineSpan.style.marginLeft=`${touchLeft.offsetLeft}px`,lineSpan.style.width=`${touchRight.offsetLeft-touchLeft.offsetLeft}px`,$(selector).setAttribute(attribute,typeValue)};xAxis=0,startX=0,touchLeft.style.left="0px",lineSpan.style.marginLeft="0px",lineSpan.style.width=`${$(selector).offsetWidth-touchLeft.offsetWidth}px`,touchRight.style.left=`${$(selector).offsetWidth-touchLeft.offsetWidth}px`;const maxX=$(selector).offsetWidth-touchRight.offsetWidth;let selectedTouch=null;const initialValue=lineSpan.offsetWidth-SEPARATION_BETWEEN_HANDLERS;function onStart(event){event.preventDefault();const eventTouch=event.touches?event.touches[0]:event;xAxis=this===touchLeft?touchLeft.offsetLeft:touchRight.offsetLeft,startX=eventTouch.pageX-xAxis,selectedTouch=this,$(selector).addEventListener("mousemove",onMove),$(selector).addEventListener("mouseup",onStop),$(selector).addEventListener("touchmove",onMove),$(selector).addEventListener("touchend",onStop),document.addEventListener("click",onStop)}(minValue=>{setValue({attribute:"min-value",typeValue:minValue})})(defaultMinValue),(maxValue=>{setValue({attribute:"max-value",isRight:!0,typeValue:maxValue})})(defaultMaxValue);const calculateValue=()=>{const newValue=(lineSpan.offsetWidth-SEPARATION_BETWEEN_HANDLERS)/initialValue;let minValue=lineSpan.offsetLeft/initialValue,maxValue=minValue+newValue;if(minValue=minValue*(max-min)+min,maxValue=maxValue*(max-min)+min,step){let multi=Math.floor(minValue/step);minValue=step*multi,multi=Math.floor(maxValue/step),maxValue=step*multi}$(selector).setAttribute("min-value",minValue),$(selector).setAttribute("max-value",maxValue)},onMove=event=>{const eventTouch=event.touches?event.touches[0]:event;xAxis=eventTouch.pageX-startX,selectedTouch===touchLeft&&(xAxis>touchRight.offsetLeft-selectedTouch.offsetWidth+10&&(xAxis=touchRight.offsetLeft-selectedTouch.offsetWidth+10),xAxis<0&&(xAxis=0)),selectedTouch===touchRight&&(xAxis<touchLeft.offsetLeft+touchLeft.offsetWidth-10&&(xAxis=touchLeft.offsetLeft+touchLeft.offsetWidth-10),xAxis>maxX&&(xAxis=maxX)),selectedTouch.style.left=`${xAxis}px`,lineSpan.style.marginLeft=`${touchLeft.offsetLeft}px`,lineSpan.style.width=`${touchRight.offsetLeft-touchLeft.offsetLeft}px`,calculateValue();const[minValue,maxValue]=getAttributes($(selector),["min-value","max-value"]);getMinMax(minValue,maxValue)},onStop=()=>{document.removeEventListener("click",onStop),$(selector).removeEventListener("mousemove",onMove),$(selector).removeEventListener("mouseup",onStop),$(selector).removeEventListener("touchmove",onMove),$(selector).removeEventListener("touchend",onStop),selectedTouch=null,calculateValue();const[minValue,maxValue]=getAttributes($(selector),["min-value","max-value"]);getMinMax(minValue,maxValue)};touchLeft.addEventListener("mousedown",onStart),touchRight.addEventListener("mousedown",onStart),touchLeft.addEventListener("touchstart",onStart),touchRight.addEventListener("touchstart",onStart)};const src_RangeFilter=({label:label,modifier:modifier,onChange:onChange,required:required,error:error,validationMessage:validationMessage,value:value,name:name,id:id,utils:{classNames:classNames,ErrorMessage:ErrorMessage},...attrs})=>{const[inputs,setInputs]=Object(react.useState)(value||{}),[newError,setError]=Object(react.useState)(error);Object(react.useEffect)(()=>{setError(error)},[error]),Object(react.useEffect)(()=>{src_isContentLoaded(init,reInit)},[]),Object(react.useEffect)(()=>{value&&value.max!==inputs.max&&value.min!==inputs.min&&(setInputs(value),reInit())},[value]);const getMinMax=(minvalue,maxvalue)=>{const newValue={...inputs,minValue:minvalue,maxValue:maxvalue};onChange({value:newValue}),setInputs(newValue)},init=()=>{logic(id,getMinMax)},reInit=(time=1e3)=>{setTimeout(init,time)},modifierClassName=classNames({[`form-field--${modifier}`]:!!modifier}),requiredClassName=classNames({required:required}),{min:min=0,max:max=0,step:step=1,minValue:minValue=0,maxValue:maxValue=0}=inputs;return react_default.a.createElement("div",{className:`form-field form-field--range ${modifierClassName}`},label&&react_default.a.createElement("label",{htmlFor:attrs.id,className:requiredClassName},label),react_default.a.createElement("div",{className:"values"},react_default.a.createElement("span",null,minValue),react_default.a.createElement("span",null,maxValue)),react_default.a.createElement("div",{min:min,max:max,step:step,"min-value":minValue,"max-value":maxValue,id:`${name}Range`,className:`range__filter ${id}`},react_default.a.createElement("div",{className:"range__filter--left"},react_default.a.createElement("span",null)),react_default.a.createElement("div",{className:"range__filter--right"},react_default.a.createElement("span",null)),react_default.a.createElement("div",{className:"range__filter--line"},react_default.a.createElement("span",null))),newError&&react_default.a.createElement(ErrorMessage,{message:validationMessage}))};src_RangeFilter.defaultProps={error:!1,label:"",modifier:"",name:"",validationMessage:"This field is required"};__webpack_exports__.default=lib_default()(src_RangeFilter)}}]);
//# sourceMappingURL=20.116dd031cea0a4848e2f.bundle.js.map