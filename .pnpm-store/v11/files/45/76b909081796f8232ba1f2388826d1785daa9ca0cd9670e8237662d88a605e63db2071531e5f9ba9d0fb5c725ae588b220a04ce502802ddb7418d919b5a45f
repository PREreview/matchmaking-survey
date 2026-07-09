export interface HashTable<T = any> {
    [key: string]: T;
}
export interface IEqualValuesParameters {
    ignoreOrder?: boolean;
    caseSensitive?: boolean;
    trimStrings?: boolean;
    doNotConvertNumbers?: boolean;
}
export declare function createDate(reason: string, val?: number | string | Date): Date;
export declare function normalizeTextForSearch(text: string, reason?: string): string;
export declare class Helpers {
    /**
     * A static methods that returns true if a value undefined, null, empty string or empty array.
     * @param value
     */
    static isValueEmpty(value: any): boolean;
    static isValueUndefined(value: any): boolean;
    static isArrayContainsEqual(x: any, y: any): boolean;
    static checkIfArraysEqual(x: any, y: any, params: IEqualValuesParameters): boolean;
    static isArraysEqual(x: any, y: any, ignoreOrder?: boolean, caseSensitive?: boolean, trimStrings?: boolean): boolean;
    static compareStrings(x: string, y: string): number;
    static checkIfValuesEqual(x: any, y: any, params: IEqualValuesParameters): boolean;
    static isTwoValueEquals(x: any, y: any, ignoreOrder?: boolean, caseSensitive?: boolean, trimStrings?: boolean): boolean;
    static randomizeArray<T>(array: Array<T>, seed?: number): Array<T>;
    static getUnbindValue(value: any): any;
    static createCopy(obj: any): any;
    static createCopyWithPrefix(obj: any, prefix?: string): any;
    static createDiff(changedObj: any, originalObject: any): any;
    static isConvertibleToNumber(value: any): boolean;
    static isValueObject(val: any, excludeArray?: boolean): boolean;
    static isNumber(value: any): boolean;
    static getNumber(value: any): number;
    private static getNumberCore;
    private static isStringHasOperator;
    private static prepareStringToNumber;
    static getMaxLength(maxLength: number, surveyLength: number): any;
    static getRemainingCharacterCounterText(newValue: string | undefined, maxLength: number | null): string;
    static getNumberByIndex(index: number, startIndexStr: string, parentIndex?: number): string;
    static isCharNotLetterAndDigit(ch: string): boolean;
    static isCharDigit(ch: string): boolean;
    static isDigitsOnly(str: string): boolean;
    private static getNumberFromStr;
    private static countDecimals;
    static correctAfterPlusMinis(a: number, b: number, res: number): number;
    static sumAnyValues(a: any, b: any): any;
    static correctAfterMultiple(a: number, b: number, res: number): number;
    private static findObjByPropValue;
    static convertArrayObjectToValue(src: Array<any>, propName: string): Array<any>;
    static convertDateToString(date: Date): string;
    static convertDateTimeToString(date: Date, isLocal?: boolean, withSeconds?: boolean): string;
    static convertValToQuestionVal(val: any, inputType?: string): any;
    static compareVerions(ver1: string, ver2: string): number;
    static isUrlYoutubeVideo(url: string): boolean;
}
