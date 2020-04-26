"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
class JavascriptParserHookNames {
    constructor() {
        this.evaluateTypeof = 'evaluateTypeof';
        this.evaluate = 'evaluate';
        this.evaluateIdentifier = 'evaluateIdentifier';
        this.evaluateDefinedIdentifier = 'evaluateDefinedIdentifier';
        this.evaluateCallExpressionMember = 'evaluateCallExpressionMember';
        this.statement = 'statement';
        this.statementIf = 'statementIf';
        this.label = 'label';
        this.import = 'import';
        this.importSpecifier = 'importSpecifier';
        this.export = 'export';
        this.exportImport = 'exportImport';
        this.exportDeclaration = 'exportDeclaration';
        this.exportExpression = 'exportExpression';
        this.exportSpecifier = 'exportSpecifier';
        this.exportImportSpecifier = 'exportImportSpecifier';
        this.varDeclaration = 'varDeclaration';
        this.varDeclarationLet = 'varDeclarationLet';
        this.varDeclarationConst = 'varDeclarationConst';
        this.varDeclarationVar = 'varDeclarationVar';
        this.canRename = 'canRename';
        this.rename = 'rename';
        this.assigned = 'assigned';
        this.assign = 'assign';
        this.typeof = 'typeof';
        this.call = 'call';
        this.callAnyMember = 'callAnyMember';
        this.new = 'new';
        this.expression = 'expression';
        this.expressionAnyMember = 'expressionAnyMember';
        this.expressionConditionalOperator = 'expressionConditionalOperator';
        this.program = 'program';
    }
    static get i() {
        return new JavascriptParserHookNames();
    }
}
exports.JavascriptParserHookNames = JavascriptParserHookNames;
class JavascriptParserHookParameters {
    constructor() {
        this.expression = null;
        this.param = null;
        this.statement = null;
        this.source = null;
        this.exportName = null;
        this.identifierName = null;
        this.declaration = null;
        this.index = null;
    }
}
exports.JavascriptParserHookParameters = JavascriptParserHookParameters;
JavascriptParserHookParameters.EXPRESSION = 'expression';
JavascriptParserHookParameters.PARAM = 'param';
JavascriptParserHookParameters.STATEMENT = 'statement';
JavascriptParserHookParameters.SOURCE = 'source';
JavascriptParserHookParameters.EXPORT_NAME = 'exportName';
JavascriptParserHookParameters.IDENTIFIER_NAME = 'identifierName';
JavascriptParserHookParameters.DECLARATION = 'declaration';
JavascriptParserHookParameters.INDEX = 'index';
class JavascriptParserHookInitializer {
    static initHooks(container) {
        container.evaluateTypeof = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.evaluateTypeof, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.evaluate = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.evaluate, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.evaluateIdentifier = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.evaluateIdentifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.evaluateDefinedIdentifier = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.evaluateDefinedIdentifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.evaluateCallExpressionMember = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.evaluateDefinedIdentifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION, JavascriptParserHookParameters.PARAM]);
        container.statement = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.statement, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT]);
        container.statementIf = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.statementIf, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT]);
        container.label = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.label, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT]);
        container.import = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.import, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.SOURCE]);
        container.importSpecifier = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.importSpecifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.SOURCE, JavascriptParserHookParameters.EXPORT_NAME, JavascriptParserHookParameters.IDENTIFIER_NAME]);
        container.export = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.export, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT]);
        container.exportImport = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.exportImport, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.SOURCE]);
        container.exportDeclaration = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.exportDeclaration, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.DECLARATION]);
        container.exportExpression = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.exportExpression, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.DECLARATION]);
        container.exportSpecifier = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.exportSpecifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.IDENTIFIER_NAME, JavascriptParserHookParameters.EXPORT_NAME, JavascriptParserHookParameters.INDEX]);
        container.exportImportSpecifier = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.exportImportSpecifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.STATEMENT, JavascriptParserHookParameters.SOURCE, JavascriptParserHookParameters.IDENTIFIER_NAME, JavascriptParserHookParameters.EXPORT_NAME, JavascriptParserHookParameters.INDEX]);
        container.varDeclaration = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.varDeclaration, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.DECLARATION]);
        container.varDeclarationLet = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.varDeclarationLet, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.DECLARATION]);
        container.varDeclarationConst = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.varDeclarationConst, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.DECLARATION]);
        container.varDeclarationVar = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.varDeclarationVar, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.DECLARATION]);
        container.canRename = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.canRename, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.rename = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.rename, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.assigned = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.assigned, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.assign = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.assign, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.typeof = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.typeof, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.call = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.call, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.callAnyMember = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.callAnyMember, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.new = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.new, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.expression = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.expression, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.expressionAnyMember = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.expressionAnyMember, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.expressionConditionalOperator = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.expressionConditionalOperator, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookParameters.EXPRESSION]);
        container.program = new options_1.JavascriptParserHook(container, JavascriptParserHookNames.i.program, options_1.WebpackHookType.SyncBailHook, []);
    }
}
exports.JavascriptParserHookInitializer = JavascriptParserHookInitializer;
