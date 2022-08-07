/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { TapType, Operation } from '../operation-base-classes';
import { ICompilerHooksContainer } from './compiler-hooks';
import { ICompilationHooksContainer } from './compilation-hooks';
import { HookType } from '../operation-base-classes/operation';
import { IJavascriptParserHooksContainer } from './javascript-parser-hooks';
export declare enum WebpackHookType {
    SyncHook = "syncHook",
    SyncBailHook = "syncBailHook",
    SyncWaterfallHook = "syncWaterfallHook",
    AsyncSeriesHook = "asyncSeriesHook",
    AsyncWaterfallHook = "asyncWaterfallHook",
    AsyncSeriesBailHook = "asyncSeriesBailHook",
    AsyncParallelHook = "asyncParallelHook"
}
export declare class ChildOperationWrapperOperation extends Operation {
    constructor();
    name: string;
    run(): void;
}
export declare abstract class HookBase {
    constructor(hookName: string, webpackHookType: WebpackHookType, callbackParameterNames: string[]);
    abstract hookType: HookType;
    operations: Operation[];
    hookName: string;
    webpackHookType: WebpackHookType;
    callbackParameterNames: string[];
    addOperations(...operations: Operation[]): void;
}
export declare class CompilerHook extends HookBase {
    hookType: HookType;
}
export declare class CompilationHook extends HookBase {
    hookType: HookType;
}
export declare class JavascriptParserHook extends HookBase {
    constructor(hookName: string, hookType: WebpackHookType, parameterNames: string[], forIsMandatory: boolean);
    hookType: HookType;
    forIsMandatory: boolean;
}
export declare class Options implements ICompilerHooksContainer, IJavascriptParserHooksContainer, ICompilationHooksContainer {
    verbose: boolean;
    silent: boolean;
    asyncDefaultTapType: TapType;
    entryOption: CompilerHook;
    afterPlugins: CompilerHook;
    afterResolvers: CompilerHook;
    environment: CompilerHook;
    afterEnvironment: CompilerHook;
    beforeRun: CompilerHook;
    additionalPass: CompilerHook;
    run: CompilerHook;
    watchRun: CompilerHook;
    normalModuleFactory: CompilerHook;
    contextModuleFactory: CompilerHook;
    initialize: CompilerHook;
    beforeCompile: CompilerHook;
    compile: CompilerHook;
    thisCompilation: CompilerHook;
    compilation: CompilerHook;
    make: CompilerHook;
    afterCompile: CompilerHook;
    shouldEmit: CompilerHook;
    emit: CompilerHook;
    afterEmit: CompilerHook;
    assetEmitted: CompilerHook;
    done: CompilerHook;
    failed: CompilerHook;
    invalid: CompilerHook;
    watchClose: CompilerHook;
    shutdown: CompilerHook;
    infrastructureLog: CompilerHook;
    log: CompilerHook;
    evaluateTypeof: string | JavascriptParserHook;
    evaluate: string | JavascriptParserHook;
    evaluateIdentifier: string | JavascriptParserHook;
    evaluateDefinedIdentifier: string | JavascriptParserHook;
    evaluateCallExpressionMember: string | JavascriptParserHook;
    statement: string | JavascriptParserHook;
    statementIf: string | JavascriptParserHook;
    label: string | JavascriptParserHook;
    import: string | JavascriptParserHook;
    importSpecifier: string | JavascriptParserHook;
    export: string | JavascriptParserHook;
    exportImport: string | JavascriptParserHook;
    exportDeclaration: string | JavascriptParserHook;
    exportExpression: string | JavascriptParserHook;
    exportSpecifier: string | JavascriptParserHook;
    exportImportSpecifier: string | JavascriptParserHook;
    varDeclaration: string | JavascriptParserHook;
    varDeclarationLet: string | JavascriptParserHook;
    varDeclarationConst: string | JavascriptParserHook;
    varDeclarationVar: string | JavascriptParserHook;
    canRename: string | JavascriptParserHook;
    rename: string | JavascriptParserHook;
    assigned: string | JavascriptParserHook;
    assign: string | JavascriptParserHook;
    typeof: string | JavascriptParserHook;
    call: string | JavascriptParserHook;
    new: string | JavascriptParserHook;
    expression: string | JavascriptParserHook;
    expressionConditionalOperator: string | JavascriptParserHook;
    program: string | JavascriptParserHook;
    callMemberChain: string | JavascriptParserHook;
    buildModule: CompilationHook;
    rebuildModule: CompilationHook;
    failedModule: CompilationHook;
    succeedModule: CompilationHook;
    finishModules: CompilationHook;
    finishRebuildingModule: CompilationHook;
    seal: CompilationHook;
    unseal: CompilationHook;
    optimizeDependencies: CompilationHook;
    afterOptimizeDependencies: CompilationHook;
    optimize: CompilationHook;
    optimizeModules: CompilationHook;
    afterOptimizeModules: CompilationHook;
    optimizeChunks: CompilationHook;
    afterOptimizeChunks: CompilationHook;
    optimizeTree: CompilationHook;
    afterOptimizeTree: CompilationHook;
    optimizeChunkModules: CompilationHook;
    afterOptimizeChunkModules: CompilationHook;
    shouldRecord: CompilationHook;
    reviveModules: CompilationHook;
    beforeModuleIds: CompilationHook;
    moduleIds: CompilationHook;
    optimizeModuleIds: CompilationHook;
    afterOptimizeModuleIds: CompilationHook;
    reviveChunks: CompilationHook;
    beforeChunkIds: CompilationHook;
    optimizeChunkIds: CompilationHook;
    afterOptimizeChunkIds: CompilationHook;
    recordModules: CompilationHook;
    recordChunks: CompilationHook;
    beforeHash: CompilationHook;
    afterHash: CompilationHook;
    recordHash: CompilationHook;
    record: CompilationHook;
    beforeModuleAssets: CompilationHook;
    additionalChunkAssets: CompilationHook;
    shouldGenerateChunkAssets: CompilationHook;
    beforeChunkAssets: CompilationHook;
    additionalAssets: CompilationHook;
    optimizeChunkAssets: CompilationHook;
    afterOptimizeChunkAssets: CompilationHook;
    optimizeAssets: CompilationHook;
    afterOptimizeAssets: CompilationHook;
    needAdditionalSeal: CompilationHook;
    afterSeal: CompilationHook;
    chunkHash: CompilationHook;
    moduleAsset: CompilationHook;
    chunkAsset: CompilationHook;
    assetPath: CompilationHook;
    needAdditionalPass: CompilationHook;
    childCompiler: CompilationHook;
    chunkIds: CompilationHook;
    beforeModuleHash: CompilationHook;
    afterModuleHash: CompilationHook;
    processAssets: CompilationHook;
    afterProcessAssets: CompilationHook;
    constructor();
}
