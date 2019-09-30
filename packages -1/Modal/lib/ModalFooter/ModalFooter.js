"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var button_1 = __importDefault(require("@blaze-react/button"));
var react_1 = __importDefault(require("react"));
var ModalFooter = function (_a) {
    var footerClassNames = _a.footerClassNames, closeModal = _a.closeModal, actions = _a.actions, isAlert = _a.isAlert;
    return (react_1["default"].createElement("div", { className: footerClassNames },
        react_1["default"].createElement("div", { className: "modal__button" },
            isAlert && (react_1["default"].createElement(button_1["default"], { modifiers: [button_1["default"].availableModifiers.link], onClick: closeModal }, "Cancel")),
            actions.map(function (_a) {
                var textButton = _a.textButton, callback = _a.callback, _b = _a.modifiers, modifiers = _b === void 0 ? ["link"] : _b;
                return (react_1["default"].createElement(button_1["default"], { key: textButton, modifiers: modifiers, onClick: callback }, textButton));
            }))));
};
exports["default"] = ModalFooter;
