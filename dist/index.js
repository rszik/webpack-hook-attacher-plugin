"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
    initHookGroup(operationListContainer, hookName, tapable) {
        let operations = operationListContainer.operations;
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
            this.setOperationTapType(operationListContainer, operation);
            let toTap = tapable.hooks[hookName];
            if (operation.params.javascriptParserHookForParameter != null) {
                toTap = toTap.for(operation.params.javascriptParserHookForParameter);
            }
            switch (operation.tapType) {
                case operation_base_classes_1.TapType.Tap:
                    toTap.tap(hookName, (...params) => {
                        this.attachChildHooksIfNecessary(operationListContainer, operation, params);
                        this.onOperations(operation);
                    });
                    break;
                case operation_base_classes_1.TapType.TapAsync:
                    toTap.tapAsync(hookName, (...params) => {
                        let callback = params.pop();
                        this.attachChildHooksIfNecessary(operationListContainer, operation, params);
                        this.onOperationsAsync(operation, callback);
                    });
                    break;
                case operation_base_classes_1.TapType.TapPromise:
                    toTap.tapPromise(hookName, (...params) => {
                        this.attachChildHooksIfNecessary(operationListContainer, operation, params);
                        this.onOperationsPromise(operation);
                    });
                    break;
            }
        });
    }
    getTapable(operationListContainer, operation = null) {
        if (operationListContainer.hookType === operation_1.HookType.CompilerHook) {
            return this.compilerInstance;
        }
        else if (operationListContainer.hookType === operation_1.HookType.CompilationHook) {
            if (!operation.compilerHookParameters.compilation) {
                classes_1.ConsoleLogger.consoleError('Not a hook with compilation parameter');
            }
            return operation.compilerHookParameters.compilation;
        }
        else if (operationListContainer.hookType === operation_1.HookType.JavascriptParserHook) {
            let parserHookContainer;
            if (operation.compilerHookParameters.normalModuleFactory != null) {
                parserHookContainer = operation.compilerHookParameters.normalModuleFactory.hooks.parser;
            }
            else if (operation.compilerHookParameters.compilationParams != null) {
                parserHookContainer = operation.compilerHookParameters.compilationParams.normalModuleFactory.hooks.parser;
            }
            if (!parserHookContainer) {
                classes_1.ConsoleLogger.consoleError('Not a hook with parserHookContainer');
            }
            return parserHookContainer;
        }
    }
    attachChildHooksIfNecessary(operationListContainer, operation, params) {
        this.setOperationParams(operationListContainer, operation, params);
        if (operationListContainer.hookType === operation_1.HookType.CompilerHook) {
            this.initHookGroups(operationListContainer, operation);
        }
    }
    initHookGroups(operationListContainer, operation = null) {
        this.getHookOperationContainer(operationListContainer).forEach((childHookName) => {
            let childOperationListContainer = operationListContainer[childHookName];
            if (childOperationListContainer.operations.length > 0) {
                let childTapable = this.getTapable(childOperationListContainer, operation);
                this.initHookGroup(childOperationListContainer, childHookName, childTapable);
            }
        });
    }
    setOperationTapType(operationListContainer, operation) {
        switch (operationListContainer.webpackHookType) {
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
                throw new Error('Invlaid HookType' + operationListContainer.webpackHookType);
        }
    }
    setOperationParams(operationListContainer, operation, params) {
        operationListContainer.parameterNames.forEach((hookTypeParameterName, index) => {
            switch (operationListContainer.hookType) {
                case operation_1.HookType.CompilerHook:
                    operation.compilerHookParameters[hookTypeParameterName] = params[index];
                    break;
                case operation_1.HookType.CompilationHook:
                    operation.compilationHookParameters[hookTypeParameterName] = params[index];
                    break;
                case operation_1.HookType.JavascriptParserHook:
                    operation.javascriptParserHookParameters[hookTypeParameterName] = params[index];
                    break;
                default:
                    throw new Error('Invalid OperationListContainer Type: ' + operationListContainer.constructor.toString());
            }
        });
    }
    getHookOperationContainer(obj) {
        let res = [];
        Object.keys(obj).forEach((key) => {
            let value = obj[key];
            if (value instanceof options_1.OperationListContainer) {
                res.push(key);
            }
        });
        return res;
    }
}
exports.WebpackHookAttacherPlugin = WebpackHookAttacherPlugin;
var options_2 = require("./options");
exports.Options = options_2.Options;
var operation_base_classes_2 = require("./operation-base-classes");
exports.TapType = operation_base_classes_2.TapType;
__export(require("./operation-base-classes"));
__export(require("./classes"));
