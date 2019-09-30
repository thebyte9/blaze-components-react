"use strict";
exports.__esModule = true;
var generateKey = function (element) {
    var key = unescape(encodeURIComponent(JSON.stringify(element)));
    try {
        return btoa(key);
    }
    catch (_a) {
        return Buffer.from(key).toString("base64");
    }
};
var uniqueId = function (element) {
    var keys = {};
    var key = "uid-" + generateKey(element);
    keys[key] = key;
    return key;
};
exports["default"] = uniqueId;
