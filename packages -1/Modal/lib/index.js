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
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importStar(require("react"));
var ModalFooter_1 = __importDefault(require("./ModalFooter"));
var ModalHeader_1 = __importDefault(require("./ModalHeader"));
var Modal = function (_a) {
    var children = _a.children, isSimple = _a.isSimple, isAlert = _a.isAlert, title = _a.title, isUpload = _a.isUpload, actions = _a.actions, overlay = _a.overlay, classNames = _a.utils.classNames, _b = _a.onClose, onClose = _b === void 0 ? function () { return ({}); } : _b;
    var sections = ["header", "content", "footer"];
    var closeModal = function () { return onClose(); };
    var modalClassNames = classNames("modal modal--show", {
        "modal--alert": isAlert,
        "modal--simple": isSimple,
        "modal--upload": isUpload
    });
    var _c = sections.map(function (alertType) {
        var _a;
        return classNames("modal__" + alertType, (_a = {},
            _a["modal__" + alertType + "--alert"] = isAlert,
            _a["modal__" + alertType + "--simple"] = isSimple,
            _a["modal__" + alertType + "--upload"] = isUpload,
            _a));
    }), modalHeaderClassNames = _c[0], modalContentClassNames = _c[1], modalFooterClassNames = _c[2];
    return (react_1["default"].createElement(react_1.Fragment, null,
        overlay && react_1["default"].createElement("div", { className: "overlay", onClick: closeModal }),
        react_1["default"].createElement("div", { className: modalClassNames },
            react_1["default"].createElement("div", { className: modalHeaderClassNames }, !isAlert && react_1["default"].createElement(ModalHeader_1["default"], { title: title, closeModal: closeModal })),
            react_1["default"].createElement("div", { className: modalContentClassNames }, children),
            react_1["default"].createElement(ModalFooter_1["default"], { isAlert: isAlert, footerClassNames: modalFooterClassNames, closeModal: closeModal, actions: actions }))));
};
Modal.defaultProps = {
    actions: [],
    buttonModifiers: ["outline"],
    children: "No content",
    isAlert: false,
    isSimple: false,
    isUpload: false,
    overlay: true,
    title: ""
};
exports["default"] = utils_1["default"](Modal);
