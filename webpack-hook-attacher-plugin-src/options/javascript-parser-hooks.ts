import { JavascriptParserHook, WebpackHookType} from './options';

// https://webpack.js.org/api/parser/#hooks

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

export class JavascriptParserHookNames implements IJavascriptParserHooksContainer {
    public evaluateTypeof: string = 'evaluateTypeof';
    public evaluate: string = 'evaluate';
    public evaluateIdentifier: string = 'evaluateIdentifier';
    public evaluateDefinedIdentifier: string = 'evaluateDefinedIdentifier';
    public evaluateCallExpressionMember: string = 'evaluateCallExpressionMember';
    public statement: string = 'statement';
    public statementIf: string = 'statementIf';
    public label: string = 'label';
    public import: string = 'import';
    public importSpecifier: string = 'importSpecifier';
    public export: string = 'export';
    public exportImport: string = 'exportImport';
    public exportDeclaration: string = 'exportDeclaration';
    public exportExpression: string = 'exportExpression';
    public exportSpecifier: string = 'exportSpecifier';
    public exportImportSpecifier: string = 'exportImportSpecifier';
    public varDeclaration: string = 'varDeclaration';
    public varDeclarationLet: string = 'varDeclarationLet';
    public varDeclarationConst: string = 'varDeclarationConst';
    public varDeclarationVar: string = 'varDeclarationVar';
    public canRename: string = 'canRename';
    public rename: string = 'rename';
    public assigned: string = 'assigned';
    public assign: string = 'assign';
    public typeof: string = 'typeof';
    public call: string = 'call';
    public callMemberChain: string = 'callMemberChain';
    public new: string = 'new';
    public expression: string = 'expression';
    public expressionConditionalOperator: string = 'expressionConditionalOperator';
    public program: string = 'program';

    public static get i(): JavascriptParserHookNames {
        return new JavascriptParserHookNames();
    }
}

export class JavascriptParserHookCallbackParameters {

    public static EXPRESSION: string = 'expression';
    public static PARAM: string = 'param';
    public static STATEMENT: string = 'statement';
    public static SOURCE: string = 'source';
    public static EXPORT_NAME: string = 'exportName';
    public static IDENTIFIER_NAME: string = 'identifierName';
    public static DECLARATION: string = 'declaration';
    public static INDEX: string = 'index';

    public expression: any = null;
    public param: any = null;
    public statement: any = null;
    public source: any = null;
    public exportName: string = null;
    public identifierName: string = null;
    public declaration: any = null;
    public index: number = null;

}

export class JavascriptParserHookInitializer {

    //todo: add a boolean property: forIsRequired, and on tap check if javascriptParserHookForParameter is set
    public static initHooks(container: IJavascriptParserHooksContainer): void {
        container.evaluateTypeof = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluateTypeof,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.evaluate = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluate,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.evaluateIdentifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluateIdentifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.evaluateDefinedIdentifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluateDefinedIdentifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.evaluateCallExpressionMember = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluateDefinedIdentifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION, JavascriptParserHookCallbackParameters.PARAM],
            true);

        container.statement = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.statement,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT],
            false);

        container.statementIf = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.statementIf,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT],
            false);

        container.label = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.label,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT],
            false);

        container.import = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.import,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE],
            false);

        container.importSpecifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.importSpecifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE, JavascriptParserHookCallbackParameters.EXPORT_NAME , JavascriptParserHookCallbackParameters.IDENTIFIER_NAME],
            false);

        container.export = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.export,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT],
            false);

        container.exportImport = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportImport,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE],
            false);

        container.exportDeclaration = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportDeclaration,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.DECLARATION],
            false);

        container.exportExpression = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportExpression,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.DECLARATION],
            false);

        container.exportSpecifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportSpecifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.IDENTIFIER_NAME, JavascriptParserHookCallbackParameters.EXPORT_NAME, JavascriptParserHookCallbackParameters.INDEX],
            false);

        container.exportImportSpecifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportImportSpecifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE, JavascriptParserHookCallbackParameters.IDENTIFIER_NAME, JavascriptParserHookCallbackParameters.EXPORT_NAME, JavascriptParserHookCallbackParameters.INDEX],
            false);

        container.varDeclaration = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.varDeclaration,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.DECLARATION],
            false);

        container.varDeclarationLet = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.varDeclarationLet,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.DECLARATION],
            false);

        container.varDeclarationConst = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.varDeclarationConst,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.DECLARATION],
            false);

        container.varDeclarationVar = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.varDeclarationVar,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.DECLARATION],
            false);

        container.canRename = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.canRename,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.rename = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.rename,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.assigned = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.assigned,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.assign = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.assign,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.typeof = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.typeof,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.call = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.call,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.callMemberChain = new JavascriptParserHook(
                container,
                JavascriptParserHookNames.i.callMemberChain,
                WebpackHookType.SyncBailHook,
                [JavascriptParserHookCallbackParameters.EXPRESSION],
                true);

        container.new = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.new,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.expression = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.expression,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true);

        container.expressionConditionalOperator = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.expressionConditionalOperator,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            false);

        container.program = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.program,
            WebpackHookType.SyncBailHook,
            [],
            false);

    }
}
