(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2248:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lib=__webpack_require__(4),lib_default=__webpack_require__.n(lib),react=__webpack_require__(0),react_default=__webpack_require__.n(react);var Button_lib=__webpack_require__(25),Button_lib_default=__webpack_require__.n(Button_lib);var src_ModalFooter=({footerClassNames:footerClassNames,closeModal:closeModal,actions:actions,isAlert:isAlert})=>react_default.a.createElement("div",{className:footerClassNames},react_default.a.createElement("div",{className:"modal__button"},isAlert&&react_default.a.createElement(Button_lib_default.a,{modifiers:["cancel"],onClick:closeModal},"Cancel"),actions.map(({textButton:textButton,callback:callback,modifiers:modifiers=[],...props})=>react_default.a.createElement(Button_lib_default.a,Object.assign({key:textButton,modifiers:modifiers,onClick:callback},props),textButton))));var src_ModalHeader=({title:title,closeModal:closeModal})=>react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{className:"modal__title"},title),react_default.a.createElement("div",{className:"modal__close",role:"button",onClick:closeModal},react_default.a.createElement("i",{className:"material-icons"},"close")));const Modal=({children:children,isSimple:isSimple,isAlert:isAlert,isFullScreen:isFullScreen,title:title,isUpload:isUpload,actions:actions,overlay:overlay,utils:{buildClassNames:buildClassNames},className:className,showFooter:showFooter,onClose:onClose=(()=>({}))})=>{Object(react.useEffect)(()=>(document.addEventListener("keydown",handleKey,!1),()=>{document.removeEventListener("keydown",handleKey,!1)}),[]);const handleKey=({keyCode:keyCode})=>27===keyCode&&closeModal(),closeModal=()=>onClose(),modalClassNames=buildClassNames(`${className} modal modal--show`,{"modal--alert":isAlert,"modal--full-screen":isFullScreen,"modal--simple":isSimple,"modal--upload":isUpload}),[modalHeaderClassNames,modalContentClassNames,modalFooterClassNames]=["header","content","footer"].map(alertType=>buildClassNames(`modal__${alertType}`,{[`modal__${alertType}--alert`]:isAlert,[`modal__${alertType}--simple`]:isSimple,[`modal__${alertType}--upload`]:isUpload,[`modal__${alertType}--full-screen`]:isUpload}));return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{className:"overlay",onClick:()=>{overlay&&closeModal()}}),react_default.a.createElement("div",{className:modalClassNames},react_default.a.createElement("div",{className:modalHeaderClassNames},!isAlert&&react_default.a.createElement(src_ModalHeader,{title:title,closeModal:closeModal})),react_default.a.createElement("div",{className:modalContentClassNames},children),showFooter&&react_default.a.createElement(src_ModalFooter,{isAlert:isAlert,footerClassNames:modalFooterClassNames,closeModal:closeModal,actions:actions})))};Modal.defaultProps={actions:[],children:"No content",className:"",isAlert:!1,isFullScreen:!1,isSimple:!1,isUpload:!1,overlay:!0,showFooter:!0,title:""};__webpack_exports__.default=lib_default()(Modal)}}]);
//# sourceMappingURL=20.922ca1c10548a8a4184f.bundle.js.map