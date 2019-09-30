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
var button_1 = __importDefault(require("@blaze-react/button"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var MoreAvatar = function (_a) {
    var _b;
    var children = _a.children, handleToggle = _a.handleToggle, label = _a.label, isHeader = _a.isHeader, className = _a.className, isMoreMenu = _a.isMoreMenu;
    var buttonClassName = classnames_1["default"]((_b = {
            dropdown__button: isHeader,
            "icon-button icon-button--round": isMoreMenu
        },
        _b[className] = Boolean(className),
        _b));
    return (react_1["default"].createElement(button_1["default"], { onClick: handleToggle, className: buttonClassName }, isHeader ? (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("span", { className: "dropdown__name" }, label),
        children)) : (react_1["default"].createElement(react_1.Fragment, null, react_1["default"].Children.map(children, function (child) {
        return react_1["default"].cloneElement(child);
    })))));
};
MoreAvatar.defaultProps = {
    children: null,
    className: "",
    handleToggle: function () {
        return;
    },
    isHeader: false,
    isMoreMenu: false,
    label: ""
};
exports["default"] = MoreAvatar;
