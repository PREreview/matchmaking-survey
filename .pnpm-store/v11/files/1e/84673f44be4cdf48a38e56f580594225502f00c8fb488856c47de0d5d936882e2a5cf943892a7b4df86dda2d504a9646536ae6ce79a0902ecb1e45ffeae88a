import { HashTable } from "../helpers";
import { IValueGetterContext } from "../conditions/conditionProcessValue";
import { IExpressionValidationOptions } from "../base";
import { IExpressionError } from "./expressionError";
import type { IExpressionExecutorBase } from "./expressionExecutor";
export { IExpressionExecutorBase };
export declare var createExpressionExecutor: (expression: string) => IExpressionExecutorBase;
export declare function setCreateExpressionExecutor(func: (expression: string) => IExpressionExecutorBase): void;
export declare class ExpressionRunnerBase {
    private expressionExecutor;
    private variables;
    private containsFunc;
    private static IdRunnerCounter;
    onBeforeAsyncRun: (id: number) => void;
    onAfterAsyncRun: (id: number) => void;
    constructor(expression: string);
    get expression(): string;
    set expression(value: string);
    getVariables(): Array<string>;
    hasFunction(noParamsOnly?: boolean): boolean;
    get isAsync(): boolean;
    canRun(): boolean;
    runContextCore(context: IValueGetterContext, properties?: HashTable<any>): any;
    validate(context: IValueGetterContext, options: IExpressionValidationOptions, isCondition: boolean): IExpressionError[];
    protected doOnComplete(res: any, id: number): void;
}
export declare class ExpressionRunner extends ExpressionRunnerBase {
    onRunComplete: (result: any) => void;
    runValues(values: HashTable<any>, properties?: HashTable<any>): any;
    runContext(context: IValueGetterContext, properties?: HashTable<any>): any;
    protected doOnComplete(res: any, id: number): void;
}
