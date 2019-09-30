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
exports.__esModule = true;
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importDefault(require("react"));
var Button = utils_1["default"](function (_a) {
    var _b;
    var disabled = _a.disabled, type = _a.type, children = _a.children, _c = _a.modifiers, modifiers = _c === void 0 ? [] : _c, classNames = _a.utils.classNames, attrs = __rest(_a, ["disabled", "type", "children", "modifiers", "utils"]);
    var formatedModifiers = modifiers
        .map(function (modifier) { return "button--" + modifier; })
        .join(" ");
    var buttonClassNames = classNames("button", (_b = {},
        _b[formatedModifiers] = !!modifiers,
        _b));
    return (react_1["default"].createElement("button", __assign({ disabled: disabled, className: buttonClassNames, type: type }, attrs), children));
});
var availableModifiers = {
    alert: "alert",
    back: "back",
    cta: "cta",
    dark: "dark",
    disabled: "disabled",
    fullWidth: "full-width",
    icon: "icon",
    light: "light",
    link: "link",
    outline: "outline",
    plain: "plain",
    rounded: "rounded",
    small: "small"
};
Button.availableModifiers = availableModifiers;
Button.defaultProps = {
    children: "",
    disabled: false,
    type: "button"
};
exports["default"] = Button;
