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
var react_1 = __importDefault(require("react"));
var Badge = function (_a) {
    var children = _a.children, type = _a.type, pill = _a.pill, icon = _a.icon, round = _a.round, to = _a.to, link = _a.link, attrs = __rest(_a, ["children", "type", "pill", "icon", "round", "to", "link"]);
    var assignType = type ? "badge--" + type : "";
    var isPill = pill ? "badge--pill" : "";
    var isRound = round ? "badge--round" : "";
    var withIcon = icon ? "badge--icon-text" : "";
    var classes = "badge " + assignType + " " + isRound + " " + isPill + " " + withIcon;
    return link ? (react_1["default"].createElement("a", __assign({ href: to, className: classes }, attrs), children)) : (react_1["default"].createElement("span", __assign({ className: classes }, attrs), children));
};
Badge.defaultProps = {
    children: "No content",
    icon: false,
    link: false,
    pill: false,
    round: false,
    to: "#",
    type: ""
};
exports["default"] = Badge;
