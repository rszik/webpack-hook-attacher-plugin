"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = exports.OperationParameter = exports.HookType = exports.TapType = void 0;
const classes_1 = require("../classes");
const options_1 = require("../options");
var TapType;
(function (TapType) {
    TapType["NotSet"] = "notSet";
    TapType["Tap"] = "tap";
    TapType["TapAsync"] = "tapAsync";
    TapType["TapPromise"] = "tapPromise";
})(TapType = exports.TapType || (exports.TapType = {}));
var HookType;
(function (HookType) {
    HookType["CompilerHook"] = "CompilerHook";
    HookType["CompilationHook"] = "CompilationHook";
    HookType["JavascriptParserHook"] = "JavascriptParserHook";
})(HookType = exports.HookType || (exports.HookType = {}));
class OperationParameter {
    constructor() {
        this.additionalName = null;
        this.verbose = null;
        this.silent = null;
        this.asyncDefaultTapType = TapType.NotSet;
        this.tapForParameter = null;
    }
}
exports.OperationParameter = OperationParameter;
class Operation {
    constructor() {
        this.firstOperationInTheHook = false;
        this.lastOperationInTheHook = false;
        this.hookName = '';
        this.compilerHookCallbackParameters = new options_1.CompilerHookCallbackParameters();
        this.compilationHookCallbackParameters = new options_1.CompilationHookCallbackParameters();
        this.javascriptParserHookCallbackParameters = new options_1.JavascriptParserHookCallbackParameters();
    }
    runWrapper(operation, funcToWrap) {
        this.initConsoleLoggerToCurrentOperation();
        if (operation.firstOperationInTheHook) {
            classes_1.ConsoleLogger.consoleInfo(`Running ${classes_1.Utils.capitalizeFirstLetter(this.hookName)} Operations`, null, true);
        }
        let postFix = this.params.additionalName != null ? ' - ' + this.params.additionalName : '';
        classes_1.ConsoleLogger.consoleInfo(`Start   ${this.name}${postFix}`);
        classes_1.ConsoleLogger.consoleDebug(`${this.name} - \nthis.params: ${classes_1.Utils.formattedJSONStringify(this.params)}`);
        try {
            funcToWrap();
        }
        catch (ex) {
            classes_1.ConsoleLogger.consoleError(`${this.name} - ${ex.toString()}`);
            throw ex;
        }
        if (operation.lastOperationInTheHook) {
            classes_1.ConsoleLogger.consoleInfo(`${classes_1.Utils.capitalizeFirstLetter(this.hookName)} Operations Finished`, null, true);
        }
    }
    setParams(params) {
        this.params = params;
    }
    initConsoleLoggerToCurrentOperation() {
        if (this.params.verbose != null) {
            classes_1.ConsoleLogger.verbose = this.params.verbose;
        }
        if (this.params.silent != null) {
            classes_1.ConsoleLogger.silent = this.params.silent;
        }
    }
}
exports.Operation = Operation;
