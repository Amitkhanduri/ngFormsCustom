import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { FormioService } from './formio.service';
import { FormioLoader } from './formio.loader';
import { FormioAlerts } from './formio.alerts';
import { FormioAppConfig } from './formio.config';
import { FormioForm, FormioOptions, FormioRefreshValue } from './formio.common';
export declare class FormioComponent implements OnInit {
    private loader;
    private alerts;
    private config;
    ready: Promise<boolean>;
    readyResolve: any;
    form: FormioForm;
    submission: any;
    src: string;
    url: string;
    service: FormioService;
    options: FormioOptions;
    readOnly: boolean;
    hideComponents: Array<string>;
    refresh: EventEmitter<FormioRefreshValue>;
    render: EventEmitter<Object>;
    customEvent: EventEmitter<Object>;
    submit: EventEmitter<Object>;
    prevPage: EventEmitter<Object>;
    nextPage: EventEmitter<Object>;
    beforeSubmit: EventEmitter<Object>;
    change: EventEmitter<Object>;
    invalid: EventEmitter<boolean>;
    error: EventEmitter<any>;
    formLoad: EventEmitter<any>;
    formioElement: ElementRef;
    private formio;
    constructor(loader: FormioLoader, alerts: FormioAlerts, config: FormioAppConfig);
    setForm(form: FormioForm): void;
    ngOnInit(): void;
    onRefresh(refresh: FormioRefreshValue): void;
    ngOnChanges(changes: any): void;
    onPrevPage(data: any): void;
    onNextPage(data: any): void;
    onSubmit(submission: any, saved: boolean): void;
    onError(err: any): void;
    submitExecute(submission: Object): void;
    submitForm(submission: any): void;
}
