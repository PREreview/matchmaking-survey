import * as React from "react";
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { SurveyModel, Question, QuestionPanelDynamicModel } from "survey-core";
import { SurveyPanel } from "./panel";
import { ReactSurveyElement } from "./reactquestion_element";
export declare class SurveyQuestionPanelDynamic extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionPanelDynamicModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private updateQuestionRendering;
    protected renderElement(): React.JSX.Element;
    protected renderRange(): React.JSX.Element;
    protected renderAddRowButton(): React.JSX.Element | null;
    protected renderNavigatorV2(): React.JSX.Element | null;
    protected renderPlaceholder(cssClasses: any): React.JSX.Element | null;
}
export declare class SurveyQuestionPanelDynamicItem extends SurveyPanel {
    private get question();
    private get index();
    protected getSurvey(): SurveyModel | null;
    protected getCss(): any;
    render(): React.JSX.Element;
    protected renderButton(): React.JSX.Element | null;
}
export declare class SurveyQuestionPanelDynamicPlaceholder extends ReactSurveyElement {
    constructor(props: any);
    protected renderElement(): React.JSX.Element;
    protected renderAddRowButton(question: Question): React.JSX.Element;
}
