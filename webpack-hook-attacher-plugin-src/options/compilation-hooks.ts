/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

import { Asset, Chunk, Compilation, Compiler, Module } from 'webpack';
import { CompilationHook, WebpackHookType } from './options';


// https://webpack.js.org/api/compilation-hooks/

export interface ICompilationHooksContainer {
    buildModule: CompilationHook | string;
    rebuildModule: CompilationHook | string;
    failedModule: CompilationHook | string;
    succeedModule: CompilationHook | string;
    finishModules: CompilationHook | string;
    finishRebuildingModule: CompilationHook | string;
    seal: CompilationHook | string;
    unseal: CompilationHook | string;
    optimizeDependencies: CompilationHook | string;
    afterOptimizeDependencies: CompilationHook | string;
    optimize: CompilationHook | string;
    optimizeModules: CompilationHook | string;
    afterOptimizeModules: CompilationHook | string;
    optimizeChunks: CompilationHook | string;
    afterOptimizeChunks: CompilationHook | string;
    optimizeTree: CompilationHook | string;
    afterOptimizeTree: CompilationHook | string;
    optimizeChunkModules: CompilationHook | string;
    afterOptimizeChunkModules: CompilationHook | string;
    shouldRecord: CompilationHook | string;
    reviveModules: CompilationHook | string;
    beforeModuleIds: CompilationHook | string;
    moduleIds: CompilationHook | string;
    optimizeModuleIds: CompilationHook | string;
    afterOptimizeModuleIds: CompilationHook | string;
    reviveChunks: CompilationHook | string;
    beforeChunkIds: CompilationHook | string;
    chunkIds: CompilationHook | string;
    optimizeChunkIds: CompilationHook | string;
    afterOptimizeChunkIds: CompilationHook | string;
    recordModules: CompilationHook | string;
    recordChunks: CompilationHook | string;
    beforeModuleHash: CompilationHook | string;
    afterModuleHash: CompilationHook | string;
    beforeHash: CompilationHook | string;
    afterHash: CompilationHook | string;
    recordHash: CompilationHook | string;
    record: CompilationHook | string;
    beforeModuleAssets: CompilationHook | string;
    additionalChunkAssets: CompilationHook | string;
    shouldGenerateChunkAssets: CompilationHook | string;
    beforeChunkAssets: CompilationHook | string;
    additionalAssets: CompilationHook | string;
    optimizeChunkAssets: CompilationHook | string;
    afterOptimizeChunkAssets: CompilationHook | string;
    optimizeAssets: CompilationHook | string;
    afterOptimizeAssets: CompilationHook | string;
    processAssets: CompilationHook | string;
    afterProcessAssets: CompilationHook | string;
    needAdditionalSeal: CompilationHook | string;
    afterSeal: CompilationHook | string;
    chunkHash: CompilationHook | string;
    moduleAsset: CompilationHook | string;
    chunkAsset: CompilationHook | string;
    assetPath: CompilationHook | string;
    needAdditionalPass: CompilationHook | string;
    childCompiler: CompilationHook | string;
}

export class CompilationHookNames implements ICompilationHooksContainer {
    public buildModule: string = 'buildModule';
    public rebuildModule: string = 'rebuildModule';
    public failedModule: string = 'failedModule';
    public succeedModule: string = 'succeedModule';
    public finishModules: string = 'finishModules';
    public finishRebuildingModule: string = 'finishRebuildingModule';
    public seal: string = 'seal';
    public unseal: string = 'unseal';
    public optimizeDependencies: string = 'optimizeDependencies';
    public afterOptimizeDependencies: string = 'afterOptimizeDependencies';
    public optimize: string = 'optimize';
    public optimizeModules: string = 'optimizeModules';
    public afterOptimizeModules: string = 'afterOptimizeModules';
    public optimizeChunks: string = 'optimizeChunks';
    public afterOptimizeChunks: string = 'afterOptimizeChunks';
    public optimizeTree: string = 'optimizeTree';
    public afterOptimizeTree: string = 'afterOptimizeTree';
    public optimizeChunkModules: string = 'optimizeChunkModules';
    public afterOptimizeChunkModules: string = 'afterOptimizeChunkModules';
    public shouldRecord: string = 'shouldRecord';
    public reviveModules: string = 'reviveModules';
    public beforeModuleIds: string = 'beforeModuleIds';
    public moduleIds: string = 'moduleIds';
    public optimizeModuleIds: string = 'optimizeModuleIds';
    public afterOptimizeModuleIds: string = 'afterOptimizeModuleIds';
    public reviveChunks: string = 'reviveChunks';
    public beforeChunkIds: string = 'beforeChunkIds';
    public chunkIds: string = 'chunkIds';
    public optimizeChunkIds: string = 'optimizeChunkIds';
    public afterOptimizeChunkIds: string = 'afterOptimizeChunkIds';
    public recordModules: string = 'recordModules';
    public recordChunks: string = 'recordChunks';
    public beforeModuleHash: string = 'beforeModuleHash';
    public afterModuleHash: string = 'afterModuleHash';
    public beforeHash: string = 'beforeHash';
    public afterHash: string = 'afterHash';
    public recordHash: string = 'recordHash';
    public record: string = 'record';
    public beforeModuleAssets: string = 'beforeModuleAssets';
    public additionalChunkAssets: string = 'additionalChunkAssets';
    public shouldGenerateChunkAssets: string = 'shouldGenerateChunkAssets';
    public beforeChunkAssets: string = 'beforeChunkAssets';
    public additionalAssets: string = 'additionalAssets';
    public optimizeChunkAssets: string = 'optimizeChunkAssets';
    public afterOptimizeChunkAssets: string = 'afterOptimizeChunkAssets';
    public optimizeAssets: string = 'optimizeAssets';
    public afterOptimizeAssets: string = 'afterOptimizeAssets';
    public processAssets: string = 'processAssets';
    public afterProcessAssets: string = 'afterProcessAssets';
    public needAdditionalSeal: string = 'needAdditionalSeal';
    public afterSeal: string = 'afterSeal';
    public chunkHash: string = 'chunkHash';
    public moduleAsset: string = 'moduleAsset';
    public chunkAsset: string = 'chunkAsset';
    public assetPath: string = 'assetPath';
    public needAdditionalPass: string = 'needAdditionalPass';
    public childCompiler: string = 'childCompiler';

    public static get i(): CompilationHookNames {
        return new CompilationHookNames();
    }
}

export class CompilationHookCallbackParameters {

    public static MODULE: string = 'module';
    public static ERROR: string = 'error';
    public static MODULES: string = 'modules';
    public static CHUNKS: string = 'chunks';
    public static RECORDS: string = 'records';
    public static COMPILATION: string = 'compilation';
    public static ASSETS: string = 'assets';
    public static CHUNK: string = 'chunk';
    public static CHUNK_HASH: string = 'chunkHash';
    public static FILE_NAME: string = 'fileName';
    public static PATH: string = 'path';
    public static OPTIONS: string = 'options';
    public static CHILD_COMPILER: string = 'childCompiler';
    public static COMPILER_NAME: string = 'compilerName';
    public static COMPILER_INDEX: string = 'compilerIndex';


    public module: Module = null;
    public error: Error = null;
    public modules: Module[] = null;
    public chunks: Chunk[] = null;
    public records: any = null;
    public compilation: Compilation = null;
    public assets: Asset[] = null;
    public chunk: Chunk = null;
    public chunkHash: string = null;
    public fileName: string = null;
    public path: string = null;
    public options: any = null; //not declared in webpack (makred with to do in webpack)
    public childCompiler: Compiler = null;
    public compilerName: string = null;
    public compilerIndex: number = null;
}

export class CompilationHookInitializer {

    public static initHooks(container: ICompilationHooksContainer): void {
        container.buildModule = new CompilationHook(
            CompilationHookNames.i.buildModule,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULE]);

        container.rebuildModule = new CompilationHook(
            CompilationHookNames.i.rebuildModule,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULE]);

        container.failedModule = new CompilationHook(
            CompilationHookNames.i.failedModule,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULE, CompilationHookCallbackParameters.ERROR]);

        container.succeedModule = new CompilationHook(
            CompilationHookNames.i.succeedModule,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULE]);

        container.finishModules = new CompilationHook(
            CompilationHookNames.i.finishModules,
            WebpackHookType.AsyncSeriesHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.finishRebuildingModule = new CompilationHook(
            CompilationHookNames.i.finishRebuildingModule,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULE]);

        container.seal = new CompilationHook(
            CompilationHookNames.i.seal,
            WebpackHookType.SyncHook,
            []);

        container.unseal = new CompilationHook(
            CompilationHookNames.i.unseal,
            WebpackHookType.SyncHook,
            []);

        container.optimizeDependencies = new CompilationHook(
            CompilationHookNames.i.optimizeDependencies,
            WebpackHookType.SyncBailHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.afterOptimizeDependencies = new CompilationHook(
            CompilationHookNames.i.afterOptimizeDependencies,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.optimize = new CompilationHook(
            CompilationHookNames.i.optimize,
            WebpackHookType.SyncHook,
            []);

        container.optimizeModules = new CompilationHook(
            CompilationHookNames.i.optimizeModules,
            WebpackHookType.SyncBailHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.afterOptimizeModules = new CompilationHook(
            CompilationHookNames.i.afterOptimizeModules,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.optimizeChunks = new CompilationHook(
            CompilationHookNames.i.optimizeChunks,
            WebpackHookType.SyncBailHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.afterOptimizeChunks = new CompilationHook(
            CompilationHookNames.i.afterOptimizeChunks,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.optimizeTree = new CompilationHook(
            CompilationHookNames.i.optimizeTree,
            WebpackHookType.AsyncSeriesHook,
            [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.MODULES]);

        container.afterOptimizeTree = new CompilationHook(
            CompilationHookNames.i.afterOptimizeTree,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.MODULES]);

        container.optimizeChunkModules = new CompilationHook(
            CompilationHookNames.i.optimizeChunkModules,
            WebpackHookType.SyncBailHook,
            [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.MODULES]);

        container.afterOptimizeChunkModules = new CompilationHook(
            CompilationHookNames.i.afterOptimizeChunkModules,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.MODULES]);

        container.shouldRecord = new CompilationHook(
            CompilationHookNames.i.shouldRecord,
            WebpackHookType.SyncBailHook,
            []);

        container.reviveModules = new CompilationHook(
            CompilationHookNames.i.reviveModules,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULES, CompilationHookCallbackParameters.RECORDS]);

        container.beforeModuleIds = new CompilationHook(
            CompilationHookNames.i.beforeModuleIds,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.moduleIds = new CompilationHook(
            CompilationHookNames.i.moduleIds,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.optimizeModuleIds = new CompilationHook(
            CompilationHookNames.i.optimizeModuleIds,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.afterOptimizeModuleIds = new CompilationHook(
            CompilationHookNames.i.afterOptimizeModuleIds,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULES]);

        container.reviveChunks = new CompilationHook(
            CompilationHookNames.i.reviveChunks,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.RECORDS]);

        container.beforeChunkIds = new CompilationHook(
            CompilationHookNames.i.beforeChunkIds,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.chunkIds = new CompilationHook(
            CompilationHookNames.i.chunkIds,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.optimizeChunkIds = new CompilationHook(
            CompilationHookNames.i.optimizeChunkIds,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.afterOptimizeChunkIds = new CompilationHook(
            CompilationHookNames.i.afterOptimizeChunkIds,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.recordModules = new CompilationHook(
            CompilationHookNames.i.recordModules,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULES, CompilationHookCallbackParameters.RECORDS]);

        container.recordChunks = new CompilationHook(
            CompilationHookNames.i.recordChunks,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.RECORDS]);

        container.beforeModuleHash = new CompilationHook(
            CompilationHookNames.i.beforeModuleHash,
            WebpackHookType.SyncHook,
            []);

        container.afterModuleHash = new CompilationHook(
            CompilationHookNames.i.afterModuleHash,
            WebpackHookType.SyncHook,
            []);

        container.beforeHash = new CompilationHook(
            CompilationHookNames.i.beforeHash,
            WebpackHookType.SyncHook,
            []);

        container.afterHash = new CompilationHook(
            CompilationHookNames.i.afterHash,
            WebpackHookType.SyncHook,
            []);

        container.recordHash = new CompilationHook(
            CompilationHookNames.i.recordHash,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.RECORDS]);

        container.record = new CompilationHook(
            CompilationHookNames.i.record,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.COMPILATION, CompilationHookCallbackParameters.RECORDS]);

        container.beforeModuleAssets = new CompilationHook(
            CompilationHookNames.i.beforeModuleAssets,
            WebpackHookType.SyncHook,
            []);

        container.additionalChunkAssets = new CompilationHook(
            CompilationHookNames.i.additionalChunkAssets,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.shouldGenerateChunkAssets = new CompilationHook(
            CompilationHookNames.i.shouldGenerateChunkAssets,
            WebpackHookType.SyncBailHook,
            []);

        container.beforeChunkAssets = new CompilationHook(
            CompilationHookNames.i.beforeChunkAssets,
            WebpackHookType.SyncHook,
            []);

        container.additionalAssets = new CompilationHook(
            CompilationHookNames.i.additionalAssets,
            WebpackHookType.AsyncSeriesHook,
            []);

        container.optimizeChunkAssets = new CompilationHook(
            CompilationHookNames.i.optimizeChunkAssets,
            WebpackHookType.AsyncSeriesHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.afterOptimizeChunkAssets = new CompilationHook(
            CompilationHookNames.i.afterOptimizeChunkAssets,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNKS]);

        container.optimizeAssets = new CompilationHook(
            CompilationHookNames.i.optimizeAssets,
            WebpackHookType.AsyncSeriesHook,
            [CompilationHookCallbackParameters.ASSETS]);

        container.afterOptimizeAssets = new CompilationHook(

            CompilationHookNames.i.afterOptimizeAssets,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.ASSETS]);

        container.processAssets = new CompilationHook(
            CompilationHookNames.i.processAssets,
            WebpackHookType.AsyncSeriesHook,
            [CompilationHookCallbackParameters.ASSETS]);

        container.afterProcessAssets = new CompilationHook(
            CompilationHookNames.i.afterProcessAssets,
            WebpackHookType.SyncHook,
            []);

        container.needAdditionalSeal = new CompilationHook(
            CompilationHookNames.i.needAdditionalSeal,
            WebpackHookType.SyncBailHook,
            []);

        container.afterSeal = new CompilationHook(
            CompilationHookNames.i.afterSeal,
            WebpackHookType.AsyncSeriesHook,
            []);

        container.chunkHash = new CompilationHook(
            CompilationHookNames.i.chunkHash,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNK, CompilationHookCallbackParameters.CHUNK_HASH]);

        container.moduleAsset = new CompilationHook(
            CompilationHookNames.i.moduleAsset,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.MODULE, CompilationHookCallbackParameters.FILE_NAME]);

        container.chunkAsset = new CompilationHook(
            CompilationHookNames.i.chunkAsset,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHUNK, CompilationHookCallbackParameters.FILE_NAME]);

        container.assetPath = new CompilationHook(
            CompilationHookNames.i.assetPath,
            WebpackHookType.SyncWaterfallHook,
            [CompilationHookCallbackParameters.PATH, CompilationHookCallbackParameters.OPTIONS]);

        container.needAdditionalPass = new CompilationHook(
            CompilationHookNames.i.needAdditionalPass,
            WebpackHookType.SyncBailHook,
            []);

        container.childCompiler = new CompilationHook(
            CompilationHookNames.i.childCompiler,
            WebpackHookType.SyncHook,
            [CompilationHookCallbackParameters.CHILD_COMPILER, CompilationHookCallbackParameters.COMPILER_NAME, CompilationHookCallbackParameters.COMPILER_INDEX]);
    }
}
