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
var Textarea = function (_a) {
    var value = _a.value, label = _a.label, limit = _a.limit, onChange = _a.onChange, error = _a.error, validationMessage = _a.validationMessage, required = _a.required, id = _a.id, _b = _a.utils, classNames = _b.classNames, ErrorMessage = _b.ErrorMessage, attrs = __rest(_a, ["value", "label", "limit", "onChange", "error", "validationMessage", "required", "id", "utils"]);
    var _c = react_1.useState(""), content = _c[0], setContent = _c[1];
    react_1.useEffect(function () {
        if (!content && value) {
            setContent(value);
        }
    }, []);
    var handleChange = function (event) {
        var newContent = event.target.value;
        if (limit && newContent.length > limit) {
            newContent = newContent.slice(0, limit);
        }
        setContent(newContent);
        onChange({ event: event, value: newContent });
    };
    var requiredClassName = classNames({ required: required });
    var total = !limit ? 0 : limit - content.length;
    return (react_1["default"].createElement("div", { className: "form-field form-field--textarea" },
        label && (react_1["default"].createElement("label", { htmlFor: id, className: requiredClassName }, label)),
        react_1["default"].createElement("textarea", __assign({ value: content, rows: attrs.rows, cols: attrs.cols, onChange: handleChange, required: required }, attrs)),
        !!limit && react_1["default"].createElement("span", null, total),
        error && react_1["default"].createElement(ErrorMessage, { message: validationMessage })));
};
Textarea.defaultProps = {
    error: false,
    label: "",
    limit: 0,
    placeholder: "",
    required: false,
    validationMessage: "This field is required",
    value: ""
};
exports["default"] = utils_1["default"](Textarea);
