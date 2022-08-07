"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompilerHookInitializer = exports.CompilerHookCallbackParameters = exports.CompilerHookNames = void 0;
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
        this.shutdown = 'shutdown';
        this.infrastructureLog = 'infrastructureLog';
        this.log = 'log';
    }
    static get i() {
        return new CompilerHookNames();
    }
}
exports.CompilerHookNames = CompilerHookNames;
class CompilerHookCallbackParameters {
    constructor() {
        this.context = null;
        this.entry = null;
        this.compiler = null;
        this.normalModuleFactory = null;
        this.contextModuleFactory = null;
        this.compilationParams = null;
        this.compilation = null;
        this.file = null;
        this.stats = null;
        this.error = null;
        this.fileName = null;
        this.changeTime = null;
        this.name = null;
        this.type = null;
        this.args = null;
        this.origin = null;
        this.logEntry = null;
        this.info = null;
    }
}
exports.CompilerHookCallbackParameters = CompilerHookCallbackParameters;
CompilerHookCallbackParameters.CONTEXT = 'context';
CompilerHookCallbackParameters.ENTRY = 'entry';
CompilerHookCallbackParameters.COMPILER = 'compiler';
CompilerHookCallbackParameters.NORMAL_MODULE_FACTORY = 'normalModuleFactory';
CompilerHookCallbackParameters.CONTEXT_MODULEF_ACTORY = 'contextModuleFactory';
CompilerHookCallbackParameters.COMPILATION_PARAMS = 'compilationParams';
CompilerHookCallbackParameters.COMPILATION = 'compilation';
CompilerHookCallbackParameters.FILE = 'file';
CompilerHookCallbackParameters.STATS = 'stats';
CompilerHookCallbackParameters.ERROR = 'error';
CompilerHookCallbackParameters.FILE_NAME = 'fileName';
CompilerHookCallbackParameters.CHANGE_TIME = 'changeTime';
CompilerHookCallbackParameters.NAME = 'name';
CompilerHookCallbackParameters.TYPE = 'type';
CompilerHookCallbackParameters.ARGS = 'args';
CompilerHookCallbackParameters.ORIGIN = 'origin';
CompilerHookCallbackParameters.LOG_ENTRY = 'logEntry';
CompilerHookCallbackParameters.INFO = 'info';
class CompilerHookInitializer {
    static initHooks(container) {
        container.environment = new options_1.CompilerHook(CompilerHookNames.i.environment, options_2.WebpackHookType.SyncHook, []);
        container.afterEnvironment = new options_1.CompilerHook(CompilerHookNames.i.afterEnvironment, options_2.WebpackHookType.SyncHook, []);
        container.entryOption = new options_1.CompilerHook(CompilerHookNames.i.entryOption, options_2.WebpackHookType.SyncBailHook, [CompilerHookCallbackParameters.CONTEXT, CompilerHookCallbackParameters.ENTRY]);
        container.afterPlugins = new options_1.CompilerHook(CompilerHookNames.i.afterPlugins, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILER]);
        container.afterResolvers = new options_1.CompilerHook(CompilerHookNames.i.afterResolvers, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILER]);
        container.initialize = new options_1.CompilerHook(CompilerHookNames.i.initialize, options_2.WebpackHookType.SyncHook, []);
        container.beforeRun = new options_1.CompilerHook(CompilerHookNames.i.beforeRun, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILER]);
        container.run = new options_1.CompilerHook(CompilerHookNames.i.run, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILER]);
        container.watchRun = new options_1.CompilerHook(CompilerHookNames.i.watchRun, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILER]);
        container.normalModuleFactory = new options_1.CompilerHook(CompilerHookNames.i.normalModuleFactory, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.NORMAL_MODULE_FACTORY]);
        container.contextModuleFactory = new options_1.CompilerHook(CompilerHookNames.i.contextModuleFactory, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.CONTEXT_MODULEF_ACTORY]);
        container.beforeCompile = new options_1.CompilerHook(CompilerHookNames.i.beforeCompile, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILATION_PARAMS]);
        container.compile = new options_1.CompilerHook(CompilerHookNames.i.compile, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILATION_PARAMS]);
        container.thisCompilation = new options_1.CompilerHook(CompilerHookNames.i.thisCompilation, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILATION, CompilerHookCallbackParameters.COMPILATION_PARAMS]);
        container.compilation = new options_1.CompilerHook(CompilerHookNames.i.compilation, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILATION, CompilerHookCallbackParameters.COMPILATION_PARAMS]);
        container.make = new options_1.CompilerHook(CompilerHookNames.i.make, options_2.WebpackHookType.AsyncParallelHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.afterCompile = new options_1.CompilerHook(CompilerHookNames.i.afterCompile, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.shouldEmit = new options_1.CompilerHook(CompilerHookNames.i.shouldEmit, options_2.WebpackHookType.SyncBailHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.emit = new options_1.CompilerHook(CompilerHookNames.i.emit, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.afterEmit = new options_1.CompilerHook(CompilerHookNames.i.afterEmit, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.assetEmitted = new options_1.CompilerHook(CompilerHookNames.i.assetEmitted, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.FILE, CompilerHookCallbackParameters.INFO]);
        container.done = new options_1.CompilerHook(CompilerHookNames.i.done, options_2.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.STATS]);
        container.additionalPass = new options_1.CompilerHook(CompilerHookNames.i.additionalPass, options_2.WebpackHookType.AsyncSeriesHook, []);
        container.failed = new options_1.CompilerHook(CompilerHookNames.i.failed, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.ERROR]);
        container.invalid = new options_1.CompilerHook(CompilerHookNames.i.invalid, options_2.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.FILE_NAME, CompilerHookCallbackParameters.CHANGE_TIME]);
        container.watchClose = new options_1.CompilerHook(CompilerHookNames.i.watchClose, options_2.WebpackHookType.SyncHook, []);
        container.shutdown = new options_1.CompilerHook(CompilerHookNames.i.shutdown, options_2.WebpackHookType.AsyncSeriesHook, []);
        container.infrastructureLog = new options_1.CompilerHook(CompilerHookNames.i.infrastructureLog, options_2.WebpackHookType.SyncBailHook, [CompilerHookCallbackParameters.NAME, CompilerHookCallbackParameters.TYPE, CompilerHookCallbackParameters.ARGS]);
        container.log = new options_1.CompilerHook(CompilerHookNames.i.log, options_2.WebpackHookType.SyncBailHook, [CompilerHookCallbackParameters.ORIGIN, CompilerHookCallbackParameters.LOG_ENTRY]);
    }
}
exports.CompilerHookInitializer = CompilerHookInitializer;
