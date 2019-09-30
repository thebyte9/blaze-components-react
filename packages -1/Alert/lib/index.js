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
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importStar(require("react"));
var Alert = function (_a) {
    var _b;
    var children = _a.children, close = _a.close, icon = _a.icon, type = _a.type, classNames = _a.utils.classNames, attrs = __rest(_a, ["children", "close", "icon", "type", "utils"]);
    var _c = react_1.useState(false), offModal = _c[0], setModalOff = _c[1];
    var alertClassName = classNames("alert", (_b = {
            "alert--dismissable": close,
            "alert--icon": !!icon
        },
        _b["alert--" + type] = !!type,
        _b));
    var renderAlert = (react_1["default"].createElement("div", __assign({ className: alertClassName }, attrs),
        icon && react_1["default"].createElement("i", { className: "material-icons" }, icon),
        children,
        close && (react_1["default"].createElement(button_1["default"], { onClick: function () { return setModalOff(true); }, className: "icon-button icon-button--close" },
            react_1["default"].createElement("i", { className: "material-icons" }, "close")))));
    return react_1["default"].createElement(react_1.Fragment, null, !offModal && renderAlert);
};
Alert.defaultProps = {
    children: "No content",
    close: false,
    icon: "",
    type: ""
};
exports["default"] = utils_1["default"](Alert);
