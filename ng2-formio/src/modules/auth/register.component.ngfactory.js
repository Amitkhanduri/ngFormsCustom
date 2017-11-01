"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./register.component");
var i2 = require("../../formio.component.ngfactory");
var i3 = require("../../formio.component");
var i4 = require("../../formio.loader");
var i5 = require("../../formio.alerts");
var i6 = require("../../formio.config");
var i7 = require("./auth.service");
var styles_FormioAuthRegisterComponent = [];
exports.RenderType_FormioAuthRegisterComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_FormioAuthRegisterComponent, data: {} });
function View_FormioAuthRegisterComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'formio', [], null, [[null, 'submit']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (_co.service.onRegisterSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_FormioComponent_0, i2.RenderType_FormioComponent)), i0.ɵdid(638976, null, 0, i3.FormioComponent, [i4.FormioLoader, i5.FormioAlerts, [2, i6.FormioAppConfig]], { src: [0, 'src'] }, { submit: 'submit' })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.service.registerForm;
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
exports.View_FormioAuthRegisterComponent_0 = View_FormioAuthRegisterComponent_0;
function View_FormioAuthRegisterComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_FormioAuthRegisterComponent_0, exports.RenderType_FormioAuthRegisterComponent)), i0.ɵdid(49152, null, 0, i1.FormioAuthRegisterComponent, [i7.FormioAuthService], null, null)], null, null);
}
exports.View_FormioAuthRegisterComponent_Host_0 = View_FormioAuthRegisterComponent_Host_0;
exports.FormioAuthRegisterComponentNgFactory = i0.ɵccf('ng-component', i1.FormioAuthRegisterComponent, View_FormioAuthRegisterComponent_Host_0, {}, {}, []);