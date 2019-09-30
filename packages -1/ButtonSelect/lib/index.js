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
var button_1 = __importDefault(require("@blaze-react/button"));
var react_1 = __importStar(require("react"));
var menuStyles = {
    top: "100%",
    width: "100%"
};
var ButtonSelect = function (_a) {
    var text = _a.text, children = _a.children, Attr = __rest(_a, ["text", "children"]);
    var _b = react_1.useState(false), toggled = _b[0], setToggled = _b[1];
    return (react_1["default"].createElement("div", { className: "more-menu__wrapper" },
        react_1["default"].createElement(button_1["default"], __assign({ onClick: function () { return setToggled(!toggled); } }, Attr),
            react_1["default"].createElement("i", { className: "material-icons" }, "keyboard_arrow_" + (toggled ? "up" : "down")),
            text),
        toggled && (react_1["default"].createElement("div", { className: "more-menu open", style: menuStyles }, children))));
};
ButtonSelect.defaultProps = {
    children: "No content",
    text: "Actions"
};
exports["default"] = ButtonSelect;
