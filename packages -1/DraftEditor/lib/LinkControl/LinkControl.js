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
var input_1 = __importDefault(require("@blaze-react/input"));
var modal_1 = __importDefault(require("@blaze-react/modal"));
var draft_js_1 = require("draft-js");
var react_1 = __importStar(require("react"));
var StyleButton_1 = __importDefault(require("../StyleButton"));
var constants_1 = require("../constants");
var LinkControl = function (_a) {
    var editorState = _a.editorState, unSelectedText = _a.unSelectedText, onToggle = _a.onToggle;
    var _b = react_1.useState(false), modalStatus = _b[0], setModalStatus = _b[1];
    var _c = react_1.useState(""), url = _c[0], setUrl = _c[1];
    var _d = react_1.useState(), selectedContent = _d[0], setSelectedContent = _d[1];
    var getSelection = function () {
        var selection = editorState.getSelection();
        var start = selection.getStartOffset();
        var end = selection.getEndOffset();
        if (start !== end) {
            setSelectedContent(selection);
        }
    };
    var openModal = function () {
        getSelection();
        toggleModal();
    };
    var addLink = function () {
        var contentState = editorState.getCurrentContent();
        if (!selectedContent) {
            return;
        }
        var contentStateWithEntity = contentState.createEntity(constants_1.LINK, constants_1.IMMUTABLE, { url: url });
        var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        var newEditorState = draft_js_1.EditorState.set(editorState, {
            currentContent: contentStateWithEntity
        });
        onToggle(newEditorState, selectedContent, entityKey);
        toggleModal();
    };
    var alertActions = [
        {
            callback: addLink,
            modifiers: [
                "small",
                "rounded",
                "outline",
                "" + (!!selectedContent ? "" : "disabled")
            ],
            textButton: "Add link"
        }
    ];
    var toggleModal = function () { return setModalStatus(!modalStatus); };
    var handleChange = function (_a) {
        var value = _a.value;
        return setUrl(value);
    };
    var hasSelection = !!selectedContent;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(StyleButton_1["default"], { label: react_1["default"].createElement("i", { className: "material-icons link" }, "insert_link"), onToggle: openModal, active: modalStatus }),
        modalStatus && (react_1["default"].createElement(modal_1["default"], { actions: alertActions, onClose: toggleModal, isAlert: true }, hasSelection ? (react_1["default"].createElement(input_1["default"], { placeholder: "Past link", onChange: handleChange, modifier: "full-width" })) : (react_1["default"].createElement("p", null, unSelectedText))))));
};
LinkControl.defaultProps = {
    error: false,
    name: "editor"
};
exports["default"] = LinkControl;
