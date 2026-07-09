import { HashTable } from "./helpers";
import { IElement, IQuestion, IPanel, IConditionRunner, ISurveyImpl, IPage, ITitleOwner, IProgressInfo, ISurvey, IPlainDataOptions, IDropdownMenuOptions, ISurveyElement, ISurveyAfterRenderCallbacks, ISurveyValidation } from "./base-interfaces";
import { Base } from "./base";
import { EventBase } from "./event";
import { SurveyElement } from "./survey-element";
import { SurveyValidator, IValidatorOwner, AsyncElementsRunner } from "./validator";
import { LocalizableString } from "./localizablestring";
import { QuestionCustomWidget } from "./questionCustomWidgets";
import { SurveyError } from "./survey-error";
import { PopupModel } from "./popup";
import { IObjectValueContext, IValueGetterContext, IValueGetterContextGetValueParams, IValueGetterInfo, IValueGetterItem, ValueGetterContextCore } from "./conditions/conditionProcessValue";
import { ITheme } from "./themes";
import { TextAreaModel } from "./utils/text-area";
import { QuestionSingleInputSummary } from "./questionSingleInputSummary";
import { ActionContainer } from "./actions/container";
import { QuestionSingleInputBehavior } from "./question_singleinput_behavior";
export interface IConditionObject {
    name: string;
    text: string;
    question: Question;
    context?: Question;
}
export interface IQuestionPlainData {
    name: string | number;
    title: string;
    value: any;
    displayValue: any;
    isNode: boolean;
    isComment?: boolean;
    questionType?: string;
    data?: Array<IQuestionPlainData>;
    getString: (val: any) => string;
    [key: string]: any;
}
interface ITriggerExpressionInfo {
    name: string;
    canRun: () => boolean;
    doComplete: (res: any, properties: HashTable<any>) => void;
    secondName?: string;
}
export declare class QuestionValueGetterContext implements IValueGetterContext {
    protected question: Question;
    constructor(question: Question);
    getObj(): Base;
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    getTextValue(name: string, value: any, isDisplayValue: boolean): string;
    getRootObj(): IObjectValueContext;
    getQuestion(): IQuestion;
    protected getSurveyValue(path: Array<IValueGetterItem>, index?: number): IValueGetterInfo;
    private getQuestionValue;
}
export declare abstract class QuestionItemValueGetterContext extends ValueGetterContextCore {
    protected abstract getIndex(): number;
    protected abstract getQuestionData(): Question;
    protected getValueFromBindedQuestions(path: Array<IValueGetterItem>, objValue: any): IValueGetterInfo;
    private getQuestionsBySameValueNames;
    private fillQuestions;
    getRootObj(): any;
}
export declare class QuestionArrayGetterContext extends ValueGetterContextCore {
    private questions;
    constructor(questions: Array<Question>);
    protected isSearchNameRevert(): boolean;
    protected updateValueByItem(name: string, res: IValueGetterInfo): void;
}
export interface IValidationContextParams {
    fireCallback: boolean;
    isOnValueChanged?: boolean;
    isOnValueChanging?: boolean;
    focusOnFirstError?: boolean;
    firstErrorQuestion?: IQuestion;
    changeCurrentPage?: boolean;
    callbackResult?: (res: boolean, element: IElement) => void;
}
export declare class ValidationContext extends AsyncElementsRunner {
    private fireCallbackValue;
    private focusOnFirstErrorValue;
    private isOnValueChangedValue;
    private isOnValueChangingValue;
    private changeCurrentPage;
    private firstErrorQuestionValue;
    private res;
    private errorCountValue;
    private isCallbackFired;
    private callbackResult;
    constructor(context?: IValidationContextParams);
    get fireCallback(): boolean;
    get isOnValueChanged(): boolean;
    get isOnValueChanging(): boolean;
    get focusOnFirstError(): boolean;
    get result(): boolean;
    get runningResult(): boolean;
    setErrorElement(element: ISurveyElement, errors?: Array<SurveyError>): void;
    private isWarningOnlyOrEmpty;
    get firstErrorQuestion(): Question;
    get errorCount(): number;
    private setCallbackResult;
    private setQuestionError;
}
/**
 * A base class for all questions.
 */
export declare class Question extends SurveyElement<Question> implements IQuestion, IConditionRunner, IValidatorOwner, ITitleOwner {
    [index: string]: any;
    private isCustomWidgetRequested;
    private customWidgetValue;
    customWidgetData: {
        isNeedRender: boolean;
    };
    get afterRenderCallbacks(): ISurveyAfterRenderCallbacks;
    get validationCallbacks(): ISurveyValidation;
    focusCallback: () => void;
    surveyLoadCallback: () => void;
    displayValueCallback: (text: string) => string;
    hasCssErrorCallback: () => boolean;
    private triggersInfo;
    private isChangingViaDefaultValue;
    private isValueChangedDirectly;
    valueChangedCallback: () => void;
    commentChangedCallback: () => void;
    localeChangedCallback: () => void;
    validateValueCallback: () => SurveyError;
    questionTitleTemplateCallback: () => string;
    afterRenderQuestionCallback: (question: Question, element: any) => any;
    valueFromDataCallback: (val: any) => any;
    valueToDataCallback: (val: any) => any;
    onUpdateCssClassesCallback: (css: any) => void;
    setValueChangedDirectlyCallback: (val: boolean) => void;
    onGetSurvey: () => ISurvey;
    private locProcessedTitle;
    private isReadyValue;
    private commentElements;
    private dependedQuestions;
    private commentTextAreaModelValue;
    /**
     * An event that is raised when the question's ready state has changed (expressions are evaluated, choices are loaded from a web resource specified by the `choicesByUrl` property, etc.).
     *
     * Parameters:
     *
     * - `sender`: `SurveyModel`\
     * A survey instance that contains the question whose ready state has changed.
     * - `options.isReady`: `boolean`\
     * Indicates whether the question is ready.
     * - `options.oldIsReady`: `boolean`\
     * Indicates the previous ready state.
     */
    onReadyChanged: EventBase<Question>;
    isReadOnlyRenderDiv(): boolean;
    protected allowMobileInDesignMode(): boolean;
    updateIsMobileFromSurvey(): void;
    setIsMobile(val: boolean): void;
    protected getIsMobile(): boolean;
    get isMobile(): boolean;
    set isMobile(val: boolean);
    themeChanged(theme: ITheme): void;
    private _isMobile;
    forceIsInputReadOnly: boolean;
    get ariaExpanded(): "true" | "false";
    set ariaExpanded(val: "true" | "false");
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected getDefaultTitle(): string;
    protected createLocTitleProperty(): LocalizableString;
    get locRenderedTitle(): LocalizableString;
    get commentTextAreaModel(): TextAreaModel;
    private getCommentTextAreaOptions;
    getSurvey(live?: boolean): ISurvey;
    getValueName(): string;
    /**
     * Specifies an object property that should store the question value.
     *
     * Refer to the [Merge Question Values](https://surveyjs.io/form-library/documentation/design-survey-merge-question-values) help topic for more information.
     */
    get valueName(): string;
    set valueName(val: string);
    protected onValueNameChanged(oldValue: string): void;
    protected onNameChanged(oldValue: string): void;
    protected getAllChildren(): Base[];
    get isReady(): boolean;
    protected onAsyncRunningChanged(): void;
    protected ensureQuestionIsReady(): void;
    waitForQuestionIsReady(callback?: () => void): Promise<void>;
    protected updateIsReady(): void;
    protected getIsQuestionReady(): boolean;
    private getAreNestedQuestionsReady;
    protected getIsReadyNestedQuestions(): Array<Question>;
    private setIsReady;
    protected getIsReadyDependsOn(): Array<Question>;
    private getIsReadyDependends;
    protected getDependedQuestionsByValueName(isDependOn: boolean): Array<IQuestion>;
    private getIsReadyDependendCore;
    choicesLoaded(): void;
    /**
     * Returns a page to which the question belongs and allows you to move this question to a different page.
     */
    get page(): IPage;
    set page(val: IPage);
    getPanels(): Array<IPanel>;
    protected getPageVisibleIndex(): number;
    delete(doDispose?: boolean): void;
    protected removeFromParent(): void;
    protected addDependedQuestion(question: Question): void;
    protected removeDependedQuestion(question: Question): void;
    protected updateDependedQuestions(): void;
    protected updateDependedQuestion(): void;
    protected resetDependedQuestion(): void;
    get isFlowLayout(): boolean;
    getLayoutType(): string;
    isLayoutTypeSupported(layoutType: string): boolean;
    /**
     * Gets or sets question visibility.
     *
     * If you want to display or hide a question based on a condition, specify the [`visibleIf`](https://surveyjs.io/form-library/documentation/question#visibleIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see isVisible
     * @see visibleIf
     */
    visible: boolean;
    protected onVisibleChanged(): void;
    private onVisibleChangedCore;
    protected notifyStateChanged(prevState: string): void;
    updateElementVisibility(): void;
    private updateIsVisibleProp;
    /**
     * Specifies whether to use display names for question values in placeholders.
     *
     * Default value: `true`
     *
     * This property applies to questions whose values are defined as objects with the `value` and `text` properties (for example, [choice items](https://surveyjs.io/form-library/documentation/questionradiogroupmodel#choices) in Radiogroup, Checkbox, and Dropdown questions).
     *
     * You can use question values as placeholders in the following places:
     *
     * - Survey element titles and descriptions
     * - The [`html`](https://surveyjs.io/form-library/documentation/questionhtmlmodel#html) property of the [HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel) question
     *
     * To use a question value as a placeholder, specify the question `name` in curly brackets: `{questionName}`. Refer to the following help topic for more information: [Dynamic Texts - Question Values](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#question-values).
     */
    useDisplayValuesInDynamicTexts: boolean;
    protected getUseDisplayValuesInDynamicTexts(): boolean;
    /**
     * A Boolean expression. If it evaluates to `false`, this question becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     *
     * [View Demo](https://surveyjs.io/form-library/examples/implement-conditional-logic-to-change-question-visibility/ (linkStyle))
     * @see visible
     * @see isVisible
     */
    visibleIf: string;
    /**
     * Returns `true` if the question is visible or the survey is currently in design mode.
     *
     * If you want to display or hide a question based on a condition, specify the [`visibleIf`](https://surveyjs.io/form-library/documentation/question#visibleIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see visibleIf
     * @see visible
     * @see isParentVisible
     */
    get isVisible(): boolean;
    get isVisibleInSurvey(): boolean;
    protected isVisibleCore(): boolean;
    /**
     * Returns the visible index of the question in the survey. It can be from 0 to all visible questions count - 1
     * The visibleIndex is -1 if the title is 'hidden' or showNumber is false
     * @see titleLocation
     * @see showNumber
     */
    get visibleIndex(): number;
    onHidingContent(): void;
    /**
     * Specifies whether to show a number for this question. Setting this property to `false` hides the question number from the title and excludes the question from numbering.
     *
     * Default value: `false` (inherited from the `SurveyModel`'s [`showQuestionNumbers`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showQuestionNumbers) property)
     * @see no
     * @see showQuestionNumbers
     * @see questionStartIndex
     */
    showNumber: boolean;
    /**
     * @deprecated Use the [`showNumber`](https://surveyjs.io/form-library/documentation/api-reference/question#showNumber) property instead.
     */
    get hideNumber(): boolean;
    set hideNumber(val: boolean);
    /**
     * Returns `true` if the question can display its title to the left of the input field.
     * @see titleLocation
     * @see getTitleLocation
     * @see hasTitle
     */
    get isAllowTitleLeft(): boolean;
    /**
     * Returns the question type.
     * Possible values:
     * - [*"boolean"*](https://surveyjs.io/Documentation/Library?id=questionbooleanmodel)
     * - [*"checkbox"*](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel)
     * - [*"comment"*](https://surveyjs.io/Documentation/Library?id=questioncommentmodel)
     * - [*"dropdown"*](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel)
     * - [*"tagbox"*](https://surveyjs.io/form-library/documentation/questiontagboxmodel)
     * - [*"expression"*](https://surveyjs.io/Documentation/Library?id=questionexpressionmodel)
     * - [*"file"*](https://surveyjs.io/Documentation/Library?id=questionfilemodel)
     * - [*"html"*](https://surveyjs.io/Documentation/Library?id=questionhtmlmodel)
     * - [*"image"*](https://surveyjs.io/Documentation/Library?id=questionimagemodel)
     * - [*"imagepicker"*](https://surveyjs.io/Documentation/Library?id=questionimagepickermodel)
     * - [*"matrix"*](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel)
     * - [*"matrixdropdown"*](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel)
     * - [*"matrixdynamic"*](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel)
     * - [*"multipletext"*](https://surveyjs.io/Documentation/Library?id=questionmultipletextmodel)
     * - [*"panel"*](https://surveyjs.io/Documentation/Library?id=panelmodel)
     * - [*"paneldynamic"*](https://surveyjs.io/Documentation/Library?id=questionpaneldynamicmodel)
     * - [*"radiogroup"*](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel)
     * - [*"rating"*](https://surveyjs.io/Documentation/Library?id=questionratingmodel)
     * - [*"ranking"*](https://surveyjs.io/Documentation/Library?id=questionrankingmodel)
     * - [*"signaturepad"*](https://surveyjs.io/Documentation/Library?id=questionsignaturepadmodel)
     * - [*"text"*](https://surveyjs.io/Documentation/Library?id=questiontextmodel)
     */
    getType(): string;
    get isQuestion(): boolean;
    getOwner(): IPanel | Question;
    moveTo(container: IPanel, insertBefore?: any): boolean;
    getProgressInfo(): IProgressInfo;
    private runTriggerInfo;
    private canExecuteTriggerByKeys;
    private canExecuteTriggerByKeysCore;
    getValueGetterContext(): IValueGetterContext;
    private addTriggersInfo;
    protected addTriggerInfo(info: ITriggerExpressionInfo): void;
    runTriggers(name: string, value: any, keys?: any): void;
    private runConditions;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    /**
     * Returns a survey element (panel or page) that contains the question and allows you to move this question to a different survey element.
     */
    get parent(): IPanel;
    set parent(val: IPanel);
    protected onParentChanged(): void;
    private _singleInputBehavior;
    get singleInputBehavior(): QuestionSingleInputBehavior;
    protected createSingleInputBehavior(): QuestionSingleInputBehavior;
    get singleInputQuestion(): Question;
    get singleInputSummary(): QuestionSingleInputSummary;
    get rootParentQuestion(): Question;
    resetSingleInput(): void;
    validateSingleInput(): boolean;
    getSingleInputElementPos(): number;
    protected get isSingleInputActive(): boolean;
    protected singleInputOnAddItem(isOnDataChanging: boolean): void;
    protected singleInputOnRemoveItem(index: number): void;
    onSetAsSingleInput(): void;
    nextSingleInput(): boolean;
    prevSingleInput(): boolean;
    getSingleInputAddText(): string;
    singleInputAddItem(checkErrors?: boolean): void;
    get singleInputLocTitle(): LocalizableString;
    get singleInputActions(): ActionContainer;
    get singleInputHasActions(): boolean;
    protected singleInputMoveToFirst(): void;
    /**
     * Returns `false` if the `titleLocation` property is set to `"hidden"` or if the question cannot have a title (for example, an [HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel) question).
     *
     * If the `title` property is `undefined` or set to an empty string, the `hasTitle` property returns `true`, because the question uses its `name` as a title in this case.
     * @see title
     * @see titleLocation
     */
    get hasTitle(): boolean;
    /**
     * Sets question title location relative to the input field. Overrides the `questionTitleLocation` property specified for the question's container (survey, page, or panel).
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the `questionTitleLocation` property specified for the question's container.
     * - `"top"` - Displays the title above the input field.
     * - `"bottom"` - Displays the title below the input field.
     * - `"left"` - Displays the title to the left of the input field.
     * - `"hidden"` - Hides the question title.
     *
     * > Certain question types (Matrix, Multiple Text) do not support the `"left"` value. For them, the `"top"` value is used.
     * @see SurveyModel.questionTitleLocation
     * @see getTitleLocation
     * @see isAllowTitleLeft
     */
    get titleLocation(): string;
    set titleLocation(value: string);
    get showTitle(): boolean;
    set showTitle(newValue: boolean);
    getTitleOwner(): ITitleOwner;
    protected getIsTitleRenderedAsString(): boolean;
    protected notifySurveyOnChildrenVisibilityChanged(): boolean;
    private notifySurveyVisibilityChanged;
    protected clearValueOnHidding(isClearOnHidden: boolean): void;
    get titleWidth(): string;
    private getQuestionParentTitleWidth;
    private getPercentQuestionTitleWidth;
    /**
     * Returns title location calculated based on the question's `titleLocation` property and the `questionTitleLocation` property of the question's containers (survey, page, or panel).
     * @see titleLocation
     * @see SurveyModel.questionTitleLocation
     */
    getTitleLocation(): string;
    protected getTitleLocationCore(): string;
    protected getParentTitleLocation(): string;
    get hasTitleOnLeft(): boolean;
    get hasTitleOnTop(): boolean;
    get hasTitleOnBottom(): boolean;
    get hasTitleOnLeftTop(): boolean;
    /**
     * Specifies the error message position. Overrides the `questionErrorLocation` property specified for the question's container ([survey](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionErrorLocation), [page](https://surveyjs.io/form-library/documentation/api-reference/page-model#questionErrorLocation), or [panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model#questionErrorLocation)).
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the `questionErrorLocation` property specified for the question's container.
     * - `"top"` - Displays error messages above questions.
     * - `"bottom"` - Displays error messages below questions.
     */
    errorLocation: string;
    getErrorLocation(): string;
    getChildErrorLocation(child: Question): string;
    /**
     * Returns `false` if the question has no input fields ([HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel), [Image](https://surveyjs.io/form-library/documentation/questionimagemodel), and similar question types).
     * @see hasSingleInput
     */
    get hasInput(): boolean;
    /**
     * Returns `false` if the question has no input fields ([HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel), [Image](https://surveyjs.io/form-library/documentation/questionimagemodel)) or has multiple input fields ([Matrix](https://surveyjs.io/form-library/documentation/questionmatrixmodel), [Multiple Text](https://surveyjs.io/form-library/documentation/questionmultipletextmodel)).
     * @see hasInput
     */
    get hasSingleInput(): boolean;
    get inputId(): string;
    protected getDefaultTitleValue(): string;
    protected getDefaultTitleTagName(): string;
    /**
     * Specifies where to display a question description.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the Survey's [`questionDescriptionLocation`](https://surveyjs.io/form-library/documentation/surveymodel#questionDescriptionLocation) property.
     * - `"underTitle"` - Displays the description under the question title.
     * - `"underInput"` - Displays the description under the interactive area.
     * - `"hidden"` - Hides the description.
     * @see description
     * @see hasDescription
     */
    descriptionLocation: string;
    get hasDescriptionUnderTitle(): boolean;
    get hasDescriptionUnderInput(): boolean;
    protected getDescriptionLocation(): string;
    protected needClickTitleFunction(): boolean;
    protected processTitleClick(): boolean;
    /**
     * Specifies a custom error message for a required form field.
     * @see isRequired
     */
    requiredErrorText: string;
    /**
     * Specifies a caption displayed above the comment area. Applies when the `showCommentArea` property is `true`.
     * @see showCommentArea
     * @see comment
     */
    commentText: string;
    /**
     * A placeholder for the comment area. Applies when the `showCommentArea` property is `true`.
     * @see showCommentArea
     * @see comment
     * @see commentText
     */
    commentPlaceholder: string;
    get commentPlaceHolder(): string;
    set commentPlaceHolder(newValue: string);
    get renderedCommentPlaceholder(): string;
    private resetRenderedCommentPlaceholder;
    /**
     * A value to show in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is [empty](#isValueEmpty).
     *
     * Default value: `""`
     *
     * [Dynamic Texts](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#dynamic-texts (linkStyle))
     */
    defaultDisplayValue: string;
    getAllErrors(): Array<SurveyError>;
    getErrorByType(errorType: string): SurveyError;
    get customWidget(): QuestionCustomWidget;
    updateCustomWidget(): void;
    localeChanged(): void;
    get isCompositeQuestion(): boolean;
    get isContainer(): boolean;
    onCommentInput(event: any): void;
    onCommentChange(event: any): void;
    afterRenderQuestionElement(el: HTMLElement): void;
    afterRender(el: HTMLElement): void;
    afterRenderCore(element: HTMLElement): void;
    protected getCommentElementsId(): Array<string>;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    get processedTitle(): string;
    get fullTitle(): string;
    protected get titlePattern(): string;
    get isRequireTextOnStart(): boolean;
    get isRequireTextBeforeTitle(): boolean;
    get isRequireTextAfterTitle(): boolean;
    /**
     * Disable this property if you want to render the current question on the same line or row with the previous question or panel.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/arrange-multiple-questions-in-single-line/ (linkStyle))
     */
    startWithNewLine: boolean;
    protected calcCssClasses(css: any): any;
    protected onCalcCssClasses(classes: any): void;
    get cssRoot(): string;
    protected setCssRoot(val: string): void;
    protected getCssRoot(cssClasses: {
        [index: string]: string;
    }): string;
    get cssHeader(): string;
    protected setCssHeader(val: string): void;
    protected getCssHeader(cssClasses: any): string;
    protected supportContainerQueries(): boolean;
    get cssContent(): string;
    protected setCssContent(val: string): void;
    protected getCssContent(cssClasses: any): string;
    get cssTitle(): string;
    private resetCssTitle;
    protected getCssTitle(cssClasses: any): string;
    get cssDescription(): string;
    protected setCssDescription(val: string): void;
    protected getCssDescription(cssClasses: any): string;
    get showErrorsAboveQuestion(): boolean;
    get showErrorsBelowQuestion(): boolean;
    get cssError(): string;
    protected setCssError(val: string): void;
    protected getCssError(cssClasses: any): string;
    protected hasCssError(includeWarning?: boolean): boolean;
    protected updateVisibleErrors(): void;
    private get isSingleInputQuestionMode();
    protected getIsNested(): boolean;
    protected getHasFrameV2(): boolean;
    getRootCss(): string;
    getQuestionRootCss(): string;
    updateElementCss(reNew?: boolean): void;
    private updateQuestionCss;
    private ensureElementCss;
    protected getCssClasses(): any;
    protected updateElementCssCore(cssClasses: any): void;
    protected updateCssClasses(res: any, css: any): void;
    protected getCssType(): string;
    get renderCssRoot(): string;
    protected calcPaddingLeft(): string;
    protected calcPaddingRight(): string;
    private getIndentSize;
    /**
     * Moves focus to the input field of this question.
     * @param onError Pass `true` if you want to focus an input field with the first validation error. Default value: `false` (focuses the first input field). Applies to question types with multiple input fields.
     */
    focus(onError?: boolean, scrollIfVisible?: boolean): void;
    focusInputElement(onError: boolean): void;
    private get isValidateVisitedEmptyFields();
    private isFocusEmpty;
    protected supportEmptyValidation(): boolean;
    onBlur(event: any): void;
    onFocus(event: any): void;
    protected onBlurCore(event: any): void;
    protected onFocusCore(event: any): void;
    expandAllParents(): void;
    private expandAllParentsCore;
    focusIn(): void;
    protected fireCallback(callback: () => void): void;
    getOthersMaxLength(): any;
    protected onCreating(): void;
    getFirstQuestionToFocus(withError: boolean): Question;
    protected getFirstInputElementId(): string;
    protected getFirstErrorInputElementId(): string;
    supportComment(): boolean;
    supportOther(): boolean;
    /**
     * Makes the question required. If a respondent skips a required question, the survey displays a validation error.
     * @see requiredIf
     * @see [Data Validation](https://surveyjs.io/form-library/documentation/data-validation)
     */
    isRequired: boolean;
    /**
     * A Boolean expression. If it evaluates to `true`, this question becomes required.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see isRequired
     */
    requiredIf: string;
    /**
     * Specifies whether to display a comment area.
     * @see comment
     * @see commentText
     * @see showOtherItem
     */
    get showCommentArea(): boolean;
    set showCommentArea(val: boolean);
    get hasComment(): boolean;
    set hasComment(val: boolean);
    /**
     * A value to assign to the `id` attribute of the rendered HTML element. A default `id` is generated automatically.
     */
    id: string;
    get ariaTitleId(): string;
    get ariaDescriptionId(): string;
    get commentId(): string;
    /**
     * A unique value for the `name` HTML attribute of grouped inputs (e.g. radio buttons), so that questions sharing the same `name` (such as copies inside a Dynamic Panel) do not collapse into one input group.
     */
    get questionName(): string;
    get requireUpdateCommentValue(): boolean;
    readOnlyCallback: () => boolean;
    get isReadOnly(): boolean;
    get isInputReadOnly(): boolean;
    get renderedInputReadOnly(): string;
    get renderedInputDisabled(): string;
    get isReadOnlyAttr(): boolean;
    get isDisabledAttr(): boolean;
    protected onReadOnlyChanged(): void;
    /**
     * A Boolean expression. If it evaluates to `false`, this question becomes read-only.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     *
     * [View Demo](https://surveyjs.io/form-library/examples/how-to-conditionally-make-input-field-read-only/ (linkStyle))
     * @see readOnly
     * @see isReadOnly
     */
    enableIf: string;
    surveyChoiceItemVisibilityChange(): void;
    runCondition(properties: HashTable<any>): void;
    get isInDesignMode(): boolean;
    /**
     * A question number or letter (depends on the `questionStartIndex` property of the question container (panel, page, or survey)).
     *
     * When the question number, title, or the entire question is invisible, this property returns an empty string.
     * @see SurveyModel.questionStartIndex
     * @see showNumber
     * @see titleLocation
     * @see visibleIf
     */
    get no(): string;
    onGetNoCallback: (no: string) => string;
    private calcNo;
    protected getHasTitleOnCalcNo(): boolean;
    onSurveyLoad(): void;
    protected onSetData(): void;
    protected initDataFromSurvey(): void;
    protected initCommentFromSurvey(): void;
    protected runExpression(expression: string): any;
    get commentAreaRows(): number;
    private get autoGrowComment();
    private get allowResizeComment();
    private get questionValue();
    private set questionValue(value);
    private get questionComment();
    private set questionComment(value);
    get isValueArray(): boolean;
    /**
     * Gets or sets the question value.
     *
     * The following table illustrates how the value type depends on the question type:
     *
     * | Question type | Value type(s) |
     * | ------------- | ------------- |
     * | Checkboxes | <code>Array&lt;string &#124; number&gt;</code> |
     * | Dropdown | `string` \| `number` |
     * | Dynamic Matrix | `Array<object>` |
     * | Dynamic Panel | `Array<object>` |
     * | Expression | `string` \| `number` \| `boolean` |
     * | File Upload | `File` \| `Array<File>` |
     * | Image Picker | <code>Array&lt;string &#124; number&gt;</code> |
     * | Long Text | `string` |
     * | Multi-Select Dropdown | <code>Array&lt;string &#124; number&gt;</code> |
     * | Multi-Select Matrix | `object` |
     * | Multiple Textboxes | `Array<string>` |
     * | Radio Button Group | `string` \| `number` |
     * | Ranking | <code>Array&lt;string &#124; number&gt;</code> |
     * | Rating Scale | `number` \| `string` |
     * | Slider | <code>Array&lt;string &#124; number&gt;</code> |
     * | Signature | `string` (base64-encoded image) |
     * | Single-Line Input | `string` \| `number` \| `Date` |
     * | Single-Select Matrix | `object` |
     * | Yes/No (Boolean) | `boolean` \| `string` |
     * @hidefor QuestionImageModel, QuestionHtmlModel
     */
    get value(): any;
    set value(newValue: any);
    getStructuredValue(level?: number): any;
    get hasFilteredValue(): boolean;
    getFilteredValue(isUnwrapped?: boolean): any;
    getFilteredName(): any;
    get valueForSurvey(): any;
    protected valueForSurveyCore(val: any): any;
    protected valueFromDataCore(val: any): any;
    /**
     * Sets the question's `value` and `comment` properties to `undefined`.
     * @see value
     * @see comment
     */
    clearValue(keepComment?: boolean, fromUI?: boolean): void;
    protected onClearValue(): void;
    clearValueFromUI(): void;
    clearValueOnly(): void;
    unbindValue(): void;
    createValueCopy(): any;
    initDataUI(): void;
    protected getUnbindValue(value: any): any;
    protected isValueSurveyElement(val: any): boolean;
    private canClearValueAsInvisible;
    /**
     * Returns `true` if a parent element (page or panel) is visible.
     */
    get isParentVisible(): boolean;
    clearValueIfInvisible(reason?: string): void;
    protected clearValueIfInvisibleCore(reason: string): void;
    /**
     * Specifies when to clear the question value if the question becomes invisible.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the Survey's [`clearInvisibleValues`](https://surveyjs.io/form-library/documentation/surveymodel#clearInvisibleValues) property.
     * - `"onHidden"` - Clears the value when the question becomes invisible. If a question is invisible on startup and has an initial value, this value will be cleared when the survey is complete.
     * - `"onHiddenContainer"` - Clears the value when the question or its container (page or panel) becomes invisible. If a question is invisible on startup and has an initial value, this value will be cleared when the survey is complete.
     * - `"onComplete"` - Clears the value when the survey is complete.
     * - `"none"` - Never clears the value of an invisible question.
     * @see SurveyModel.clearInvisibleValues
     * @see visible
     * @see SurveyModel.onComplete
     */
    clearIfInvisible: string;
    protected getClearIfInvisible(): string;
    get displayValue(): any;
    /**
     * Returns a display text that corresponds to the question value. For example, if you call this method for a Dropdown question, it returns an item text instead of an item value.
     * @param keysAsText Applies when the question value is an object (in Matrix, Multiple Text, and similar questions). Pass `true` if not only values in the object should be display texts, but also keys. Default value: `false`.
     * @param value Specify this parameter to get a display text for a specific value, not for the current question value. If the question value is an object, this parameter should be a similar object.
     */
    getDisplayValue(keysAsText: boolean, value?: any, isReadOnly?: boolean): any;
    private calcDisplayValue;
    protected getDisplayValueCore(keyAsText: boolean, value: any, isReadOnly?: boolean): any;
    protected getDisplayValueEmpty(): string;
    /**
     * A default value for the question. Ignored for question types that cannot have a [value](https://surveyjs.io/form-library/documentation/question#value) (for example, HTML).
     *
     * The default value is used as a question value in the following cases:
     *
     * - While the survey is being loaded from JSON.
     * - The question is just added to the survey and does not yet have an answer.
     * - The respondent left the answer empty.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/specify-default-question-value-dynamically (linkStyle))
     * @see defaultValueExpression
     */
    get defaultValue(): any;
    set defaultValue(val: any);
    /**
     * An expression used to calculate the [`defaultValue`](https://surveyjs.io/form-library/documentation/question#defaultValue).
     *
     * This expression applies until the question [`value`](https://surveyjs.io/form-library/documentation/question#value) is specified by an end user or programmatically.
     *
     * An expression can reference other questions as follows:
     *
     * - `{other_question_name}`
     * - `{panel.other_question_name}` (to access questions inside the same dynamic panel)
     * - `{row.other_question_name}` (to access questions inside the same dynamic matrix or multi-column dropdown)
     *
     * An expression can also include built-in and custom functions for advanced calculations. For example, if the `defaultValue` should be today's date, set the `defaultValueExpression` to `"today()"`, and the corresponding built-in function will be executed each time the survey is loaded. Refer to the following help topic for more information: [Built-In Functions](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#built-in-functions).
     *
     * [View Demo](https://surveyjs.io/form-library/examples/specify-default-question-value-dynamically (linkStyle))
     * @see defaultValue
     * @see setValueExpression
     */
    get defaultValueExpression(): any;
    set defaultValueExpression(val: any);
    /**
     * A Boolean [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions). If it evaluates to `true`, the question value is reset to [default](#defaultValue).
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/set-question-value-dynamically/ (linkStyle))
     * @see setValueIf
     */
    resetValueIf: string;
    /**
     * A Boolean [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions). If it evaluates to `true`, the question value is set to a value calculated using the [`setValueExpression`](#setValueExpression).
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/set-question-value-dynamically/ (linkStyle))
     * @see resetValueIf
     */
    setValueIf: string;
    /**
     * An [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions) that calculates the question value.
     *
     * The `setValueExpression` is re-evaluated whenever a referenced question's value changes. If you also specify the [`setValueIf`](#setValueIf) expression, re-evaluation occurs only when it returns `true`.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/set-question-value-dynamically/ (linkStyle))
     * @see defaultValueExpression
     * @see resetValueIf
     */
    setValueExpression: string;
    get resizeStyle(): "none" | "both";
    /**
     * Returns the question value as an object in which the question name, title, value, and other parameters are stored as individual properties.
     *
     * If the question can have more than one value (Matrix, Multiple Text), the object enables the `isNode` flag and stores information about these values in the `data` property. Refer to the following help topic for more information: [Access Full Survey Results](https://surveyjs.io/form-library/documentation/handle-survey-results-access#access-full-survey-results).
     *
     * Pass an object with the `includeEmpty` property set to `false` if you want to skip empty answers.
     */
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    protected getPlainDataCalculatedValue(propName: string): any;
    /**
     * A correct answer to this question. Specify this property if you want to [create a quiz](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
     *
     * [View Demo](https://surveyjs.io/form-library/examples/make-quiz-javascript/ (linkStyle))
     * @see SurveyModel.getCorrectAnswerCount
     * @see SurveyModel.getIncorrectAnswerCount
     */
    correctAnswer: any;
    /**
     * The number of quiz questions. A question counts if it is visible, has an input field, and specifies `correctAnswer`.
     * @see [Create a Quiz](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz)
     * @see correctAnswer
     * @see SurveyModel.getQuizQuestions
     */
    get quizQuestionCount(): number;
    get correctAnswerCount(): number;
    protected getQuizQuestionCount(): number;
    protected getCorrectAnswerCount(): number;
    /**
     * Returns the [`correctAnswer`](#correctAnswer) value used in quiz calculations. Descendant
     * classes can override this method to exclude values that cannot be selected (for example,
     * non-existent or invisible choices in select-based questions).
     */
    protected getCorrectAnswerValue(): any;
    protected checkIfAnswerCorrect(): boolean;
    protected getAnswerCorrectIgnoreOrder(): boolean;
    /**
    * Returns `true` if a question answer matches the [`correctAnswer`](#correctAnswer) property value.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/create-a-scored-quiz (linkStyle))
    * @see SurveyModel.getQuizQuestions
    */
    isAnswerCorrect(): boolean;
    updateValueWithDefaults(): void;
    get isValueDefault(): boolean;
    protected get isClearValueOnHidden(): boolean;
    getQuestionFromArray(name: string, index: number): IQuestion;
    getDefaultValue(): any;
    protected isDefaultValueEmpty(): boolean;
    protected setDefaultValue(): void;
    protected setDefaultIntoValue(val: any): void;
    private setDefaultValueCore;
    protected updateValueWithDefaultsOrClear(): void;
    protected isValueExpression(val: any): boolean;
    protected convertFuncValuetoQuestionValue(val: any): any;
    private runExpressionSetValueCore;
    private runExpressionSetValue;
    protected startSetValueOnExpression(): void;
    protected finishSetValueOnExpression(): void;
    private runDefaultValueExpression;
    /**
     * A comment to the selected question value. Enable the `showCommentArea` property to allow users to leave comments.
     * @see showCommentArea
     * @see commentText
     */
    get comment(): string;
    set comment(newValue: string);
    protected getTrimmedComment(val: string): string;
    getCommentAreaCss(isOther?: boolean): string;
    protected getQuestionComment(): string;
    /**
     * Returns `true` if the question value is an empty string, array, or object or if it equals `undefined` or `null`.
     */
    isEmpty(): boolean;
    isAnswered: boolean;
    protected updateIsAnswered(): void;
    protected getIsAnswered(): boolean;
    /**
     * Question validators.
     *
     * [Data Validation](https://surveyjs.io/form-library/documentation/data-validation (linkStyle))
     */
    get validators(): Array<SurveyValidator>;
    set validators(val: Array<SurveyValidator>);
    getValidators(): Array<SurveyValidator>;
    getSupportedValidators(): Array<string>;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    /**
     * Returns an array of questions nested within the current question. Use this method to obtain questions within [Multiple Text](https://surveyjs.io/form-library/documentation/api-reference/multiple-text-entry-question-model), [Dynamic Panel](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model), and [Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model)-like questions.
     * @param visibleOnly A Boolean value that specifies whether to include only visible nested questions.
     * @returns An array of nested questions.
     */
    getNestedQuestions(visibleOnly?: boolean, includeNested?: boolean, includeItSelf?: boolean): Array<Question>;
    collectNestedQuestions(questions: Array<Question>, visibleOnly?: boolean, includeNested?: boolean, includeItSelf?: boolean): void;
    protected collectNestedQuestionsCore(questions: Array<Question>, visibleOnly: boolean, includeNested: boolean, includeItSelf: boolean): void;
    addNestedQuestion(questions: Array<Question>, visibleOnly: boolean, includeNested: boolean, includeItSelf?: boolean): void;
    getConditionJson(operator?: string, path?: string): any;
    hasErrors(fireCallback?: boolean, focusOnFirstError?: boolean): boolean;
    /**
     * Validates this question and returns `false` if the validation fails.
     * @param fireCallback *(Optional)* Pass `false` if you do not want to show validation errors in the UI.
     * @see [Data Validation](https://surveyjs.io/form-library/documentation/data-validation)
     */
    validate(fireCallback?: boolean, focusFirstError?: boolean, isOnValueChanged?: boolean, callbackResult?: (res: boolean, question: Question) => void, isOnValueChanging?: boolean): boolean;
    private validateCore;
    validateElement(context: ValidationContext): boolean;
    protected validateElementCore(context: ValidationContext): boolean;
    get currentErrorCount(): number;
    /**
     * Returns a character or text string that indicates a required question.
     * @see SurveyModel.requiredMark
     * @see isRequired
     */
    get requiredMark(): string;
    /**
     * @deprecated Use the [`requiredMark`](https://surveyjs.io/form-library/documentation/api-reference/question#requiredMark) property instead.
     */
    get requiredText(): string;
    addError(error: SurveyError | string): void;
    private addCustomError;
    removeError(error: SurveyError): boolean;
    private checkForErrors;
    protected canCollectErrors(): boolean;
    private collectErrors;
    protected canRunValidators(isOnValueChanged: boolean): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void;
    hasRequiredError(): boolean;
    private validatorRunner;
    get isRunningValidators(): boolean;
    protected getIsRunningValidators(): boolean;
    private runValidators;
    private doOnAsyncCompleted;
    allowSpaceAsAnswer: boolean;
    private isValueChangedInSurvey;
    private isOldAnswered;
    private isSettingQuestionValue;
    protected allowNotifyValueChanged: boolean;
    protected setNewValue(newValue: any): void;
    getValueChangingOptions(childQuestion: Question): any;
    private checkIsValueCorrect;
    protected isNewValueCorrect(val: any): boolean;
    protected isNewValueEqualsToValue(newValue: any): boolean;
    protected isTextValue(): boolean;
    protected getIsInputTextUpdate(): boolean;
    get requireStrictCompare(): boolean;
    getExpressionValue(val: any): any;
    private getDataLocNotification;
    get isInputTextUpdate(): boolean;
    private setNewValueInData;
    protected getValueCore(): any;
    protected setValueCore(newValue: any): void;
    protected canSetValueToSurvey(): boolean;
    protected valueFromData(val: any): any;
    protected valueToData(val: any): any;
    protected convertToCorrectValue(val: any): any;
    protected onValueChanged(): void;
    protected isMouseDown: boolean;
    onMouseDown(): void;
    protected setNewComment(newValue: string): void;
    protected setCommentIntoData(newValue: string): void;
    protected getValidName(name: string): string;
    protected isUpdatingValueFromSurvey: boolean;
    updateValueFromSurvey(newValue: any, clearData?: boolean): void;
    protected canUpdateBindings(): boolean;
    private updateBindingsOnClearFromSurveyCore;
    private updateValueFromSurveyCore;
    private revalidateOnValueChangedFromSurvey;
    updateCommentFromSurvey(newValue: any): any;
    protected onChangeQuestionValue(newValue: any): void;
    protected setValueChangedDirectly(val: boolean): void;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    private get isParentChangingViaDefaultValue();
    onSurveyValueChanged(newValue: any): void;
    setVisibleIndex(val: number): number;
    protected isVisibleIndexNegative(val: number): boolean;
    removeElement(element: IElement): boolean;
    supportGoNextPageAutomatic(): boolean;
    supportAutoAdvance(): boolean;
    supportGoNextPageError(): boolean;
    /**
     * Removes values that cannot be assigned to this question, for example, choices unlisted in the `choices` array.
     *
     * Call this method after you assign new question values in code to ensure that they are acceptable.
     *
     * > This method does not remove values that fail validation. Call the `validate()` method to validate newly assigned values.
     *
     * @see validate
     */
    clearIncorrectValues(): void;
    clearOnDeletingContainer(): void;
    /**
     * Empties the `errors` array.
     * @see errors
     */
    clearErrors(): void;
    clearUnusedValues(): void;
    onAnyValueChanged(name: string, questionName: string): void;
    checkBindings(valueName: string, value: any): void;
    protected updateBindingProp(propName: string, value: any): void;
    getComponentName(): string;
    isDefaultRendering(): boolean;
    renderAs: string;
    inMatrixMode: boolean;
    getErrorCustomText(text: string, error: SurveyError): string;
    createRegexValidator(validator: Base, pattern: string, flags: string): RegExp;
    getValidatorTitle(): string;
    get validatedValue(): any;
    set validatedValue(val: any);
    processPopupVisiblilityChanged(popupModel: PopupModel, visible: boolean): void;
    processOpenDropdownMenu(options: IDropdownMenuOptions): void;
    protected onTextKeyDownHandler(event: any): void;
    transformToMobileView(): void;
    transformToDesktopView(): void;
    needResponsiveWidth(): boolean;
    protected supportResponsiveness(): boolean;
    protected needResponsiveness(): boolean;
    protected checkForResponsiveness(el: HTMLElement): void;
    private resizeObserver;
    protected getObservedElementSelector(): string;
    protected onMobileChanged(): void;
    private onMobileChangedCallback;
    triggerResponsiveness(hard?: boolean): void;
    private triggerResponsivenessCallback;
    private initResponsiveness;
    protected getCompactRenderAs(): string;
    protected getDesktopRenderAs(): string;
    protected onBeforeSetCompactRenderer(): void;
    protected onBeforeSetDesktopRenderer(): void;
    protected processResponsiveness(requiredWidth: number, availableWidth: number): any;
    destroyResizeObserver(): void;
    dispose(): void;
    private resetDependedQuestions;
    private getValidatorVariableNames;
    private validationDependentNames;
    private getValidationDependentNames;
    private validateOnAnyQuestionValueChanged;
    resetValidationDependencies(): void;
    get isNewA11yStructure(): boolean;
    get ariaLabel(): string;
    get ariaRole(): string;
    get ariaRequired(): "true" | "false";
    get ariaInvalid(): "true" | "false";
    get ariaLabelledBy(): string;
    get ariaDescribedBy(): string;
    protected getContentAriaHidden(): boolean;
    get contentAriaHidden(): boolean;
    get ariaErrormessage(): string;
    get a11y_input_ariaRole(): string;
    get a11y_input_ariaRequired(): "true" | "false";
    get a11y_input_ariaInvalid(): "true" | "false";
    get a11y_input_ariaLabel(): string;
    get a11y_input_ariaLabelledBy(): string;
    get a11y_input_ariaDescribedBy(): string;
    get a11y_input_ariaErrormessage(): string;
    get a11y_input_ariaExpanded(): "true" | "false";
    get dragDropMatrixAttribute(): string;
    randomize: boolean;
    randomizeCategory: string;
}
export {};
