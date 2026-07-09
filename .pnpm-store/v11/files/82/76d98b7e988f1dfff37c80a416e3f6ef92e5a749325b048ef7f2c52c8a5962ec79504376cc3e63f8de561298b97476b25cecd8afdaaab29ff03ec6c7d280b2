import { HashTable } from "../helpers";
import { IValueGetterContext } from "./conditionProcessValue";
import { ExpressionRunnerBase } from "../expressions/expressionRunner";
export declare class ConditionRunner extends ExpressionRunnerBase {
    onRunComplete: (result: boolean) => void;
    runValues(values: HashTable<any>, properties?: HashTable<any>): boolean;
    runContext(context: IValueGetterContext, properties?: HashTable<any>): boolean;
    protected doOnComplete(res: any, id: number): void;
}
