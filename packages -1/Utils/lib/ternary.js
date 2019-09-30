"use strict";
exports.__esModule = true;
var ternary = function (condition, exprIfTrue, exprIfFalse) {
    return !!condition ? exprIfTrue || "" : exprIfFalse || "";
};
exports["default"] = ternary;
