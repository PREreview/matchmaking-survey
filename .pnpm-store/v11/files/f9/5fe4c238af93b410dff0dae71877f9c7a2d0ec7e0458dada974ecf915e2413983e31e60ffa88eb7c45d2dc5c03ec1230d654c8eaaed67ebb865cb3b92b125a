import { IQuestion } from "../base-interfaces";
import { HashTable } from "../helpers";
export interface IValueGetterItem {
    name: string;
    index?: number;
}
export interface IValueGetterInfo {
    obj?: IObjectValueContext;
    propObj?: any;
    propName?: string;
    context?: IValueGetterContext;
    requireStrictCompare?: boolean;
    isFound?: boolean;
    value?: any;
}
export interface IObjectValueContext {
    getValueGetterContext(): IValueGetterContext;
}
export interface IValueGetterContextGetValueParams {
    path: Array<IValueGetterItem>;
    isRoot: boolean;
    index: number;
    createObjects?: boolean;
    isProperty?: boolean;
    isOriginalValue?: boolean;
}
export interface IValueGetterContext {
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    getTextValue?(name: string, value: any, isDisplayValue: boolean): string;
    getObj?(): any;
    getRootObj?(): IObjectValueContext;
    getQuestion?(): IQuestion;
    getContextKeys?(): {
        [key: string]: any;
    };
}
export interface IValueInfoParams {
    name: string;
    context: IValueGetterContext;
    isText?: boolean;
    isDisplayValue?: boolean;
    createObjects?: boolean;
    isOriginalValue?: boolean;
}
export interface IReturnValue {
    isFound: boolean;
    value: any;
    question?: IQuestion;
    propObj?: any;
    propName?: string;
    strictCompare?: boolean;
}
export declare class ValueGetter {
    constructor();
    getValueInfo(params: IValueInfoParams): IReturnValue;
    private getValueInfoCore;
    getValue(name: string, context: IValueGetterContext, isText?: boolean, isDisplayValue?: boolean): any;
    getDisplayValue(name: string, context: IValueGetterContext, isDisplayValue?: boolean): string;
    isAnyKeyChanged(keys: any, usedNames: string[]): boolean;
    private getFirstNameByKeys;
    private getValueFromObject;
    private run;
    getPath(name: string): Array<IValueGetterItem>;
    private getValueItem;
}
export declare class ValueGetterContextCore implements IValueGetterContext {
    constructor();
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    protected isSearchNameRevert(): boolean;
    private checkValueByPath;
    private getNameByPath;
    private getMaxIndexByPath;
    getTextValue(name: string, value: any, isDisplayValue: boolean): string;
    protected getInitialvalue(): any;
    protected updateValueByItem(name: string, res: IValueGetterInfo): void;
    protected updateItemByIndex(index: number, res: IValueGetterInfo): void;
}
export declare class VariableGetterContext extends ValueGetterContextCore {
    private variables;
    constructor(variables: HashTable<any>);
    protected getInitialvalue(): any;
    protected isSearchNameRevert(): boolean;
    protected updateValueByItem(name: string, res: IValueGetterInfo): void;
    protected updateItemByIndex(index: number, res: IValueGetterInfo): void;
    protected getValueByItemCore(obj: any, name: string): any;
}
export declare class PropertyGetterContext extends VariableGetterContext {
    private obj;
    private lastObj;
    private lastName;
    constructor(obj: any);
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    protected getValueByItemCore(obj: any, name: string): any;
}
export declare class VariableGetterContextEx extends VariableGetterContext {
    private second;
    constructor(variables: HashTable<any>, second: IValueGetterContext);
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
}
export declare class ProcessValue {
    private contextValue;
    properties: HashTable<any>;
    asyncValues: HashTable<any>;
    onCompleteAsyncFunc: (op: any) => void;
    constructor(context: IValueGetterContext);
    get context(): IValueGetterContext;
    hasValue(text: string): boolean;
    getValue(text: string): any;
    private getValueInfoByContext;
    getValueInfo(valueInfo: any): {
        hasValue: boolean;
    };
}
