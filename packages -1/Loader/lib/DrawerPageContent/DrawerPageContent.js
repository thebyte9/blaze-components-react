"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var DrawerPageContent = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "page__content page__content--drawer" }, children));
};
exports["default"] = DrawerPageContent;
