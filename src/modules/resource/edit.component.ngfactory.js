"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./edit.component");
var i2 = require("../../formio.component.ngfactory");
var i3 = require("../../formio.component");
var i4 = require("../../formio.loader");
var i5 = require("../../formio.alerts");
var i6 = require("../../formio.config");
var i7 = require("./resource.service");
var i8 = require("@angular/router");
var i9 = require("./resource.config");
var styles_FormioResourceEditComponent = [];
exports.RenderType_FormioResourceEditComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_FormioResourceEditComponent, data: {} });
function View_FormioResourceEditComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'formio', [], null, [[null, 'submit']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (_co.onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_FormioComponent_0, i2.RenderType_FormioComponent)), i0.ɵdid(638976, null, 0, i3.FormioComponent, [i4.FormioLoader, i5.FormioAlerts, [2, i6.FormioAppConfig]], { form: [0, 'form'], submission: [1, 'submission'], hideComponents: [2, 'hideComponents'],
            refresh: [3, 'refresh'] }, { submit: 'submit' })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.service.form;
        var currVal_1 = _co.service.resource;
        var currVal_2 = _co.config.parents;
        var currVal_3 = _co.service.refresh;
        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
    }, null);
}
exports.View_FormioResourceEditComponent_0 = View_FormioResourceEditComponent_0;
function View_FormioResourceEditComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_FormioResourceEditComponent_0, exports.RenderType_FormioResourceEditComponent)), i0.ɵdid(49152, null, 0, i1.FormioResourceEditComponent, [i7.FormioResourceService, i8.ActivatedRoute, i8.Router, i9.FormioResourceConfig], null, null)], null, null);
}
exports.View_FormioResourceEditComponent_Host_0 = View_FormioResourceEditComponent_Host_0;
exports.FormioResourceEditComponentNgFactory = i0.ɵccf('ng-component', i1.FormioResourceEditComponent, View_FormioResourceEditComponent_Host_0, {}, {}, []);