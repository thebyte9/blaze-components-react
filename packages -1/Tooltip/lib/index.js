"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Tooltip = function (_a) {
    var children = _a.children, position = _a.position, text = _a.text;
    return (react_1["default"].createElement("div", { className: "tooltip-here" },
        children,
        react_1["default"].createElement("span", { className: "tooltip tooltip--" + position }, text)));
};
Tooltip.defaultProps = {
    children: "No content",
    position: "top",
    text: "No content"
};
exports["default"] = Tooltip;
