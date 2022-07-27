export declare class Utils {
    static mergeUserSettingsToDeafultSetting(userParameterObject: any, defaultParameterObject: any): any;
    static capitalizeFirstLetter(s: string): string;
    static arraySortNumberFunc(a: number, b: number): number;
    static formattedJSONStringify(obj: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    static Sleep(miliseconds: number): void;
}
