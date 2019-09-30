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
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importStar(require("react"));
var ChipAvatar_1 = __importDefault(require("./ChipAvatar"));
var ChipIcon_1 = __importDefault(require("./ChipIcon"));
var ChipLabel_1 = __importDefault(require("./ChipLabel"));
var Chips = utils_1["default"](function (_a) {
    var _b;
    var children = _a.children, modifiers = _a.modifiers, action = _a.action, onDelete = _a.onDelete, classNames = _a.utils.classNames;
    var _c = react_1.useState(true), showChip = _c[0], setChip = _c[1];
    var deletable = "deletable";
    var isRemovable = modifiers && modifiers.includes(deletable);
    var formatedModifiers = modifiers
        ? modifiers.map(function (modifier) { return "chip--" + modifier; }).join(" ")
        : "";
    var handleRemoveChip = function () {
        onDelete();
        setChip(false);
    };
    var chipClassNames = classNames("chip", (_b = {},
        _b[formatedModifiers] = !!modifiers,
        _b));
    return (react_1["default"].createElement(react_1.Fragment, null, showChip && (react_1["default"].createElement("div", { className: "chip__wrapper" },
        react_1["default"].createElement("div", { className: chipClassNames, onClick: action }, isRemovable
            ? react_1["default"].Children.map(children, function (child) {
                return react_1["default"].cloneElement(child, {
                    handleRemoveChip: handleRemoveChip
                });
            })
            : children)))));
});
var availableModifiers = {
    icon: {
        custom: "custom",
        "delete": "delete"
    },
    parent: {
        deletable: "deletable",
        outlined: "outlined",
        primary: "primary",
        secondary: "secondary",
        small: "small"
    }
};
Chips.Avatar = ChipAvatar_1["default"];
Chips.Label = ChipLabel_1["default"];
Chips.Icon = ChipIcon_1["default"];
Chips.availableModifiers = availableModifiers;
Chips.defaultProps = {
    action: function () { return void 0; },
    onDelete: function () { return void 0; }
};
exports["default"] = Chips;
