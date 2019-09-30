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
var ToggleInputType = function (_a) {
    var type = _a.type, toggleType = _a.toggleType;
    var passwordDefaultClasses = {
        icon: "visibility_off",
        status: "active",
        text: "Show"
    };
    var passwordActiveClasses = {
        icon: "visibility",
        status: "hide",
        text: "Hide"
    };
    var _b = react_1.useState(passwordDefaultClasses), passwordClasses = _b[0], setPasswordState = _b[1];
    var isPassword = type === "password";
    var handleToggleClasses = function () {
        if (isPassword) {
            setPasswordState(passwordActiveClasses);
            toggleType("text");
        }
        else {
            setPasswordState(passwordDefaultClasses);
            toggleType("password");
        }
    };
    var status = passwordClasses.status, icon = passwordClasses.icon, text = passwordClasses.text;
    return (react_1["default"].createElement("span", { "data-testid": "toggle-input-type", onClick: handleToggleClasses, className: "show-hide-password " + status, role: "button" },
        text,
        react_1["default"].createElement("i", { className: "material-icons" }, icon)));
};
exports["default"] = ToggleInputType;
