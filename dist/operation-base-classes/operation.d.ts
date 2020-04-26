import { CompilerHookParameters, CompilationHookParameters, JavascriptParserHookParameters } from '../options';
export declare enum TapType {
    NotSet = "notSet",
    Tap = "tap",
    TapAsync = "tapAsync",
    TapPromise = "tapPromise"
}
export declare enum HookType {
    CompilerHook = "CompilerHook",
    CompilationHook = "CompilationHook",
    JavascriptParserHook = "JavascriptParserHook"
}
export interface IOperationParameter {
    additionalName?: string;
    verbose?: boolean;
    silent?: boolean;
    asyncDefaultTapType?: TapType;
}
export declare class OperationParameter implements IOperationParameter {
    additionalName?: string;
    verbose?: boolean;
    silent?: boolean;
    asyncDefaultTapType?: TapType;
    javascriptParserHookForParameter?: string;
}
export declare abstract class Operation {
    firstOperationInTheHook: boolean;
    lastOperationInTheHook: boolean;
    hookName: string;
    hookType: HookType;
    tapType: TapType;
    compilerHookParameters: CompilerHookParameters;
    compilationHookParameters: CompilationHookParameters;
    javascriptParserHookParameters: JavascriptParserHookParameters;
    params: OperationParameter;
    abstract name: string;
    abstract run(): void;
    protected runWrapper(operation: Operation, funcToWrap: Function): void;
    protected setParams(params: OperationParameter): void;
    protected initConsoleLoggerToCurrentOperation(): void;
}
