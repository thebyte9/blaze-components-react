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
var RadioButton = function (_a) {
    var onChange = _a.onChange, options = _a.options, required = _a.required, error = _a.error, validationMessage = _a.validationMessage, ErrorMessage = _a.utils.ErrorMessage, attrs = __rest(_a, ["onChange", "options", "required", "error", "validationMessage", "utils"]);
    var _b = react_1.useState({
        value: null
    }), selected = _b[0], setSelected = _b[1];
    var handleSelect = function (_a) {
        var event = _a.event, item = _a.item;
        if (item.disabled) {
            return;
        }
        setSelected(item);
        onChange({ event: event, selected: item });
    };
    return (react_1["default"].createElement(react_1.Fragment, null,
        required && react_1["default"].createElement("span", { className: "required" }),
        options.map(function (item) {
            var value = item.value, disabled = item.disabled, label = item.label, id = item.id;
            return (react_1["default"].createElement("div", { key: label, className: "form-field form-field--radio", onClick: function (event) { return handleSelect({ event: event, item: item }); }, role: "button" },
                react_1["default"].createElement("input", __assign({ readOnly: true, type: "radio", className: "form-radio", value: value, disabled: disabled, checked: value === selected.value, id: id }, attrs)),
                react_1["default"].createElement("label", { htmlFor: id }, label)));
        }),
        error && react_1["default"].createElement(ErrorMessage, { message: validationMessage })));
};
RadioButton.defaultProps = {
    error: false,
    onChange: function () {
        return;
    },
    options: [],
    required: false,
    validationMessage: "This field is required"
};
exports["default"] = utils_1["default"](RadioButton);
