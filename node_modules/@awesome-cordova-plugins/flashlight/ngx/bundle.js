'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Flashlight = /** @class */ (function (_super) {
    tslib.__extends(Flashlight, _super);
    function Flashlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flashlight.prototype.available = function () { return core.cordova(this, "available", {}, arguments); };
    Flashlight.prototype.switchOn = function () { return core.cordova(this, "switchOn", {}, arguments); };
    Flashlight.prototype.switchOff = function () { return core.cordova(this, "switchOff", {}, arguments); };
    Flashlight.prototype.toggle = function () { return core.cordova(this, "toggle", {}, arguments); };
    Flashlight.prototype.isSwitchedOn = function () { return core.cordova(this, "isSwitchedOn", { "sync": true }, arguments); };
    Flashlight.pluginName = "Flashlight";
    Flashlight.plugin = "cordova-plugin-flashlight";
    Flashlight.pluginRef = "window.plugins.flashlight";
    Flashlight.repo = "https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin";
    Flashlight.platforms = ["Android", "iOS", "Windows Phone 8"];
    Flashlight.decorators = [
        { type: core$1.Injectable }
    ];
    return Flashlight;
}(core.AwesomeCordovaNativePlugin));

exports.Flashlight = Flashlight;
