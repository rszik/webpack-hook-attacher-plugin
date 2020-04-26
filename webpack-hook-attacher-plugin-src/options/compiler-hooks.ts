import { Compiler, Entry, compilation, Stats } from 'webpack';
import { LogType } from 'webpack/lib/logging/Logger';
import { CompilerHook, CompilerHook_With_JavascriptParserHookHooks as CompilerHook_With_JavascriptParserHooks, CompilerHook_With_CompilationHooks_JavascriptParserHooks, CompilerHook_With_CompilationHooks } from './options';
import { WebpackHookType} from './options';

// https://webpack.js.org/api/compiler-hooks/#entryoption

export interface ICompilerHooksContainer {

    entryOption: CompilerHook | string;
    afterPlugins: CompilerHook | string;
    afterResolvers: CompilerHook | string;
    environment: CompilerHook | string;
    afterEnvironment: CompilerHook | string;
    beforeRun: CompilerHook | string;
    additionalPass: CompilerHook | string;
    run: CompilerHook | string;
    watchRun: CompilerHook | string;
    normalModuleFactory: CompilerHook | string;
    contextModuleFactory: CompilerHook | string;
    initialize: CompilerHook | string;
    beforeCompile: CompilerHook | string;
    compile: CompilerHook | string;
    thisCompilation: CompilerHook | string;
    compilation: CompilerHook | string;
    make: CompilerHook | string;
    afterCompile: CompilerHook | string;
    shouldEmit: CompilerHook | string;
    emit: CompilerHook | string;
    afterEmit: CompilerHook | string;
    assetEmitted: CompilerHook | string;
    done: CompilerHook | string;
    failed: CompilerHook | string;
    invalid: CompilerHook | string;
    watchClose: CompilerHook | string;
    infrastructureLog: CompilerHook | string;
    log: CompilerHook | string;
}

export class CompilerHookNames implements ICompilerHooksContainer {
    public entryOption: string = 'entryOption';
    public afterPlugins: string = 'afterPlugins';
    public afterResolvers: string = 'afterResolvers';
    public environment: string = 'environment';
    public afterEnvironment: string = 'afterEnvironment';
    public beforeRun: string = 'beforeRun';
    public additionalPass: string = 'additionalPass';
    public run: string = 'run';
    public watchRun: string = 'watchRun';
    public normalModuleFactory: string = 'normalModuleFactory';
    public contextModuleFactory: string = 'contextModuleFactory';
    public initialize: string = 'initialize';
    public beforeCompile: string = 'beforeCompile';
    public compile: string = 'compile';
    public thisCompilation: string = 'thisCompilation';
    public compilation: string = 'compilation';
    public make: string = 'make';
    public afterCompile: string = 'afterCompile';
    public shouldEmit: string = 'shouldEmit';
    public emit: string = 'emit';
    public afterEmit: string = 'afterEmit';
    public assetEmitted: string = 'assetEmitted';
    public done: string = 'done';
    public failed: string = 'failed';
    public invalid: string = 'invalid';
    public watchClose: string = 'watchClose';
    public infrastructureLog: string = 'infrastructureLog';
    public log: string = 'log';

    public static get i(): CompilerHookNames {
        return new CompilerHookNames();
    }
}

export class CompilerHookParameters {

    public static CONTEXT: string = 'context';
    public static ENTRY: string = 'entry';
    public static COMPILER: string = 'compiler';
    public static NORMAL_MODULE_FACTORY: string = 'normalModuleFactory';
    public static CONTEXT_MODULEF_ACTORY: string = 'contextModuleFactory';
    public static COMPILATION_PARAMS: string = 'compilationParams';
    public static COMPILATION: string = 'compilation';
    public static FILE: string = 'file';
    public static CONTENT: string = 'content';
    public static STATS: string = 'stats';
    public static ERROR: string = 'error';
    public static FILE_NAME: string = 'fileName';
    public static CHANGE_TIME: string = 'changeTime';
    public static NAME: string = 'name';
    public static TYPE: string = 'type';
    public static ARGS: string = 'args';
    public static ORIGIN: string = 'origin';
    public static LOG_ENTRY: string = 'logEntry';


    public context: string = null;
    public entry: Entry = null;
    public compiler: Compiler = null;
    public normalModuleFactory: compilation.NormalModuleFactory  = null;
    public contextModuleFactory: compilation.ContextModuleFactory = null;
    public compilationParams: { normalModuleFactory: compilation.NormalModuleFactory, contextModuleFactory: compilation.ContextModuleFactory } = null;
    public compilation: compilation.Compilation = null;
    public file: string = null;
    public content: Buffer = null;
    public stats: Stats = null;
    public error: Error = null;
    public fileName: string = null;
    public changeTime: Date = null;
    public name: string = null;
    public type: LogType = null;
    public args: any[] = null;
    public origin: string = null;
    //there is no type for logEntry in webpack
    public logEntry: {type: string, args: any[], time: number, trace: string[] };
}

export class CompilerHookInitializer {

    public static initHooks(container: ICompilerHooksContainer): void {
        container.entryOption = new CompilerHook(
            CompilerHookNames.i.entryOption, WebpackHookType.SyncBailHook,
            [CompilerHookParameters.CONTEXT, CompilerHookParameters.ENTRY]);

        container.afterPlugins = new CompilerHook(
            CompilerHookNames.i.afterPlugins, WebpackHookType.SyncHook,
            [CompilerHookParameters.COMPILER]);

        container.afterResolvers = new CompilerHook(
            CompilerHookNames.i.afterResolvers, WebpackHookType.SyncHook,
            [CompilerHookParameters.COMPILER]);

        container.environment = new CompilerHook(
            CompilerHookNames.i.environment, WebpackHookType.SyncHook,
            []);

        container.afterEnvironment = new CompilerHook(
            CompilerHookNames.i.afterEnvironment, WebpackHookType.SyncHook,
            []);

        container.beforeRun = new CompilerHook(
            CompilerHookNames.i.beforeRun, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.COMPILER]);

        container.additionalPass = new CompilerHook(
            CompilerHookNames.i.additionalPass, WebpackHookType.AsyncSeriesHook,
            []);

        container.run = new CompilerHook(
            CompilerHookNames.i.run, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.COMPILER]);

        container.watchRun = new CompilerHook(
            CompilerHookNames.i.watchRun, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.COMPILER]);

        container.normalModuleFactory = new CompilerHook_With_JavascriptParserHooks(
            CompilerHookNames.i.normalModuleFactory, WebpackHookType.SyncHook,
            [CompilerHookParameters.NORMAL_MODULE_FACTORY]);

        container.contextModuleFactory = new CompilerHook(
            CompilerHookNames.i.contextModuleFactory, WebpackHookType.SyncHook,
            [CompilerHookParameters.CONTEXT_MODULEF_ACTORY]);

        container.initialize = new CompilerHook(
            CompilerHookNames.i.initialize, WebpackHookType.SyncHook,
            []);

        container.beforeCompile = new CompilerHook_With_JavascriptParserHooks(
            CompilerHookNames.i.beforeCompile, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.COMPILATION_PARAMS]);

        container.compile = new CompilerHook_With_JavascriptParserHooks(
            CompilerHookNames.i.compile, WebpackHookType.SyncHook,
            [CompilerHookParameters.COMPILATION_PARAMS]);

        container.thisCompilation = new CompilerHook_With_CompilationHooks_JavascriptParserHooks(
            CompilerHookNames.i.thisCompilation, WebpackHookType.SyncHook,
            [CompilerHookParameters.COMPILATION, CompilerHookParameters.COMPILATION_PARAMS]);

        container.compilation = new CompilerHook_With_CompilationHooks_JavascriptParserHooks(
            CompilerHookNames.i.compilation, WebpackHookType.SyncHook,
            [CompilerHookParameters.COMPILATION, CompilerHookParameters.COMPILATION_PARAMS]);

        container.make = new CompilerHook_With_CompilationHooks(
            CompilerHookNames.i.make, WebpackHookType.AsyncParallelHook,
            [CompilerHookParameters.COMPILATION]);

        container.afterCompile = new CompilerHook_With_CompilationHooks(
            CompilerHookNames.i.afterCompile, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.COMPILATION]);

        container.shouldEmit = new CompilerHook_With_CompilationHooks(
            CompilerHookNames.i.shouldEmit, WebpackHookType.SyncBailHook,
            [CompilerHookParameters.COMPILATION]);

        container.emit = new CompilerHook_With_CompilationHooks(
            CompilerHookNames.i.emit, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.COMPILATION]);

        container.afterEmit = new CompilerHook_With_CompilationHooks(
            CompilerHookNames.i.afterEmit, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.COMPILATION]);

        container.assetEmitted = new CompilerHook(
            CompilerHookNames.i.assetEmitted, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.FILE, CompilerHookParameters.CONTENT]);

        container.done = new CompilerHook(
            CompilerHookNames.i.done, WebpackHookType.AsyncSeriesHook,
            [CompilerHookParameters.STATS]);

        container.failed = new CompilerHook(
            CompilerHookNames.i.failed, WebpackHookType.SyncHook,
            [CompilerHookParameters.ERROR]);

        container.invalid = new CompilerHook(
            CompilerHookNames.i.invalid, WebpackHookType.SyncHook,
            [CompilerHookParameters.FILE_NAME, CompilerHookParameters.CHANGE_TIME]);

        container.watchClose = new CompilerHook(
            CompilerHookNames.i.watchClose, WebpackHookType.SyncHook,
            []);

        container.infrastructureLog = new CompilerHook(
            CompilerHookNames.i.infrastructureLog, WebpackHookType.SyncBailHook,
            [CompilerHookParameters.NAME, CompilerHookParameters.TYPE, CompilerHookParameters.ARGS]);

        container.log = new CompilerHook(
            CompilerHookNames.i.log, WebpackHookType.SyncBailHook,
            [CompilerHookParameters.ORIGIN, CompilerHookParameters.LOG_ENTRY]);
    }
}
