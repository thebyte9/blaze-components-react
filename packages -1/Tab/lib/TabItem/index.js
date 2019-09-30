"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
exports.TabItem = function (_a) {
    var action = _a.action, children = _a.children;
    action();
    return react_1["default"].createElement("div", { className: "tabs__content current" }, children);
};
exports.TabItem.propTypes = {
    action: prop_types_1["default"].func,
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].arrayOf(prop_types_1["default"].node),
        prop_types_1["default"].node
    ])
};
exports.TabItem.defaultProps = {
    action: function () {
        return;
    },
    children: "No content"
};
