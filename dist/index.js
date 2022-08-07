"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapType = exports.HookBase = exports.Options = exports.WebpackHookAttacherPlugin = void 0;
const classes_1 = require("./classes");
const options_1 = require("./options");
const operation_base_classes_1 = require("./operation-base-classes");
const operation_1 = require("./operation-base-classes/operation");
class WebpackHookAttacherPlugin {
    constructor(userOptions) {
        this.options = classes_1.Utils.mergeUserSettingsToDeafultSetting(userOptions, new options_1.Options());
        classes_1.ConsoleLogger.verbose = this.options.verbose;
        classes_1.ConsoleLogger.silent = this.options.silent;
    }
    apply(compilerAnyInstance) {
        this.compilerInstance = compilerAnyInstance;
        this.initHookGroups(this.options);
    }
    onOperations(operation) {
        try {
            operation.run();
        }
        catch (error) {
            classes_1.ConsoleLogger.consoleError(error);
        }
    }
    onOperationsAsync(operation, callback) {
        try {
            operation.run();
        }
        catch (error) {
            classes_1.ConsoleLogger.consoleError(error);
        }
        callback();
    }
    onOperationsPromise(operation) {
        return new Promise((resolve, reject) => {
            try {
                operation.run();
                resolve();
            }
            catch (error) {
                classes_1.ConsoleLogger.consoleError(error);
                reject(error);
            }
        });
    }
    initHookGroup(hook, hookName, tapable) {
        let operations = hook.operations;
        if (operations.length > 0) {
            operations[0].firstOperationInTheHook = true;
            operations[operations.length - 1].lastOperationInTheHook = true;
        }
        operations.forEach((operation) => {
            operation.hookName = hookName;
            if (operation.params.silent == null) {
                operation.params.silent = this.options.silent;
            }
            if (operation.params.verbose == null) {
                operation.params.verbose = this.options.verbose;
            }
            if (operation.params.asyncDefaultTapType === operation_base_classes_1.TapType.NotSet) {
                operation.params.asyncDefaultTapType = this.options.asyncDefaultTapType;
            }
            this.setOperationTapType(hook, operation);
            let toTap = tapable.hooks[hookName];
            if (hook instanceof options_1.JavascriptParserHook) {
                if (hook.forIsMandatory && operation.params.tapForParameter == null) {
                    classes_1.ConsoleLogger.consoleError('`tapForParameter` is mandatory for this JavascriptParserHook: ' + hookName);
                }
            }
            if (operation.params.tapForParameter != null) {
                toTap = toTap.for(operation.params.tapForParameter);
            }
            switch (operation.tapType) {
                case operation_base_classes_1.TapType.Tap:
                    toTap.tap(hookName, (...params) => {
                        this.attachChildHooksIfNecessary(hook, operation, params);
                        this.onOperations(operation);
                    });
                    break;
                case operation_base_classes_1.TapType.TapAsync:
                    toTap.tapAsync(hookName, (...params) => {
                        let callback = params.pop();
                        this.attachChildHooksIfNecessary(hook, operation, params);
                        this.onOperationsAsync(operation, callback);
                    });
                    break;
                case operation_base_classes_1.TapType.TapPromise:
                    toTap.tapPromise(hookName, (...params) => {
                        this.attachChildHooksIfNecessary(hook, operation, params);
                        this.onOperationsPromise(operation);
                    });
                    break;
            }
        });
    }
    getTapable(hook, operation = null) {
        if (hook.hookType === operation_1.HookType.CompilerHook) {
            return this.compilerInstance;
        }
        else if (hook.hookType === operation_1.HookType.CompilationHook) {
            if (!operation.compilerHookCallbackParameters.compilation) {
                classes_1.ConsoleLogger.consoleError('Not a hook with compilation parameter');
            }
            return operation.compilerHookCallbackParameters.compilation;
        }
        else if (hook.hookType === operation_1.HookType.JavascriptParserHook) {
            let parserHookContainer;
            if (operation.compilerHookCallbackParameters.normalModuleFactory != null) {
                parserHookContainer = operation.compilerHookCallbackParameters.normalModuleFactory.hooks.parser;
            }
            else if (operation.compilerHookCallbackParameters.compilationParams != null) {
                parserHookContainer = operation.compilerHookCallbackParameters.compilationParams.normalModuleFactory.hooks.parser;
            }
            if (!parserHookContainer) {
                classes_1.ConsoleLogger.consoleError('Not a hook with parserHookContainer');
            }
            return parserHookContainer;
        }
    }
    attachChildHooksIfNecessary(hook, operation, params) {
        this.setOperationParams(hook, operation, params);
        if (hook.hookType === operation_1.HookType.CompilerHook) {
            this.initHookGroups(hook, operation);
        }
    }
    initHookGroups(hook, operation = null) {
        this.getHookOperationContainer(hook).forEach((childHookName) => {
            let childHook = hook[childHookName];
            if (childHook.operations.length > 0) {
                let childTapable = this.getTapable(childHook, operation);
                this.initHookGroup(childHook, childHookName, childTapable);
            }
        });
    }
    setOperationTapType(hook, operation) {
        switch (hook.webpackHookType) {
            case options_1.WebpackHookType.SyncHook:
            case options_1.WebpackHookType.SyncBailHook:
            case options_1.WebpackHookType.SyncWaterfallHook:
                operation.tapType = operation_base_classes_1.TapType.Tap;
                break;
            case options_1.WebpackHookType.AsyncParallelHook:
            case options_1.WebpackHookType.AsyncSeriesBailHook:
            case options_1.WebpackHookType.AsyncSeriesHook:
            case options_1.WebpackHookType.AsyncWaterfallHook:
                if (operation.params.asyncDefaultTapType !== operation_base_classes_1.TapType.NotSet) {
                    operation.tapType = operation.params.asyncDefaultTapType;
                }
                else {
                    operation.tapType = operation_base_classes_1.TapType.TapAsync;
                }
                break;
            default:
                throw new Error('Invlaid HookType' + hook.webpackHookType);
        }
    }
    setOperationParams(hook, operation, params) {
        hook.callbackParameterNames.forEach((hookTypeParameterName, index) => {
            switch (hook.hookType) {
                case operation_1.HookType.CompilerHook:
                    operation.compilerHookCallbackParameters[hookTypeParameterName] = params[index];
                    break;
                case operation_1.HookType.CompilationHook:
                    operation.compilationHookCallbackParameters[hookTypeParameterName] = params[index];
                    break;
                case operation_1.HookType.JavascriptParserHook:
                    operation.javascriptParserHookCallbackParameters[hookTypeParameterName] = params[index];
                    break;
                default:
                    throw new Error('Invalid hook Type: ' + hook.constructor.toString());
            }
        });
    }
    getHookOperationContainer(obj) {
        let res = [];
        Object.keys(obj).forEach((key) => {
            let value = obj[key];
            if (value instanceof options_1.HookBase) {
                res.push(key);
            }
        });
        return res;
    }
}
exports.WebpackHookAttacherPlugin = WebpackHookAttacherPlugin;
var options_2 = require("./options");
Object.defineProperty(exports, "Options", { enumerable: true, get: function () { return options_2.Options; } });
Object.defineProperty(exports, "HookBase", { enumerable: true, get: function () { return options_2.HookBase; } });
var operation_base_classes_2 = require("./operation-base-classes");
Object.defineProperty(exports, "TapType", { enumerable: true, get: function () { return operation_base_classes_2.TapType; } });
__exportStar(require("./operation-base-classes"), exports);
__exportStar(require("./classes"), exports);
