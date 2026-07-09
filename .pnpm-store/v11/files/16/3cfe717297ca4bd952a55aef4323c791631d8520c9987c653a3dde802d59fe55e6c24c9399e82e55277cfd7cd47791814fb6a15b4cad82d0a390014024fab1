import * as React from "react";
import { QuestionRadiogroupModel, ItemValue, Base } from "survey-core";
import { SurveyQuestionSelectBaseItem, SurveyQuestionSelectbase } from "./reactquestion_selectbase";
export declare class SurveyQuestionRadiogroup extends SurveyQuestionSelectbase {
    constructor(props: any);
    protected get question(): QuestionRadiogroupModel;
    protected getFooter(): React.JSX.Element | null;
    private renderClearButton;
    protected getStateValue(): any;
    protected isItemChecked(item: ItemValue, value: any): boolean;
}
export declare class SurveyQuestionRadioItem extends SurveyQuestionSelectBaseItem {
    constructor(props: any);
    protected getStateElement(): Base;
    protected get question(): QuestionRadiogroupModel;
    protected get isChecked(): boolean;
    protected doOnItemChange(event: any): void;
    handleOnMouseDown(event: any): void;
    protected renderElementContent(): React.JSX.Element;
    protected renderRadioButton(): React.JSX.Element;
}
