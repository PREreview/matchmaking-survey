import { IElement } from "./base-interfaces";
import { PanelModel } from "./panel";
import { Question } from "./question";
/**
 * The flow panel object. It is a container with flow layout where you can mix questions with markdown text.
 *
 */
export declare class FlowPanelModel extends PanelModel {
    static contentElementNamePrefix: string;
    contentChangedCallback: () => void;
    onGetHtmlForQuestion: (question: Question) => string;
    onCustomHtmlProducing: () => string;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    getChildrenLayoutType(): string;
    onSurveyLoad(): any;
    content: string;
    html: string;
    protected onContentChanged(): any;
    produceHtml(): string;
    getQuestionFromText(str: string): Question;
    protected getHtmlForQuestion(question: Question): string;
    protected getQuestionHtmlId(question: Question): string;
    protected onAddElement(element: IElement, index: number): void;
    protected onRemoveElement(element: IElement): void;
    dragDropMoveElement(src: IElement, target: IElement, targetIndex: number): void;
    private addElementToContent;
    private insertTextAtCursor;
    getElementContentText(element: IElement): string;
}
