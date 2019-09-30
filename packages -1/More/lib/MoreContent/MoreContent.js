"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var MoreContent = function (_a) {
    var children = _a.children, toggled = _a.toggled, isHeader = _a.isHeader, isMoreMenu = _a.isMoreMenu, isDropdown = _a.isDropdown, handleToggle = _a.handleToggle, displayBg = _a.displayBg;
    var wrapperRef = react_1.useRef(null);
    var handleClickOutside = function (event) {
        if (event.target === wrapperRef.current) {
            handleToggle();
        }
    };
    var getContainer = function () {
        var id = "moreBackground";
        var containerElementRef = document.getElementById(id);
        if (!containerElementRef) {
            containerElementRef = document.createElement("div");
            containerElementRef.id = id;
            document.body.appendChild(containerElementRef);
        }
        return containerElementRef;
    };
    var ulClassName = classnames_1["default"]({
        dropdown__submenu: isDropdown,
        "dropdown__submenu dropdown__submenu--header": isHeader,
        "dropdown__submenu--displayed dropdown__list-item--displayed": toggled && isHeader,
        "more-menu more-menu__list": isMoreMenu,
        "more-menu--open": toggled && isMoreMenu
    });
    var liClassName = classnames_1["default"]({
        "dropdown__list-item dropdown__list-item--submenu": isDropdown,
        "dropdown__list-item--header": isHeader,
        "more-menu__list-item": isMoreMenu
    });
    var childClassname = classnames_1["default"]({
        "dropdown__list-item-link--header": isHeader,
        "more-menu__link": isMoreMenu
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        toggled &&
            displayBg &&
            react_dom_1.createPortal(react_1["default"].createElement("div", { className: "more-menu__background", ref: wrapperRef, onClick: handleClickOutside }), getContainer()),
        react_1["default"].createElement("ul", { className: ulClassName }, react_1["default"].Children.map(children, function (child) {
            return child && (react_1["default"].createElement("li", { key: child.symbol, className: liClassName }, react_1["default"].cloneElement(child, {
                className: (child.props.className ? child.props.className : "") + " " + childClassname
            })));
        }))));
};
MoreContent.defaultProps = {
    displayBg: false,
    isDropdown: false,
    isHeader: false,
    isMoreMenu: false,
    toggled: false
};
exports["default"] = MoreContent;
