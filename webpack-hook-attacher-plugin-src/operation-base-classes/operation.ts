import { ConsoleLogger, Utils } from '../classes';
import { CompilerHookCallbackParameters, CompilationHookCallbackParameters, JavascriptParserHookCallbackParameters, CompilationHook } from '../options';

export enum TapType {
    NotSet = 'notSet',
    Tap = 'tap',
    TapAsync = 'tapAsync',
    TapPromise = 'tapPromise'
}

export enum HookType {
    CompilerHook = 'CompilerHook',
    CompilationHook= 'CompilationHook',
    JavascriptParserHook= 'JavascriptParserHook',
}

export interface IOperationParameter {
    additionalName?: string;
    verbose?: boolean;
    silent?: boolean;
    asyncDefaultTapType?: TapType;
}

export class OperationParameter implements IOperationParameter {
    //these have to be null, because these will overwrite the option silent and verbose values if not null
    public additionalName?: string = null;
    public verbose?: boolean = null;
    public silent?: boolean = null;
    public asyncDefaultTapType?: TapType = TapType.NotSet;
    public tapForParameter?: string = null;
}

export abstract class Operation  {

    public firstOperationInTheHook: boolean = false;
    public lastOperationInTheHook: boolean = false;
    public hookName: string = '';
    public hookType: HookType;

    public tapType: TapType;
    public compilerHookCallbackParameters: CompilerHookCallbackParameters = new CompilerHookCallbackParameters();
    public compilationHookCallbackParameters: CompilationHookCallbackParameters = new CompilationHookCallbackParameters();
    public javascriptParserHookCallbackParameters: JavascriptParserHookCallbackParameters = new JavascriptParserHookCallbackParameters();

    public params: OperationParameter;

    public abstract name: string;

    public abstract run(): void;

    protected runWrapper(operation: Operation, funcToWrap: Function): void {
        this.initConsoleLoggerToCurrentOperation();
        if (operation.firstOperationInTheHook) {
            ConsoleLogger.consoleInfo(`Running ${Utils.capitalizeFirstLetter(this.hookName)} Operations`, null, true);
        }
        let postFix: string = this.params.additionalName != null ?  ' - ' + this.params.additionalName : '';
        ConsoleLogger.consoleInfo(`Start   ${this.name}${postFix}`);
        ConsoleLogger.consoleDebug(`${this.name} - \nthis.params: ${Utils.formattedJSONStringify(this.params)}`);
        try {
            funcToWrap();
        } catch (ex) {
            ConsoleLogger.consoleError(`${this.name} - ${ex.toString()}`);
            throw ex;
        }
        if (operation.lastOperationInTheHook) {
            ConsoleLogger.consoleInfo(`${Utils.capitalizeFirstLetter(this.hookName)} Operations Finished`, null, true);
        }
    }

    protected setParams(params: OperationParameter): void {
        this.params = params;
    }

    protected initConsoleLoggerToCurrentOperation(): void {
         //override the original settings
         if (this.params.verbose != null) {
            ConsoleLogger.verbose = this.params.verbose;
        }
        if (this.params.silent != null) {
            ConsoleLogger.silent = this.params.silent;
        }
    }
}
