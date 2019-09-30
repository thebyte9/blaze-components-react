"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StyleButton_1 = __importDefault(require("../StyleButton"));
var BlockControls = function (_a) {
    var editorState = _a.editorState, onToggle = _a.onToggle;
    var selection = editorState.getSelection();
    var blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
    var BLOCK_TYPES = [
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
        { label: "Blockquote", style: "blockquote" },
        { label: "Code Block", style: "code-block" },
        { label: "H1", style: "header-one" },
        { label: "H2", style: "header-two" },
        { label: "H3", style: "header-three" },
        { label: "H4", style: "header-four" },
        { label: "H5", style: "header-five" },
        { label: "H6", style: "header-six" }
    ];
    return (react_1["default"].createElement("div", { className: "custom-DraftEditor-controls" }, BLOCK_TYPES.map(function (_a) {
        var label = _a.label, style = _a.style;
        return (react_1["default"].createElement(StyleButton_1["default"], { key: label, style: style, label: label, onToggle: onToggle, active: style === blockType }));
    })));
};
exports["default"] = BlockControls;
