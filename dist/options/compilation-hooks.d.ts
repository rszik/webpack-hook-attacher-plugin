/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { Asset, Chunk, Compilation, Compiler, Module } from 'webpack';
import { CompilationHook } from './options';
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
export declare class CompilationHookNames implements ICompilationHooksContainer {
    buildModule: string;
    rebuildModule: string;
    failedModule: string;
    succeedModule: string;
    finishModules: string;
    finishRebuildingModule: string;
    seal: string;
    unseal: string;
    optimizeDependencies: string;
    afterOptimizeDependencies: string;
    optimize: string;
    optimizeModules: string;
    afterOptimizeModules: string;
    optimizeChunks: string;
    afterOptimizeChunks: string;
    optimizeTree: string;
    afterOptimizeTree: string;
    optimizeChunkModules: string;
    afterOptimizeChunkModules: string;
    shouldRecord: string;
    reviveModules: string;
    beforeModuleIds: string;
    moduleIds: string;
    optimizeModuleIds: string;
    afterOptimizeModuleIds: string;
    reviveChunks: string;
    beforeChunkIds: string;
    chunkIds: string;
    optimizeChunkIds: string;
    afterOptimizeChunkIds: string;
    recordModules: string;
    recordChunks: string;
    beforeModuleHash: string;
    afterModuleHash: string;
    beforeHash: string;
    afterHash: string;
    recordHash: string;
    record: string;
    beforeModuleAssets: string;
    additionalChunkAssets: string;
    shouldGenerateChunkAssets: string;
    beforeChunkAssets: string;
    additionalAssets: string;
    optimizeChunkAssets: string;
    afterOptimizeChunkAssets: string;
    optimizeAssets: string;
    afterOptimizeAssets: string;
    processAssets: string;
    afterProcessAssets: string;
    needAdditionalSeal: string;
    afterSeal: string;
    chunkHash: string;
    moduleAsset: string;
    chunkAsset: string;
    assetPath: string;
    needAdditionalPass: string;
    childCompiler: string;
    static get i(): CompilationHookNames;
}
export declare class CompilationHookCallbackParameters {
    static MODULE: string;
    static ERROR: string;
    static MODULES: string;
    static CHUNKS: string;
    static RECORDS: string;
    static COMPILATION: string;
    static ASSETS: string;
    static CHUNK: string;
    static CHUNK_HASH: string;
    static FILE_NAME: string;
    static PATH: string;
    static OPTIONS: string;
    static CHILD_COMPILER: string;
    static COMPILER_NAME: string;
    static COMPILER_INDEX: string;
    module: Module;
    error: Error;
    modules: Module[];
    chunks: Chunk[];
    records: any;
    compilation: Compilation;
    assets: Asset[];
    chunk: Chunk;
    chunkHash: string;
    fileName: string;
    path: string;
    options: any;
    childCompiler: Compiler;
    compilerName: string;
    compilerIndex: number;
}
export declare class CompilationHookInitializer {
    static initHooks(container: ICompilationHooksContainer): void;
}
