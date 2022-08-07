/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

//TODO: colors.brightXY is unavailabe when using import
//TODO: check later in the new version
//TODO: write an issue to the developer
import { Utils } from '.';
const colors: any = require('colors/safe');

export class ConsoleLogger {

    public static verbose: boolean = false;
    public static silent: boolean = true;

    public static consoleDebug(text: string, obj?: any, forceLog: boolean = false): void {
        ConsoleLogger.clearCurrentCursorLine();
        if (forceLog || !ConsoleLogger.silent && ConsoleLogger.verbose) {
            console.log(colors.brightWhite('WebpackHookAttacherPlugin - Debug\n') + colors.brightWhite(text));
            if (obj) {
                console.log(colors.brightGreen(Utils.formattedJSONStringify(obj)));
            }
        }
    }

    public static consoleInfo(text: string, obj?: any, forceLog: boolean = false): void {
        ConsoleLogger.clearCurrentCursorLine();
        if (forceLog || !ConsoleLogger.silent) {
            console.log(colors.brightWhite('WebpackHookAttacherPlugin - ') + colors.brightGreen('Info    - ') + colors.brightGreen(text));
            if (obj) {
                console.log(colors.brightGreen(Utils.formattedJSONStringify(obj)));
            }
        }
    }

    public static consoleWarning(text: string, obj?: any): void {
        ConsoleLogger.clearCurrentCursorLine();
        console.log(colors.brightWhite('WebpackHookAttacherPlugin - ') + colors.brightYellow('Warning - ') + colors.brightYellow(text));
        if (obj) {
            console.log(colors.brightYellow(Utils.formattedJSONStringify(obj)));
        }
    }

    public static consoleError(text: string, obj?: any): void {
        ConsoleLogger.clearCurrentCursorLine();
        console.log(colors.brightWhite('WebpackHookAttacherPlugin - ') + colors.brightRed('Error   - ') + colors.brightRed(text));
        if (obj) {
            console.log(colors.brightRed(Utils.formattedJSONStringify(obj)));
        }
    }

    //clear if anything is on the console current line - for example afterEmit leaves a '98% after emitted message'
    private static clearCurrentCursorLine(): void {
        //in vs code debug mode there is no cursorTo function
        if (process.stdout.cursorTo) {
            process.stdout.cursorTo(0);
        }
    }


}
