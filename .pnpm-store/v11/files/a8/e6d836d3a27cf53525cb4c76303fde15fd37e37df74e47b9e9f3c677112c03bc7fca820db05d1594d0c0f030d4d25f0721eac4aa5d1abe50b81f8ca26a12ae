import { HashTable } from "./helpers";
import { Base } from "./base";
import { ISurvey } from "./base-interfaces";
import { ExpressionRunner } from "./expressions/expressionRunner";
/**
 * A base class for all triggers.
 * A trigger calls a method when the expression change the result: from false to true or from true to false.
 * Please note, it runs only one changing the expression result.
 */
export declare class Trigger extends Base {
    static operatorsValue: HashTable<Function>;
    static get operators(): HashTable<Function>;
    constructor();
    get id(): number;
    getType(): string;
    toString(): string;
    isGhost: boolean;
    protected get isInternal(): boolean;
    get operator(): string;
    set operator(value: string);
    value: any;
    name: string;
    get expression(): string;
    set expression(val: string);
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    protected canBeExecutedOnComplete(): boolean;
    protected isExecutingOnNextPage: boolean;
    protected isExecutingOnNavigation: boolean;
    checkExpression(options: {
        isOnNextPage: boolean;
        isOnComplete: boolean;
        isOnNavigation: boolean;
        keys: any;
        properties?: HashTable<any>;
    }): void;
    protected canBeExecuteOnKeysChange(keys: any[]): boolean;
    protected canSuccessOnEmptyExpression(): boolean;
    check(value: any): void;
    get requireValidQuestion(): boolean;
    private triggerResult;
    protected onSuccess(properties: HashTable<any>): void;
    protected onFailure(): void;
    protected onSuccessExecuted(): void;
    private buildExpression;
    private isCheckRequired;
    protected getUsedVariables(runner: ExpressionRunner): string[];
    private get isRequireValue();
}
export interface ISurveyTriggerOwner {
    getObjects(pages: string[], questions: string[]): any[];
    setCompleted(trigger: Trigger): void;
    canBeCompleted(trigger: Trigger, isCompleted: boolean): void;
    triggerExecuted(trigger: Trigger): void;
    setTriggerValue(name: string, value: any, isVariable: boolean): any;
    copyTriggerValue(name: string, fromName: string, copyDisplayValue: boolean): void;
    focusQuestion(name: string): boolean;
}
/**
 * It extends the Trigger base class and add properties required for SurveyJS classes.
 */
export declare class SurveyTrigger extends Trigger {
    protected ownerValue: ISurveyTriggerOwner;
    constructor();
    get owner(): ISurveyTriggerOwner;
    setOwner(owner: ISurveyTriggerOwner): void;
    getOwner(): ISurveyTriggerOwner;
    getSurvey(live?: boolean): ISurvey;
    protected isRealExecution(): boolean;
    protected onSuccessExecuted(): void;
}
/**
 * If expression returns true, it makes questions/pages visible.
 * Ohterwise it makes them invisible.
 */
export declare class SurveyTriggerVisible extends SurveyTrigger {
    pages: string[];
    questions: string[];
    constructor();
    getType(): string;
    protected onSuccess(properties: HashTable<any>): void;
    protected onFailure(): void;
    private onTrigger;
    protected onItemSuccess(item: any): void;
    protected onItemFailure(item: any): void;
}
/**
 * If expression returns true, it completes the survey.
 */
export declare class SurveyTriggerComplete extends SurveyTrigger {
    constructor();
    getType(): string;
    get requireValidQuestion(): boolean;
    protected isRealExecution(): boolean;
    protected onSuccess(properties: HashTable<any>): void;
    protected onFailure(): void;
}
/**
 * If expression returns true, the value from property **setValue** will be set to **setToName**
 */
export declare class SurveyTriggerSetValue extends SurveyTrigger {
    constructor();
    getType(): string;
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    protected canBeExecuteOnKeysChange(keys: any[]): boolean;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    setToName: string;
    setValue: any;
    isVariable: boolean;
    protected onSuccess(properties: HashTable<any>): void;
}
/**
 * If expression returns true, the survey go to question **gotoName** and focus it.
 */
export declare class SurveyTriggerSkip extends SurveyTrigger {
    constructor();
    getType(): string;
    get requireValidQuestion(): boolean;
    gotoName: string;
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    protected onSuccess(properties: HashTable<any>): void;
}
/**
 * If expression returns true, the **runExpression** will be run. If **setToName** property is not empty then the result of **runExpression** will be set to it.
 */
export declare class SurveyTriggerRunExpression extends SurveyTrigger {
    constructor();
    getType(): string;
    setToName: string;
    runExpression: string;
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    protected onSuccess(properties: HashTable<any>): boolean;
    private onCompleteRunExpression;
}
/**
 * If expression returns true, the value from question **fromName** will be set into **setToName**.
 */
export declare class SurveyTriggerCopyValue extends SurveyTrigger {
    constructor();
    protected canBeExecuted(isOnNextPage: boolean): boolean;
    setToName: string;
    fromName: string;
    copyDisplayValue: boolean;
    getType(): string;
    protected canBeExecuteOnKeysChange(keys: any[]): boolean;
    protected onSuccess(properties: HashTable<any>): void;
    protected canSuccessOnEmptyExpression(): boolean;
    protected getUsedVariables(runner: ExpressionRunner): string[];
}
