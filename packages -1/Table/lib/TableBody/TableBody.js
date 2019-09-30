"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var checkboxes_1 = __importDefault(require("@blaze-react/checkboxes"));
var utils_1 = __importDefault(require("@blaze-react/utils"));
var react_1 = __importDefault(require("react"));
var TableBody = function (_a) {
    var allRows = _a.allRows, checkboxes = _a.checkboxes, identification = _a.identification, selected = _a.selected, handleSelected = _a.handleSelected, columns = _a.columns, placeholder = _a.placeholder, uniqueId = _a.utils.uniqueId;
    return (react_1["default"].createElement("tbody", null,
        allRows.map(function (row, key) { return (react_1["default"].createElement("tr", { key: uniqueId(row), "data-testid": "tablerow-" + (key + 1) },
            checkboxes && (react_1["default"].createElement("td", null,
                react_1["default"].createElement(checkboxes_1["default"], { "data-testid": "row-checkbox-" + (key + 1), options: {
                        checked: selected.includes(row[identification]),
                        id: row[identification],
                        value: row[identification]
                    }, onChange: function (_a) {
                        var value = _a.value;
                        return handleSelected(value, row[identification]);
                    } }))),
            columns.map(function (column) { return (react_1["default"].createElement("td", { key: column }, row[column])); }))); }),
        !allRows.length && (react_1["default"].createElement("tr", null,
            react_1["default"].createElement("td", { colSpan: checkboxes ? columns.length + 1 : columns.length, align: "center" }, placeholder)))));
};
exports["default"] = utils_1["default"](TableBody);
