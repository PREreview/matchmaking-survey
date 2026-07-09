import * as React from "react";
import { Question, DropdownListModel, ItemValue } from "survey-core";
import { SurveyQuestionUncontrolledElement } from "./reactquestion_element";
export declare class SurveyQuestionDropdownBase<T extends Question> extends SurveyQuestionUncontrolledElement<T> {
    inputElement: HTMLInputElement | null;
    click: (event: any) => void;
    chevronPointerDown: (event: any) => void;
    clear: (event: any) => void;
    keyhandler: (event: any) => void;
    blur: (event: any) => void;
    focus: (event: any) => void;
    protected get dropdownListModel(): DropdownListModel;
    protected getStateElement(): any;
    protected setValueCore(newValue: any): void;
    protected getValueCore(): any;
    protected renderReadOnlyElement(): React.JSX.Element | null;
    protected renderSelect(cssClasses: any): React.JSX.Element;
    renderValueElement(): React.JSX.Element | null;
    protected renderInput(): React.JSX.Element;
    protected renderFilterInput(): React.JSX.Element;
    protected renderOther(item: ItemValue, cssClasses: any): React.JSX.Element;
    protected renderEditorButtons(): React.JSX.Element | null;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateInputDomElement(): void;
}
