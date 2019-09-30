"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var AccordionContent_1 = __importDefault(require("./AccordionContent"));
var AccordionContentDetails_1 = __importDefault(require("./AccordionContent/AccordionContentDetails"));
var AccordionContentFooter_1 = __importDefault(require("./AccordionContent/AccordionContentFooter"));
var AccordionHeader_1 = __importDefault(require("./AccordionHeader"));
var Accordion = function (_a) {
    var children = _a.children;
    var flex = 'flex';
    var none = 'none';
    var _b = react_1.useState(none), accordionStatus = _b[0], setAccordionStatus = _b[1];
    var header = children[0], content = children[1];
    var isActive = accordionStatus === flex;
    var toggleAccordion = function () { return setAccordionStatus(isActive ? none : flex); };
    return (react_1["default"].createElement("div", { className: "accordion" },
        react_1["default"].createElement("div", { className: "accordion__header" },
            header,
            react_1["default"].createElement("div", { className: "icon-button icon-button--accordion", onClick: toggleAccordion },
                react_1["default"].createElement("i", { className: "material-icons" }, "keyboard_arrow_down"))),
        react_1["default"].createElement("div", { className: "accordion__content-wrapper", style: { display: accordionStatus } }, content)));
};
Accordion.Content = AccordionContent_1["default"];
Accordion.ContentDetails = AccordionContentDetails_1["default"];
Accordion.ContentFooter = AccordionContentFooter_1["default"];
Accordion.Header = AccordionHeader_1["default"];
exports["default"] = Accordion;
