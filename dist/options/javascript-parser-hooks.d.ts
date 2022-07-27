import { JavascriptParserHook } from './options';
export interface IJavascriptParserHooksContainer {
    evaluateTypeof: JavascriptParserHook | string;
    evaluate: JavascriptParserHook | string;
    evaluateIdentifier: JavascriptParserHook | string;
    evaluateDefinedIdentifier: JavascriptParserHook | string;
    evaluateCallExpressionMember: JavascriptParserHook | string;
    statement: JavascriptParserHook | string;
    statementIf: JavascriptParserHook | string;
    label: JavascriptParserHook | string;
    import: JavascriptParserHook | string;
    importSpecifier: JavascriptParserHook | string;
    export: JavascriptParserHook | string;
    exportImport: JavascriptParserHook | string;
    exportDeclaration: JavascriptParserHook | string;
    exportExpression: JavascriptParserHook | string;
    exportSpecifier: JavascriptParserHook | string;
    exportImportSpecifier: JavascriptParserHook | string;
    varDeclaration: JavascriptParserHook | string;
    varDeclarationLet: JavascriptParserHook | string;
    varDeclarationConst: JavascriptParserHook | string;
    varDeclarationVar: JavascriptParserHook | string;
    canRename: JavascriptParserHook | string;
    rename: JavascriptParserHook | string;
    assigned: JavascriptParserHook | string;
    assign: JavascriptParserHook | string;
    typeof: JavascriptParserHook | string;
    call: JavascriptParserHook | string;
    callMemberChain: JavascriptParserHook | string;
    new: JavascriptParserHook | string;
    expression: JavascriptParserHook | string;
    expressionConditionalOperator: JavascriptParserHook | string;
    program: JavascriptParserHook | string;
}
export declare class JavascriptParserHookNames implements IJavascriptParserHooksContainer {
    evaluateTypeof: string;
    evaluate: string;
    evaluateIdentifier: string;
    evaluateDefinedIdentifier: string;
    evaluateCallExpressionMember: string;
    statement: string;
    statementIf: string;
    label: string;
    import: string;
    importSpecifier: string;
    export: string;
    exportImport: string;
    exportDeclaration: string;
    exportExpression: string;
    exportSpecifier: string;
    exportImportSpecifier: string;
    varDeclaration: string;
    varDeclarationLet: string;
    varDeclarationConst: string;
    varDeclarationVar: string;
    canRename: string;
    rename: string;
    assigned: string;
    assign: string;
    typeof: string;
    call: string;
    callMemberChain: string;
    new: string;
    expression: string;
    expressionConditionalOperator: string;
    program: string;
    static get i(): JavascriptParserHookNames;
}
export declare class JavascriptParserHookCallbackParameters {
    static EXPRESSION: string;
    static PARAM: string;
    static STATEMENT: string;
    static SOURCE: string;
    static EXPORT_NAME: string;
    static IDENTIFIER_NAME: string;
    static DECLARATION: string;
    static INDEX: string;
    expression: any;
    param: any;
    statement: any;
    source: any;
    exportName: string;
    identifierName: string;
    declaration: any;
    index: number;
}
export declare class JavascriptParserHookInitializer {
    static initHooks(container: IJavascriptParserHooksContainer): void;
}
