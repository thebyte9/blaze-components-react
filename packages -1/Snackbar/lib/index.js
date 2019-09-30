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
var Snackbar = utils_1["default"](function (_a) {
    var _b;
    var position = _a.position, classNames = _a.utils.classNames, isActive = _a.isActive, onClose = _a.onClose, modifier = _a.modifier, iconName = _a.iconName, duration = _a.duration, children = _a.children;
    var _c = react_1.useState(isActive), active = _c[0], setActive = _c[1];
    react_1.useEffect(function () {
        setActive(isActive);
        if (duration) {
            setTimeout(function () { return setActive(false); }, duration);
        }
    }, [isActive, duration]);
    var snackbarClassNames = classNames("snackbar", (_b = {},
        _b["snackbar--" + position] = !!position,
        _b["snackbar--" + modifier] = !!modifier,
        _b.active = active,
        _b));
    var defaultIcons = {
        alert: "erro",
        info: "info",
        success: "done_all",
        warning: "warning"
    };
    var handleClose = function () {
        setActive(false);
        onClose();
    };
    var getIcon = function () {
        if (iconName) {
            return iconName;
        }
        if (modifier) {
            return defaultIcons[modifier];
        }
        return "";
    };
    var icon = getIcon();
    return (react_1["default"].createElement(react_1.Fragment, null, active && (react_1["default"].createElement("div", { className: snackbarClassNames },
        react_1["default"].createElement("div", { className: "message" },
            icon && react_1["default"].createElement("i", { className: "material-icons" }, icon),
            children),
        react_1["default"].createElement("div", { className: "close", onClick: handleClose },
            react_1["default"].createElement("i", { className: "material-icons" }, "close"))))));
});
Snackbar.defaultProps = {
    onClose: function () { return ({}); }
};
var availablePosition = {
    bottomLeft: "bottom-left",
    bottomRight: "bottom-right",
    topLeft: "top-left",
    topRight: "top-right"
};
var availableModifiers = {
    alert: "alert",
    info: "info",
    success: "success",
    warning: "warning"
};
Snackbar.position = availablePosition;
Snackbar.modifier = availableModifiers;
exports["default"] = Snackbar;
