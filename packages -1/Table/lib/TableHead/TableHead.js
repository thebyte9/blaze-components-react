"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var checkboxes_1 = __importDefault(require("@blaze-react/checkboxes"));
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importDefault(require("react"));
var TableHead = function (_a) {
    var checkboxes = _a.checkboxes, selected = _a.selected, identification = _a.identification, allRows = _a.allRows, handleSelected = _a.handleSelected, enableOrderBy = _a.enableOrderBy, sortColumns = _a.sortColumns, uniqueId = _a.utils.uniqueId;
    return (react_1["default"].createElement("thead", null,
        react_1["default"].createElement("tr", null,
            checkboxes && (react_1["default"].createElement("th", null,
                react_1["default"].createElement(checkboxes_1["default"], { options: Object.assign({}, {
                        checked: selected.length === allRows.length,
                        value: allRows.map(function (row) { return row[identification]; })
                    }), onChange: function (_a) {
                        var value = _a.value;
                        return handleSelected(value, value, true);
                    }, "data-testid": "select_all" }))),
            Object.keys(sortColumns).map(function (column) { return (react_1["default"].createElement("th", { key: uniqueId(column) }, enableOrderBy(column))); }))));
};
exports["default"] = utils_1["default"](TableHead);
