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
var Dropdown = function (_a) {
    var label = _a.label, children = _a.children;
    var _b = react_1.useState("close"), toggled = _b[0], setToggled = _b[1];
    var toggleMenu = function () {
        var menuStatus = toggled === "close" ? "open" : "close";
        setToggled(menuStatus);
    };
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: "more-menu__wrapper" },
            react_1["default"].createElement("button", { onClick: toggleMenu, type: "button", className: "icon-button toggle" },
                label,
                react_1["default"].createElement("i", { className: "material-icons" }, "more_vert")),
            react_1["default"].createElement("div", { className: "more-menu " + toggled },
                react_1["default"].createElement("ul", { className: "more-menu__list" },
                    react_1["default"].createElement("li", { className: "more-menu__list-item" }, react_1["default"].Children.map(children, function (child) { return react_1["default"].cloneElement(child); })))))));
};
Dropdown.defaultProps = {
    children: [],
    label: "Menu"
};
exports["default"] = Dropdown;
