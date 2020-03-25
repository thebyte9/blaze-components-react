(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{2210:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),classnames=__webpack_require__(62),classnames_default=__webpack_require__.n(classnames),immutability_helper=__webpack_require__(2233),immutability_helper_default=__webpack_require__.n(immutability_helper),react_addons_shallow_compare=__webpack_require__(2235),react_addons_shallow_compare_default=__webpack_require__.n(react_addons_shallow_compare);var src_DragLayer=({dragItem:dragItem,children:children,dragLayerRef:dragLayerRef})=>{const el=document.getElementById(dragItem.id);return react_default.a.createElement("div",{className:"nestable-drag-layer"},react_default.a.createElement("ol",{className:"nestable-list",ref:dragLayerRef,style:{width:el.clientWidth}},children))};var src_DragHandler=({onDragStart:onDragStart})=>react_default.a.createElement("div",{className:"list__drag",onDragStart:onDragStart,draggable:!0},react_default.a.createElement("i",{className:"material-icons"},"drag_indicator"));const NestableItem=({item:item,isCopy:isCopy,index:index,onMouseEnter:onMouseEnter,onDragStart:onDragStart,dragItem:dragItem,renderItem:RenderItem,childrenProp:childrenProp})=>{const isDragging=!isCopy&&dragItem&&dragItem.id===item.id,hasChildrenProperty=item[childrenProp],hasChildren=item[childrenProp]&&item[childrenProp].length,listItemClassName=classnames_default()(`nestable-item${isCopy?"-copy":""}`,{"is-dragging":isDragging,"nestable-item-parent":hasChildrenProperty});return react_default.a.createElement("li",{className:listItemClassName,id:item.id},react_default.a.createElement("div",{className:"nestable-item-name",onMouseEnter:e=>onMouseEnter(e,item)},react_default.a.createElement(RenderItem,{item:item,index:index,DragHandler:()=>react_default.a.createElement(src_DragHandler,{onDragStart:e=>onDragStart(e,item)})},hasChildrenProperty&&hasChildren?react_default.a.createElement("ol",{className:"nestable-list"},item[childrenProp].map((element,i)=>react_default.a.createElement(NestableItem,{key:element.id,index:i,item:element,isCopy:isCopy,dragItem:dragItem,renderItem:RenderItem,childrenProp:childrenProp,onMouseEnter:onMouseEnter,onDragStart:onDragStart}))):null)))};NestableItem.defaultProps={dragItem:null,isCopy:!1};var src_NestableItem=NestableItem;const closest=(target,selector)=>{for(;target;){if(target.matches&&target.matches(selector))return target;target=target.parentNode}return null};function getItemByPath({path:path,items:items,childrenProp:childrenProp}){let item=null;return path.forEach(index=>{const list=item?item[childrenProp]:items;item=list[index]}),item}const getPathById=({id:id,items:items,childrenProp:childrenProp})=>{let path=[];return items.forEach((item,index)=>{if(item.id===id)path.push(index);else if(item[childrenProp]){const childrenPath=getPathById({childrenProp:childrenProp,id:id,items:item[childrenProp]});childrenPath.length&&(path=path.concat(index).concat(childrenPath))}}),path},getRealNextPath=({prevPath:prevPath,nextPath:nextPath,items:items,childrenProp:childrenProp})=>{const prevPathLastIndex=prevPath.length-1,nextPathLastIndex=nextPath.length-1;if(prevPath.length<nextPath.length){let wasShifted=!1;return nextPath.map((nextElement,index)=>wasShifted?index===nextPathLastIndex?nextElement+1:nextElement:"number"!=typeof prevPath[index]?nextElement:nextPath[index]>prevPath[index]&&index===prevPathLastIndex?(wasShifted=!0,nextElement-1):nextElement)}if(prevPath.length===nextPath.length&&nextPath[nextPathLastIndex]>prevPath[nextPathLastIndex]){const target=getItemByPath({childrenProp:childrenProp,items:items,path:nextPath});if(target[childrenProp]&&target[childrenProp].length)return nextPath.slice(0,-1).concat(nextPath[nextPathLastIndex]-1).concat(0)}return nextPath},getSplicePath=(path,options={})=>{const splicePath={},numToRemove=options.numToRemove||0,itemsToInsert=options.itemsToInsert||[],lastIndex=path.length-1;let currentPath=splicePath;return path.forEach((element,index)=>{if(index===lastIndex)currentPath.$splice=[[element,numToRemove,...itemsToInsert]];else{const nextPath={};currentPath[element]={[options.childrenProp]:nextPath},currentPath=nextPath}}),splicePath},getTransformProps=(x,y)=>({transform:`translate(${x}px, ${y}px)`});var uuid=__webpack_require__(2237),uuid_default=__webpack_require__.n(uuid);const listWithChildren=(list,childrenProp)=>list.map(item=>({...item,id:item.id||uuid_default()(),[childrenProp]:item[childrenProp]?listWithChildren(item[childrenProp],childrenProp):null})),tryDecreaseDepth=({dragItem:dragItem,items:items,childrenProp:childrenProp})=>{const pathFrom=getPathById({childrenProp:childrenProp,id:dragItem.id,items:items}),itemIndex=pathFrom[pathFrom.length-1];if(pathFrom.length>1){if(itemIndex+1===getItemByPath({childrenProp:childrenProp,items:items,path:pathFrom.slice(0,-1)})[childrenProp].length){const pathTo=pathFrom.slice(0,-1);return pathTo[pathTo.length-1]+=1,{dragItem:dragItem,pathFrom:pathFrom,pathTo:pathTo}}}},tryIncreaseDepth=({dragItem:dragItem,items:items,childrenProp:childrenProp})=>{if(!dragItem)return;const pathFrom=getPathById({childrenProp:childrenProp,id:dragItem.id,items:items}),itemIndex=pathFrom[pathFrom.length-1];if(itemIndex>0){const prevSibling=getItemByPath({childrenProp:childrenProp,items:items,path:pathFrom.slice(0,-1).concat(itemIndex-1)});if(prevSibling[childrenProp]&&!prevSibling[childrenProp].length){const pathTo=pathFrom.slice(0,-1).concat(itemIndex-1).concat(prevSibling[childrenProp].length);return{dragItem:dragItem,pathFrom:pathFrom,pathTo:pathTo}}}};class src_Nestable extends react.Component{constructor(props){super(props),this.startTrackMouse=()=>{document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd)},this.stopTrackMouse=()=>{document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd)},this.onMouseEnter=(e,item)=>{e.preventDefault(),e.stopPropagation();const{dragItem:dragItem,items:items}=this.state,{childrenProp:childrenProp}=this.props;if(!dragItem||dragItem.id===item.id)return;const pathFrom=getPathById({childrenProp:childrenProp,id:dragItem.id,items:items}),pathTo=getPathById({childrenProp:childrenProp,id:item.id,items:items});this.moveItem({dragItem:dragItem,pathFrom:pathFrom,pathTo:pathTo})},this.onMouseMove=e=>{const{childrenProp:childrenProp}=this.props,{dragItem:dragItem,items:items}=this.state,{clientX:clientX,clientY:clientY}=e,transformProps=getTransformProps(clientX-30,clientY-50),dragLayer=this.dragLayerRef.current;Object.keys(transformProps).forEach(key=>{Object.prototype.hasOwnProperty.call(transformProps,key)&&dragLayer&&dragLayer.style&&(dragLayer.style[key]=transformProps[key])});const diffX=clientX-this.mouse.last.x;if(diffX>=0&&this.mouse.shift.x>=0||diffX<=0&&this.mouse.shift.x<=0?this.mouse.shift.x+=diffX:this.mouse.shift.x=0,this.mouse.last.x=clientX,dragItem&&Math.abs(this.mouse.shift.x)){const movementData={childrenProp:childrenProp,dragItem:dragItem,items:items},availableDrop=this.mouse.shift.x>0?tryIncreaseDepth(movementData):tryDecreaseDepth(movementData);availableDrop&&this.moveItem(availableDrop),this.mouse.shift.x=0}},this.onDragEnd=e=>{e&&e.preventDefault(),this.stopTrackMouse(),this.el=null,this.dragApply()},this.onDragStart=(e,item)=>{e.preventDefault(),e.stopPropagation(),this.el=closest(e.target,".nestable-item-parent"),this.startTrackMouse(),this.onMouseMove(e),this.setState({dragItem:item})},this.state={dragItem:null,isDirty:!1,items:[]},this.dragLayerRef=Object(react.createRef)(),this.el=null,this.mouse={last:{x:0},shift:{x:0}}}componentDidMount(){let{items:items}=this.props;const{childrenProp:childrenProp}=this.props;items=listWithChildren(items,childrenProp),this.setState({items:items})}componentDidUpdate(prevProps){const{items:newItems,childrenProp:childrenProp}=this.props;react_addons_shallow_compare_default()({props:this.props,state:{}},prevProps,{})&&(this.stopTrackMouse(),this.updateProps(newItems,childrenProp))}componentWillUnmount(){this.stopTrackMouse()}updateProps(newItems,childrenProp){this.setState({dragItem:null,isDirty:!1,items:listWithChildren(newItems,childrenProp)})}moveItem({dragItem:dragItem,pathFrom:pathFrom,pathTo:pathTo}){const{childrenProp:childrenProp,confirmChange:confirmChange}=this.props;let{items:items}=this.state;const realPathTo=getRealNextPath({childrenProp:childrenProp,items:items,nextPath:pathTo,prevPath:pathFrom});if(!confirmChange(dragItem,getItemByPath({childrenProp:childrenProp,items:items,path:realPathTo.length>pathTo.length?pathTo:pathTo.slice(0,-1)})))return;const removePath=getSplicePath(pathFrom,{childrenProp:childrenProp,numToRemove:1}),insertPath=getSplicePath(realPathTo,{childrenProp:childrenProp,itemsToInsert:[dragItem],numToRemove:0});items=immutability_helper_default()(items,removePath),items=immutability_helper_default()(items,insertPath),this.setState({isDirty:!0,items:items})}dragApply(){const{onChange:onChange}=this.props,{items:items,isDirty:isDirty,dragItem:dragItem}=this.state;this.setState({dragItem:null,isDirty:!1}),onChange&&isDirty&&onChange(items,dragItem)}render(){const{items:items,dragItem:dragItem}=this.state,{renderItem:renderItem,childrenProp:childrenProp}=this.props,wrapperClassName=classnames_default()("nestable",{"is-dragging":dragItem});return react_default.a.createElement("div",{className:wrapperClassName},react_default.a.createElement("ol",{className:"nestable-list nestable-group"},items.map((item,index)=>react_default.a.createElement(src_NestableItem,{dragItem:dragItem,renderItem:renderItem,childrenProp:childrenProp,onMouseEnter:this.onMouseEnter,onDragStart:this.onDragStart,key:item.id,index:index,item:item}))),dragItem&&react_default.a.createElement(src_DragLayer,{dragLayerRef:this.dragLayerRef,dragItem:dragItem},react_default.a.createElement(src_NestableItem,{dragItem:dragItem,renderItem:renderItem,childrenProp:childrenProp,onMouseEnter:this.onMouseEnter,onDragStart:this.onDragStart,item:dragItem,isCopy:!0})))}}src_Nestable.defaultProps={childrenProp:"children",confirmChange:()=>!0,items:[],onChange:()=>{},renderItem:({item:item})=>item.toString()};var src=src_Nestable;const fakeData=[{type:"row",settings:{name:"row-1",modifier:null,width:"full-width",backgroundImage:null,desktop:!0,tablet:!0,mobile:!0,gtmClassName:null},items:[{type:"video",settings:{name:"video 1",modifier:null,elementTitle:"video",url:"https://youtu.be/ZY3J3Y_OU0w",autoplay:!1,gtmClassName:null},id:"video 1",name:"video-1",items:null},{type:"card",settings:{name:"card-1",modifier:"",elementTitle:"Card",entity:"page",limit:1,itemsPerRow:1,sortby:"name",sort:"ASC",filterByProperty:"",filterByFeatured:!1,style:"portrait",propsToDisplay:[],hasBanner:!1,gtmClassName:""},id:"244446a0-20c2-11ea-8323-dffe12b3279d",name:"card-1",items:null}],name:"row 1"}];__webpack_exports__.default=()=>{return react_default.a.createElement("div",{className:"component-wrapper"},react_default.a.createElement("h1",null,"Dnd"),react_default.a.createElement(src,{items:fakeData,childrenProp:"items",onChange:params=>{console.log("new order",params)},renderItem:({item:item,DragHandler:DragHandler,children:children})=>react_default.a.createElement("div",{style:{padding:"20px",border:"1px solid #F0F0F0",backgroundColor:"#FFFFFF",display:"flex"}},react_default.a.createElement(DragHandler,null),react_default.a.createElement("p",null,item.name),children)}))}},2233:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var invariant=__webpack_require__(2234),hasOwnProperty=Object.prototype.hasOwnProperty,splice=Array.prototype.splice,toString=Object.prototype.toString;function type(obj){return toString.call(obj).slice(8,-1)}var assign=Object.assign||function(target,source){return getAllKeys(source).forEach(function(key){hasOwnProperty.call(source,key)&&(target[key]=source[key])}),target},getAllKeys="function"==typeof Object.getOwnPropertySymbols?function(obj){return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj))}:function(obj){return Object.keys(obj)};function copy(object){return Array.isArray(object)?assign(object.constructor(object.length),object):"Map"===type(object)?new Map(object):"Set"===type(object)?new Set(object):object&&"object"==typeof object?assign(Object.create(Object.getPrototypeOf(object)),object):object}var Context=function(){function Context(){this.commands=assign({},defaultCommands),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(x,y){return x===y},this.update.newContext=function(){return(new Context).update}}return Object.defineProperty(Context.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(value){this.update.isEquals=value},enumerable:!0,configurable:!0}),Context.prototype.extend=function(directive,fn){this.commands[directive]=fn},Context.prototype.update=function(object,$spec){var _this=this,spec="function"==typeof $spec?{$apply:$spec}:$spec;Array.isArray(object)&&Array.isArray(spec)||invariant(!Array.isArray(spec),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),invariant("object"==typeof spec&&null!==spec,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(this.commands).join(", "));var nextObject=object;return getAllKeys(spec).forEach(function(key){if(hasOwnProperty.call(_this.commands,key)){var objectWasNextObject=object===nextObject;nextObject=_this.commands[key](spec[key],nextObject,spec,object),objectWasNextObject&&_this.isEquals(nextObject,object)&&(nextObject=object)}else{var nextValueForKey="Map"===type(object)?_this.update(object.get(key),spec[key]):_this.update(object[key],spec[key]),nextObjectValue="Map"===type(nextObject)?nextObject.get(key):nextObject[key];_this.isEquals(nextValueForKey,nextObjectValue)&&(void 0!==nextValueForKey||hasOwnProperty.call(object,key))||(nextObject===object&&(nextObject=copy(object)),"Map"===type(nextObject)?nextObject.set(key,nextValueForKey):nextObject[key]=nextValueForKey)}}),nextObject},Context}();exports.Context=Context;var defaultCommands={$push:function(value,nextObject,spec){return invariantPushAndUnshift(nextObject,spec,"$push"),value.length?nextObject.concat(value):nextObject},$unshift:function(value,nextObject,spec){return invariantPushAndUnshift(nextObject,spec,"$unshift"),value.length?value.concat(nextObject):nextObject},$splice:function(value,nextObject,spec,originalObject){return function invariantSplices(value,spec){invariant(Array.isArray(value),"Expected $splice target to be an array; got %s",value),invariantSplice(spec.$splice)}(nextObject,spec),value.forEach(function(args){invariantSplice(args),nextObject===originalObject&&args.length&&(nextObject=copy(originalObject)),splice.apply(nextObject,args)}),nextObject},$set:function(value,_nextObject,spec){return function invariantSet(spec){invariant(1===Object.keys(spec).length,"Cannot have more than one key in an object with $set")}(spec),value},$toggle:function(targets,nextObject){invariantSpecArray(targets,"$toggle");var nextObjectCopy=targets.length?copy(nextObject):nextObject;return targets.forEach(function(target){nextObjectCopy[target]=!nextObject[target]}),nextObjectCopy},$unset:function(value,nextObject,_spec,originalObject){return invariantSpecArray(value,"$unset"),value.forEach(function(key){Object.hasOwnProperty.call(nextObject,key)&&(nextObject===originalObject&&(nextObject=copy(originalObject)),delete nextObject[key])}),nextObject},$add:function(values,nextObject,_spec,originalObject){return invariantMapOrSet(nextObject,"$add"),invariantSpecArray(values,"$add"),"Map"===type(nextObject)?values.forEach(function(_a){var key=_a[0],value=_a[1];nextObject===originalObject&&nextObject.get(key)!==value&&(nextObject=copy(originalObject)),nextObject.set(key,value)}):values.forEach(function(value){nextObject!==originalObject||nextObject.has(value)||(nextObject=copy(originalObject)),nextObject.add(value)}),nextObject},$remove:function(value,nextObject,_spec,originalObject){return invariantMapOrSet(nextObject,"$remove"),invariantSpecArray(value,"$remove"),value.forEach(function(key){nextObject===originalObject&&nextObject.has(key)&&(nextObject=copy(originalObject)),nextObject.delete(key)}),nextObject},$merge:function(value,nextObject,_spec,originalObject){return function invariantMerge(target,specValue){invariant(specValue&&"object"==typeof specValue,"update(): $merge expects a spec of type 'object'; got %s",specValue),invariant(target&&"object"==typeof target,"update(): $merge expects a target of type 'object'; got %s",target)}(nextObject,value),getAllKeys(value).forEach(function(key){value[key]!==nextObject[key]&&(nextObject===originalObject&&(nextObject=copy(originalObject)),nextObject[key]=value[key])}),nextObject},$apply:function(value,original){return function invariantApply(fn){invariant("function"==typeof fn,"update(): expected spec of $apply to be a function; got %s.",fn)}(value),value(original)}},defaultContext=new Context;function invariantPushAndUnshift(value,spec,command){invariant(Array.isArray(value),"update(): expected target of %s to be an array; got %s.",command,value),invariantSpecArray(spec[command],command)}function invariantSpecArray(spec,command){invariant(Array.isArray(spec),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",command,spec)}function invariantSplice(value){invariant(Array.isArray(value),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",value)}function invariantMapOrSet(target,command){var typeOfTarget=type(target);invariant("Map"===typeOfTarget||"Set"===typeOfTarget,"update(): %s expects a target of type Set or Map; got %s",command,typeOfTarget)}exports.isEquals=defaultContext.update.isEquals,exports.extend=defaultContext.extend,exports.default=defaultContext.update,exports.default.default=module.exports=assign(exports.default,exports)},2234:function(module,exports,__webpack_require__){"use strict";module.exports=function(condition,format,a,b,c,d,e,f){if(!condition){var error;if(void 0===format)error=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var args=[a,b,c,d,e,f],argIndex=0;(error=new Error(format.replace(/%s/g,function(){return args[argIndex++]}))).name="Invariant Violation"}throw error.framesToPop=1,error}}},2235:function(module,exports,__webpack_require__){"use strict";var shallowEqual=__webpack_require__(2236);module.exports=function shallowCompare(instance,nextProps,nextState){return!shallowEqual(instance.props,nextProps)||!shallowEqual(instance.state,nextState)}},2236:function(module,exports,__webpack_require__){"use strict";var hasOwnProperty=Object.prototype.hasOwnProperty;function is(x,y){return x===y?0!==x||0!==y||1/x==1/y:x!=x&&y!=y}module.exports=function shallowEqual(objA,objB){if(is(objA,objB))return!0;if("object"!=typeof objA||null===objA||"object"!=typeof objB||null===objB)return!1;var keysA=Object.keys(objA),keysB=Object.keys(objB);if(keysA.length!==keysB.length)return!1;for(var i=0;i<keysA.length;i++)if(!hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]]))return!1;return!0}},2237:function(module,exports,__webpack_require__){var v1=__webpack_require__(291),v4=__webpack_require__(2238),uuid=v4;uuid.v1=v1,uuid.v4=v4,module.exports=uuid},2238:function(module,exports,__webpack_require__){var rng=__webpack_require__(521),bytesToUuid=__webpack_require__(522);module.exports=function v4(options,buf,offset){var i=buf&&offset||0;"string"==typeof options&&(buf="binary"===options?new Array(16):null,options=null);var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf)for(var ii=0;ii<16;++ii)buf[i+ii]=rnds[ii];return buf||bytesToUuid(rnds)}}}]);
//# sourceMappingURL=6.14ca30213b2f86713df0.bundle.js.map