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
var Switches = utils_1["default"](function (_a) {
    var _b;
    var labelPosition = _a.labelPosition, onChange = _a.onChange, options = _a.options, modifier = _a.modifier, returnBoolean = _a.returnBoolean, error = _a.error, validationMessage = _a.validationMessage, _c = _a.utils, uniqueId = _c.uniqueId, classNames = _c.classNames, ErrorMessage = _c.ErrorMessage, attrs = __rest(_a, ["labelPosition", "onChange", "options", "modifier", "returnBoolean", "error", "validationMessage", "utils"]);
    var _d = Array.isArray(options)
        ? {
            formatedOptions: options,
            wrap: function (child) { return (react_1["default"].createElement("div", { className: "form-group form-group--switch" }, child)); }
        }
        : {
            formatedOptions: [options],
            wrap: function (child) { return react_1["default"].createElement(react_1["default"].Fragment, null, child); }
        }, wrap = _d.wrap, formatedOptions = _d.formatedOptions;
    var _e = react_1.useState(formatedOptions), data = _e[0], setData = _e[1];
    var toggle = function (_a) {
        var event = _a.event, item = _a.item, key = _a.key;
        if (item.disabled) {
            return;
        }
        data[key].checked = !item.checked;
        setData(data.slice());
        var checked = data.filter(function (option) { return option.checked; });
        if (returnBoolean) {
            onChange({ event: event, value: !!checked.length, data: data });
            return;
        }
        onChange({ event: event, value: checked, data: data });
    };
    var switchClassNames = classNames("switch", (_b = {},
        _b["switch--" + modifier] = !!modifier,
        _b["switch--label--" + labelPosition] = !!labelPosition,
        _b));
    return (react_1["default"].createElement(react_1.Fragment, null,
        wrap(data.map(function (item, key) {
            var _a = item.checked, checked = _a === void 0 ? false : _a, value = item.value, disabled = item.disabled, required = item.required, label = item.label, _b = item.id, id = _b === void 0 ? uniqueId(item) : _b;
            return (react_1["default"].createElement("div", { className: switchClassNames, key: id },
                react_1["default"].createElement("div", { className: "switch__text" }, label),
                react_1["default"].createElement("div", { className: "switch__item" },
                    react_1["default"].createElement("input", __assign({ readOnly: true, type: "checkbox", value: value, disabled: disabled, checked: checked, required: required, onChange: function (event) { return toggle({ event: event, item: item, key: key }); }, id: id }, attrs)),
                    react_1["default"].createElement("label", { htmlFor: id }, "toggle"))));
        })),
        error && react_1["default"].createElement(ErrorMessage, { message: validationMessage })));
});
var availableModifiers = {
    checked: "checked",
    "default": "default",
    disabled: "disabled",
    primary: "primary",
    secondary: "secondary",
    unchecked: "unchecked"
};
var availablePositions = {
    base: "base",
    left: "left",
    right: "right",
    top: "top"
};
Switches.availableModifiers = availableModifiers;
Switches.availablePositions = availablePositions;
Switches.defaultProps = {
    error: false,
    labelPosition: "right",
    modifier: "",
    returnBoolean: false,
    validationMessage: "This field is required"
};
exports["default"] = Switches;
