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
var file_upload_1 = __importDefault(require("@blaze-react/file-upload"));
var modal_1 = __importDefault(require("@blaze-react/modal"));
var draft_js_1 = require("draft-js");
var react_1 = __importStar(require("react"));
var constants_1 = require("../constants");
var StyleButton_1 = __importDefault(require("../StyleButton"));
var InlineControls = function (_a) {
    var editorState = _a.editorState, preUploadedImages = _a.previewImages, onToggle = _a.onToggle;
    var _b = react_1.useState(false), modalStatus = _b[0], setModalStatus = _b[1];
    var _c = react_1.useState([
        {
            base64: "",
            name: "j",
            src: "https://images.pexels.com/photos/2208836/pexels-photo-2208836.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
    ]), previewImages = _c[0], setPreviewImages = _c[1];
    var _d = react_1.useState([]), selectedImages = _d[0], setSelectedImages = _d[1];
    var insertImage = function (src, latestEditorState) {
        var contentState = latestEditorState.getCurrentContent();
        var contentStateWithEntity = contentState.createEntity(constants_1.IMAGE, constants_1.IMMUTABLE, { src: src });
        var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        var newEditorState = draft_js_1.EditorState.set(latestEditorState, {
            currentContent: contentStateWithEntity
        });
        return onToggle(newEditorState, entityKey);
    };
    var openModal = function () { return toggleModal(); };
    var toggleModal = function () {
        setModalStatus(!modalStatus);
        setSelectedImages(preUploadedImages);
        setPreviewImages([]);
    };
    var addSelectedImagesToEditor = function () {
        var latestEditorState = editorState;
        selectedImages.forEach(function (img) {
            var src = img.src;
            latestEditorState = insertImage(src, latestEditorState);
        });
        toggleModal();
    };
    var alertActions = [
        {
            callback: addSelectedImagesToEditor,
            modifiers: ["rounded", "outline"],
            textButton: "Save"
        }
    ];
    var handleDrop = function (_a) {
        var previewFiles = _a.previewFiles, canceled = _a.canceled;
        if (canceled) {
            return setPreviewImages([]);
        }
        setPreviewImages(previewImages.concat(formatImages(previewFiles)));
    };
    var onCancel = function () { return setSelectedImages([]); };
    var formatImages = function (images) {
        return images.map(function (image) { return (__assign({}, image, { src: image.src || image.base64 })); });
    };
    var addSelectedImage = function (image) {
        var src = image.src;
        if (isSelected(src)) {
            return setSelectedImages(selectedImages.filter(function (img) { return src !== img.src; }));
        }
        setSelectedImages(selectedImages.concat([image]));
    };
    var isSelected = function (src) {
        return !!selectedImages.find(function (image) { return image.src === src; });
    };
    var showAllImages = function () {
        console.log(previewImages);
        return previewImages.map(function (image) {
            var src = image.src, key = image.key;
            return (react_1["default"].createElement("div", { className: "custom-DraftEditor-previewImage", onClick: function () { return addSelectedImage(image); }, key: key },
                isSelected(src) && (react_1["default"].createElement("span", null,
                    react_1["default"].createElement("i", { className: "material-icons" }, "done"))),
                react_1["default"].createElement("img", { src: src })));
        });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(StyleButton_1["default"], { label: react_1["default"].createElement("i", { className: "material-icons" }, "add_photo_alternate"), onToggle: openModal }),
        modalStatus && (react_1["default"].createElement(modal_1["default"], { title: "Upload", actions: alertActions, onClose: toggleModal },
            react_1["default"].createElement(file_upload_1["default"], { handleDrop: handleDrop, onCancel: onCancel }),
            react_1["default"].createElement("div", { className: "custom-DraftEditor-images" }, showAllImages())))));
};
exports["default"] = InlineControls;
