/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { Compilation, Compiler, Entry, Stats } from 'webpack';
import { LogType } from 'webpack/lib/logging/Logger';
import { CompilerHook } from './options';
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
    shutdown: CompilerHook | string;
    infrastructureLog: CompilerHook | string;
    log: CompilerHook | string;
}
export declare class CompilerHookNames implements ICompilerHooksContainer {
    entryOption: string;
    afterPlugins: string;
    afterResolvers: string;
    environment: string;
    afterEnvironment: string;
    beforeRun: string;
    additionalPass: string;
    run: string;
    watchRun: string;
    normalModuleFactory: string;
    contextModuleFactory: string;
    initialize: string;
    beforeCompile: string;
    compile: string;
    thisCompilation: string;
    compilation: string;
    make: string;
    afterCompile: string;
    shouldEmit: string;
    emit: string;
    afterEmit: string;
    assetEmitted: string;
    done: string;
    failed: string;
    invalid: string;
    watchClose: string;
    shutdown: string;
    infrastructureLog: string;
    log: string;
    static get i(): CompilerHookNames;
}
export declare class CompilerHookCallbackParameters {
    static CONTEXT: string;
    static ENTRY: string;
    static COMPILER: string;
    static NORMAL_MODULE_FACTORY: string;
    static CONTEXT_MODULEF_ACTORY: string;
    static COMPILATION_PARAMS: string;
    static COMPILATION: string;
    static FILE: string;
    static STATS: string;
    static ERROR: string;
    static FILE_NAME: string;
    static CHANGE_TIME: string;
    static NAME: string;
    static TYPE: string;
    static ARGS: string;
    static ORIGIN: string;
    static LOG_ENTRY: string;
    static INFO: string;
    context: string;
    entry: Entry;
    compiler: Compiler;
    normalModuleFactory: any;
    contextModuleFactory: any;
    compilationParams: {
        normalModuleFactory: any;
        contextModuleFactory: any;
    };
    compilation: Compilation;
    file: string;
    stats: Stats;
    error: Error;
    fileName: string;
    changeTime: Date;
    name: string;
    type: LogType;
    args: any[];
    origin: string;
    logEntry: any;
    info: any;
}
export declare class CompilerHookInitializer {
    static initHooks(container: ICompilerHooksContainer): void;
}
