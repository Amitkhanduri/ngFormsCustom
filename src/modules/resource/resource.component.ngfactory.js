"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/router");
var i2 = require("@angular/common");
var i3 = require("./resource.component");
var i4 = require("./resource.service");
var styles_FormioResourceComponent = ['ul.nav.nav-tabs[_ngcontent-%COMP%] { margin-bottom: 20px; }',
    '.resource-back-icon[_ngcontent-%COMP%] { font-size: 1.2em; padding: 0.6em; }'];
exports.RenderType_FormioResourceComponent = i0.ɵcrt({ encapsulation: 0,
    styles: styles_FormioResourceComponent, data: {} });
function View_FormioResourceComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 24, 'ul', [['class',
                'nav nav-tabs']], null, null, null, null, null)),
        (_l()(), i0.ɵeld(0, null, null, 2, 'a', [['class', 'pull-left'], ['routerLink',
                '../']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class',
                'glyphicon glyphicon-chevron-left resource-back-icon']], null, null, null, null, null)), (_l()(), i0.ɵeld(0, null, null, 6, 'li', [['role', 'presentation'], ['routerLinkActive', 'active']], null, null, null, null, null)),
        i0.ɵdid(1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef,
            i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, 'routerLinkActive'] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }),
        (_l()(), i0.ɵeld(0, null, null, 2, 'a', [['routerLink', 'view']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, [[2, 4]], 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i0.ɵted(null, ['View'])), (_l()(), i0.ɵeld(0, null, null, 6, 'li', [['role', 'presentation'], ['routerLinkActive',
                'active']], null, null, null, null, null)),
        i0.ɵdid(1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef,
            i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, 'routerLinkActive'] }, null), i0.ɵqud(603979776, 3, { links: 1 }), i0.ɵqud(603979776, 4, { linksWithHrefs: 1 }),
        (_l()(), i0.ɵeld(0, null, null, 2, 'a', [['routerLink', 'edit']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, [[4, 4]], 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i0.ɵted(null, ['Edit'])), (_l()(), i0.ɵeld(0, null, null, 6, 'li', [['role', 'presentation pull-right'], ['routerLinkActive',
                'active']], null, null, null, null, null)),
        i0.ɵdid(1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef,
            i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, 'routerLinkActive'] }, null), i0.ɵqud(603979776, 5, { links: 1 }), i0.ɵqud(603979776, 6, { linksWithHrefs: 1 }),
        (_l()(), i0.ɵeld(0, null, null, 2, 'a', [['routerLink', 'delete']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, [[6, 4]], 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class',
                'glyphicon glyphicon-trash']], null, null, null, null, null)), (_l()(), i0.ɵeld(16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)), i0.ɵdid(212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver,
            [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) {
        var currVal_2 = '../';
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = 'active';
        _ck(_v, 5, 0, currVal_3);
        var currVal_6 = 'view';
        _ck(_v, 9, 0, currVal_6);
        var currVal_7 = 'active';
        _ck(_v, 12, 0, currVal_7);
        var currVal_10 = 'edit';
        _ck(_v, 16, 0, currVal_10);
        var currVal_11 = 'active';
        _ck(_v, 19, 0, currVal_11);
        var currVal_14 = 'delete';
        _ck(_v, 23, 0, currVal_14);
        _ck(_v, 26, 0);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵnov(_v, 2).target;
        var currVal_1 = i0.ɵnov(_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_4 = i0.ɵnov(_v, 9).target;
        var currVal_5 = i0.ɵnov(_v, 9).href;
        _ck(_v, 8, 0, currVal_4, currVal_5);
        var currVal_8 = i0.ɵnov(_v, 16).target;
        var currVal_9 = i0.ɵnov(_v, 16).href;
        _ck(_v, 15, 0, currVal_8, currVal_9);
        var currVal_12 = i0.ɵnov(_v, 23).target;
        var currVal_13 = i0.ɵnov(_v, 23).href;
        _ck(_v, 22, 0, currVal_12, currVal_13);
    });
}
exports.View_FormioResourceComponent_0 = View_FormioResourceComponent_0;
function View_FormioResourceComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_FormioResourceComponent_0, exports.RenderType_FormioResourceComponent)), i0.ɵdid(49152, null, 0, i3.FormioResourceComponent, [i4.FormioResourceService, i1.ActivatedRoute], null, null)], null, null);
}
exports.View_FormioResourceComponent_Host_0 = View_FormioResourceComponent_Host_0;
exports.FormioResourceComponentNgFactory = i0.ɵccf('ng-component', i3.FormioResourceComponent, View_FormioResourceComponent_Host_0, {}, {}, []);
