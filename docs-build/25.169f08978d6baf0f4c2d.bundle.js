(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{2206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const SocialFollow=({media:media,title:title,vertical:vertical,type:type})=>{const socialConf={facebook:{class:"facebook",icon:"fab fa-facebook-f",name:"Facebook"},instagram:{class:"instagram",icon:"fab fa-instagram",isFollowing:!0,name:"Instagram"},linkedIn:{class:"linkedin",icon:"fab fa-linkedin-in",name:"Linkedin"},pinterest:{class:"pinterest",icon:"fab fa-pinterest-p",name:"Pinterest"},twitter:{class:"twitter",icon:"fab fa-twitter",name:"Twitter"},youtube:{class:"youtube",icon:"fab fa-youtube",isFollowing:!0,name:"Youtube"}},renderSocial=Object.keys(media).map(key=>"follow"!==type&&socialConf[key].isFollowing?null:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:key,className:`social__list-item social__list-item--${type}`},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:media[key],rel:"noopener noreferrer",target:"_blank",className:socialConf[key].class},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:socialConf[key].icon}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"hidden"},socialConf[key].name))));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:`social social--${type} ${vertical?"social--vertical":""}`},title&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:`social__list social__list--${type} ${vertical?"social__list--vertical":""}`},renderSocial))};SocialFollow.defaultProps={title:"",type:"share",vertical:!1},__webpack_exports__.default=SocialFollow}}]);
//# sourceMappingURL=25.169f08978d6baf0f4c2d.bundle.js.map