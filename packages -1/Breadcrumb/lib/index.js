"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Breadcrumb = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("ul", { className: "breadcrumb" }, react_1["default"].Children.map(children, function (child) {
        return react_1["default"].createElement("li", { key: child.symbol, className: "breadcrumb__item" }, child);
    })));
};
Breadcrumb.defaultProps = {
    children: "Missing breadcrumb content"
};
exports["default"] = Breadcrumb;
