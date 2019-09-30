"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var utils_1 = __importDefault(require("@blaze-react/utils"));
var draft_js_1 = require("draft-js");
var react_1 = __importStar(require("react"));
var BlockControls_1 = __importDefault(require("./BlockControls"));
var InlineControls_1 = __importDefault(require("./InlineControls"));
var DraftEditor = function (_a) {
    var _b = _a.utils, classNames = _b.classNames, ErrorMessage = _b.ErrorMessage, onChange = _a.onChange, name = _a.name, value = _a.value, error = _a.error, validationMessage = _a.validationMessage, attrs = __rest(_a, ["utils", "onChange", "name", "value", "error", "validationMessage"]);
    var draftHandledValue = "handled";
    var draftNotHandledValue = "not-handled";
    var _c = react_1.useState(draft_js_1.EditorState.createEmpty()), editorState = _c[0], setEditorState = _c[1];
    react_1.useEffect(function () {
        if (value) {
            var rawObjectValue = JSON.parse(value);
            var state = draft_js_1.EditorState.createWithContent(draft_js_1.convertFromRaw(rawObjectValue));
            setEditorState(state);
        }
    }, []);
    var onEditorChange = function (newEditorState) {
        setEditorState(newEditorState);
        var currentContent = newEditorState.getCurrentContent();
        var rawValue = draft_js_1.convertToRaw(currentContent);
        var rawValueString = JSON.stringify(rawValue);
        var eventFormat = {
            event: {
                target: {
                    name: name,
                    value: rawValueString
                }
            }
        };
        if (onChange) {
            onChange(eventFormat);
        }
    };
    var toggleBlockType = function (blockType) {
        return onEditorChange(draft_js_1.RichUtils.toggleBlockType(editorState, blockType));
    };
    var toggleInlineStyle = function (inlineStyle) {
        return onEditorChange(draft_js_1.RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };
    var handleKeyCommand = function (command) {
        var newState = draft_js_1.RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onEditorChange(newState);
            return draftHandledValue;
        }
        return draftNotHandledValue;
    };
    var contentState = editorState.getCurrentContent();
    var isUnstyled = contentState
        .getBlockMap()
        .first()
        .getType() !== "unstyled";
    var hasTextAndUnstyled = !contentState.hasText() && isUnstyled;
    var editorClassName = classNames("custom-DraftEditor-editor", {
        "custom-DraftEditor-hidePlaceholder": hasTextAndUnstyled
    });
    var getBlockStyle = function (block) {
        var isBlockquote = block.getType() === "blockquote";
        return classNames({
            "custom-DraftEditor-blockquote": isBlockquote
        });
    };
    return (react_1["default"].createElement("div", { className: "custom-DraftEditor-root" },
        react_1["default"].createElement(BlockControls_1["default"], { editorState: editorState, onToggle: toggleBlockType }),
        react_1["default"].createElement(InlineControls_1["default"], { editorState: editorState, onToggle: toggleInlineStyle }),
        react_1["default"].createElement("div", { className: editorClassName },
            react_1["default"].createElement(draft_js_1.Editor, __assign({ blockStyleFn: getBlockStyle, editorState: editorState, onChange: onEditorChange, handleKeyCommand: handleKeyCommand }, attrs))),
        error && react_1["default"].createElement(ErrorMessage, { message: validationMessage })));
};
DraftEditor.defaultProps = {
    error: false,
    name: "editor",
    validationMessage: "This field is required"
};
exports["default"] = utils_1["default"](DraftEditor);
