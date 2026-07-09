import * as React from "react";
import { ReactSurveyElement, SurveyQuestionElementBase } from "./reactquestion_element";
import { Base, ItemValue, QuestionSelectBase } from "survey-core";
export declare class SurveyQuestionSelectbase extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionSelectBase;
    protected renderElement(): React.JSX.Element;
    protected renderHeader(): React.JSX.Element | null;
    protected getFooter(): React.JSX.Element | null;
    protected getStateValue(): any;
    protected isItemChecked(item: ItemValue, value: any): boolean;
    protected getColumnedBody(cssClasses: any): React.JSX.Element;
    protected getColumns(cssClasses: any): React.JSX.Element[];
    protected getBody(cssClasses: any): React.JSX.Element;
    protected getItems(cssClasses: any, choices: Array<ItemValue>): Array<any>;
    protected get textStyle(): any;
    protected renderItem(item: any, isFirst: boolean, cssClasses: any, index?: string, isChecked?: boolean): React.JSX.Element;
}
export declare class SurveyQuestionSelectBaseItem extends ReactSurveyElement {
    protected rootRef: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    protected getStateElement(): Base;
    protected get question(): QuestionSelectBase;
    protected get item(): ItemValue;
    protected get textStyle(): any;
    protected get isFirst(): any;
    protected get index(): number;
    protected get hideCaption(): boolean;
    protected get ariaLabel(): string;
    componentDidUpdate(prevProps: any, prevState: any): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    handleOnChange: (event: any) => void;
    protected doOnItemChange(event: any): void;
    protected canRender(): boolean;
    protected renderElement(): React.JSX.Element;
    protected renderElementContent(): React.JSX.Element | null;
    protected get inputStyle(): any;
    protected renderComment(): React.JSX.Element | null;
    protected renderPanel(): React.JSX.Element | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
