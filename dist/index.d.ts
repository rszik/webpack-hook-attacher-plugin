/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { Options } from './options';
export declare class WebpackHookAttacherPlugin {
    private options;
    private compilerInstance;
    constructor(userOptions: Options);
    apply(compilerAnyInstance: any): void;
    private onOperations;
    private onOperationsAsync;
    private onOperationsPromise;
    private initHookGroup;
    private getTapable;
    private attachChildHooksIfNecessary;
    private initHookGroups;
    private setOperationTapType;
    private setOperationParams;
    private getHookOperationContainer;
}
export { Options, HookBase } from './options';
export { TapType } from './operation-base-classes';
export * from './operation-base-classes';
export * from './classes';
