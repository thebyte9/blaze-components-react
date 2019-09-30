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
var react_1 = __importStar(require("react"));
var Avatar = utils_1["default"](function (_a) {
    var _b;
    var modifier = _a.modifier, url = _a.url, username = _a.username, classNames = _a.utils.classNames, attr = __rest(_a, ["modifier", "url", "username", "utils"]);
    var _c = react_1.useState(url), avatarUrl = _c[0], setAvatar = _c[1];
    var _d = react_1.useState(false), validUrl = _d[0], setValidUrl = _d[1];
    var avatarClassName = classNames("avatar", (_b = {},
        _b["avatar--" + modifier] = !!modifier,
        _b));
    var initials = !username
        ? "!"
        : username
            .split(" ")
            .map(function (subName) { return subName[0].toUpperCase(); })
            .join("")
            .substring(0, 2);
    if (url && !validUrl) {
        var imageData = new Image();
        imageData.src = url;
        imageData.addEventListener("load", function () {
            setAvatar(url);
            setValidUrl(true);
        });
    }
    return (react_1["default"].createElement("div", { className: avatarClassName }, validUrl ? (react_1["default"].createElement("img", __assign({ src: avatarUrl, alt: "avatar" }, attr))) : (react_1["default"].createElement("span", null, initials))));
});
var availableModifiers = {
    med: "med",
    small: "small",
    xSmall: "x-small"
};
Avatar.availableModifiers = availableModifiers;
Avatar.defaultProps = {
    modifier: "",
    url: "",
    username: ""
};
exports["default"] = Avatar;
