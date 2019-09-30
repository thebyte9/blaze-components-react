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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utils_1 = require("@blaze-react/utils");
var react_1 = __importStar(require("react"));
var ToggleInputType_1 = __importDefault(require("./ToggleInputType"));
// interface IInputProps {
//   disabled?: boolean;
//   hideTypeToggle?: boolean;
//   id?: string;
//   label?: string;
//   modifier?: string;
//   onChange: ({
//     event,
//     value
//   }: {
//     event: React.ChangeEvent<HTMLInputElement>;
//     value: string;
//   }) => void;
//   required?: boolean;
//   error?: boolean;
//   type?: string;
//   validationMessage: string | JSX.Element;
//   value?: string;
// }
var Input = function (_a) {
    var _b;
    var disabled = _a.disabled, hideTypeToggle = _a.hideTypeToggle, label = _a.label, modifier = _a.modifier, onChange = _a.onChange, required = _a.required, type = _a.type, error = _a.error, validationMessage = _a.validationMessage, value = _a.value, attrs = __rest(_a, ["disabled", "hideTypeToggle", "label", "modifier", "onChange", "required", "type", "error", "validationMessage", "value"]);
    var _c = react_1.useState(value), newValue = _c[0], setNewValue = _c[1];
    var _d = react_1.useState(type), newType = _d[0], setType = _d[1];
    react_1.useEffect(function () {
        setNewValue(value);
        setTimeout(function () {
            utils_1.uniqueId.then(function (a) { return console.log(a); });
        }, 4000);
    }, [value]);
    var handleChange = function (event) {
        var inputValue = event.target.value;
        setNewValue(inputValue);
        onChange({ event: event, value: inputValue });
    };
    var handleToggleType = function (inputType) {
        setType(inputType);
    };
    var password = "password";
    var isPassword = type === password;
    var requiredClassName = utils_1.classNames({ required: required });
    var passwordClassName = utils_1.classNames({
        "form-field--password": isPassword
    });
    var modifierClassName = utils_1.classNames((_b = {},
        _b["form-field--" + modifier] = !!modifier,
        _b));
    return (react_1["default"].createElement("div", { className: "form-field form-field--input " + modifierClassName + " " + passwordClassName },
        react_1["default"].createElement("label", { htmlFor: attrs.id, className: requiredClassName }, label),
        react_1["default"].createElement("input", __assign({ "data-testid": "input", onChange: handleChange, value: newValue, disabled: disabled, type: newType, required: required }, attrs)),
        error && react_1["default"].createElement(utils_1.ErrorMessage, { message: validationMessage }),
        !hideTypeToggle && isPassword && (react_1["default"].createElement(ToggleInputType_1["default"], { toggleType: handleToggleType, type: newType }))));
};
Input.defaultProps = {
    disabled: false,
    error: false,
    hideTypeToggle: false,
    label: "",
    modifier: "",
    required: false,
    type: "text",
    validationMessage: "This field is required",
    value: ""
};
exports["default"] = Input;
