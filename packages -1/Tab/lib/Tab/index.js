"use strict";
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
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importStar(require("react"));
exports.Tab = function (_a) {
    var selected = _a.selected, children = _a.children;
    var _b = react_1.useState(selected), selectedValue = _b[0], setSelected = _b[1];
    return (react_1["default"].createElement("div", { className: "tabs" },
        react_1["default"].createElement("div", { className: "tabs__list" }, children.map(function (_a, step) {
            var _b = _a.props.title, title = _b === void 0 ? "Unnamed tab" : _b;
            return (react_1["default"].createElement(button_1["default"], { className: "tabs__list-item " + (step === selectedValue ? "current" : ""), onClick: function () { return setSelected(step); }, key: title }, title));
        })),
        children[selectedValue]));
};
exports.Tab.propTypes = {
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].arrayOf(prop_types_1["default"].node),
        prop_types_1["default"].node
    ]),
    selected: prop_types_1["default"].number
};
exports.Tab.defaultProps = {
    children: "No content",
    selected: 0
};
