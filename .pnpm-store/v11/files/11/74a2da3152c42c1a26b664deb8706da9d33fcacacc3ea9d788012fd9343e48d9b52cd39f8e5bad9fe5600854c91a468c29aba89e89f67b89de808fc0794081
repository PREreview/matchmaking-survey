import { Base } from "./base";
export interface IPropertyDecoratorOptions<T = any> {
    defaultValue?: T;
    defaultSource?: string;
    getDefaultValue?: (objectInstance?: any) => T;
    calcFunc?: (objectInstance?: any) => T;
    returnValue?: T;
    localizable?: {
        name?: string;
        onCreate?: (obj: Base, locStr: any) => void;
        defaultStr?: string | boolean;
        markdown?: boolean;
    } | boolean;
    onSet?: (val: T, objectInstance: any, prevVal?: T) => void;
    onSetting?: (val: T, objectInstance: any, prevVal?: T) => T;
    isLowerCase?: boolean;
}
export declare function property(options?: IPropertyDecoratorOptions): (target: any, key: string) => void;
export interface IArrayPropertyDecoratorOptions {
    onPush?: any;
    onRemove?: any;
    onSet?: (val: any, target: any) => void;
}
export declare function propertyArray(options?: IArrayPropertyDecoratorOptions): (target: any, key: string) => void;
