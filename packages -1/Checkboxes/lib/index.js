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
var Checkboxes = function (_a) {
    var returnBoolean = _a.returnBoolean, onChange = _a.onChange, options = _a.options, error = _a.error, validationMessage = _a.validationMessage, _b = _a.utils, uniqueId = _b.uniqueId, classNames = _b.classNames, ErrorMessage = _b.ErrorMessage, attrs = __rest(_a, ["returnBoolean", "onChange", "options", "error", "validationMessage", "utils"]);
    var _c = Array.isArray(options)
        ? {
            formClassName: "form-group form-group--checkbox",
            formatedOptions: options
        }
        : {
            formClassName: "form-field form-field--checkbox",
            formatedOptions: [options]
        }, formClassName = _c.formClassName, formatedOptions = _c.formatedOptions;
    var _d = react_1.useState(formatedOptions), data = _d[0], setData = _d[1];
    react_1.useEffect(function () { return setData(formatedOptions); }, [options]);
    var toggle = function (_a) {
        var event = _a.event, item = _a.item, key = _a.key;
        if (item.disabled) {
            return;
        }
        data[key].checked = !item.checked;
        setData(data.slice());
        var value = data.filter(function (_a) {
            var checked = _a.checked;
            return checked;
        });
        if (returnBoolean) {
            value = !!value.length;
        }
        onChange({ event: event, value: value, data: data });
    };
    return (react_1["default"].createElement(react_1.Fragment, null,
        data.map(function (item, key) {
            var _a = item.checked, checked = _a === void 0 ? false : _a, value = item.value, disabled = item.disabled, required = item.required, label = item.label, _b = item.show, show = _b === void 0 ? true : _b, _c = item.id, id = _c === void 0 ? uniqueId(item) : _c;
            if (!show) {
                return react_1["default"].createElement(react_1.Fragment, { key: id });
            }
            var requiredClassName = classNames({ required: required });
            return (react_1["default"].createElement("div", { "data-testid": "checkbox-" + (key + 1), key: id, className: formClassName + " " + requiredClassName, onClick: function (event) { return toggle({ event: event, item: item, key: key }); }, role: "button" },
                react_1["default"].createElement("input", __assign({ readOnly: true, type: "checkbox", className: "form-checkbox", value: value, disabled: disabled, checked: checked, required: required, id: id }, attrs)),
                react_1["default"].createElement("label", { htmlFor: id }, label)));
        }),
        error && react_1["default"].createElement(ErrorMessage, { message: validationMessage })));
};
Checkboxes.defaultProps = {
    error: false,
    options: [],
    returnBoolean: false,
    validationMessage: "This field is required"
};
exports["default"] = utils_1["default"](Checkboxes);
