"use strict";
exports.__esModule = true;
var UniqueId = /** @class */ (function () {
    function UniqueId() {
        var _this = this;
        this.uniqueId = function (element) {
            var key = "uid-" + _this.generateKey(element);
            var allKeys = Object.keys(_this.keys);
            if (allKeys.includes(key)) {
                key = key + "_" + allKeys.length;
            }
            _this.keys[key] = key;
            return key;
        };
        this.keys = {};
    }
    UniqueId.prototype.generateKey = function (element) {
        var key = unescape(encodeURIComponent(JSON.stringify(element)));
        return typeof btoa === "function"
            ? btoa(key)
            : Buffer.from(key).toString("base64");
    };
    return UniqueId;
}());
var uniqId = new UniqueId();
exports["default"] = uniqId.uniqueId;
