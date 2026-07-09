export interface FilePosition {
    offset: number;
    line: number;
    column: number;
}
export interface FileRange {
    start: FilePosition;
    end: FilePosition;
    source: string;
}
export interface LiteralExpectation {
    type: "literal";
    text: string;
    ignoreCase: boolean;
}
export interface ClassParts extends Array<string | ClassParts> {
}
export interface ClassExpectation {
    type: "class";
    parts: ClassParts;
    inverted: boolean;
    ignoreCase: boolean;
}
export interface AnyExpectation {
    type: "any";
}
export interface EndExpectation {
    type: "end";
}
export interface OtherExpectation {
    type: "other";
    description: string;
}
export type Expectation = LiteralExpectation | ClassExpectation | AnyExpectation | EndExpectation | OtherExpectation;
declare class _PeggySyntaxError extends Error {
    static buildMessage(expected: Expectation[], found: string | null): string;
    message: string;
    expected: Expectation[];
    found: string | null;
    location: FileRange;
    name: string;
    constructor(message: string, expected: Expectation[], found: string | null, location: FileRange);
    format(sources: {
        source?: any;
        text: string;
    }[]): string;
}
export interface TraceEvent {
    type: string;
    rule: string;
    result?: any;
    location: FileRange;
}
export interface ParseOptions {
    filename?: string;
    startRule?: "Expression";
    tracer?: any;
    [key: string]: any;
}
export type ParseFunction = <Options extends ParseOptions>(input: string, options?: Options) => Options extends {
    startRule: infer StartRule;
} ? StartRule extends "Expression" ? Expression : Expression : Expression;
export declare const parse: ParseFunction;
export declare const PeggySyntaxError: typeof _PeggySyntaxError;
export type PeggySyntaxError = _PeggySyntaxError;
export type Expression = any;
export type OrSign = "or";
export type LogicOr = any;
export type AndSign = "and";
export type LogicAnd = any;
export type ComparableOperators = "lessorequal" | "greaterorequal" | "equal" | "notequal" | "less" | "greater";
export type CompOps = any;
export type PlusMinusSigns = "plus" | "minus";
export type PlusMinusOps = any;
export type MulDivSigns = "mul" | "div" | "mod";
export type MulDivOps = any;
export type PowerSigns = "power";
export type BinaryFuncOp = any;
export type BinFunctions = "contains" | "notcontains" | "anyof" | "allof" | "noneof";
export type Factor = Expression | FunctionOp | UnaryFunctionOp | Atom | ArrayOp;
export type FunctionOp = any;
export type UnaryFunctionOp = any;
export type UnFunctions = "empty" | "notempty";
export type Atom = null | any;
export type ConstValue = LogicValue | ArithmeticValue | LettersAndDigits | "" | string;
export type ArrayOp = Sequence;
export type Sequence = any;
export type LogicValue = boolean;
export type ArithmeticValue = number | (number | Number_1);
export type Number_1 = number | 0;
export type ValueInput = string;
export type AnyInput = string;
export type AnyCharacters = "'" | '"' | string;
export type ValueCharacters = string;
export type LettersAndDigits = string;
export type Digits = string[];
export type NonZeroDigits = string[];
export type Letters = string[];
export type _ = string[];
export {};
