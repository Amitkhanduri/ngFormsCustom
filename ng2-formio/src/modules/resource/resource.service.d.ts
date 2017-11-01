import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceConfig, FormioResources, FormioResourceMap } from './resource.config';
import { FormioLoader, FormioAppConfig } from '../../index';
import { FormioRefreshValue } from '../../formio.common';
export declare class FormioResourceService {
    appConfig: FormioAppConfig;
    config: FormioResourceConfig;
    loader: FormioLoader;
    resourcesService: FormioResources;
    form: any;
    resource: any;
    resourceUrl: string;
    formUrl: string;
    formFormio: any;
    formio: any;
    onParents: EventEmitter<Array<Object>>;
    onIndexSelect: EventEmitter<Object>;
    refresh: EventEmitter<FormioRefreshValue>;
    resourceLoading: Promise<any>;
    resourceLoaded: Promise<any>;
    resourceResolve: any;
    resourceReject: any;
    resourceId: string;
    formLoading: Promise<any>;
    formLoaded: Promise<any>;
    formResolve: any;
    formReject: any;
    resources: FormioResourceMap;
    constructor(appConfig: FormioAppConfig, config: FormioResourceConfig, loader: FormioLoader, resourcesService: FormioResources);
    initialize(): void;
    onError(error: any): void;
    onFormError(err: any): void;
    loadForm(): Promise<any>;
    setParents(): void;
    onSubmissionError(err: any): void;
    loadResource(route: ActivatedRoute): Promise<any>;
    save(resource: any): any;
    remove(): any;
}
