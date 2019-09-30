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
var lodash_orderby_1 = __importDefault(require("lodash.orderby"));
var react_1 = __importStar(require("react"));
var TableBody_1 = __importDefault(require("./TableBody"));
var TableHead_1 = __importDefault(require("./TableHead"));
var Table = function (_a) {
    var _b = _a.data, columns = _b.columns, rows = _b.rows, identification = _b.identification, orderBy = _b.orderBy, _c = _a.onSelect, onSelect = _c === void 0 ? function () { return ({}); } : _c, checkboxes = _a.checkboxes, placeholder = _a.placeholder;
    var asc = "asc";
    var desc = "desc";
    var hide = true;
    var formatColumns = columns.reduce(function (result, item) {
        var _a;
        return __assign({}, result, (_a = {}, _a[item] = hide, _a));
    }, {});
    var _d = react_1.useState([]), selected = _d[0], setSelected = _d[1];
    var _e = react_1.useState(formatColumns), sortColumns = _e[0], setSortColumns = _e[1];
    var _f = react_1.useState(rows), allRows = _f[0], setRows = _f[1];
    react_1.useEffect(function () {
        setRows(rows);
        setSortColumns(formatColumns);
    }, [rows, columns]);
    var handleSelected = function (_a, value, multiselect) {
        var checked = _a[0];
        if (multiselect === void 0) { multiselect = false; }
        var checkedValue = [];
        if (checked && !selected.includes(checked.value)) {
            checkedValue = selected.concat([checked.value]);
        }
        else {
            checkedValue = selected.filter(function (currentValue) { return currentValue !== value; });
        }
        if (multiselect) {
            checkedValue = checked ? checked.value.slice() : [];
        }
        updateSelected(checkedValue);
    };
    var updateSelected = function (selectedRows) {
        setSelected(selectedRows);
        onSelect(selectedRows);
    };
    var getSortDirection = function (column) {
        if (sortColumns[column] === hide) {
            return asc;
        }
        return sortColumns[column] === asc ? desc : asc;
    };
    var sort = function (column) {
        var _a;
        if (!orderBy.includes(column)) {
            return;
        }
        var resetSortColumns = {};
        Object.keys(sortColumns).forEach(function (key) { return (resetSortColumns[key] = hide); });
        var sortDirection = getSortDirection(column);
        setRows(lodash_orderby_1["default"](allRows, [column], [sortDirection]).slice());
        setSortColumns(__assign({}, resetSortColumns, (_a = {}, _a[column] = sortDirection, _a)));
    };
    var enableOrderBy = function (column) { return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("span", { "data-testid": "sortby-" + column, onClick: function () { return sort(column); }, role: "button" }, column),
        sortColumns[column] !== hide && (react_1["default"].createElement("i", { className: "material-icons" }, sortColumns[column] === asc
            ? "keyboard_arrow_up"
            : "keyboard_arrow_down")))); };
    return (react_1["default"].createElement("div", { className: "table-scroll__wrapper" },
        react_1["default"].createElement("div", { className: "table-scroll" },
            react_1["default"].createElement("table", null,
                react_1["default"].createElement(TableHead_1["default"], { checkboxes: checkboxes, selected: selected, identification: identification, allRows: allRows, handleSelected: handleSelected, enableOrderBy: enableOrderBy, sortColumns: sortColumns }),
                react_1["default"].createElement(TableBody_1["default"], { allRows: allRows, checkboxes: checkboxes, identification: identification, selected: selected, handleSelected: handleSelected, columns: columns, placeholder: placeholder })))));
};
Table.defaultProps = {
    checkboxes: false,
    data: {
        columns: [],
        identification: "",
        orderBy: [],
        rows: []
    },
    placeholder: "No records available"
};
exports["default"] = Table;
