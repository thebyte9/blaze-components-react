"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importDefault(require("react"));
var ProgressBar = utils_1["default"](function (_a) {
    var _b, _c, _d, _e;
    var steps = _a.steps, lockContent = _a.lockContent, progress = _a.progress, _f = _a.message, incomplete = _f.incomplete, status = _f.status, position = _f.position, classNames = _a.utils.classNames;
    var _g = steps.find(function (_a) {
        var start = _a.start, final = _a.final;
        return progress > start && progress <= final;
    }) || {}, backgroundColor = _g.backgroundColor, icon = _g.icon;
    var loaderTypeClassName = classNames("loader", (_b = {},
        _b["loader__bar--lock"] = lockContent,
        _b));
    var labelClassName = classNames("loader__status", (_c = {},
        _c["loader__status--" + position] = !!position,
        _c));
    var progressMessage = progress === 0 ? incomplete : status;
    var loaderClassName = classNames("loader__progress loader__progress--icon", (_d = {},
        _d["loader__progress--" + backgroundColor] = !!backgroundColor,
        _d));
    var stepClassName = classNames("loader__step--default", (_e = {},
        _e["loader__progress--" + backgroundColor] = !!backgroundColor,
        _e));
    return (react_1["default"].createElement("div", { className: loaderTypeClassName },
        react_1["default"].createElement("span", { className: labelClassName }, progressMessage),
        react_1["default"].createElement("div", { className: "loader__bar" },
            react_1["default"].createElement("div", { className: loaderClassName, style: { width: progress + "%" } }, icon && (react_1["default"].createElement("div", { className: stepClassName },
                react_1["default"].createElement("i", { className: "material-icons icon" }, icon)))))));
});
var availablePosition = {
    left: "left",
    right: "right"
};
var availableColors = {
    green: "green",
    orange: "orange",
    red: "red"
};
ProgressBar.position = availablePosition;
ProgressBar.backgroundColor = availableColors;
ProgressBar.defaultProps = {
    children: "",
    customStyles: {},
    message: {},
    steps: []
};
exports["default"] = ProgressBar;
