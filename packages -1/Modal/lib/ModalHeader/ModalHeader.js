"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ModalHeader = function (_a) {
    var title = _a.title, closeModal = _a.closeModal;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "modal__title" }, title),
        react_1["default"].createElement("div", { className: "modal__close", role: "button", onClick: closeModal },
            react_1["default"].createElement("i", { className: "material-icons" }, "close"))));
};
exports["default"] = ModalHeader;
