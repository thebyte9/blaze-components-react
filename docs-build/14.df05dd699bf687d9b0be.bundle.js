(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{2518:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const Dropdown=({label:label,children:children})=>{const[toggled,setToggled]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)("close");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"more-menu__wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:()=>{setToggled("close"===toggled?"open":"close")},type:"button",className:"icon-button toggle"},label,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"material-icons"},"more_vert")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:`more-menu ${toggled}`},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"more-menu__list"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"more-menu__list-item"},react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children,child=>react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child)))))))};Dropdown.defaultProps={children:[],label:"Menu"},__webpack_exports__.default=Dropdown}}]);
//# sourceMappingURL=14.df05dd699bf687d9b0be.bundle.js.map