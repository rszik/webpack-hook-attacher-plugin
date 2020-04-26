"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_base_classes_1 = require("../operation-base-classes");
const compiler_hooks_1 = require("./compiler-hooks");
const compilation_hooks_1 = require("./compilation-hooks");
const operation_1 = require("../operation-base-classes/operation");
const javascript_parser_hooks_1 = require("./javascript-parser-hooks");
var WebpackHookType;
(function (WebpackHookType) {
    WebpackHookType["SyncHook"] = "syncHook";
    WebpackHookType["SyncBailHook"] = "syncBailHook";
    WebpackHookType["SyncWaterfallHook"] = "syncWaterfallHook";
    WebpackHookType["AsyncSeriesHook"] = "asyncSeriesHook";
    WebpackHookType["AsyncWaterfallHook"] = "asyncWaterfallHook";
    WebpackHookType["AsyncSeriesBailHook"] = "asyncSeriesBailHook";
    WebpackHookType["AsyncParallelHook"] = "asyncParallelHook";
})(WebpackHookType = exports.WebpackHookType || (exports.WebpackHookType = {}));
class ChildOperationWrapperOperation extends operation_base_classes_1.Operation {
    constructor() {
        super();
        this.name = 'ChildOperationWrapperOperation';
        this.setParams(new operation_base_classes_1.OperationParameter());
    }
    run() {
    }
}
exports.ChildOperationWrapperOperation = ChildOperationWrapperOperation;
class OperationListContainer {
    constructor(hookName, webpackHookType, parameterNames) {
        this.operations = [];
        this.parameterNames = [];
        this.hookName = hookName;
        this.webpackHookType = webpackHookType;
        this.parameterNames = parameterNames;
    }
    addOperations(...operations) {
        if (this.parent) {
            this.parent.operations.push(new ChildOperationWrapperOperation());
        }
        this.operations.push(...operations);
    }
}
exports.OperationListContainer = OperationListContainer;
class CompilerHook extends OperationListContainer {
    constructor() {
        super(...arguments);
        this.hookType = operation_1.HookType.CompilerHook;
    }
}
exports.CompilerHook = CompilerHook;
class CompilationHook extends OperationListContainer {
    constructor(parent, hookName, hookType, parameterNames) {
        super(hookName, hookType, parameterNames);
        this.hookType = operation_1.HookType.CompilationHook;
        this.parent = parent;
    }
}
exports.CompilationHook = CompilationHook;
class JavascriptParserHook extends OperationListContainer {
    constructor(parent, hookName, hookType, parameterNames) {
        super(hookName, hookType, parameterNames);
        this.hookType = operation_1.HookType.JavascriptParserHook;
        this.parent = parent;
    }
}
exports.JavascriptParserHook = JavascriptParserHook;
class CompilerHook_With_JavascriptParserHookHooks extends OperationListContainer {
    constructor(hookName, webpackHookType, parameterNames) {
        super(hookName, webpackHookType, parameterNames);
        this.hookType = operation_1.HookType.CompilerHook;
        javascript_parser_hooks_1.JavascriptParserHookInitializer.initHooks(this);
    }
}
exports.CompilerHook_With_JavascriptParserHookHooks = CompilerHook_With_JavascriptParserHookHooks;
class CompilerHook_With_CompilationHooks extends OperationListContainer {
    constructor(hookName, webpackHookType, parameterNames) {
        super(hookName, webpackHookType, parameterNames);
        this.hookType = operation_1.HookType.CompilerHook;
        compilation_hooks_1.CompilationHookInitializer.initHooks(this);
    }
}
exports.CompilerHook_With_CompilationHooks = CompilerHook_With_CompilationHooks;
class CompilerHook_With_CompilationHooks_JavascriptParserHooks extends OperationListContainer {
    constructor(hookName, webpackHookType, parameterNames) {
        super(hookName, webpackHookType, parameterNames);
        this.hookType = operation_1.HookType.CompilerHook;
        compilation_hooks_1.CompilationHookInitializer.initHooks(this);
        javascript_parser_hooks_1.JavascriptParserHookInitializer.initHooks(this);
    }
}
exports.CompilerHook_With_CompilationHooks_JavascriptParserHooks = CompilerHook_With_CompilationHooks_JavascriptParserHooks;
class Options {
    constructor() {
        this.verbose = false;
        this.silent = true;
        this.asyncDefaultTapType = operation_base_classes_1.TapType.NotSet;
        compiler_hooks_1.CompilerHookInitializer.initHooks(this);
    }
}
exports.Options = Options;
