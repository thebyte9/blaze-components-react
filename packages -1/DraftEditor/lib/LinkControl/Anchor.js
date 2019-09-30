"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Anchor = function (props) {
    var url = props.contentState
        .getEntity(props.entityKey)
        .getData().url;
    return (react_1["default"].createElement("a", { rel: "nofollow noreferrer", href: url, target: "_blank" }, props.children));
};
exports["default"] = Anchor;
