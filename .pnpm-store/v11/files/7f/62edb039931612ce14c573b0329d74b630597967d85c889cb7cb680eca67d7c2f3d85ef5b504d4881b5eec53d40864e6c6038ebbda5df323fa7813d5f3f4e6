import { HashTable } from "../helpers";
import { ProcessValue } from "../conditions/conditionProcessValue";
export interface AsyncFunctionItem {
    operand?: FunctionOperand;
    parent?: AsyncFunctionItem;
    children?: Array<AsyncFunctionItem>;
}
export declare abstract class Operand {
    private static counter;
    private _id;
    get id(): number;
    toString(func?: (op: Operand) => string): string;
    abstract getType(): string;
    abstract evaluate(processValue?: ProcessValue): any;
    abstract setVariables(variables: Array<string>): any;
    hasFunction(noParamsOnly?: boolean): boolean;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
    addOperandsToList(list: Array<Operand>): void;
    isEqual(op: Operand): boolean;
    protected abstract isContentEqual(op: Operand): boolean;
    protected areOperatorsEquals(op1: Operand, op2: Operand): boolean;
    protected addChildrenToList(list: Array<Operand>): void;
}
export declare class BinaryOperand extends Operand {
    private operatorName;
    private left;
    private right;
    private consumer;
    private isArithmeticValue;
    constructor(operatorName: string, left?: any, right?: any, isArithmeticOp?: boolean);
    private get requireStrictCompare();
    private getIsOperandRequireStrict;
    getType(): string;
    get isArithmetic(): boolean;
    get isConjunction(): boolean;
    get conjunction(): string;
    get operator(): string;
    get leftOperand(): any;
    get rightOperand(): any;
    protected isContentEqual(op: Operand): boolean;
    private evaluateParam;
    evaluate(processValue?: ProcessValue): any;
    toString(func?: (op: Operand) => string): string;
    setVariables(variables: Array<string>): void;
    hasFunction(noParamsOnly?: boolean): boolean;
    protected addChildrenToList(list: Array<Operand>): void;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
}
export declare class UnaryOperand extends Operand {
    private expressionValue;
    private operatorName;
    private consumer;
    constructor(expressionValue: Operand, operatorName: string);
    get operator(): string;
    get expression(): Operand;
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    private get isRigtOperator();
    protected isContentEqual(op: Operand): boolean;
    hasFunction(noParamsOnly?: boolean): boolean;
    protected addChildrenToList(list: Array<Operand>): void;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
    evaluate(processValue?: ProcessValue): boolean;
    setVariables(variables: Array<string>): void;
}
export declare class ArrayOperand extends Operand {
    values: Array<Operand>;
    constructor(values: Array<Operand>);
    getType(): string;
    toString(func?: (op: Operand) => string, noBrackets?: boolean): string;
    evaluate(processValue?: ProcessValue): Array<any>;
    setVariables(variables: Array<string>): void;
    hasFunction(noParamsOnly?: boolean): boolean;
    protected addChildrenToList(list: Array<Operand>): void;
    hasAsyncFunction(): boolean;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
    protected isContentEqual(op: Operand): boolean;
}
export declare class Const extends Operand {
    private value;
    constructor(value: any);
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    get correctValue(): any;
    get requireStrictCompare(): boolean;
    evaluate(): any;
    setVariables(variables: Array<string>): void;
    protected getCorrectValue(value: any): any;
    isBoolean(): boolean;
    protected isContentEqual(op: Operand): boolean;
    private isQuote;
}
export declare class Variable extends Const {
    private variableName;
    static get DisableConversionChar(): string;
    static set DisableConversionChar(val: string);
    private valueInfo;
    private useValueAsItIs;
    private returnOriginalValue;
    constructor(variableName: string);
    get requireStrictCompare(): boolean;
    getType(): string;
    toString(func?: (op: Operand) => string): string;
    get variable(): string;
    setReturnOriginalValue(val: boolean): void;
    evaluate(processValue?: ProcessValue): any;
    setVariables(variables: Array<string>): void;
    protected getCorrectValue(value: any): any;
    protected isContentEqual(op: Operand): boolean;
    private returnJSONObject;
}
export declare class FunctionOperand extends Operand {
    private originalValue;
    private parameters;
    constructor(originalValue: string, parameters: ArrayOperand);
    getType(): string;
    get functionName(): string;
    get paramValues(): Array<Operand>;
    evaluate(processValue?: ProcessValue): any;
    private markOriginalValueParams;
    private evaluateCore;
    toString(func?: (op: Operand) => string): string;
    setVariables(variables: Array<string>): void;
    isReady(proccessValue: ProcessValue): boolean;
    protected addChildrenToList(list: Array<Operand>): void;
    private getAsynValue;
    hasFunction(noParamsOnly?: boolean): boolean;
    hasAsyncFunction(): boolean;
    private isAsyncFunction;
    addToAsyncList(list: Array<AsyncFunctionItem>): void;
    protected isContentEqual(op: Operand): boolean;
}
export declare class OperandMaker {
    static throwInvalidOperatorError(op: string): void;
    static safeToString(operand: Operand, func: (op: Operand) => string): string;
    static toOperandString(value: string): string;
    static isBooleanValue(value: string): boolean;
    static countDecimals(value: number): number;
    static plusMinus(a: number, b: number, res: number): number;
    static unaryFunctions: HashTable<Function>;
    static binaryFunctions: HashTable<Function>;
    static isTwoValueEquals(x: any, y: any, ignoreOrder?: boolean): boolean;
    static operatorToString(operatorName: string): string;
    static convertValForDateCompare(val: any, second: any): any;
    static signs: HashTable<string>;
}
