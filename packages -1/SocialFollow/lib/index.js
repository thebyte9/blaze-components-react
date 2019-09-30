"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var SocialFollow = function (_a) {
    var media = _a.media, title = _a.title, vertical = _a.vertical, type = _a.type;
    var socialConf = {
        facebook: {
            "class": "facebook",
            icon: "fab fa-facebook-f",
            name: "Facebook"
        },
        instagram: {
            "class": "instagram",
            icon: "fab fa-instagram",
            isFollowing: true,
            name: "Instagram"
        },
        linkedIn: {
            "class": "linkedin",
            icon: "fab fa-linkedin-in",
            name: "Linkedin"
        },
        pinterest: {
            "class": "pinterest",
            icon: "fab fa-pinterest-p",
            name: "Pinterest"
        },
        twitter: {
            "class": "twitter",
            icon: "fab fa-twitter",
            name: "Twitter"
        },
        youtube: {
            "class": "youtube",
            icon: "fab fa-youtube",
            isFollowing: true,
            name: "Youtube"
        }
    };
    var renderSocial = Object.keys(media).map(function (key) {
        if (type !== "follow" && socialConf[key].isFollowing) {
            return null;
        }
        return (react_1["default"].createElement("li", { key: key, className: "social__list-item social__list-item--" + type },
            react_1["default"].createElement("a", { href: media[key], rel: "noopener noreferrer", target: "_blank", className: socialConf[key]["class"] },
                react_1["default"].createElement("i", { className: socialConf[key].icon }),
                react_1["default"].createElement("span", { className: "hidden" }, socialConf[key].name))));
    });
    return (react_1["default"].createElement("div", { className: "social social--" + type + " " + (vertical ? "social--vertical" : "") },
        title && react_1["default"].createElement("p", null, title),
        react_1["default"].createElement("ul", { className: "social__list social__list--" + type + " " + (vertical ? "social__list--vertical" : "") }, renderSocial)));
};
SocialFollow.defaultProps = {
    title: "",
    type: "share",
    vertical: false
};
exports["default"] = SocialFollow;
