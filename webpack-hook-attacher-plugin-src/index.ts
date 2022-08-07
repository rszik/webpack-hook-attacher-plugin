/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

import { ConsoleLogger, Utils } from './classes';
import { Options, HookBase, WebpackHookType, JavascriptParserHook } from './options';
import { Operation, TapType } from './operation-base-classes';
import { Compiler } from 'webpack';
import { HookType } from './operation-base-classes/operation';


//In case devserver was in watch mode beforeRun didn't run
//There are two way to run webpack: run and watch. The dev-server uses watch.
//The beforeRun hook is only called for run and not for watch.
//You may want to use the compile hook instead.
//https://stackoverflow.com/questions/59116099/why-does-webpack-dev-server-not-execute-compiler-hook
//TODO: add parameter to the options (mode: run/watch), and throw warning if the hook won't run in the given mode
export class WebpackHookAttacherPlugin {

    private options: Options;
    private compilerInstance: Compiler;

    constructor(userOptions: Options) {
        this.options = Utils.mergeUserSettingsToDeafultSetting(userOptions, new Options());
        ConsoleLogger.verbose = this.options.verbose;
        ConsoleLogger.silent = this.options.silent;
    }

    apply(compilerAnyInstance: any): void {
        this.compilerInstance = <Compiler>compilerAnyInstance;
        this.initHookGroups(this.options);
    }

    private onOperations(operation: Operation): void {
        try {
            operation.run();
        } catch (error) {
            ConsoleLogger.consoleError(error);
        }
    }

    private onOperationsAsync(operation: Operation, callback: Function): void {
        try {
            operation.run();
        } catch (error) {
            ConsoleLogger.consoleError(error);
        }
        callback();
    }

    private onOperationsPromise(operation: Operation): Promise<unknown> {
        return new Promise((resolve: Function, reject: Function): void => {
            try {
                operation.run();
                resolve();
            } catch (error) {
                ConsoleLogger.consoleError(error);
                reject(error);
            }
        });
    }

    private initHookGroup(hook: HookBase, hookName: string, tapable: any): void {
        let operations: Operation[] = hook.operations;

        if (operations.length > 0) {
            operations[0].firstOperationInTheHook = true;
            operations[operations.length - 1].lastOperationInTheHook = true;
        }

        operations.forEach((operation: Operation): void => {
            operation.hookName = hookName;
            //set operation param default vaules from options if not set
            if (operation.params.silent == null) {
                operation.params.silent = this.options.silent;
            }
            if (operation.params.verbose == null) {
                operation.params.verbose = this.options.verbose;
            }
            if (operation.params.asyncDefaultTapType === TapType.NotSet) {
                operation.params.asyncDefaultTapType = this.options.asyncDefaultTapType;
            }

            this.setOperationTapType(hook, operation);
            let toTap: any = tapable.hooks[hookName];
            if (hook instanceof JavascriptParserHook) {
                if (hook.forIsMandatory && operation.params.tapForParameter == null) {
                    ConsoleLogger.consoleError('`tapForParameter` is mandatory for this JavascriptParserHook: ' + hookName);
                }
            }
            if (operation.params.tapForParameter != null) {
                toTap = toTap.for(operation.params.tapForParameter);
            }
            switch (operation.tapType) {
                case TapType.Tap:
                    toTap.tap(hookName, (...params: any[]): void => {
                        this.attachChildHooksIfNecessary(hook, operation, params);
                        this.onOperations(operation);
                    });
                    break;
                case TapType.TapAsync:
                    toTap.tapAsync(hookName, (...params: any[]): void => {
                        let callback: Function = params.pop();
                        this.attachChildHooksIfNecessary(hook, operation, params);
                        this.onOperationsAsync(operation, callback);
                    });
                    break;
                case TapType.TapPromise:
                    toTap.tapPromise(hookName, (...params: any[]): void => {
                        this.attachChildHooksIfNecessary(hook, operation, params);
                        this.onOperationsPromise(operation);
                    });
                    break;
            }
        });
    }

    private getTapable(hook: HookBase, operation: Operation = null): any {
        if (hook.hookType === HookType.CompilerHook) {
            return this.compilerInstance;
        } else if (hook.hookType === HookType.CompilationHook) {
            if (!operation.compilerHookCallbackParameters.compilation) {
                ConsoleLogger.consoleError('Not a hook with compilation parameter');
            }
            return operation.compilerHookCallbackParameters.compilation;
        } else if (hook.hookType === HookType.JavascriptParserHook) {
            let parserHookContainer: any;
            if (operation.compilerHookCallbackParameters.normalModuleFactory != null) {
                parserHookContainer = operation.compilerHookCallbackParameters.normalModuleFactory.hooks.parser;
            } else if (operation.compilerHookCallbackParameters.compilationParams != null) {
                parserHookContainer = operation.compilerHookCallbackParameters.compilationParams.normalModuleFactory.hooks.parser;
            }
            if (!parserHookContainer) {
                ConsoleLogger.consoleError('Not a hook with parserHookContainer');
            }
            return parserHookContainer;

        }
    }

    private attachChildHooksIfNecessary(hook: HookBase, operation: Operation, params: any[]): void {
        this.setOperationParams(hook, operation, params);
        if (hook.hookType === HookType.CompilerHook) {
            this.initHookGroups(hook, operation);
        }
    }

    private initHookGroups(hook: any, operation: Operation = null): void {
        this.getHookOperationContainer(hook).forEach((childHookName: string): void => {
            let childHook: HookBase = hook[childHookName];
            if (childHook.operations.length > 0) {
                let childTapable: any = this.getTapable(childHook, operation);
                this.initHookGroup(childHook, childHookName, childTapable);
            }
        });
    }

    private setOperationTapType(hook: HookBase, operation: Operation): void {
        switch (hook.webpackHookType) {
            case WebpackHookType.SyncHook:
            case WebpackHookType.SyncBailHook:
            case WebpackHookType.SyncWaterfallHook:
                operation.tapType = TapType.Tap;
                break;
            case WebpackHookType.AsyncParallelHook:
            case WebpackHookType.AsyncSeriesBailHook:
            case WebpackHookType.AsyncSeriesHook:
            case WebpackHookType.AsyncWaterfallHook:
                if (operation.params.asyncDefaultTapType !== TapType.NotSet) {
                    operation.tapType = operation.params.asyncDefaultTapType;
                } else {
                    operation.tapType = TapType.TapAsync;
                }
                break;
            default:
                throw new Error('Invlaid HookType' + hook.webpackHookType);
        }
    }

    private setOperationParams(hook: HookBase, operation: Operation, params: any[]): void {
        hook.callbackParameterNames.forEach((hookTypeParameterName: string, index: number): void => {

            switch (hook.hookType) {
                case HookType.CompilerHook:
                    operation.compilerHookCallbackParameters[hookTypeParameterName] = params[index];
                    break;
                case HookType.CompilationHook:
                    operation.compilationHookCallbackParameters[hookTypeParameterName] = params[index];
                    break;
                case HookType.JavascriptParserHook:
                    operation.javascriptParserHookCallbackParameters[hookTypeParameterName] = params[index];
                    break;
                default:
                    throw new Error('Invalid hook Type: ' + hook.constructor.toString());
            }
        });
    }

    private getHookOperationContainer(obj: any): string[] {
        let res: string[] = [];
        Object.keys(obj).forEach((key: string): void => {
            let value: any = obj[key];
            if (value instanceof HookBase) {
                res.push(key);
            }
        });
        return res;
    }

}

export { Options, HookBase } from './options';
export { TapType } from './operation-base-classes';
export * from './operation-base-classes';
export * from './classes';
