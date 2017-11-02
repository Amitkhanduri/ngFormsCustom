"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 =require("@angular/http");
var resource_service_1 = require("./resource.service");
var resource_config_1 = require("./resource.config");
var serviceData;
var FormioResourceCreateComponent = (function () {
    function FormioResourceCreateComponent(service, route, router, config) {
        console.log("Form elements on create page",service);
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
       
        // Start with fresh data.
        this.service.initialize();
        
    }

    // FormioResourceCreateComponent.prototype.onChange = function (event) {
    //     console.log("Event change",event);
    // };
   

    
    FormioResourceCreateComponent.prototype.onSubmit = function (submission) {
        var _this = this;
        this.service.save(submission).then(function () {
            console.log("save service",_this.service)
            _this.router.navigate(['../', _this.service.resource._id, 'view'], { relativeTo: _this.route });
            // _this.router.navigate(['../', _this.service.resource._id, 'edit'], { relativeTo: _this.route });           
        });
    };

    FormioResourceCreateComponent.prototype.onNextPage = function (submission) {
       console.log("next page event data",submission.submission.data);
    //    url="http://";
    //    var responseData=function httpGet(url)
    //    {
    //        var xmlHttp = new XMLHttpRequest();
    //        xmlHttp.open( "GET", url, false ); // false for synchronous request
    //        xmlHttp.send( null );
    //        return xmlHttp.responseText;
    //   var populatedData = submission.submission.data;
    //   populatedData.Address="abc";
    //   console.log("submission.submission.data",populatedData);

    }
   
      // console.log("response data",responseData);
 
    // FormioResourceCreateComponent.prototype.onClick = function (submission) {
    //     var _this = this;
        
    //         _this.router.navigate(['../', 'profile'], { relativeTo: _this.route });
    // };
    
   // rtlTransform[0].dir="rtl";
    FormioResourceCreateComponent.decorators = [
        { type: core_1.Component, args: [{
                    styles: ['.back-button { font-size: 0.8em; }'],
                    template:`<formio [form]="service.form" submission="service.resource" [refresh]="service.refresh" [hideComponents]="config.parents" (submit)="onSubmit($event)" (nextPage)="onNextPage($event)"></formio>`
                },] },
    ];

    //var rtlTransform=document.querySelector("div .choices");
    //console.log("Transformation",rtlTransform);
    // var elm=core_1.ElementRef;
     //var rtlTransform= elm.nativeElement.getAttribute('div'); 
     //console.log("elementRef",rtlTransform)

    
   // rtlTransform[0]["attributes"]["dir"]["value"]="rtl";
   // rtlTransform.setAttribute("dir","rtl");

    /** @nocollapse */
    FormioResourceCreateComponent.ctorParameters = function () { return [
        { type: resource_service_1.FormioResourceService, },
        { type: router_1.ActivatedRoute, },
        { type: router_1.Router, },
        { type: resource_config_1.FormioResourceConfig, },
    ]; };
    return FormioResourceCreateComponent;
    }());

exports.FormioResourceCreateComponent = FormioResourceCreateComponent;
