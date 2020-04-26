import { ConsoleLogger, Utils } from './classes';
import { Options, OperationListContainer, WebpackHookType } from './options';
import { Operation, TapType } from './operation-base-classes';
import { compiler } from 'webpack';
import { HookType } from './operation-base-classes/operation';


//In case devserver was in watch mode beforeRun didn't run
//There are two way to run webpack: run and watch. The dev-server uses watch.
//The beforeRun hook is only called for run and not for watch.
//You may want to use the compile hook instead.
//https://stackoverflow.com/questions/59116099/why-does-webpack-dev-server-not-execute-compiler-hook
//TODO: add parameter to the options (mode: run/watch), and throw warning if the hook won't run in the given mode

export class HookOperationManagerPlugin {

    private options: Options;
    private compilerInstance: compiler.Compiler;

    constructor(userOptions: Options) {
        this.options = Utils.mergeUserSettingsToDeafultSetting(userOptions, new Options());
        ConsoleLogger.verbose = this.options.verbose;
        ConsoleLogger.silent = this.options.silent;
    }

    apply(compilerAnyInstance: any): void {
        this.compilerInstance = <compiler.Compiler>compilerAnyInstance;
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

    private initHookGroup(operationListContainer: OperationListContainer, hookName: string, tapable: any): void {
        let operations: Operation[] = operationListContainer.operations;

        if (operations.length > 0) {
            operations[0].firstOperationInTheHook = true;
            operations[operations.length - 1].lastOperationInTheHook = true;
        }

        operations.forEach((operation: Operation) => {
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

            this.setOperationTapType(operationListContainer, operation);
            let toTap: any = tapable.hooks[hookName];
            if (operation.params.javascriptParserHookForParameter != null) {
                toTap = toTap.for(operation.params.javascriptParserHookForParameter);
            }
            switch (operation.tapType) {
                case TapType.Tap:
                    toTap.tap(hookName, (...params: any[]): void => {
                        this.attachChildHooksIfNecessary(operationListContainer, operation, params);
                        this.onOperations(operation);
                    });
                    break;
                case TapType.TapAsync:
                    toTap.tapAsync(hookName, (...params: any[]): void => {
                        let callback: Function = params.pop();
                        this.attachChildHooksIfNecessary(operationListContainer, operation, params);
                        this.onOperationsAsync(operation, callback);
                    });
                    break;
                case TapType.TapPromise:
                    toTap.tapPromise(hookName, (...params: any[]): void => {
                        this.attachChildHooksIfNecessary(operationListContainer, operation, params);
                        this.onOperationsPromise(operation);
                    });
                    break;
            }
        });
    }

    private getTapable(operationListContainer: OperationListContainer, operation: Operation = null): any {
        if (operationListContainer.hookType === HookType.CompilerHook) {
            return this.compilerInstance;
        } else if (operationListContainer.hookType === HookType.CompilationHook) {
            if (!operation.compilerHookParameters.compilation) {
                ConsoleLogger.consoleError('Not a hook with compilation parameter');
            }
            return operation.compilerHookParameters.compilation;
        } else if (operationListContainer.hookType === HookType.JavascriptParserHook) {
            let parserHookContainer: any;
            if (operation.compilerHookParameters.normalModuleFactory != null) {
                parserHookContainer = operation.compilerHookParameters.normalModuleFactory.hooks.parser;
            } else if (operation.compilerHookParameters.compilationParams != null) {
                parserHookContainer = operation.compilerHookParameters.compilationParams.normalModuleFactory.hooks.parser;
            }
            if (!parserHookContainer) {
                ConsoleLogger.consoleError('Not a hook with parserHookContainer');
            }
            return parserHookContainer;

        }
    }

    private attachChildHooksIfNecessary(operationListContainer: OperationListContainer, operation: Operation, params: any[]): void {
        this.setOperationParams(operationListContainer, operation, params);
        if (operationListContainer.hookType === HookType.CompilerHook) {
            this.initHookGroups(operationListContainer, operation);
        }
    }

    private initHookGroups(operationListContainer: any, operation: Operation = null): void {
        this.getHookOperationContainer(operationListContainer).forEach((childHookName: string) => {
            let childOperationListContainer: OperationListContainer = operationListContainer[childHookName];
            if (childOperationListContainer.operations.length > 0) {
                let childTapable: any = this.getTapable(childOperationListContainer, operation);
                this.initHookGroup(childOperationListContainer, childHookName, childTapable);
            }
        });
    }

    private setOperationTapType(operationListContainer: OperationListContainer, operation: Operation): void {
        switch (operationListContainer.webpackHookType) {
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
                throw new Error('Invlaid HookType' + operationListContainer.webpackHookType);
        }
    }

    private setOperationParams(operationListContainer: OperationListContainer, operation: Operation, params: any[]): void {
        operationListContainer.parameterNames.forEach((hookTypeParameterName: string, index: number) => {

            switch (operationListContainer.hookType) {
                case HookType.CompilerHook:
                    operation.compilerHookParameters[hookTypeParameterName] = params[index];
                  break;
                case HookType.CompilationHook:
                    operation.compilationHookParameters[hookTypeParameterName] = params[index];
                  break;
                case HookType.JavascriptParserHook:
                    operation.javascriptParserHookParameters[hookTypeParameterName] = params[index];
                  break;
                default:
                    throw new Error('Invalid OperationListContainer Type: ' + operationListContainer.constructor.toString());
            }
        });
    }

    private getHookOperationContainer(obj: any): string[] {
        let res: string[] = [];
        Object.keys(obj).forEach((key: string) => {
            let value: any = obj[key];
            if (value instanceof OperationListContainer) {
                res.push(key);
            }
        });
        return res;
    }

}

export { Options } from './options';
export { TapType } from './operation-base-classes';
export * from './operation-base-classes';
export * from './classes';
