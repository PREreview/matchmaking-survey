import { Operand } from "../expressions/expressions";
export declare class ConditionsParserError {
    at: number;
    code: string;
    constructor(at: number, code: string);
}
export declare class ConditionsParser {
    private conditionError;
    private patchExpression;
    private patchBraces;
    createCondition(text: string): Operand;
    parseExpression(text: string): Operand;
    get error(): ConditionsParserError;
}
