import { ITextProcessor, ITextProcessorProp, ITextProcessorResult } from "./base-interfaces";
import { IObjectValueContext } from "./conditions/conditionProcessValue";
export declare class TextPreProcessorItem {
    start: number;
    end: number;
}
export declare class TextPreProcessorValue {
    name: string;
    returnDisplayValue: boolean;
    constructor(name: string, returnDisplayValue: boolean);
    value: any;
    isExists: boolean;
    element: any;
}
export declare class TextPreProcessor implements ITextProcessor {
    private _unObservableValues;
    private get hasAllValuesOnLastRunValue();
    private set hasAllValuesOnLastRunValue(value);
    onProcess: (textValue: TextPreProcessorValue) => void;
    process(text: string, returnDisplayValue?: boolean, doEncoding?: boolean, replaceUndefinedValues?: boolean): string;
    protected canProcess(): boolean;
    protected onProcessValue(textValue: TextPreProcessorValue): void;
    processValue(name: string, returnDisplayValue: boolean): TextPreProcessorValue;
    get hasAllValuesOnLastRun(): boolean;
    processText(text: string, returnDisplayValue: boolean): string;
    processTextEx(params: ITextProcessorProp): ITextProcessorResult;
    private getItems;
    private isValidItemName;
    private getName;
}
export declare class TextContextProcessor extends TextPreProcessor {
    private obj;
    private context;
    constructor(obj: IObjectValueContext);
    protected canProcess(): boolean;
    protected onProcessValue(textValue: TextPreProcessorValue): void;
    processText(text: string, returnDisplayValue: boolean): string;
    processTextEx(params: ITextProcessorProp): ITextProcessorResult;
    private get survey();
    private getContextObj;
    private getProcessedTextValue;
}
