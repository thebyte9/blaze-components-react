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
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var MoreAvatar_1 = __importDefault(require("./MoreAvatar"));
var MoreContent_1 = __importDefault(require("./MoreContent"));
var More = function (_a) {
    var children = _a.children, isHeader = _a.isHeader, isMoreMenu = _a.isMoreMenu, onClose = _a.onClose;
    var _b = react_1.useState(false), toggled = _b[0], setToggle = _b[1];
    var handleToggle = function () {
        setToggle(!toggled);
        if (toggled) {
            onClose();
        }
    };
    var ulClassName = classnames_1["default"]("dropdown", {
        "dropdown dropdown__list": !isHeader,
        "dropdown__list dropdown__list--header dropdown--header": isHeader,
        "more-menu__list": isMoreMenu
    });
    var liClassName = classnames_1["default"]({
        "dropdown__list-item": !isHeader,
        "dropdown__list-item dropdown__list-item--header": isHeader,
        "more-menu__list-item": isMoreMenu
    });
    return (react_1["default"].createElement("div", { className: "more-menu__wrapper" },
        react_1["default"].createElement("ul", { className: ulClassName },
            react_1["default"].createElement("li", { className: liClassName }, react_1["default"].Children.map(children, function (child) {
                return react_1["default"].cloneElement(child, {
                    handleToggle: handleToggle,
                    toggled: toggled
                });
            })))));
};
More.defaultProps = {
    isHeader: false,
    isMoreMenu: false,
    onClose: function () { return void 0; }
};
More.Avatar = MoreAvatar_1["default"];
More.Content = MoreContent_1["default"];
exports["default"] = More;
