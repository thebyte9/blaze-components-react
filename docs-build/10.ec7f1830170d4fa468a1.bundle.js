(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{2272:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _blaze_react_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),_blaze_react_button__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_blaze_react_button__WEBPACK_IMPORTED_MODULE_0__),_blaze_react_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_blaze_react_utils__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_blaze_react_utils__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);const Alert=({children:children,close:close,icon:icon,type:type,utils:{classNames:classNames},...attrs})=>{const[offModal,setModalOff]=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),alertClassName=classNames("alert",{"alert--dismissable":close,"alert--icon":!!icon,[`alert--${type}`]:!!type}),renderAlert=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",Object.assign({className:alertClassName},attrs),icon&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i",{className:"material-icons"},icon),children,close&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_blaze_react_button__WEBPACK_IMPORTED_MODULE_0___default.a,{onClick:()=>setModalOff(!0),className:"icon-button icon-button--close"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i",{className:"material-icons"},"close")));return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,!offModal&&renderAlert)};Alert.defaultProps={children:"No content",close:!1,icon:"",type:""},__webpack_exports__.default=_blaze_react_utils__WEBPACK_IMPORTED_MODULE_1___default()(Alert)}}]);
//# sourceMappingURL=10.ec7f1830170d4fa468a1.bundle.js.map