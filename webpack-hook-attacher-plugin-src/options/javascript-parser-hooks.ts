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
    callAnyMember: JavascriptParserHook | string;
    new: JavascriptParserHook | string;
    expression: JavascriptParserHook | string;
    expressionAnyMember: JavascriptParserHook | string;
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
    public callAnyMember: string = 'callAnyMember';
    public new: string = 'new';
    public expression: string = 'expression';
    public expressionAnyMember: string = 'expressionAnyMember';
    public expressionConditionalOperator: string = 'expressionConditionalOperator';
    public program: string = 'program';

    public static get i(): JavascriptParserHookNames {
        return new JavascriptParserHookNames();
    }
}

export class JavascriptParserHookParameters {

    public static EXPRESSION: string = 'expression';
    public static PARAM: string = 'param';
    public static STATEMENT: string = 'statement';
    public static SOURCE: string = 'source';
    public static EXPORT_NAME: string = 'exportName';
    public static IDENTIFIER_NAME: string = 'identifierName';
    public static DECLARATION: string = 'declaration';
    public static INDEX: string = 'index';


    //TODO: define exact types with debugging
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

    public static initHooks(container: IJavascriptParserHooksContainer): void {
        container.evaluateTypeof = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluateTypeof, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.evaluate = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluate, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.evaluateIdentifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluateIdentifier, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.evaluateDefinedIdentifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluateDefinedIdentifier, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.evaluateCallExpressionMember = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.evaluateDefinedIdentifier, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION, JavascriptParserHookParameters.PARAM]);

        container.statement = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.statement, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT]);

        container.statementIf = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.statementIf, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT]);

        container.label = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.label, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT]);

        container.import = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.import, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.SOURCE]);

        container.importSpecifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.importSpecifier, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.SOURCE, JavascriptParserHookParameters.EXPORT_NAME , JavascriptParserHookParameters.IDENTIFIER_NAME]);

        container.export = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.export, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT]);

        container.exportImport = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportImport, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.SOURCE]);

        container.exportDeclaration = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportDeclaration, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.DECLARATION]);

        container.exportExpression = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportExpression, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.DECLARATION]);

        container.exportSpecifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportSpecifier, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.IDENTIFIER_NAME, JavascriptParserHookParameters.EXPORT_NAME, JavascriptParserHookParameters.INDEX]);

        container.exportImportSpecifier = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.exportImportSpecifier, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.SOURCE, JavascriptParserHookParameters.IDENTIFIER_NAME, JavascriptParserHookParameters.EXPORT_NAME, JavascriptParserHookParameters.INDEX]);

        container.varDeclaration = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.varDeclaration, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.DECLARATION]);

        container.varDeclarationLet = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.varDeclarationLet, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.DECLARATION]);

        container.varDeclarationConst = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.varDeclarationConst, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.DECLARATION]);

        container.varDeclarationVar = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.varDeclarationVar, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.DECLARATION]);

        container.canRename = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.canRename, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.rename = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.rename, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.assigned = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.assigned, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.assign = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.assign, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.typeof = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.typeof, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.call = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.call, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.callAnyMember = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.callAnyMember, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.new = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.new, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.expression = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.expression, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.expressionAnyMember = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.expressionAnyMember, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.expressionConditionalOperator = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.expressionConditionalOperator, WebpackHookType.SyncBailHook,
            [JavascriptParserHookParameters.EXPRESSION]);

        container.program = new JavascriptParserHook(
            container,
            JavascriptParserHookNames.i.program, WebpackHookType.SyncBailHook,
            []);

    }
}
