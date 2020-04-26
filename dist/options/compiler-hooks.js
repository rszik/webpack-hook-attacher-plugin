"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
const options_2 = require("./options");
class CompilerHookNames {
    constructor() {
        this.entryOption = 'entryOption';
        this.afterPlugins = 'afterPlugins';
        this.afterResolvers = 'afterResolvers';
        this.environment = 'environment';
        this.afterEnvironment = 'afterEnvironment';
        this.beforeRun = 'beforeRun';
        this.additionalPass = 'additionalPass';
        this.run = 'run';
        this.watchRun = 'watchRun';
        this.normalModuleFactory = 'normalModuleFactory';
        this.contextModuleFactory = 'contextModuleFactory';
        this.initialize = 'initialize';
        this.beforeCompile = 'beforeCompile';
        this.compile = 'compile';
        this.thisCompilation = 'thisCompilation';
        this.compilation = 'compilation';
        this.make = 'make';
        this.afterCompile = 'afterCompile';
        this.shouldEmit = 'shouldEmit';
        this.emit = 'emit';
        this.afterEmit = 'afterEmit';
        this.assetEmitted = 'assetEmitted';
        this.done = 'done';
        this.failed = 'failed';
        this.invalid = 'invalid';
        this.watchClose = 'watchClose';
        this.infrastructureLog = 'infrastructureLog';
        this.log = 'log';
    }
    static get i() {
        return new CompilerHookNames();
    }
}
exports.CompilerHookNames = CompilerHookNames;
class CompilerHookParameters {
    constructor() {
        this.context = null;
        this.entry = null;
        this.compiler = null;
        this.normalModuleFactory = null;
        this.contextModuleFactory = null;
        this.compilationParams = null;
        this.compilation = null;
        this.file = null;
        this.content = null;
        this.stats = null;
        this.error = null;
        this.fileName = null;
        this.changeTime = null;
        this.name = null;
        this.type = null;
        this.args = null;
        this.origin = null;
    }
}
exports.CompilerHookParameters = CompilerHookParameters;
CompilerHookParameters.CONTEXT = 'context';
CompilerHookParameters.ENTRY = 'entry';
CompilerHookParameters.COMPILER = 'compiler';
CompilerHookParameters.NORMAL_MODULE_FACTORY = 'normalModuleFactory';
CompilerHookParameters.CONTEXT_MODULEF_ACTORY = 'contextModuleFactory';
CompilerHookParameters.COMPILATION_PARAMS = 'compilationParams';
CompilerHookParameters.COMPILATION = 'compilation';
CompilerHookParameters.FILE = 'file';
CompilerHookParameters.CONTENT = 'content';
CompilerHookParameters.STATS = 'stats';
CompilerHookParameters.ERROR = 'error';
CompilerHookParameters.FILE_NAME = 'fileName';
CompilerHookParameters.CHANGE_TIME = 'changeTime';
CompilerHookParameters.NAME = 'name';
CompilerHookParameters.TYPE = 'type';
CompilerHookParameters.ARGS = 'args';
CompilerHookParameters.ORIGIN = 'origin';
CompilerHookParameters.LOG_ENTRY = 'logEntry';
class CompilerHookInitializer {
    static initHooks(container) {
        container.entryOption = new options_1.CompilerHook(CompilerHookNames.i.entryOption, options_2.WebpackHookType.SyncBailHook, [CompilerHookParameters.CONTEXT, CompilerHookParameters.ENTRY]);
        container.afterPlugins = new options_1.CompilerHook(CompilerHookNames.i.afterPlugins, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.COMPILER]);
        container.afterResolvers = new options_1.CompilerHook(CompilerHookNames.i.afterResolvers, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.COMPILER]);
        container.environment = new options_1.CompilerHook(CompilerHookNames.i.environment, options_2.WebpackHookType.SyncHook, []);
        container.afterEnvironment = new options_1.CompilerHook(CompilerHookNames.i.afterEnvironment, options_2.WebpackHookType.SyncHook, []);
        container.beforeRun = new options_1.CompilerHook(CompilerHookNames.i.beforeRun, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.COMPILER]);
        container.additionalPass = new options_1.CompilerHook(CompilerHookNames.i.additionalPass, options_2.WebpackHookType.AsyncSeriesHook, []);
        container.run = new options_1.CompilerHook(CompilerHookNames.i.run, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.COMPILER]);
        container.watchRun = new options_1.CompilerHook(CompilerHookNames.i.watchRun, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.COMPILER]);
        container.normalModuleFactory = new options_1.CompilerHook_With_JavascriptParserHookHooks(CompilerHookNames.i.normalModuleFactory, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.NORMAL_MODULE_FACTORY]);
        container.contextModuleFactory = new options_1.CompilerHook(CompilerHookNames.i.contextModuleFactory, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.CONTEXT_MODULEF_ACTORY]);
        container.initialize = new options_1.CompilerHook(CompilerHookNames.i.initialize, options_2.WebpackHookType.SyncHook, []);
        container.beforeCompile = new options_1.CompilerHook_With_JavascriptParserHookHooks(CompilerHookNames.i.beforeCompile, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.COMPILATION_PARAMS]);
        container.compile = new options_1.CompilerHook_With_JavascriptParserHookHooks(CompilerHookNames.i.compile, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.COMPILATION_PARAMS]);
        container.thisCompilation = new options_1.CompilerHook_With_CompilationHooks_JavascriptParserHooks(CompilerHookNames.i.thisCompilation, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.COMPILATION, CompilerHookParameters.COMPILATION_PARAMS]);
        container.compilation = new options_1.CompilerHook_With_CompilationHooks_JavascriptParserHooks(CompilerHookNames.i.compilation, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.COMPILATION, CompilerHookParameters.COMPILATION_PARAMS]);
        container.make = new options_1.CompilerHook_With_CompilationHooks(CompilerHookNames.i.make, options_2.WebpackHookType.AsyncParallelHook, [CompilerHookParameters.COMPILATION]);
        container.afterCompile = new options_1.CompilerHook_With_CompilationHooks(CompilerHookNames.i.afterCompile, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.COMPILATION]);
        container.shouldEmit = new options_1.CompilerHook_With_CompilationHooks(CompilerHookNames.i.shouldEmit, options_2.WebpackHookType.SyncBailHook, [CompilerHookParameters.COMPILATION]);
        container.emit = new options_1.CompilerHook_With_CompilationHooks(CompilerHookNames.i.emit, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.COMPILATION]);
        container.afterEmit = new options_1.CompilerHook_With_CompilationHooks(CompilerHookNames.i.afterEmit, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.COMPILATION]);
        container.assetEmitted = new options_1.CompilerHook(CompilerHookNames.i.assetEmitted, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.FILE, CompilerHookParameters.CONTENT]);
        container.done = new options_1.CompilerHook(CompilerHookNames.i.done, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookParameters.STATS]);
        container.failed = new options_1.CompilerHook(CompilerHookNames.i.failed, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.ERROR]);
        container.invalid = new options_1.CompilerHook(CompilerHookNames.i.invalid, options_2.WebpackHookType.SyncHook, [CompilerHookParameters.FILE_NAME, CompilerHookParameters.CHANGE_TIME]);
        container.watchClose = new options_1.CompilerHook(CompilerHookNames.i.watchClose, options_2.WebpackHookType.SyncHook, []);
        container.infrastructureLog = new options_1.CompilerHook(CompilerHookNames.i.infrastructureLog, options_2.WebpackHookType.SyncBailHook, [CompilerHookParameters.NAME, CompilerHookParameters.TYPE, CompilerHookParameters.ARGS]);
        container.log = new options_1.CompilerHook(CompilerHookNames.i.log, options_2.WebpackHookType.SyncBailHook, [CompilerHookParameters.ORIGIN, CompilerHookParameters.LOG_ENTRY]);
    }
}
exports.CompilerHookInitializer = CompilerHookInitializer;
