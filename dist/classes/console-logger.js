"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const _1 = require(".");
const colors = require('colors/safe');
class ConsoleLogger {
    static consoleDebug(text, obj, forceLog = false) {
        ConsoleLogger.clearCurrentCursorLine();
        if (forceLog || !ConsoleLogger.silent && ConsoleLogger.verbose) {
            console.log(colors.brightWhite('WebpackHookAttacherPlugin - Debug\n') + colors.brightWhite(text));
            if (obj) {
                console.log(colors.brightGreen(_1.Utils.formattedJSONStringify(obj)));
            }
        }
    }
    static consoleInfo(text, obj, forceLog = false) {
        ConsoleLogger.clearCurrentCursorLine();
        if (forceLog || !ConsoleLogger.silent) {
            console.log(colors.brightWhite('WebpackHookAttacherPlugin - ') + colors.brightGreen('Info    - ') + colors.brightGreen(text));
            if (obj) {
                console.log(colors.brightGreen(_1.Utils.formattedJSONStringify(obj)));
            }
        }
    }
    static consoleWarning(text, obj) {
        ConsoleLogger.clearCurrentCursorLine();
        console.log(colors.brightWhite('WebpackHookAttacherPlugin - ') + colors.brightYellow('Warning - ') + colors.brightYellow(text));
        if (obj) {
            console.log(colors.brightYellow(_1.Utils.formattedJSONStringify(obj)));
        }
    }
    static consoleError(text, obj) {
        ConsoleLogger.clearCurrentCursorLine();
        console.log(colors.brightWhite('WebpackHookAttacherPlugin - ') + colors.brightRed('Error   - ') + colors.brightRed(text));
        if (obj) {
            console.log(colors.brightRed(_1.Utils.formattedJSONStringify(obj)));
        }
    }
    static clearCurrentCursorLine() {
        if (process.stdout.cursorTo) {
            process.stdout.cursorTo(0);
        }
    }
}
exports.ConsoleLogger = ConsoleLogger;
ConsoleLogger.verbose = false;
ConsoleLogger.silent = true;
