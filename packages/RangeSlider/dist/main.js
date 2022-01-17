/*! For license information please see main.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["@blaze-react"]=t(require("react")):e["@blaze-react"]=t(e.React)}(this,(function(e){return function(){var t={499:function(e,t){"use strict";function n(e){var t=void 0;return"undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys?t=Reflect.ownKeys(e.prototype):(t=Object.getOwnPropertyNames(e.prototype),"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e.prototype)))),t.forEach((function(t){if("constructor"!==t){var n=Object.getOwnPropertyDescriptor(e.prototype,t);"function"==typeof n.value&&Object.defineProperty(e.prototype,t,r(e,t,n))}})),e}function r(e,t,n){var r=n.value;if("function"!=typeof r)throw new Error("@autobind decorator can only be applied to methods not: "+typeof r);var o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(t))return r;var n=r.bind(this);return o=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),o=!1,n}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return 1===t.length?n.apply(void 0,t):r.apply(void 0,t)},e.exports=t.default},320:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,u,s=o(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(s[c]=i[c]);if(t){u=t(i);for(var p=0;p<u.length;p++)r.call(i,u[p])&&(s[u[p]]=i[u[p]])}}return s}},262:function(e,t,n){"use strict";var r=n(586);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},980:function(e,t,n){e.exports=n(262)()},586:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},917:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=(r=n(351))&&r.__esModule?r:{default:r};t.default=o.default,e.exports=t.default},111:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={activeTrack:"input-range__track input-range__track--active",disabledInputRange:"input-range input-range--disabled",inputRange:"input-range",labelContainer:"input-range__label-container",maxLabel:"input-range__label input-range__label--max",minLabel:"input-range__label input-range__label--min",slider:"input-range__slider",sliderContainer:"input-range__slider-container",track:"input-range__track input-range__track--background",valueLabel:"input-range__label input-range__label--value"},e.exports=t.default},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=v(n(787)),i=v(n(980)),u=v(n(499)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(301)),l=v(n(111)),c=v(n(821)),p=v(n(401)),d=v(n(606)),f=v(n(467)),h=v(n(653)),m=n(534),y=n(628);function v(e){return e&&e.__esModule?e:{default:e}}function b(e,t,n,r,o){var a={};return Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var g=(r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.startValue=null,n.node=null,n.trackNode=null,n.isSliderDragging=!1,n.lastKeyMoved=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"propTypes",get:function(){return{allowSameValues:i.default.bool,ariaLabelledby:i.default.string,ariaControls:i.default.string,classNames:i.default.objectOf(i.default.string),disabled:i.default.bool,draggableTrack:i.default.bool,formatLabel:i.default.func,maxValue:p.default,minValue:p.default,name:i.default.string,onChangeStart:i.default.func,onChange:i.default.func.isRequired,onChangeComplete:i.default.func,step:i.default.number,value:d.default}}},{key:"defaultProps",get:function(){return{allowSameValues:!1,classNames:l.default,disabled:!1,maxValue:10,minValue:0,step:1}}}]),o(t,[{key:"componentWillUnmount",value:function(){this.removeDocumentMouseUpListener(),this.removeDocumentTouchEndListener()}},{key:"getComponentClassName",value:function(){return this.props.disabled?this.props.classNames.disabledInputRange:this.props.classNames.inputRange}},{key:"getTrackClientRect",value:function(){return this.trackNode.getClientRect()}},{key:"getKeyByPosition",value:function(e){var t=s.getValueFromProps(this.props,this.isMultiValue()),n=s.getPositionsFromValues(t,this.props.minValue,this.props.maxValue,this.getTrackClientRect());return this.isMultiValue()&&(0,m.distanceTo)(e,n.min)<(0,m.distanceTo)(e,n.max)?"min":"max"}},{key:"getKeys",value:function(){return this.isMultiValue()?["min","max"]:["max"]}},{key:"hasStepDifference",value:function(e){var t=s.getValueFromProps(this.props,this.isMultiValue());return(0,m.length)(e.min,t.min)>=this.props.step||(0,m.length)(e.max,t.max)>=this.props.step}},{key:"isMultiValue",value:function(){return(0,m.isObject)(this.props.value)}},{key:"isWithinRange",value:function(e){return this.isMultiValue()?e.min>=this.props.minValue&&e.max<=this.props.maxValue&&this.props.allowSameValues?e.min<=e.max:e.min<e.max:e.max>=this.props.minValue&&e.max<=this.props.maxValue}},{key:"shouldUpdate",value:function(e){return this.isWithinRange(e)&&this.hasStepDifference(e)}},{key:"updatePosition",value:function(e,t){var n=s.getValueFromProps(this.props,this.isMultiValue()),r=s.getPositionsFromValues(n,this.props.minValue,this.props.maxValue,this.getTrackClientRect());r[e]=t,this.lastKeyMoved=e,this.updatePositions(r)}},{key:"updatePositions",value:function(e){var t={min:s.getValueFromPosition(e.min,this.props.minValue,this.props.maxValue,this.getTrackClientRect()),max:s.getValueFromPosition(e.max,this.props.minValue,this.props.maxValue,this.getTrackClientRect())},n={min:s.getStepValueFromValue(t.min,this.props.step),max:s.getStepValueFromValue(t.max,this.props.step)};this.updateValues(n)}},{key:"updateValue",value:function(e,t){var n=s.getValueFromProps(this.props,this.isMultiValue());n[e]=t,this.updateValues(n)}},{key:"updateValues",value:function(e){this.shouldUpdate(e)&&this.props.onChange(this.isMultiValue()?e:e.max)}},{key:"incrementValue",value:function(e){var t=s.getValueFromProps(this.props,this.isMultiValue())[e]+this.props.step;this.updateValue(e,t)}},{key:"decrementValue",value:function(e){var t=s.getValueFromProps(this.props,this.isMultiValue())[e]-this.props.step;this.updateValue(e,t)}},{key:"addDocumentMouseUpListener",value:function(){this.removeDocumentMouseUpListener(),this.node.ownerDocument.addEventListener("mouseup",this.handleMouseUp)}},{key:"addDocumentTouchEndListener",value:function(){this.removeDocumentTouchEndListener(),this.node.ownerDocument.addEventListener("touchend",this.handleTouchEnd)}},{key:"removeDocumentMouseUpListener",value:function(){this.node.ownerDocument.removeEventListener("mouseup",this.handleMouseUp)}},{key:"removeDocumentTouchEndListener",value:function(){this.node.ownerDocument.removeEventListener("touchend",this.handleTouchEnd)}},{key:"handleSliderDrag",value:function(e,t){var n=this;if(!this.props.disabled){var r=s.getPositionFromEvent(e,this.getTrackClientRect());this.isSliderDragging=!0,requestAnimationFrame((function(){return n.updatePosition(t,r)}))}}},{key:"handleTrackDrag",value:function(e,t){if(!this.props.disabled&&this.props.draggableTrack&&!this.isSliderDragging){var n=this.props,r=n.maxValue,o=n.minValue,a=n.value,i=a.max,u=a.min,l=s.getPositionFromEvent(e,this.getTrackClientRect()),c=s.getValueFromPosition(l,o,r,this.getTrackClientRect()),p=s.getStepValueFromValue(c,this.props.step),d=s.getPositionFromEvent(t,this.getTrackClientRect()),f=s.getValueFromPosition(d,o,r,this.getTrackClientRect()),h=s.getStepValueFromValue(f,this.props.step)-p,m={min:u-h,max:i-h};this.updateValues(m)}}},{key:"handleSliderKeyDown",value:function(e,t){if(!this.props.disabled)switch(e.keyCode){case y.LEFT_ARROW:case y.DOWN_ARROW:e.preventDefault(),this.decrementValue(t);break;case y.RIGHT_ARROW:case y.UP_ARROW:e.preventDefault(),this.incrementValue(t)}}},{key:"handleTrackMouseDown",value:function(e,t){if(!this.props.disabled){var n=this.props,r=n.maxValue,o=n.minValue,a=n.value,i=a.max,u=a.min;e.preventDefault();var l=s.getValueFromPosition(t,o,r,this.getTrackClientRect()),c=s.getStepValueFromValue(l,this.props.step);(!this.props.draggableTrack||c>i||c<u)&&this.updatePosition(this.getKeyByPosition(t),t)}}},{key:"handleInteractionStart",value:function(){this.props.onChangeStart&&this.props.onChangeStart(this.props.value),this.props.onChangeComplete&&!(0,m.isDefined)(this.startValue)&&(this.startValue=this.props.value)}},{key:"handleInteractionEnd",value:function(){this.isSliderDragging&&(this.isSliderDragging=!1),this.props.onChangeComplete&&(0,m.isDefined)(this.startValue)&&(this.startValue!==this.props.value&&this.props.onChangeComplete(this.props.value),this.startValue=null)}},{key:"handleKeyDown",value:function(e){this.handleInteractionStart(e)}},{key:"handleKeyUp",value:function(e){this.handleInteractionEnd(e)}},{key:"handleMouseDown",value:function(e){this.handleInteractionStart(e),this.addDocumentMouseUpListener()}},{key:"handleMouseUp",value:function(e){this.handleInteractionEnd(e),this.removeDocumentMouseUpListener()}},{key:"handleTouchStart",value:function(e){this.handleInteractionStart(e),this.addDocumentTouchEndListener()}},{key:"handleTouchEnd",value:function(e){this.handleInteractionEnd(e),this.removeDocumentTouchEndListener()}},{key:"renderSliders",value:function(){var e=this,t=s.getValueFromProps(this.props,this.isMultiValue()),n=s.getPercentagesFromValues(t,this.props.minValue,this.props.maxValue);return(this.props.allowSameValues&&"min"===this.lastKeyMoved?this.getKeys().reverse():this.getKeys()).map((function(r){var o=t[r],i=n[r],u=e.props,s=u.maxValue,l=u.minValue;return"min"===r?s=t.max:l=t.min,a.default.createElement(f.default,{ariaLabelledby:e.props.ariaLabelledby,ariaControls:e.props.ariaControls,classNames:e.props.classNames,formatLabel:e.props.formatLabel,key:r,maxValue:s,minValue:l,onSliderDrag:e.handleSliderDrag,onSliderKeyDown:e.handleSliderKeyDown,percentage:i,type:r,value:o})}))}},{key:"renderHiddenInputs",value:function(){var e=this;if(!this.props.name)return[];var t=this.isMultiValue(),n=s.getValueFromProps(this.props,t);return this.getKeys().map((function(r){var o=n[r],i=t?""+e.props.name+(0,m.captialize)(r):e.props.name;return a.default.createElement("input",{key:r,type:"hidden",name:i,value:o})}))}},{key:"render",value:function(){var e=this,t=this.getComponentClassName(),n=s.getValueFromProps(this.props,this.isMultiValue()),r=s.getPercentagesFromValues(n,this.props.minValue,this.props.maxValue);return a.default.createElement("div",{"aria-disabled":this.props.disabled,ref:function(t){e.node=t},className:t,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart},a.default.createElement(c.default,{classNames:this.props.classNames,formatLabel:this.props.formatLabel,type:"min"},this.props.minValue),a.default.createElement(h.default,{classNames:this.props.classNames,draggableTrack:this.props.draggableTrack,ref:function(t){e.trackNode=t},percentages:r,onTrackDrag:this.handleTrackDrag,onTrackMouseDown:this.handleTrackMouseDown},this.renderSliders()),a.default.createElement(c.default,{classNames:this.props.classNames,formatLabel:this.props.formatLabel,type:"max"},this.props.maxValue),this.renderHiddenInputs())}}]),t}(a.default.Component),b(r.prototype,"handleSliderDrag",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleSliderDrag"),r.prototype),b(r.prototype,"handleTrackDrag",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleTrackDrag"),r.prototype),b(r.prototype,"handleSliderKeyDown",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleSliderKeyDown"),r.prototype),b(r.prototype,"handleTrackMouseDown",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleTrackMouseDown"),r.prototype),b(r.prototype,"handleInteractionStart",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleInteractionStart"),r.prototype),b(r.prototype,"handleInteractionEnd",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleInteractionEnd"),r.prototype),b(r.prototype,"handleKeyDown",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleKeyDown"),r.prototype),b(r.prototype,"handleKeyUp",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleKeyUp"),r.prototype),b(r.prototype,"handleMouseDown",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleMouseDown"),r.prototype),b(r.prototype,"handleMouseUp",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleMouseUp"),r.prototype),b(r.prototype,"handleTouchStart",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleTouchStart"),r.prototype),b(r.prototype,"handleTouchEnd",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleTouchEnd"),r.prototype),r);t.default=g,e.exports=t.default},628:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DOWN_ARROW=40,t.LEFT_ARROW=37,t.RIGHT_ARROW=39,t.UP_ARROW=38},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(n(787)),o=a(n(980));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.formatLabel?e.formatLabel(e.children,e.type):e.children;return r.default.createElement("span",{className:e.classNames[e.type+"Label"]},r.default.createElement("span",{className:e.classNames.labelContainer},t))}i.propTypes={children:o.default.node.isRequired,classNames:o.default.objectOf(o.default.string).isRequired,formatLabel:o.default.func,type:o.default.string.isRequired},e.exports=t.default},401:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.maxValue,n=e.minValue;return(0,r.isNumber)(n)&&(0,r.isNumber)(t)?n>=t?new Error('"minValue" must be smaller than "maxValue"'):void 0:new Error('"minValue" and "maxValue" must be a number')};var r=n(534);e.exports=t.default},467:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(787)),i=l(n(980)),u=l(n(499)),s=l(n(821));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,r,o){var a={};return Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var p=(r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.node=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"propTypes",get:function(){return{ariaLabelledby:i.default.string,ariaControls:i.default.string,classNames:i.default.objectOf(i.default.string).isRequired,formatLabel:i.default.func,maxValue:i.default.number,minValue:i.default.number,onSliderDrag:i.default.func.isRequired,onSliderKeyDown:i.default.func.isRequired,percentage:i.default.number.isRequired,type:i.default.string.isRequired,value:i.default.number.isRequired}}}]),o(t,[{key:"componentWillUnmount",value:function(){this.removeDocumentMouseMoveListener(),this.removeDocumentMouseUpListener(),this.removeDocumentTouchEndListener(),this.removeDocumentTouchMoveListener()}},{key:"getStyle",value:function(){return{position:"absolute",left:100*(this.props.percentage||0)+"%"}}},{key:"addDocumentMouseMoveListener",value:function(){this.removeDocumentMouseMoveListener(),this.node.ownerDocument.addEventListener("mousemove",this.handleMouseMove)}},{key:"addDocumentMouseUpListener",value:function(){this.removeDocumentMouseUpListener(),this.node.ownerDocument.addEventListener("mouseup",this.handleMouseUp)}},{key:"addDocumentTouchMoveListener",value:function(){this.removeDocumentTouchMoveListener(),this.node.ownerDocument.addEventListener("touchmove",this.handleTouchMove)}},{key:"addDocumentTouchEndListener",value:function(){this.removeDocumentTouchEndListener(),this.node.ownerDocument.addEventListener("touchend",this.handleTouchEnd)}},{key:"removeDocumentMouseMoveListener",value:function(){this.node.ownerDocument.removeEventListener("mousemove",this.handleMouseMove)}},{key:"removeDocumentMouseUpListener",value:function(){this.node.ownerDocument.removeEventListener("mouseup",this.handleMouseUp)}},{key:"removeDocumentTouchMoveListener",value:function(){this.node.ownerDocument.removeEventListener("touchmove",this.handleTouchMove)}},{key:"removeDocumentTouchEndListener",value:function(){this.node.ownerDocument.removeEventListener("touchend",this.handleTouchEnd)}},{key:"handleMouseDown",value:function(){this.addDocumentMouseMoveListener(),this.addDocumentMouseUpListener()}},{key:"handleMouseUp",value:function(){this.removeDocumentMouseMoveListener(),this.removeDocumentMouseUpListener()}},{key:"handleMouseMove",value:function(e){this.props.onSliderDrag(e,this.props.type)}},{key:"handleTouchStart",value:function(){this.addDocumentTouchEndListener(),this.addDocumentTouchMoveListener()}},{key:"handleTouchMove",value:function(e){this.props.onSliderDrag(e,this.props.type)}},{key:"handleTouchEnd",value:function(){this.removeDocumentTouchMoveListener(),this.removeDocumentTouchEndListener()}},{key:"handleKeyDown",value:function(e){this.props.onSliderKeyDown(e,this.props.type)}},{key:"render",value:function(){var e=this,t=this.getStyle();return a.default.createElement("span",{className:this.props.classNames.sliderContainer,ref:function(t){e.node=t},style:t},a.default.createElement(s.default,{classNames:this.props.classNames,formatLabel:this.props.formatLabel,type:"value"},this.props.value),a.default.createElement("div",{"aria-labelledby":this.props.ariaLabelledby,"aria-controls":this.props.ariaControls,"aria-valuemax":this.props.maxValue,"aria-valuemin":this.props.minValue,"aria-valuenow":this.props.value,className:this.props.classNames.slider,draggable:"false",onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,role:"slider",tabIndex:"0"}))}}]),t}(a.default.Component),c(r.prototype,"handleMouseDown",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleMouseDown"),r.prototype),c(r.prototype,"handleMouseUp",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleMouseUp"),r.prototype),c(r.prototype,"handleMouseMove",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleMouseMove"),r.prototype),c(r.prototype,"handleTouchStart",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleTouchStart"),r.prototype),c(r.prototype,"handleTouchMove",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleTouchMove"),r.prototype),c(r.prototype,"handleTouchEnd",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleTouchEnd"),r.prototype),c(r.prototype,"handleKeyDown",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleKeyDown"),r.prototype),r);t.default=p,e.exports=t.default},653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(787)),i=s(n(980)),u=s(n(499));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,r,o){var a={};return Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var c=(r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.node=null,n.trackDragEvent=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"propTypes",get:function(){return{children:i.default.node.isRequired,classNames:i.default.objectOf(i.default.string).isRequired,draggableTrack:i.default.bool,onTrackDrag:i.default.func,onTrackMouseDown:i.default.func.isRequired,percentages:i.default.objectOf(i.default.number).isRequired}}}]),o(t,[{key:"getClientRect",value:function(){return this.node.getBoundingClientRect()}},{key:"getActiveTrackStyle",value:function(){var e=100*(this.props.percentages.max-this.props.percentages.min)+"%";return{left:100*this.props.percentages.min+"%",width:e}}},{key:"addDocumentMouseMoveListener",value:function(){this.removeDocumentMouseMoveListener(),this.node.ownerDocument.addEventListener("mousemove",this.handleMouseMove)}},{key:"addDocumentMouseUpListener",value:function(){this.removeDocumentMouseUpListener(),this.node.ownerDocument.addEventListener("mouseup",this.handleMouseUp)}},{key:"removeDocumentMouseMoveListener",value:function(){this.node.ownerDocument.removeEventListener("mousemove",this.handleMouseMove)}},{key:"removeDocumentMouseUpListener",value:function(){this.node.ownerDocument.removeEventListener("mouseup",this.handleMouseUp)}},{key:"handleMouseMove",value:function(e){this.props.draggableTrack&&(null!==this.trackDragEvent&&this.props.onTrackDrag(e,this.trackDragEvent),this.trackDragEvent=e)}},{key:"handleMouseUp",value:function(){this.props.draggableTrack&&(this.removeDocumentMouseMoveListener(),this.removeDocumentMouseUpListener(),this.trackDragEvent=null)}},{key:"handleMouseDown",value:function(e){var t={x:(e.touches?e.touches[0].clientX:e.clientX)-this.getClientRect().left,y:0};this.props.onTrackMouseDown(e,t),this.props.draggableTrack&&(this.addDocumentMouseMoveListener(),this.addDocumentMouseUpListener())}},{key:"handleTouchStart",value:function(e){e.preventDefault(),this.handleMouseDown(e)}},{key:"render",value:function(){var e=this,t=this.getActiveTrackStyle();return a.default.createElement("div",{className:this.props.classNames.track,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,ref:function(t){e.node=t}},a.default.createElement("div",{style:t,className:this.props.classNames.activeTrack}),this.props.children)}}]),t}(a.default.Component),l(r.prototype,"handleMouseMove",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleMouseMove"),r.prototype),l(r.prototype,"handleMouseUp",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleMouseUp"),r.prototype),l(r.prototype,"handleMouseDown",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleMouseDown"),r.prototype),l(r.prototype,"handleTouchStart",[u.default],Object.getOwnPropertyDescriptor(r.prototype,"handleTouchStart"),r.prototype),r);t.default=c,e.exports=t.default},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.maxValue,o=e.minValue,a=e[t];return(0,r.isNumber)(a)||(0,r.isObject)(a)&&(0,r.isNumber)(a.min)&&(0,r.isNumber)(a.max)?(0,r.isNumber)(a)&&(a<o||a>n)||(0,r.isObject)(a)&&(a.min<o||a.min>n||a.max<o||a.max>n)?new Error('"'+t+'" must be in between "minValue" and "maxValue"'):void 0:new Error('"'+t+'" must be a number or a range object')};var r=n(534);e.exports=t.default},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.getPercentageFromPosition=a,t.getValueFromPosition=function(e,t,n,r){return t+(n-t)*a(e,r)},t.getValueFromProps=function(e,t){return t?r({},e.value):{min:e.minValue,max:e.value}},t.getPercentageFromValue=i,t.getPercentagesFromValues=function(e,t,n){return{min:i(e.min,t,n),max:i(e.max,t,n)}},t.getPositionFromValue=u,t.getPositionsFromValues=function(e,t,n,r){return{min:u(e.min,t,n,r),max:u(e.max,t,n,r)}},t.getPositionFromEvent=function(e,t){var n=t.width,r=(e.touches?e.touches[0]:e).clientX;return{x:(0,o.clamp)(r-t.left,0,n),y:0}},t.getStepValueFromValue=function(e,t){return Math.round(e/t)*t};var o=n(534);function a(e,t){var n=t.width;return e.x/n||0}function i(e,t,n){return((0,o.clamp)(e,t,n)-t)/(n-t)||0}function u(e,t,n,r){var o=r.width;return{x:i(e,t,n)*o,y:0}}},514:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e.exports=t.default},107:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return Math.min(Math.max(e,t),n)},e.exports=t.default},902:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=Math.pow(t.x-e.x,2),r=Math.pow(t.y-e.y,2);return Math.sqrt(n+r)},e.exports=t.default},534:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(514);Object.defineProperty(t,"captialize",{enumerable:!0,get:function(){return c(r).default}});var o=n(107);Object.defineProperty(t,"clamp",{enumerable:!0,get:function(){return c(o).default}});var a=n(902);Object.defineProperty(t,"distanceTo",{enumerable:!0,get:function(){return c(a).default}});var i=n(869);Object.defineProperty(t,"isDefined",{enumerable:!0,get:function(){return c(i).default}});var u=n(146);Object.defineProperty(t,"isNumber",{enumerable:!0,get:function(){return c(u).default}});var s=n(798);Object.defineProperty(t,"isObject",{enumerable:!0,get:function(){return c(s).default}});var l=n(153);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"length",{enumerable:!0,get:function(){return c(l).default}})},869:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return null!=e},e.exports=t.default},146:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"number"==typeof e},e.exports=t.default},798:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return null!==e&&"object"===(void 0===e?"undefined":n(e))},e.exports=t.default},153:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Math.abs(e-t)},e.exports=t.default},837:function(e,t,n){"use strict";n(320);var r=n(787),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,n){var r,a={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:i.current}}},322:function(e,t,n){"use strict";e.exports=n(837)},787:function(t){"use strict";t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}r.r(o),r.d(o,{default:function(){return s}});var t=r(787),n=r(917),a=r.n(n),i=r(322),u=function(n){var r,o,u=n.allowSameValues,s=n.disabled,l=n.draggableTrack,c=n.maxValue,p=n.minValue,d=n.name,f=n.onChange,h=n.step,m=n.value,y=(r=(0,t.useState)(m||0),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=y[0],b=y[1];return(0,i.jsx)(a(),{allowSameValues:u,disabled:s,draggableTrack:l,maxValue:c,minValue:p,name:d,onChange:function(e){b(e),f&&f(e)},step:h,value:v})};u.defaultProps={allowSameValues:!1,disabled:!1,draggableTrack:!1,maxValue:10,minValue:0,name:"",onChange:function(){},step:1};var s=u}(),o}()}));