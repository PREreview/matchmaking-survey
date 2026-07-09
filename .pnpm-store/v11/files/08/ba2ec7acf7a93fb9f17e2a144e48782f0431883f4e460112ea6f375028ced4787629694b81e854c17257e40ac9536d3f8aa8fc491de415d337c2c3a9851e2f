import * as React from "react";
import { IReactSurveyElementProps, ReactSurveyElement, SurveyQuestionUncontrolledElement } from "./reactquestion_element";
import { ItemValue, Question, QuestionCommentModel, TextAreaModel } from "survey-core";
export declare class SurveyQuestionComment extends SurveyQuestionUncontrolledElement<QuestionCommentModel> {
    private renderCharacterCounter;
    constructor(props: any);
    protected renderElement(): React.JSX.Element;
}
export interface ISurveyQuestionCommentItemProps extends IReactSurveyElementProps {
    question: Question;
}
export declare class SurveyQuestionCommentItem<P extends ISurveyQuestionCommentItemProps = ISurveyQuestionCommentItemProps> extends ReactSurveyElement<P> {
    private textAreaModel;
    constructor(props: {
        question: Question;
    });
    protected canRender(): boolean;
    protected getTextAreaModel(): TextAreaModel;
    protected renderElement(): React.JSX.Element;
    protected getKey(): number;
}
export interface ISurveyQuestionCommentValueItemProps extends ISurveyQuestionCommentItemProps {
    question: Question;
    item: ItemValue;
}
export declare class SurveyQuestionCommentValueItem extends SurveyQuestionCommentItem<ISurveyQuestionCommentValueItemProps> {
    constructor(props: ISurveyQuestionCommentValueItemProps);
    protected getTextAreaModel(): TextAreaModel;
    protected getKey(): number;
}
