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
export declare abstract class OperationListContainer {
    constructor(hookName: string, webpackHookType: WebpackHookType, parameterNames: string[]);
    abstract hookType: HookType;
    operations: Operation[];
    hookName: string;
    webpackHookType: WebpackHookType;
    parameterNames: string[];
    parent: OperationListContainer;
    addOperations(...operations: Operation[]): void;
}
export declare class CompilerHook extends OperationListContainer {
    hookType: HookType;
}
export declare class CompilationHook extends OperationListContainer {
    hookType: HookType;
    constructor(parent: ICompilationHooksContainer, hookName: string, hookType: WebpackHookType, parameterNames: string[]);
}
export declare class JavascriptParserHook extends OperationListContainer {
    constructor(parent: IJavascriptParserHooksContainer, hookName: string, hookType: WebpackHookType, parameterNames: string[]);
    hookType: HookType;
}
export declare class CompilerHook_With_JavascriptParserHookHooks extends OperationListContainer implements IJavascriptParserHooksContainer {
    constructor(hookName: string, webpackHookType: WebpackHookType, parameterNames: string[]);
    hookType: HookType;
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
    callAnyMember: string | JavascriptParserHook;
    new: string | JavascriptParserHook;
    expression: string | JavascriptParserHook;
    expressionAnyMember: string | JavascriptParserHook;
    expressionConditionalOperator: string | JavascriptParserHook;
    program: string | JavascriptParserHook;
}
export declare class CompilerHook_With_CompilationHooks extends OperationListContainer implements ICompilationHooksContainer {
    constructor(hookName: string, webpackHookType: WebpackHookType, parameterNames: string[]);
    hookType: HookType;
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
}
export declare class CompilerHook_With_CompilationHooks_JavascriptParserHooks extends OperationListContainer implements ICompilationHooksContainer, IJavascriptParserHooksContainer {
    constructor(hookName: string, webpackHookType: WebpackHookType, parameterNames: string[]);
    hookType: HookType;
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
    callAnyMember: string | JavascriptParserHook;
    new: string | JavascriptParserHook;
    expression: string | JavascriptParserHook;
    expressionAnyMember: string | JavascriptParserHook;
    expressionConditionalOperator: string | JavascriptParserHook;
    program: string | JavascriptParserHook;
}
export declare class Options implements ICompilerHooksContainer {
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
    normalModuleFactory: CompilerHook_With_JavascriptParserHookHooks;
    contextModuleFactory: CompilerHook;
    initialize: CompilerHook;
    beforeCompile: CompilerHook_With_JavascriptParserHookHooks;
    compile: CompilerHook_With_JavascriptParserHookHooks;
    thisCompilation: CompilerHook_With_CompilationHooks_JavascriptParserHooks;
    compilation: CompilerHook_With_CompilationHooks_JavascriptParserHooks;
    make: CompilerHook_With_CompilationHooks;
    afterCompile: CompilerHook_With_CompilationHooks;
    shouldEmit: CompilerHook_With_CompilationHooks;
    emit: CompilerHook_With_CompilationHooks;
    afterEmit: CompilerHook_With_CompilationHooks;
    assetEmitted: CompilerHook;
    done: CompilerHook;
    failed: CompilerHook;
    invalid: CompilerHook;
    watchClose: CompilerHook;
    infrastructureLog: CompilerHook;
    log: CompilerHook;
    constructor();
}
