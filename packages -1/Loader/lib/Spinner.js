"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importDefault(require("react"));
var Spinner = utils_1["default"](function (_a) {
    var _b;
    var size = _a.size, lockContent = _a.lockContent, classNames = _a.utils.classNames, animation = _a.animation;
    var spinnerClassName = classNames({
        "loader__lock loader__lock--spinner": lockContent
    });
    var spinnerAnimationClassName = classNames("loader__spinner", (_b = {},
        _b["loader__spinner--" + animation] = !!animation,
        _b["loader__spinner--" + size] = !!size,
        _b));
    return (react_1["default"].createElement("div", { className: "loader" },
        react_1["default"].createElement("div", { className: spinnerClassName },
            react_1["default"].createElement("div", { className: spinnerAnimationClassName }))));
});
var animationType = {
    ease: "ease",
    linear: "linear"
};
var spinnerSize = {
    big: "big",
    med: "med",
    small: "small",
    xSmall: "x-small"
};
Spinner.animationType = animationType;
Spinner.size = spinnerSize;
Spinner.defaultProps = {
    animation: "linear"
};
exports["default"] = Spinner;
