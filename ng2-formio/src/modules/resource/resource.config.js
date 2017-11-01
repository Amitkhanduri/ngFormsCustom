"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormioResources = (function () {
    function FormioResources() {
        this.resources = {};
        this.error = new core_1.EventEmitter();
        this.onError = this.error;
        this.resources = {};
    }
    FormioResources.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FormioResources.ctorParameters = function () { return []; };
    return FormioResources;
}());
exports.FormioResources = FormioResources;
var FormioResourceConfig = (function () {
    function FormioResourceConfig() {
    }
    FormioResourceConfig.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FormioResourceConfig.ctorParameters = function () { return []; };
    return FormioResourceConfig;
}());
exports.FormioResourceConfig = FormioResourceConfig;
