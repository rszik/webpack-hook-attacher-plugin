import { TapType, Operation, OperationParameter } from '../operation-base-classes';

import { CompilerHookInitializer, ICompilerHooksContainer } from './compiler-hooks';
import { CompilationHookInitializer, ICompilationHooksContainer } from './compilation-hooks';
import { HookType } from '../operation-base-classes/operation';
import { JavascriptParserHookInitializer, IJavascriptParserHooksContainer } from './javascript-parser-hooks';

export enum WebpackHookType {
    SyncHook = 'syncHook',
    SyncBailHook = 'syncBailHook',
    SyncWaterfallHook = 'syncWaterfallHook',
    AsyncSeriesHook = 'asyncSeriesHook',
    AsyncWaterfallHook = 'asyncWaterfallHook',
    AsyncSeriesBailHook = 'asyncSeriesBailHook',
    AsyncParallelHook = 'asyncParallelHook',
}

export class ChildOperationWrapperOperation extends Operation {
    constructor() {
        super();
        this.setParams(new OperationParameter());
    }

    public name: string = 'ChildOperationWrapperOperation';
    public run(): void {

    }
}

export abstract class OperationListContainer {

    constructor(hookName: string, webpackHookType: WebpackHookType, parameterNames: string[]) {
        this.hookName = hookName;
        this.webpackHookType = webpackHookType;
        this.parameterNames = parameterNames;
    }

    public abstract hookType: HookType;

    public operations: Operation[] = [];
    public hookName: string;
    public webpackHookType: WebpackHookType;
    public parameterNames: string[] = [];

    public parent: OperationListContainer;

    public addOperations(...operations: Operation[]): void {
        if (this.parent) {
            this.parent.operations.push(new ChildOperationWrapperOperation());
        }
        this.operations.push(...operations);
    }
}

export class CompilerHook extends OperationListContainer {

    public hookType: HookType = HookType.CompilerHook;

}

export class CompilationHook extends OperationListContainer {

    public hookType: HookType = HookType.CompilationHook;

    constructor(parent: ICompilationHooksContainer, hookName: string, hookType: WebpackHookType, parameterNames: string[]) {
        super(hookName, hookType, parameterNames);
        this.parent = <OperationListContainer><any>parent;
    }
}

export class JavascriptParserHook extends OperationListContainer {

    constructor(parent: IJavascriptParserHooksContainer, hookName: string, hookType: WebpackHookType, parameterNames: string[]) {
        super(hookName, hookType, parameterNames);
        this.parent = <OperationListContainer><any>parent;
    }

    public hookType: HookType = HookType.JavascriptParserHook;
}

// tslint:disable-next-line: class-name
export class CompilerHook_With_JavascriptParserHookHooks extends OperationListContainer implements IJavascriptParserHooksContainer {

    constructor(hookName: string, webpackHookType: WebpackHookType, parameterNames: string[]) {
        super(hookName, webpackHookType, parameterNames);
        JavascriptParserHookInitializer.initHooks(this);
    }

    public hookType: HookType = HookType.CompilerHook;

    //IJavascriptParserHooksContainer
    public evaluateTypeof: string | JavascriptParserHook;
    public evaluate: string | JavascriptParserHook;
    public evaluateIdentifier: string | JavascriptParserHook;
    public evaluateDefinedIdentifier: string | JavascriptParserHook;
    public evaluateCallExpressionMember: string | JavascriptParserHook;
    public statement: string | JavascriptParserHook;
    public statementIf: string | JavascriptParserHook;
    public label: string | JavascriptParserHook;
    public import: string | JavascriptParserHook;
    public importSpecifier: string | JavascriptParserHook;
    public export: string | JavascriptParserHook;
    public exportImport: string | JavascriptParserHook;
    public exportDeclaration: string | JavascriptParserHook;
    public exportExpression: string | JavascriptParserHook;
    public exportSpecifier: string | JavascriptParserHook;
    public exportImportSpecifier: string | JavascriptParserHook;
    public varDeclaration: string | JavascriptParserHook;
    public varDeclarationLet: string | JavascriptParserHook;
    public varDeclarationConst: string | JavascriptParserHook;
    public varDeclarationVar: string | JavascriptParserHook;
    public canRename: string | JavascriptParserHook;
    public rename: string | JavascriptParserHook;
    public assigned: string | JavascriptParserHook;
    public assign: string | JavascriptParserHook;
    public typeof: string | JavascriptParserHook;
    public call: string | JavascriptParserHook;
    public callAnyMember: string | JavascriptParserHook;
    public new: string | JavascriptParserHook;
    public expression: string | JavascriptParserHook;
    public expressionAnyMember: string | JavascriptParserHook;
    public expressionConditionalOperator: string | JavascriptParserHook;
    public program: string | JavascriptParserHook;

}

// tslint:disable-next-line: class-name
export class CompilerHook_With_CompilationHooks extends OperationListContainer implements ICompilationHooksContainer {

    constructor(hookName: string, webpackHookType: WebpackHookType, parameterNames: string[]) {
        super(hookName, webpackHookType, parameterNames);
        CompilationHookInitializer.initHooks(this);
    }

    public hookType: HookType = HookType.CompilerHook;

    public buildModule: CompilationHook;
    public rebuildModule: CompilationHook;
    public failedModule: CompilationHook;
    public succeedModule: CompilationHook;
    public finishModules: CompilationHook;
    public finishRebuildingModule: CompilationHook;
    public seal: CompilationHook;
    public unseal: CompilationHook;
    public optimizeDependencies: CompilationHook;
    public afterOptimizeDependencies: CompilationHook;
    public optimize: CompilationHook;
    public optimizeModules: CompilationHook;
    public afterOptimizeModules: CompilationHook;
    public optimizeChunks: CompilationHook;
    public afterOptimizeChunks: CompilationHook;
    public optimizeTree: CompilationHook;
    public afterOptimizeTree: CompilationHook;
    public optimizeChunkModules: CompilationHook;
    public afterOptimizeChunkModules: CompilationHook;
    public shouldRecord: CompilationHook;
    public reviveModules: CompilationHook;
    public beforeModuleIds: CompilationHook;
    public moduleIds: CompilationHook;
    public optimizeModuleIds: CompilationHook;
    public afterOptimizeModuleIds: CompilationHook;
    public reviveChunks: CompilationHook;
    public beforeChunkIds: CompilationHook;
    public optimizeChunkIds: CompilationHook;
    public afterOptimizeChunkIds: CompilationHook;
    public recordModules: CompilationHook;
    public recordChunks: CompilationHook;
    public beforeHash: CompilationHook;
    public afterHash: CompilationHook;
    public recordHash: CompilationHook;
    public record: CompilationHook;
    public beforeModuleAssets: CompilationHook;
    public additionalChunkAssets: CompilationHook;
    public shouldGenerateChunkAssets: CompilationHook;
    public beforeChunkAssets: CompilationHook;
    public additionalAssets: CompilationHook;
    public optimizeChunkAssets: CompilationHook;
    public afterOptimizeChunkAssets: CompilationHook;
    public optimizeAssets: CompilationHook;
    public afterOptimizeAssets: CompilationHook;
    public needAdditionalSeal: CompilationHook;
    public afterSeal: CompilationHook;
    public chunkHash: CompilationHook;
    public moduleAsset: CompilationHook;
    public chunkAsset: CompilationHook;
    public assetPath: CompilationHook;
    public needAdditionalPass: CompilationHook;
    public childCompiler: CompilationHook;
}

// tslint:disable-next-line: class-name
export class CompilerHook_With_CompilationHooks_JavascriptParserHooks extends OperationListContainer implements ICompilationHooksContainer, IJavascriptParserHooksContainer {

    constructor(hookName: string, webpackHookType: WebpackHookType, parameterNames: string[]) {
        super(hookName, webpackHookType, parameterNames);
        CompilationHookInitializer.initHooks(this);
        JavascriptParserHookInitializer.initHooks(this);
    }

    public hookType: HookType = HookType.CompilerHook;

    //ICompilationHooksContainer
    public buildModule: CompilationHook;
    public rebuildModule: CompilationHook;
    public failedModule: CompilationHook;
    public succeedModule: CompilationHook;
    public finishModules: CompilationHook;
    public finishRebuildingModule: CompilationHook;
    public seal: CompilationHook;
    public unseal: CompilationHook;
    public optimizeDependencies: CompilationHook;
    public afterOptimizeDependencies: CompilationHook;
    public optimize: CompilationHook;
    public optimizeModules: CompilationHook;
    public afterOptimizeModules: CompilationHook;
    public optimizeChunks: CompilationHook;
    public afterOptimizeChunks: CompilationHook;
    public optimizeTree: CompilationHook;
    public afterOptimizeTree: CompilationHook;
    public optimizeChunkModules: CompilationHook;
    public afterOptimizeChunkModules: CompilationHook;
    public shouldRecord: CompilationHook;
    public reviveModules: CompilationHook;
    public beforeModuleIds: CompilationHook;
    public moduleIds: CompilationHook;
    public optimizeModuleIds: CompilationHook;
    public afterOptimizeModuleIds: CompilationHook;
    public reviveChunks: CompilationHook;
    public beforeChunkIds: CompilationHook;
    public optimizeChunkIds: CompilationHook;
    public afterOptimizeChunkIds: CompilationHook;
    public recordModules: CompilationHook;
    public recordChunks: CompilationHook;
    public beforeHash: CompilationHook;
    public afterHash: CompilationHook;
    public recordHash: CompilationHook;
    public record: CompilationHook;
    public beforeModuleAssets: CompilationHook;
    public additionalChunkAssets: CompilationHook;
    public shouldGenerateChunkAssets: CompilationHook;
    public beforeChunkAssets: CompilationHook;
    public additionalAssets: CompilationHook;
    public optimizeChunkAssets: CompilationHook;
    public afterOptimizeChunkAssets: CompilationHook;
    public optimizeAssets: CompilationHook;
    public afterOptimizeAssets: CompilationHook;
    public needAdditionalSeal: CompilationHook;
    public afterSeal: CompilationHook;
    public chunkHash: CompilationHook;
    public moduleAsset: CompilationHook;
    public chunkAsset: CompilationHook;
    public assetPath: CompilationHook;
    public needAdditionalPass: CompilationHook;
    public childCompiler: CompilationHook;

    //IJavascriptParserHooksContainer
    public evaluateTypeof: string | JavascriptParserHook;
    public evaluate: string | JavascriptParserHook;
    public evaluateIdentifier: string | JavascriptParserHook;
    public evaluateDefinedIdentifier: string | JavascriptParserHook;
    public evaluateCallExpressionMember: string | JavascriptParserHook;
    public statement: string | JavascriptParserHook;
    public statementIf: string | JavascriptParserHook;
    public label: string | JavascriptParserHook;
    public import: string | JavascriptParserHook;
    public importSpecifier: string | JavascriptParserHook;
    public export: string | JavascriptParserHook;
    public exportImport: string | JavascriptParserHook;
    public exportDeclaration: string | JavascriptParserHook;
    public exportExpression: string | JavascriptParserHook;
    public exportSpecifier: string | JavascriptParserHook;
    public exportImportSpecifier: string | JavascriptParserHook;
    public varDeclaration: string | JavascriptParserHook;
    public varDeclarationLet: string | JavascriptParserHook;
    public varDeclarationConst: string | JavascriptParserHook;
    public varDeclarationVar: string | JavascriptParserHook;
    public canRename: string | JavascriptParserHook;
    public rename: string | JavascriptParserHook;
    public assigned: string | JavascriptParserHook;
    public assign: string | JavascriptParserHook;
    public typeof: string | JavascriptParserHook;
    public call: string | JavascriptParserHook;
    public callAnyMember: string | JavascriptParserHook;
    public new: string | JavascriptParserHook;
    public expression: string | JavascriptParserHook;
    public expressionAnyMember: string | JavascriptParserHook;
    public expressionConditionalOperator: string | JavascriptParserHook;
    public program: string | JavascriptParserHook;
}

export class Options implements ICompilerHooksContainer {

    public verbose: boolean = false;
    //TODO: debuglog when a hook runs in apply - public verboseHookNames: boolean = false;
    public silent: boolean = true;
    public asyncDefaultTapType: TapType = TapType.NotSet;

    public entryOption: CompilerHook;
    public afterPlugins: CompilerHook;
    public afterResolvers: CompilerHook;
    public environment: CompilerHook;
    public afterEnvironment: CompilerHook;
    public beforeRun: CompilerHook;
    public additionalPass: CompilerHook;
    public run: CompilerHook;
    public watchRun: CompilerHook;
    public normalModuleFactory: CompilerHook_With_JavascriptParserHookHooks;
    public contextModuleFactory: CompilerHook;
    public initialize: CompilerHook;
    public beforeCompile: CompilerHook_With_JavascriptParserHookHooks;
    public compile: CompilerHook_With_JavascriptParserHookHooks;
    public thisCompilation: CompilerHook_With_CompilationHooks_JavascriptParserHooks;
    public compilation: CompilerHook_With_CompilationHooks_JavascriptParserHooks;
    public make: CompilerHook_With_CompilationHooks;
    public afterCompile: CompilerHook_With_CompilationHooks;
    public shouldEmit: CompilerHook_With_CompilationHooks;
    public emit: CompilerHook_With_CompilationHooks;
    public afterEmit: CompilerHook_With_CompilationHooks;
    public assetEmitted: CompilerHook;
    public done: CompilerHook;
    public failed: CompilerHook;
    public invalid: CompilerHook;
    public watchClose: CompilerHook;
    public infrastructureLog: CompilerHook;
    public log: CompilerHook;

    constructor() {
        CompilerHookInitializer.initHooks(this);
    }
}
