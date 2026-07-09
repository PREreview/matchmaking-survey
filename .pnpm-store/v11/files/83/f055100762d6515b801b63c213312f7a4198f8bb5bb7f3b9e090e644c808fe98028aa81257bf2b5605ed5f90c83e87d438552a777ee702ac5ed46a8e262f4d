import { HashTable } from "../helpers";
import { IValueGetterContext } from "../conditions/conditionProcessValue";
import { Operand } from "./expressions";
import { IExpressionValidationOptions } from "../base";
import { IExpressionError } from "./expressionError";
export interface IExpressionExecutorBase {
    onComplete: (res: any, id: number) => void;
    expression: string;
    canRun(): boolean;
    run(values: HashTable<any>, properties: HashTable<any>, id: number): any;
    runContext(context: IValueGetterContext, properties: HashTable<any>, id: number): any;
    getVariables(): Array<string>;
    hasFunction(noParamsOnly?: boolean): boolean;
    isAsync: boolean;
    validate(context: IValueGetterContext, isCondition: boolean, options: IExpressionValidationOptions): IExpressionError[];
}
/**
 * Base interface for expression execution
 */
export interface IExpressionExecutor {
    /**
     * This call back runs on executing expression if there is at least one async function
     */
    onComplete: (res: any, id: number) => void;
    /**
     * The expression as string, property with get
     */
    expression: string;
    /**
     * Returns true if the expression is valid and can be executed
     */
    canRun(): boolean;
    /**
     * Run the expression. Returns the result of execution.
     * The result can be undefined if there is an asyn function. In this case result will be returned onComplete callback.
     * @param values has with values names and their results. Normally it is question names and their values
     * @param properties the list of properties that are available in functions. Commonly it is survey and question, if expression execuited in a question context
     */
    run(values: HashTable<any>, properties: HashTable<any>, id: number): any;
    runContext(context: IValueGetterContext, properties: HashTable<any>, id: number): any;
    /**
     * Returns the list of variables that used in the expression. They defined as: {variableName} in default parser.
     */
    getVariables(): Array<string>;
    /**
     * Returns true if there is a function in the expression
     */
    hasFunction(noParamsOnly?: boolean): boolean;
    /**
     * Returns true if there is an async function in the expression
     */
    isAsync: boolean;
    validate(context: IValueGetterContext, isCondition: boolean, options: IExpressionValidationOptions): IExpressionError[];
}
export declare class ExpressionExecutorRunner {
    private operand;
    private id;
    private onComplete;
    private processValue;
    private asyncFuncList;
    constructor(operand: Operand, id: number, onComplete: (res: any, id: number) => void, properties: HashTable<any>, context: IValueGetterContext);
    run(isAsync: boolean): any;
    private getAsyncItemByOperand;
    private runAsyncItem;
    private runAsyncItemCore;
    private doAsyncFunctionReady;
    private isAsyncFuncReady;
    private isAsyncChildrenReady;
    private runValues;
}
export declare class ExpressionExecutor implements IExpressionExecutor {
    static createExpressionExecutor: (expression: string) => IExpressionExecutor;
    static getQuestionErrorText(properties: HashTable<any>): string;
    onComplete: (res: any, id: number) => void;
    private expressionValue;
    private operand;
    private parser;
    private isAsyncValue;
    private hasFunctionValue;
    constructor(expression: string);
    get expression(): string;
    private setExpression;
    getVariables(): Array<string>;
    hasFunction(noParamsOnly?: boolean): boolean;
    get isAsync(): boolean;
    canRun(): boolean;
    run(values: HashTable<any>, properties?: HashTable<any>, id?: number): any;
    runContext(context: IValueGetterContext, properties: HashTable<any>, id: number): any;
    validate(context: IValueGetterContext, isCondition: boolean, options: IExpressionValidationOptions): IExpressionError[];
    private getArrayContextVarNames;
    private getSurveyFromContext;
}
