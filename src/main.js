"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
(0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
var width = 10.5;
var height = 20;
var area = width * height;
console.log("Di\u1EC7n t\u00EDch h\u00ECnh ch\u1EEF nh\u1EADt: ".concat(area));
