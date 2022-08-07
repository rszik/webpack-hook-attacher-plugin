/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

export class Utils {

    public static mergeUserSettingsToDeafultSetting(userParameterObject: any, defaultParameterObject: any): any {
        for (const key in defaultParameterObject) {
            if (userParameterObject.hasOwnProperty(key)) {
                defaultParameterObject[key] = userParameterObject[key];
            }
        }
        return defaultParameterObject;
    }

    public static capitalizeFirstLetter(s: string): string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    public static arraySortNumberFunc(a: number, b: number): number {
        return a - b;
    }

    public static formattedJSONStringify(obj: any, replacer: (this: any, key: string, value: any) => any = null, space: string | number = 4): string {
        return JSON.stringify(obj, replacer, space);
    }

    public static Sleep(miliseconds: number): void {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, miliseconds);
    }

}
