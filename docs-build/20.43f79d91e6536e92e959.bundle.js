(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2199:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lib=__webpack_require__(12),lib_default=__webpack_require__.n(lib),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Button_lib=__webpack_require__(24),Button_lib_default=__webpack_require__.n(Button_lib);var src_ModalFooter=({footerClassNames:footerClassNames,closeModal:closeModal,actions:actions,isAlert:isAlert})=>react_default.a.createElement("div",{className:footerClassNames},react_default.a.createElement("div",{className:"modal__button"},isAlert&&react_default.a.createElement(Button_lib_default.a,{modifiers:["cancel"],onClick:closeModal},"Cancel"),actions.map(({textButton:textButton,callback:callback,modifiers:modifiers=[]})=>react_default.a.createElement(Button_lib_default.a,{key:textButton,modifiers:modifiers,onClick:callback},textButton))));var src_ModalHeader=({title:title,closeModal:closeModal})=>react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{className:"modal__title"},title),react_default.a.createElement("div",{className:"modal__close",role:"button",onClick:closeModal},react_default.a.createElement("i",{className:"material-icons"},"close")));const Modal=({children:children,isSimple:isSimple,isAlert:isAlert,title:title,isUpload:isUpload,actions:actions,overlay:overlay,utils:{classNames:classNames},className:className,onClose:onClose=(()=>({}))})=>{Object(react.useEffect)(()=>(document.addEventListener("keydown",handleKey,!1),()=>{document.removeEventListener("keydown",handleKey,!1)}),[]);const handleKey=({keyCode:keyCode})=>27===keyCode&&closeModal(),closeModal=()=>onClose(),modalClassNames=classNames(`${className} modal modal--show`,{"modal--alert":isAlert,"modal--simple":isSimple,"modal--upload":isUpload}),[modalHeaderClassNames,modalContentClassNames,modalFooterClassNames]=["header","content","footer"].map(alertType=>classNames(`modal__${alertType}`,{[`modal__${alertType}--alert`]:isAlert,[`modal__${alertType}--simple`]:isSimple,[`modal__${alertType}--upload`]:isUpload}));return react_default.a.createElement(react_default.a.Fragment,null,overlay&&react_default.a.createElement("div",{className:"overlay",onClick:closeModal}),react_default.a.createElement("div",{className:modalClassNames},react_default.a.createElement("div",{className:modalHeaderClassNames},!isAlert&&react_default.a.createElement(src_ModalHeader,{title:title,closeModal:closeModal})),react_default.a.createElement("div",{className:modalContentClassNames},children),react_default.a.createElement(src_ModalFooter,{isAlert:isAlert,footerClassNames:modalFooterClassNames,closeModal:closeModal,actions:actions})))};Modal.defaultProps={actions:[],children:"No content",isAlert:!1,isSimple:!1,isUpload:!1,overlay:!0,title:"",className:""};__webpack_exports__.default=lib_default()(Modal)}}]);
//# sourceMappingURL=20.43f79d91e6536e92e959.bundle.js.map