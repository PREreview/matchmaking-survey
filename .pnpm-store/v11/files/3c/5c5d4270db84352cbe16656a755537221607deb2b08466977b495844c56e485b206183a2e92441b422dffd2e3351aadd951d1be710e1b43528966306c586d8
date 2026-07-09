import { HashTable } from "./helpers";
import { Base } from "./base";
import { ISurvey, ISurveyVariables } from "./base-interfaces";
/**
 * The calculated value is a way to define the variable in Survey Creator.
 * It has two main properties: name and expression. Based on expression the value read-only property is automatically calculated.
 * The name property should be unique though all calculated values.
 * It uses survey.getVariable/seruvey.setVariable functions to get/set its value. The class do not store its value internally.
 * You may set includeIntoResult property to true to store this calculated value into survey result.
 */
export declare class CalculatedValue extends Base {
    private data;
    private expressionIsRunning;
    private expressionRunner;
    constructor(name?: string, expression?: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    setOwner(data: ISurveyVariables): void;
    getOwner(): ISurveyVariables;
    getType(): string;
    getSurvey(live?: boolean): ISurvey;
    get owner(): ISurveyVariables;
    /**
     * The calculated value name. It should be non empty and unique.
     */
    name: string;
    /**
     * Set this property to true to include the non-empty calculated value into survey result, survey.data property.
     */
    includeIntoResult: boolean;
    /**
     * The Expression that used to calculate the value. You may use standard operators like +, -, * and /, squares (). Here is the example of accessing the question value {questionname}.
     * Example: "({quantity} * {price}) * (100 - {discount}) / 100"
     */
    expression: string;
    locCalculation(): void;
    unlocCalculation(): void;
    private isCalculated;
    resetCalculation(): void;
    doCalculation(calculatedValues: Array<CalculatedValue>, properties: HashTable<any>): void;
    runExpression(properties: HashTable<any>): void;
    get value(): any;
    protected setValue(val: any): void;
    private get canRunExpression();
    private rerunExpression;
    protected onDependencyValueChanged(obj: Base, propertyName: string): void;
    private runExpressionCore;
    private runDependentExpressions;
    private ensureExpression;
}
