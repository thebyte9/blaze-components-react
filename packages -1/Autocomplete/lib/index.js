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
var input_1 = __importDefault(require("@blaze-react/input"));
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importStar(require("react"));
var Autocomplete = function (_a) {
    var _b = _a.data, data = _b.data, keys = _b.filterBy, keyValue = _b.keyValue, placeholder = _a.placeholder, selected = _a.selected, uniqueId = _a.utils.uniqueId;
    var _c = react_1.useState(""), inputValue = _c[0], setInputValue = _c[1];
    var _d = react_1.useState(false), showSelect = _d[0], setShowSelect = _d[1];
    var handleChange = function (_a) {
        var value = _a.value;
        setShowSelect(true);
        setInputValue(value);
        filterByValue(value);
    };
    var filterByValue = function (value) {
        return data.filter(function (copy) {
            return !!keys.some(function (key) {
                return copy[key].toLowerCase().includes(value.toLowerCase());
            });
        });
    };
    var handleClick = function (copiedData) {
        setInputValue(copiedData[keyValue]);
        setShowSelect(false);
        selected(copiedData);
    };
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(input_1["default"], { placeholder: placeholder, onChange: handleChange, value: inputValue }),
        showSelect &&
            filterByValue(inputValue).map(function (copiedData, key) { return (react_1["default"].createElement("div", { className: "panel", key: uniqueId(copiedData), onClick: function () { return handleClick(copiedData); }, role: "button", "data-testid": "option-" + (key + 1) }, copiedData[keyValue])); })));
};
Autocomplete.defaultProps = {
    placeholder: "Search",
    selected: function () {
        return;
    }
};
exports["default"] = utils_1["default"](Autocomplete);
