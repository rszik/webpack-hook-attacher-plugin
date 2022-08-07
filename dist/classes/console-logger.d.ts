/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
export declare class ConsoleLogger {
    static verbose: boolean;
    static silent: boolean;
    static consoleDebug(text: string, obj?: any, forceLog?: boolean): void;
    static consoleInfo(text: string, obj?: any, forceLog?: boolean): void;
    static consoleWarning(text: string, obj?: any): void;
    static consoleError(text: string, obj?: any): void;
    private static clearCurrentCursorLine;
}
