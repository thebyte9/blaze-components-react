"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StyleButton_1 = __importDefault(require("../StyleButton"));
var InlineControls = function (_a) {
    var editorState = _a.editorState, onToggle = _a.onToggle;
    var currentStyle = editorState.getCurrentInlineStyle();
    var INLINE_STYLES = [
        { label: "Bold", style: "BOLD" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" },
        { label: "Monospace", style: "CODE" }
    ];
    return (react_1["default"].createElement("div", { className: "custom-DraftEditor-controls" }, INLINE_STYLES.map(function (_a) {
        var label = _a.label, style = _a.style;
        return (react_1["default"].createElement(StyleButton_1["default"], { key: label, style: style, label: label, onToggle: onToggle, active: currentStyle.has(style) }));
    })));
};
exports["default"] = InlineControls;
