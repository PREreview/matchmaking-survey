import { HashTable } from "../helpers";
export declare enum ExpressionErrorType {
    SyntaxError = 0,
    UnknownFunction = 1,
    UnknownVariable = 2,
    SemanticError = 3
}
export interface IExpressionError {
    errorType: ExpressionErrorType;
    functionName?: string;
    variableName?: string;
}
export declare function getQuestionErrorText(properties: HashTable<any>): string;
