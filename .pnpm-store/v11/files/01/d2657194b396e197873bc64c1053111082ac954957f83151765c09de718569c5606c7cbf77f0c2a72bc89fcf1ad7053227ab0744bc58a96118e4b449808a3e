import { IQuestion, ISurvey, ISurveyData, ISurveyImpl, ITextProcessor } from "./base-interfaces";
import { IObjectValueContext, IValueGetterContext, IValueGetterContextGetValueParams, IValueGetterInfo } from "./conditions/conditionProcessValue";
import { Question, QuestionItemValueGetterContext } from "./question";
export interface IDynamicItemModelData {
    getSurvey(): ISurvey;
    getItem(index: number): DynamicItemModelBase;
    getItemData(item: ISurveyData): any;
    getItemIndex(item: ISurveyData): number;
    getValueGetterContext(): IValueGetterContext;
    getFilteredData(): any;
    getBindedQuestions(): IQuestion[];
    getSharedQuestionFromArray(name: string, index: number): Question;
    updateItemValue(item: ISurveyData, name: string, val: any, isDeletingValue: boolean): any;
}
export declare abstract class DynamicItemGetterContext extends QuestionItemValueGetterContext {
    protected item: DynamicItemModelBase;
    constructor(item: DynamicItemModelBase);
    protected getIndex(): number;
    protected getQuestionData(): Question;
    protected get questionName(): string;
    protected abstract getSpecificValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    protected abstract getNextName(): string;
    protected abstract getPrevName(): string;
    protected get variableName(): string;
    protected abstract getItemValue(name: string): any;
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    protected updateValueByItem(name: string, res: IValueGetterInfo): void;
    protected abstract getVisibleItem(idx: number): DynamicItemModelBase;
    protected abstract get visibleIndex(): number;
    protected getItemVariableNames(): Array<string>;
    getContextKeys(): {
        [key: string]: any;
    };
}
export declare abstract class DynamicItemModelBase implements ISurveyData, ISurveyImpl, IObjectValueContext {
    data: IDynamicItemModelData;
    protected isSettingValue: boolean;
    private textPreProcessor;
    constructor(data: IDynamicItemModelData);
    abstract getValueGetterContext(): IValueGetterContext;
    getSurveyData(): ISurveyData;
    getTextProcessor(): ITextProcessor;
    abstract getQuestionsByValueName(name: string, caseInsensitive?: boolean): Array<Question>;
    abstract getVariableName(): string;
    protected abstract getQuestionByName(name: string): IQuestion;
    abstract getIndex(): number;
    getSurvey(): ISurvey;
    getValue(name: string): any;
    abstract setValue(name: string, newValue: any): void;
    getAllValues(): any;
    abstract getComment(name: string): string;
    abstract setComment(name: string, newValue: string, locNotification: boolean): void;
    getFilteredProperties(): any;
    findQuestionByName(name: string): IQuestion;
    abstract get questions(): Array<Question>;
    runTriggers(name: string, value: any, keys?: any): void;
    protected runTriggersOnSetValue(name: string, newValue: any): void;
    protected updateSharedQuestionsValue(name: string, value: any): void;
    protected isValueChanged(name: string, newValue: any): boolean;
    protected getSharedQuestionByName(columnName: string): Question;
}
