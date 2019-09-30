"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var checkboxes_1 = __importDefault(require("@blaze-react/checkboxes"));
var chips_1 = __importDefault(require("@blaze-react/chips"));
var input_1 = __importDefault(require("@blaze-react/input"));
var utils_1 = __importDefault(require("@blaze-react/utils"));
var lodash_differencewith_1 = __importDefault(require("lodash.differencewith"));
var lodash_isequal_1 = __importDefault(require("lodash.isequal"));
var lodash_unionby_1 = __importDefault(require("lodash.unionby"));
var react_1 = __importStar(require("react"));
var MultiSelect = function (_a) {
    var _b = _a.data, data = _b.data, keys = _b.filterBy, keyValue = _b.keyValue, identification = _b.identification, _c = _a.utils, ErrorMessage = _c.ErrorMessage, uniqueId = _c.uniqueId, validationMessage = _a.validationMessage, notFoundMessage = _a.notFoundMessage, getSelected = _a.getSelected, placeholder = _a.placeholder, children = _a.children, onChange = _a.onChange, error = _a.error, name = _a.name, selected = _a.selected;
    var _d = react_1.useState([]), dataCopy = _d[0], setDataCopy = _d[1];
    var _e = react_1.useState(false), show = _e[0], setShow = _e[1];
    react_1.useEffect(function () {
        var shouldUpdate = lodash_differencewith_1["default"](dataCopy, data, lodash_isequal_1["default"]).length ||
            lodash_differencewith_1["default"](data, dataCopy, lodash_isequal_1["default"]).length;
        var elementsWithSelected = lodash_unionby_1["default"](selected, data, "id");
        if (!dataCopy || shouldUpdate) {
            setDataCopy(elementsWithSelected.map(function (element) {
                element.show = true;
                return element;
            }));
        }
    }, [data]);
    var setStatus = function (obj, status) {
        return Object.assign({}, obj, { show: status });
    };
    var handleInputChange = function (_a) {
        var event = _a.event, value = _a.value;
        var parsedDataCopy = parseDataCopy(value);
        if (onChange) {
            onChange({ event: event, value: value, name: name });
        }
        setDataCopy(parsedDataCopy);
    };
    var parseDataCopy = function (value) {
        return dataCopy.map(function (copy) {
            return setStatus(copy, !!keys.some(function (key) {
                var copyKey = copy[key].toString().toLowerCase();
                return copyKey.includes(value.toLowerCase());
            }));
        });
    };
    var updateData = function (element, value) {
        var newDataCopy = dataCopy.slice();
        newDataCopy[element].checked = value;
        setDataCopy(newDataCopy);
    };
    var handleKeyDown = function (_a) {
        var keyName = _a.key, value = _a.target.value;
        if (keyName === "Enter") {
            var parsedDataCopy = parseDataCopy(value);
            var elementToAdd = parsedDataCopy.findIndex(function (parsedData) { return parsedData.show; });
            updateData(elementToAdd, true);
        }
    };
    var handleCheckBoxChange = function (_a) {
        var value = _a.value, localData = _a.data;
        setDataCopy(localData);
        getSelected({
            event: {
                target: {
                    name: name,
                    value: value
                }
            }
        });
    };
    var parseCheckBoxOptions = function (elements) {
        return elements.map(function (element) { return (__assign({}, element, { label: element[keyValue] })); });
    };
    var handleDelete = function (id) {
        var elementToDelete = dataCopy.findIndex(function (_a) {
            var itemId = _a.id;
            return itemId === id;
        });
        updateData(elementToDelete, false);
    };
    var handleClearAll = function () {
        var formatedElements = dataCopy.map(function (item) {
            item.checked = false;
            return item;
        });
        setDataCopy(formatedElements);
        setShow(false);
    };
    var handleFocus = function () { return setShow(true); };
    var matchQuery = !!dataCopy.filter(function (item) { return item.show; })
        .length;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "multiselect" },
            dataCopy
                .filter(function (item) { return item.checked; })
                .map(function (selectedValue) { return (react_1["default"].createElement(chips_1["default"], { modifiers: [
                    chips_1["default"].availableModifiers.parent.deletable,
                    chips_1["default"].availableModifiers.parent.small
                ], onDelete: function () { return handleDelete(selectedValue[identification]); }, action: function () { return handleDelete(selectedValue[identification]); }, key: uniqueId(selectedValue) },
                react_1["default"].createElement(chips_1["default"].Label, null, selectedValue[keyValue]),
                react_1["default"].createElement(chips_1["default"].Icon, { modifier: chips_1["default"].availableModifiers.icon["delete"] },
                    react_1["default"].createElement("i", { className: "material-icons" }, "clear")))); }),
            children,
            react_1["default"].createElement(input_1["default"], { placeholder: placeholder, onChange: handleInputChange, onKeyDown: handleKeyDown, onFocus: handleFocus, className: "multiselect__input" }),
            show && (react_1["default"].createElement("div", { className: "multiselect__dropdown" },
                error && react_1["default"].createElement(ErrorMessage, { message: validationMessage }),
                !matchQuery && react_1["default"].createElement("p", null, notFoundMessage),
                react_1["default"].createElement(checkboxes_1["default"], { options: parseCheckBoxOptions(dataCopy), onChange: handleCheckBoxChange }))),
            react_1["default"].createElement("span", { className: "multiselect__clear", onClick: handleClearAll },
                react_1["default"].createElement("i", { className: "material-icons" }, "clear")))));
};
MultiSelect.defaultProps = {
    children: "",
    error: false,
    getSelected: function () { return void 0; },
    notFoundMessage: "No records available",
    onChange: function (arg) {
        return arg;
    },
    placeholder: "Search...",
    validationMessage: "This field is required"
};
exports["default"] = utils_1["default"](MultiSelect);
