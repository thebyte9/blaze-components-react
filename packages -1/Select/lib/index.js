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
var Select = function (_a) {
    var label = _a.label, required = _a.required, onChange = _a.onChange, options = _a.options, selected = _a.selected, keys = _a.keys, error = _a.error, validationMessage = _a.validationMessage, _b = _a.utils, classNames = _b.classNames, ErrorMessage = _b.ErrorMessage, attrs = __rest(_a, ["label", "required", "onChange", "options", "selected", "keys", "error", "validationMessage", "utils"]);
    var _c = react_1.useState(selected), selectedOption = _c[0], setSelectedOption = _c[1];
    react_1.useEffect(function () {
        setSelectedOption(selected);
    }, [selected]);
    var handleChange = function (event) {
        var value = event.target.value;
        setSelectedOption(value);
        onChange({ event: event, value: value });
    };
    var requiredClassName = classNames({
        required: required
    });
    var setOption = function (value, text) { return (react_1["default"].createElement("option", { key: value, value: value }, text || value)); };
    var renderOptions = function () {
        var first = options[0];
        if (typeof first === "string") {
            return options.map(function (option) { return setOption(option); });
        }
        if (first instanceof Array) {
            return options.map(function (_a) {
                var value = _a[0], text = _a[1];
                return setOption(value, text);
            });
        }
        return options.map(function (option) {
            var value = keys[0], text = keys[1];
            return setOption(option[value], option[text]);
        });
    };
    return (react_1["default"].createElement("div", { className: "form-field form-field--select" },
        label && (react_1["default"].createElement("label", { htmlFor: attrs.id, className: requiredClassName }, label)),
        react_1["default"].createElement("select", __assign({ onChange: handleChange, disabled: !options.length, value: selectedOption }, attrs),
            react_1["default"].createElement("option", { defaultValue: selectedOption, disabled: !!selectedOption }, "Please Choose..."),
            renderOptions()),
        error && react_1["default"].createElement(ErrorMessage, { message: validationMessage })));
};
Select.defaultProps = {
    error: false,
    keys: [],
    label: "",
    onChange: function () {
        return;
    },
    options: [],
    required: false,
    selected: "",
    validationMessage: "This field is required"
};
exports["default"] = utils_1["default"](Select);
