import { HashTable } from "./helpers";
export interface IFunctionCachedResult {
    result: any;
}
export declare class FunctionFactory {
    static Instance: FunctionFactory;
    private functionHash;
    private functionCache;
    register(info: IFunctionRegistration): void;
    register(name: string, func: (params: any[], originalParams?: any[]) => any, isAsync?: boolean, useCache?: boolean): void;
    getOriginalValueParams(name: string): Array<number>;
    unregister(name: string): void;
    hasFunction(name: string): boolean;
    isAsyncFunction(name: string): boolean;
    clear(): void;
    clearCache(functionName?: string): void;
    getAll(): Array<string>;
    run(name: string, params: any[], properties: HashTable<any>, originalParams: any[]): any;
    addSurveyCachedValue(name: string, value: any, isVariable?: boolean): void;
    addObjectCachedValue(obj: any, name: string, value: any): void;
    private isSurveyObjectValue;
    private surveyCachedValues;
    private objsCachedValues;
    private addToCache;
    private getCachedValue;
    private isCachedItemValid;
    private hasDisposedObj;
    private getUnknownFunctionErrorText;
}
export interface IFunctionRegistration {
    name: string;
    func: (params: any[], originalParams: any[]) => any;
    isAsync?: boolean;
    useCache?: boolean;
    originalValueParams?: Array<number>;
}
export declare function registerFunction(info: IFunctionRegistration): void;
export declare function unregisterFunction(name: string): void;
export declare function expressionSurveyCachedValue(name: string, value: any, isVariable?: boolean): void;
export declare function expressionObjectCachedValue(obj: any, name: string, value: any): void;
