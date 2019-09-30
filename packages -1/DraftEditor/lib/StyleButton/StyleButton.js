"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importDefault(require("react"));
var StyleButton = function (_a) {
    var onToggle = _a.onToggle, style = _a.style, active = _a.active, label = _a.label, classNames = _a.utils.classNames;
    var handelToggle = function (event) {
        event.preventDefault();
        onToggle(style);
    };
    var styleButtonClassName = classNames({
        "custom-DraftEditor-activeButton": active,
        "custom-DraftEditor-styleButton": !active
    });
    var labelStatus = active ? react_1["default"].createElement("b", null, label) : react_1["default"].createElement(react_1["default"].Fragment, null, label);
    return (react_1["default"].createElement("span", { className: styleButtonClassName, onMouseDown: handelToggle }, labelStatus));
};
exports["default"] = utils_1["default"](StyleButton);
