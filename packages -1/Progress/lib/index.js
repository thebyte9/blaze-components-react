"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var Progress = function (_a) {
    var progress = _a.progress, steps = _a.steps, type = _a.type, onChange = _a.onChange;
    var _b = react_1.useState(progress), currentProgress = _b[0], setProgress = _b[1];
    var handleClick = function (_a) {
        var event = _a.event, step = _a.step;
        setProgress(step);
        onChange({ event: event, step: step });
    };
    var checkStep = function (step) {
        if (step === steps.length && step === currentProgress) {
            return "final current";
        }
        if (step === currentProgress) {
            return "current";
        }
        if (step === steps.length) {
            return "final";
        }
        if (step <= currentProgress) {
            return "visited";
        }
        return "";
    };
    var isTypeCount = type === "count" ? "progress-bar__list-item--dots" : "";
    var modifiers = function () {
        var allModifiers = type.split(" ");
        var blockElement = "progress-bar__list-item--";
        if (!allModifiers.length) {
            return "" + blockElement + type;
        }
        return allModifiers
            .map(function (modifier) { return "" + blockElement + modifier; })
            .join(" ");
    };
    return (react_1["default"].createElement("nav", { className: "progress-bar" },
        react_1["default"].createElement("ol", { className: "progress-bar__list" }, steps.map(function (text, index) { return (react_1["default"].createElement("li", { key: text, className: "progress-bar__list-item " + modifiers() + " " + isTypeCount + " " + checkStep(index + 1) },
            react_1["default"].createElement("span", { onClick: function (event) { return handleClick({ event: event, step: index + 1 }); }, role: "button" }, text))); }))));
};
Progress.defaultProps = {
    onChange: function () {
        return;
    },
    progress: 0,
    steps: [],
    type: "dots"
};
exports["default"] = Progress;
