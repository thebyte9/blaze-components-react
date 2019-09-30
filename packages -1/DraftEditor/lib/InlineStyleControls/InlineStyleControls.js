"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StyleButton_1 = __importDefault(require("../StyleButton"));
var InlineStyleControls = function (_a) {
    var editorState = _a.editorState, onToggle = _a.onToggle;
    var currentStyle = editorState.getCurrentInlineStyle();
    var INLINE_STYLES = [
        { label: "Bold", style: "BOLD" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" },
        { label: "Monospace", style: "CODE" }
    ];
    return (react_1["default"].createElement("div", { className: "RichEditor-controls" }, INLINE_STYLES.map(function (type) { return (react_1["default"].createElement(StyleButton_1["default"], { key: type.label, active: currentStyle.has(type.style), label: type.label, onToggle: onToggle, style: type.style })); })));
};
exports["default"] = InlineStyleControls;
