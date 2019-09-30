"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ErrorMessage = function (_a) {
    var message = _a.message, icon = _a.icon;
    return (react_1["default"].createElement("div", { className: "validation", "data-testid": "validation-message" },
        react_1["default"].createElement("i", { className: "material-icons" }, icon),
        message));
};
ErrorMessage.defaultProps = {
    icon: "warning",
    message: ""
};
exports["default"] = ErrorMessage;
