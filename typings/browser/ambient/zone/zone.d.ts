// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/angular/DefinitelyTyped/31e7317c9a0793857109236ef7c7f223305a8aa9/zone/zone.d.ts
declare class Zone {
    constructor(parentZone: Zone, data: any);

    fork(locals: {[key: string]: any}): Zone;
    bind(fn: Function, skipEnqueue?: boolean): void;
    bindOnce(fn: Function): any;
    run(fn: Function, applyTo?: any, applyWith?: any): void;
    isRootZone(): boolean;

    static bindPromiseFn<T extends () => Promise<any>>(fn: T): T;

    static longStackTraceZone: {[key: string]: any};
}