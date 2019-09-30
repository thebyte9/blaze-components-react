"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var MoreContent = function (_a) {
    var children = _a.children, toggled = _a.toggled, isHeader = _a.isHeader, isMoreMenu = _a.isMoreMenu, isDropdown = _a.isDropdown;
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
        "dropdown__list-item-link--header": isHeader
    });
    return (react_1["default"].createElement("ul", { className: ulClassName }, react_1["default"].Children.map(children, function (child) {
        return child && (react_1["default"].createElement("li", { key: child.symbol, className: liClassName }, react_1["default"].cloneElement(child, {
            className: child.props.className + " " + childClassname
        })));
    })));
};
MoreContent.defaultProps = {
    isDropdown: false,
    isHeader: false,
    isMoreMenu: false,
    toggled: false
};
exports["default"] = MoreContent;
