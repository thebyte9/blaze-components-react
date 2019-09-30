"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importDefault(require("react"));
var ChipIcon = function (_a) {
    var _b;
    var children = _a.children, modifier = _a.modifier, handleRemoveChip = _a.handleRemoveChip, classNames = _a.utils.classNames;
    var iconClassName = classNames("chip__icon", (_b = {},
        _b["chip__icon--" + modifier] = !!modifier,
        _b));
    return (react_1["default"].createElement("div", { className: iconClassName, onClick: handleRemoveChip }, children));
};
exports["default"] = utils_1["default"](ChipIcon);
