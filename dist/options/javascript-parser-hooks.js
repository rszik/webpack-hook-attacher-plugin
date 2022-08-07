"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavascriptParserHookInitializer = exports.JavascriptParserHookCallbackParameters = exports.JavascriptParserHookNames = void 0;
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
        this.callMemberChain = 'callMemberChain';
        this.new = 'new';
        this.expression = 'expression';
        this.expressionConditionalOperator = 'expressionConditionalOperator';
        this.program = 'program';
    }
    static get i() {
        return new JavascriptParserHookNames();
    }
}
exports.JavascriptParserHookNames = JavascriptParserHookNames;
class JavascriptParserHookCallbackParameters {
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
exports.JavascriptParserHookCallbackParameters = JavascriptParserHookCallbackParameters;
JavascriptParserHookCallbackParameters.EXPRESSION = 'expression';
JavascriptParserHookCallbackParameters.PARAM = 'param';
JavascriptParserHookCallbackParameters.STATEMENT = 'statement';
JavascriptParserHookCallbackParameters.SOURCE = 'source';
JavascriptParserHookCallbackParameters.EXPORT_NAME = 'exportName';
JavascriptParserHookCallbackParameters.IDENTIFIER_NAME = 'identifierName';
JavascriptParserHookCallbackParameters.DECLARATION = 'declaration';
JavascriptParserHookCallbackParameters.INDEX = 'index';
class JavascriptParserHookInitializer {
    static initHooks(container) {
        container.evaluateTypeof = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.evaluateTypeof, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.evaluate = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.evaluate, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.evaluateIdentifier = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.evaluateIdentifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.evaluateDefinedIdentifier = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.evaluateDefinedIdentifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.evaluateCallExpressionMember = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.evaluateDefinedIdentifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION, JavascriptParserHookCallbackParameters.PARAM], true);
        container.statement = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.statement, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT], false);
        container.statementIf = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.statementIf, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT], false);
        container.label = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.label, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT], false);
        container.import = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.import, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE], false);
        container.importSpecifier = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.importSpecifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE, JavascriptParserHookCallbackParameters.EXPORT_NAME, JavascriptParserHookCallbackParameters.IDENTIFIER_NAME], false);
        container.export = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.export, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT], false);
        container.exportImport = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.exportImport, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE], false);
        container.exportDeclaration = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.exportDeclaration, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.DECLARATION], false);
        container.exportExpression = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.exportExpression, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.DECLARATION], false);
        container.exportSpecifier = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.exportSpecifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.IDENTIFIER_NAME, JavascriptParserHookCallbackParameters.EXPORT_NAME, JavascriptParserHookCallbackParameters.INDEX], false);
        container.exportImportSpecifier = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.exportImportSpecifier, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE, JavascriptParserHookCallbackParameters.IDENTIFIER_NAME, JavascriptParserHookCallbackParameters.EXPORT_NAME, JavascriptParserHookCallbackParameters.INDEX], false);
        container.varDeclaration = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.varDeclaration, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.DECLARATION], false);
        container.varDeclarationLet = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.varDeclarationLet, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.DECLARATION], false);
        container.varDeclarationConst = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.varDeclarationConst, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.DECLARATION], false);
        container.varDeclarationVar = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.varDeclarationVar, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.DECLARATION], false);
        container.canRename = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.canRename, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.rename = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.rename, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.assigned = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.assigned, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.assign = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.assign, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.typeof = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.typeof, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.call = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.call, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.callMemberChain = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.callMemberChain, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.new = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.new, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.expression = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.expression, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], true);
        container.expressionConditionalOperator = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.expressionConditionalOperator, options_1.WebpackHookType.SyncBailHook, [JavascriptParserHookCallbackParameters.EXPRESSION], false);
        container.program = new options_1.JavascriptParserHook(JavascriptParserHookNames.i.program, options_1.WebpackHookType.SyncBailHook, [], false);
    }
}
exports.JavascriptParserHookInitializer = JavascriptParserHookInitializer;
