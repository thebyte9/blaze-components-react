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
var button_1 = __importDefault(require("@blaze-react/button"));
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importStar(require("react"));
var DrawerMainContent_1 = __importDefault(require("./DrawerMainContent"));
var DrawerPageContent_1 = __importDefault(require("./DrawerPageContent"));
var Drawer = utils_1["default"](function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children, modifier = _a.modifier, isResponsive = _a.isResponsive, isPermanent = _a.isPermanent, title = _a.title, classNames = _a.utils.classNames;
    var _f = react_1.useState(isPermanent), menuStatus = _f[0], setMenuStatus = _f[1];
    var DrawerMainContentComponent = children[0], DrawerPageContentComponent = children[1];
    var drawerWrapperClassNames = classNames("drawer__wrapper", (_b = {},
        _b["drawer__wrapper--drawer-" + modifier] = !!modifier,
        _b));
    var drawerTypeClassNames = classNames("drawer", (_c = {
            "drawer--responsive": !!isResponsive,
            open: menuStatus
        },
        _c["drawer--" + modifier] = !!modifier,
        _c));
    var drawerHeaderClassNames = classNames("drawer__header", (_d = {
            "drawer__header--responsive": !!isResponsive
        },
        _d["drawer__header--" + modifier] = !!modifier,
        _d));
    var drawerPageHeaderClassNames = classNames("page__header page__header--drawer", (_e = {
            "page__header--responsive": !!isResponsive
        },
        _e["page__header--opens-" + modifier] = !!modifier,
        _e));
    var handleToggleMenuStatus = function () { return setMenuStatus(!menuStatus); };
    return (react_1["default"].createElement("div", { className: drawerWrapperClassNames },
        react_1["default"].createElement("div", { className: drawerTypeClassNames },
            react_1["default"].createElement("div", { className: "drawer__content-wrapper" },
                react_1["default"].createElement("div", { className: drawerHeaderClassNames }, !isPermanent && (react_1["default"].createElement(button_1["default"], { className: "icon-button", onClick: handleToggleMenuStatus },
                    react_1["default"].createElement("i", { className: "material-icons" }, "keyboard_arrow_" + modifier)))),
                react_1["default"].createElement("div", { className: "drawer__content" }, DrawerMainContentComponent))),
        react_1["default"].createElement("div", { className: "page page--drawer" },
            react_1["default"].createElement("div", { className: drawerPageHeaderClassNames },
                !isPermanent && (react_1["default"].createElement(button_1["default"], { className: "icon-button", onClick: handleToggleMenuStatus },
                    react_1["default"].createElement("i", { className: "material-icons" }, "menu"))),
                title),
            react_1["default"].createElement("div", { className: "page__content page__content--drawer" }, DrawerPageContentComponent))));
});
Drawer.DrawerMainContent = DrawerMainContent_1["default"];
Drawer.DrawerPageContent = DrawerPageContent_1["default"];
Drawer.defaultProps = {
    isPermanent: false,
    isResponsive: false,
    title: ""
};
exports["default"] = Drawer;
