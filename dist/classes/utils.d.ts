/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
export declare class Utils {
    static mergeUserSettingsToDeafultSetting(userParameterObject: any, defaultParameterObject: any): any;
    static capitalizeFirstLetter(s: string): string;
    static arraySortNumberFunc(a: number, b: number): number;
    static formattedJSONStringify(obj: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    static Sleep(miliseconds: number): void;
}
