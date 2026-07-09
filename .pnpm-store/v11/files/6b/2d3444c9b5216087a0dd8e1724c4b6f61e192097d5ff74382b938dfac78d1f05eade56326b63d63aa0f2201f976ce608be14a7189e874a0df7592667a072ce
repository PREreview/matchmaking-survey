import { HashTable } from "./helpers";
import { IElement, IQuestion, IPanel, ISurveyData, ISurvey, ISurveyImpl, ITextProcessor, IProgressInfo, IPlainDataOptions, ISurveyDynamicPanelCallbacks } from "./base-interfaces";
import { LocalizableString } from "./localizablestring";
import { Base, IExpressionValidationOptions, IExpressionValidationResult } from "./base";
import { Question, QuestionValueGetterContext, IConditionObject, IQuestionPlainData, ValidationContext } from "./question";
import { PanelModel } from "./panel";
import { SurveyError } from "./survey-error";
import { ActionContainer } from "./actions/container";
import { Action, IAction } from "./actions/action";
import { AdaptiveActionContainer } from "./actions/adaptive-container";
import { ITheme } from "./themes";
import { AnimationProperty, IAnimationGroupConsumer } from "./utils/animation";
import { QuestionSingleInputSummary } from "./questionSingleInputSummary";
import { IValueGetterContext, IValueGetterContextGetValueParams, IValueGetterInfo } from "./conditions/conditionProcessValue";
import { DynamicItemGetterContext, DynamicItemModelBase, IDynamicItemModelData } from "./dynamicItemModelBase";
import { QuestionSingleInputBehavior } from "./question_singleinput_behavior";
export declare class PanelDynamicItemGetterContext extends DynamicItemGetterContext {
    protected item: QuestionPanelDynamicItem;
    constructor(item: QuestionPanelDynamicItem);
    protected getNextName(): string;
    protected getPrevName(): string;
    protected getVisibleItem(index: number): DynamicItemModelBase;
    protected getSpecificValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    getTextValue(name: string, value: any, isDisplayValue: boolean): string;
    private get indexVar();
    private get visIndexVar();
    protected getItemVariableNames(): Array<string>;
    protected getItemValue(name: string): any;
    private get panelIndex();
    protected get visibleIndex(): number;
    private getPanels;
}
export declare class PanelDynamicValueGetterContext extends QuestionValueGetterContext {
    protected question: Question;
    constructor(question: Question);
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
}
interface IPanelDynamicTabbedMenuItem extends IAction {
    panelId: string;
}
declare class PanelDynamicTabbedMenuItem extends Action {
    panelId: string;
    constructor(innerItem: IPanelDynamicTabbedMenuItem);
}
export declare class QuestionPanelDynamicItem extends DynamicItemModelBase {
    data: IDynamicItemModelData;
    private panelValue;
    constructor(data: IDynamicItemModelData, panel: PanelModel);
    get panel(): PanelModel;
    setSurveyImpl(): void;
    getValueGetterContext(): IValueGetterContext;
    getVariableName(): string;
    getQuestionsByValueName(name: string, caseInsensitive?: boolean): Array<Question>;
    protected getQuestionByName(name: string): IQuestion;
    getIndex(): number;
    get questions(): Array<Question>;
    setValue(name: string, newValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string, locNotification: boolean | "text"): void;
}
export declare class QuestionPanelDynamicTemplateSurveyImpl implements ISurveyImpl {
    data: IDynamicItemModelData;
    constructor(data: IDynamicItemModelData);
    getSurveyData(): ISurveyData;
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
}
/**
  * A class that describes the Dynamic Panel question type.
  *
  * Dynamic Panel allows respondents to add panels based on a panel template and delete them. Specify the [`templateElements`](https://surveyjs.io/form-library/documentation/questionpaneldynamicmodel#templateElements) property to configure panel template elements.
  *
  * [View Demo](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/ (linkStyle))
  */
export declare class QuestionPanelDynamicModel extends Question implements IDynamicItemModelData {
    private templateValue;
    private isValueChangingInternally;
    private changingValueQuestions;
    get dynamicPanelCallbacks(): ISurveyDynamicPanelCallbacks;
    renderModeChangedCallback: () => void;
    panelCountChangedCallback: () => void;
    currentIndexChangedCallback: () => void;
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    validateExpressions(options?: IExpressionValidationOptions): IExpressionValidationResult[];
    get isCompositeQuestion(): boolean;
    get isContainer(): boolean;
    getFirstQuestionToFocus(withError: boolean): Question;
    protected getFirstInputElementId(): string;
    protected getFirstErrorInputElementId(): string;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    getFilteredData(): any;
    private assignOnPropertyChangedToTemplate;
    private addOnPropertyChangedCallback;
    private onTemplateElementPropertyChanged;
    private get useTemplatePanel();
    getType(): string;
    protected getAllChildren(): Base[];
    clearOnDeletingContainer(): void;
    get isAllowTitleLeft(): boolean;
    removeElement(element: IElement): boolean;
    /**
     * A `PanelModel` object used as a template to create dynamic panels.
     * @see PanelModel
     * @see templateElements
     * @see templateTitle
     * @see panels
     * @see panelCount
     */
    get template(): PanelModel;
    getPanelInDesignMode(): PanelModel;
    getPanels(): Array<IPanel>;
    /**
     * An array of questions and panels included in a panel template.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/duplicate-group-of-fields-in-form/ (linkStyle))
     * @see template
     * @see panels
     * @see panelCount
     */
    get templateElements(): Array<IElement>;
    protected isPropertyStoredInHash(name: string): boolean;
    protected mergeLocalizationWithInnerObjects(src: Base, locales?: Array<string>): void;
    /**
     * A template for panel titles.
     *
     * The template can contain the following placeholders:
     *
     * - `{panelIndex}` - A panel index within the collection of all panels. Starts with 1.
     * - `{visiblePanelIndex}` - A panel index within the collection of visible panels. Starts with 1.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/breakable-loop/ (linkStyle))
     * @see template
     * @see templateDescription
     * @see templateElements
     * @see panels
     * @see panelCount
     */
    get templateTitle(): string;
    set templateTitle(newValue: string);
    get locTemplateTitle(): LocalizableString;
    getLocalizableString(name: string): LocalizableString;
    /**
     * A template for tab titles. Applies when [`displayMode`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#displayMode) is `"tab"`.
     *
     * The template can contain the following placeholders:
     *
     * - `{panelIndex}` - A panel index within the collection of all panels. Starts with 1.
     * - `{visiblePanelIndex}` - A panel index within the collection of visible panels. Starts with 1.
     *
     * If you want to customize individual tab titles, handle `SurveyModel`'s [`onGetDynamicPanelTabTitle`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onGetDynamicPanelTabTitle) event.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/tabbed-interface-for-duplicate-group-option/ (linkStyle))
     * @see templateTitle
     * @see tabTitlePlaceholder
     * @see displayMode
     */
    templateTabTitle: string;
    /**
     * A placeholder for tab titles that applies when the [`templateTabTitle`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#templateTabTitle) expression doesn't produce a meaningful value.
     *
     * Default value: `"New Panel"` (taken from a [localization dictionary](https://github.com/surveyjs/survey-library/tree/01bd8abd0c574719956d4d579d48c8010cd389d4/packages/survey-core/src/localization))
     */
    tabTitlePlaceholder: string;
    /**
     * A template for panel descriptions.
     * @see template
     * @see templateTitle
     * @see templateElements
     * @see panels
     * @see panelCount
     */
    get templateDescription(): string;
    set templateDescription(newValue: string);
    get locTemplateDescription(): LocalizableString;
    /**
     * A Boolean expression that is evaluated against each panel. If the expression evaluates to `false`, the panel becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{panel}` placeholder to reference the current panel in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-visibility).
     * @see visibleIf
     * @see visiblePanels
     */
    get templateVisibleIf(): string;
    set templateVisibleIf(val: string);
    /**
     * Specifies a number or letter used to start numbering of elements inside the dynamic panel.
     *
     * You can include desired prefixes and postfixes alongside the number or letter:
     *
     * ```js
     * "questionStartIndex": "a.", // a., b., c., ...
     * "questionStartIndex": "#3", // #3, #4, #5, ...
     * "questionStartIndex": "(B)." // (B)., (C)., (D)., ...
     * ```
     * Default value: `"1."` (inherited from the `questionStartIndex` property specified for the parent panel, page, or survey)
     * @see showQuestionNumbers
     */
    get questionStartIndex(): string;
    set questionStartIndex(val: string);
    protected get items(): Array<ISurveyData>;
    /**
     * An array of `PanelModel` objects created based on a panel template.
     * @see PanelModel
     * @see template
     * @see panelCount
     */
    get panels(): Array<PanelModel>;
    /**
     * An array of currently visible panels ([`PanelModel`](https://surveyjs.io/form-library/documentation/api-reference/panel-model) objects).
     * @see templateVisibleIf
     */
    get visiblePanels(): Array<PanelModel>;
    protected get panelsCore(): Array<PanelModel>;
    protected get visiblePanelsCore(): Array<PanelModel>;
    private onPanelAdded;
    private onPanelRemoved;
    private onPanelRemovedCore;
    /**
     * A zero-based index of the currently displayed panel.
     *
     * When `displayMode` is `"list"` or Dynamic Panel is empty (`panelCount` is 0), this property contains -1.
     * @see currentPanel
     * @see panels
     * @see panelCount
     * @see displayMode
     */
    get currentIndex(): number;
    set currentIndex(val: number);
    /**
     * A `PanelModel` object that is the currently displayed panel.
     *
     * When `displayMode` is `"list"` or Dynamic Panel is empty (`panelCount` is 0), this property contains `null`.
     * @see currentIndex
     * @see panels
     * @see panelCount
     * @see displayMode
     */
    get currentPanel(): PanelModel;
    set currentPanel(val: PanelModel);
    protected getUIState(): any;
    protected setUIState(state: any): void;
    private _renderedPanels;
    private updateRenderedPanels;
    private panelOnFirstRendering;
    set renderedPanels(val: Array<PanelModel>);
    get renderedPanels(): Array<PanelModel>;
    private isPanelsAnimationRunning;
    private getPanelsAnimationOptions;
    private _panelsAnimations;
    private disablePanelsAnimations;
    private enablePanelsAnimations;
    private updatePanelsAnimation;
    get panelsAnimation(): AnimationProperty<Array<PanelModel>, IAnimationGroupConsumer<PanelModel>>;
    onHidingContent(): void;
    /**
     * Specifies whether to display a confirmation dialog when a respondent wants to delete a panel.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/duplicate-group-of-fields-in-form/ (linkStyle))
     * @see confirmDeleteText
     */
    confirmDelete: boolean;
    /**
     * Specifies a key question. Set this property to the name of a question used in the template, and Dynamic Panel will display `keyDuplicationError` if a user tries to enter a duplicate value in this question.
     * @see keyDuplicationError
     */
    keyName: string;
    /**
     * A message displayed in a confirmation dialog that appears when a respondent wants to delete a panel.
     * @see confirmDelete
     */
    confirmDeleteText: string;
    /**
     * An error message displayed when users enter a duplicate value into a question that accepts only unique values (`isUnique` is set to `true` or `keyName` is specified).
     *
     * A default value for this property is taken from a [localization dictionary](https://github.com/surveyjs/survey-library/tree/01bd8abd0c574719956d4d579d48c8010cd389d4/packages/survey-core/src/localization). Refer to the following help topic for more information: [Localization & Globalization](https://surveyjs.io/form-library/documentation/localization).
     * @see keyName
     */
    keyDuplicationError: string;
    /**
     * A caption for the Previous button. Applies only if `displayMode` is different from `"list"`.
     * @see displayMode
     * @see isPrevButtonVisible
     */
    prevPanelText: string;
    /**
     * @deprecated Use the [`prevPanelText`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#prevPanelText) property instead.
     */
    get panelPrevText(): string;
    set panelPrevText(val: string);
    /**
     * A caption for the Next button. Applies only if `displayMode` is different from `"list"`.
     * @see displayMode
     * @see isNextButtonVisible
     */
    nextPanelText: string;
    /**
     * @deprecated Use the [`nextPanelText`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#nextPanelText) property instead.
     */
    get panelNextText(): string;
    set panelNextText(val: string);
    /**
     * A caption for the Add Panel button.
     */
    addPanelText: string;
    /**
     * @deprecated Use the [`addPanelText`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#addPanelText) property instead.
     */
    get panelAddText(): string;
    set panelAddText(value: string);
    /**
     * A caption for the Remove Panel button.
     * @see removePanelButtonLocation
     */
    removePanelText: string;
    /**
     * @deprecated Use the [`removePanelText`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#removePanelText) property instead.
     */
    get panelRemoveText(): string;
    set panelRemoveText(val: string);
    get isProgressTopShowing(): boolean;
    get isProgressBottomShowing(): boolean;
    /**
     * Indicates whether the Previous button is visible.
     * @see currentIndex
     * @see currentPanel
     * @see prevPanelText
     */
    get isPrevButtonVisible(): boolean;
    get isPrevButtonShowing(): boolean;
    /**
     * Indicates whether the Next button is visible.
     * @see currentIndex
     * @see currentPanel
     * @see nextPanelText
     */
    get isNextButtonVisible(): boolean;
    get isNextButtonShowing(): boolean;
    get isRangeShowing(): boolean;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    private isAddingNewPanels;
    private addingNewPanelsValue;
    private isNewPanelsValueChanged;
    private prepareValueForPanelCreating;
    private setValueAfterPanelsCreating;
    protected getValueCore(): any;
    protected setValueCore(newValue: any): void;
    setIsMobile(val: boolean): void;
    themeChanged(theme: ITheme): void;
    /**
     * The number of panels in Dynamic Panel.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/duplicate-group-of-fields-in-form/ (linkStyle))
     * @see minPanelCount
     * @see maxPanelCount
     */
    get panelCount(): number;
    set panelCount(val: number);
    private updateNewPanelsVisibleIndex;
    /**
     * Returns the number of visible panels in Dynamic Panel.
     * @see templateVisibleIf
     */
    get visiblePanelCount(): number;
    /**
     * Specifies whether users can expand and collapse panels. Applies if `displayMode` is `"list"` and the `templateTitle` property is specified.
     *
     * Possible values:
     *
     * - `"default"` (default) - All panels are displayed in full and cannot be collapsed.
     * - `"expanded"` - All panels are displayed in full and can be collapsed in the UI.
     * - `"collapsed"` - All panels display only their titles and descriptions and can be expanded in the UI.
     * - `"firstExpanded"` - Only the first panel is displayed in full; other panels are collapsed and can be expanded in the UI.
     * @see displayMode
     * @see templateTitle
     */
    panelsState: string;
    getStructuredValue(level?: number): any;
    private setTemplatePanelSurveyImpl;
    private setPanelsSurveyImpl;
    private setPanelsState;
    private setValueBasedOnPanelCount;
    /**
     * A minimum number of panels in Dynamic Panel. Users cannot delete panels if `panelCount` equals `minPanelCount`.
     *
     * Default value: 0
     * @see panelCount
     * @see maxPanelCount
     * @see allowRemovePanel
     */
    minPanelCount: number;
    private onMinPanelCountChanged;
    /**
     * A maximum number of panels in Dynamic Panel. Users cannot add new panels if `panelCount` equals `maxPanelCount`.
     *
     * Default value: 100 (inherited from [`settings.panel.maxPanelCount`](https://surveyjs.io/form-library/documentation/settings#panelMaximumPanelCount))
     *
     * [View Demo](https://surveyjs.io/form-library/examples/duplicate-group-of-fields-in-form/ (linkStyle))
     * @see panelCount
     * @see minPanelCount
     * @see allowAddPanel
     */
    maxPanelCount: number;
    private onMaxPanelCountChanged;
    /**
     * Specifies whether users are allowed to add new panels.
     *
     * Default value: `true`
     *
     * By default, users add new panels to the end. If you want to let users insert a new panel after the current panel, set the [`newPanelPosition`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#newPanelPosition) property to `"next"`.
     * @see canAddPanel
     * @see allowRemovePanel
     */
    allowAddPanel: boolean;
    get addButtonId(): string;
    /**
     * Specifies the position of newly added panels.
     *
     * Possible values:
     *
     * - `"last"` (default) - New panels are added to the end.
     * - `"next"` - New panels are inserted after the current panel.
     * @see allowAddPanel
     * @see addPanel
     */
    newPanelPosition: string;
    /**
     * Specifies whether users are allowed to delete panels.
     *
     * Default value: `true`
     * @see canRemovePanel
     * @see allowAddPanel
     */
    allowRemovePanel: boolean;
    /**
     * Indicates whether the add panel button is enabled. When set to `false`, the button is disabled but remains visible.
     *
     * Default value: `true`
     *
     * This property is not serialized.
     * @see allowAddPanel
     */
    enableAddPanel: boolean;
    /**
     * Indicates whether the remove panel button is enabled. When set to `false`, the button is disabled but remains visible.
     *
     * Default value: `true`
     *
     * This property is not serialized.
     * @see allowRemovePanel
     */
    enableRemovePanel: boolean;
    /**
     * Gets or sets the location of question titles relative to their input fields.
     *
     * - `"default"` (default) - Inherits the setting from the Dynamic Panel's `titleLocation` property, which in turn inherits the [`questionTitleLocation`](https://surveyjs.io/form-library/documentation/surveymodel#questionTitleLocation) property value specified for the Dynamic Panel's container (page or survey).
     * - `"top"` - Displays question titles above input fields.
     * - `"bottom"` - Displays question titles below input fields.
     * - `"left"` - Displays question titles to the left of input fields.
     * - `"hidden"` - Hides question titles.
     * @see titleLocation
     */
    templateQuestionTitleLocation: string;
    /**
     * @deprecated Use the [`templateQuestionTitleLocation`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#templateQuestionTitleLocation) property instead.
     */
    get templateTitleLocation(): string;
    set templateTitleLocation(val: string);
    /**
     * Sets consistent width for question titles in CSS values. Applies only when [`templateQuestionTitleLocation`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#templateQuestionTitleLocation) evaluates to `"left"`.
     *
     * Default value: `undefined` (inherits the actual value from the [`questionTitleWidth`](https://surveyjs.io/form-library/documentation/api-reference/page-model#questionTitleWidth) property of the parent panel or page.
     */
    templateQuestionTitleWidth: string;
    /**
     * Specifies the error message position.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the [`errorLocation`](#errorLocation) property.
     * - `"top"` - Displays error messages above questions.
     * - `"bottom"` - Displays error messages below questions.
     */
    templateErrorLocation: string;
    resetSingleInput(): void;
    get locEditPanelText(): LocalizableString;
    protected createSingleInputBehavior(): QuestionSingleInputBehavior;
    /**
     * Specifies whether to display survey element numbers within the dynamic panel and how to calculate them.
     *
     * Possible values:
     *
     * - `"off"` (default) - Hides question numbers.
     * - `"default"` - Inherits the setting from the parent panel, page, or survey.
     * - `"recursive"` - Applies recursive numbering to elements nested within the dynamic panel (for example, 1 -> 1.1 -> 1.1.1, etc.).
     * - `"onpanel"` - Starts numbering within the dynamic panel from scratch.
     * - `"onSurvey"` - Obsolete. Use the `"default"` value instead.
     * @see questionStartIndex
     * @see showNumber
     */
    showQuestionNumbers: string;
    private getShowQuestionNumbers;
    protected notifySurveyOnChildrenVisibilityChanged(): boolean;
    /**
     * Specifies the location of the Remove Panel button relative to panel content.
     *
     * Possible values:
     *
     * - `"bottom"` (default) - Displays the Remove Panel button below panel content.
     * - `"right"` - Displays the Remove Panel button to the right of panel content.
     * @see removePanelText
     */
    removePanelButtonLocation: string;
    /**
     * @deprecated Use the [`removePanelButtonLocation`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#removePanelButtonLocation) property instead.
     */
    get panelRemoveButtonLocation(): string;
    set panelRemoveButtonLocation(val: string);
    /**
     * @deprecated Use the [`showProgressBar`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#showProgressBar) property instead.
     */
    get showRangeInProgress(): boolean;
    set showRangeInProgress(val: boolean);
    /**
     * @deprecated Use the [`displayMode`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#displayMode) property instead.
     */
    get renderMode(): string;
    set renderMode(val: string);
    private updatePanelView;
    /**
     * Specifies how to display panels.
     *
     * Possible values:
     *
     * - `"list"` (default) - Displays panels one under the other. [View Demo](https://surveyjs.io/form-library/examples/duplicate-group-of-fields-in-form/)
     * - `"carousel"` - Displays panels in a carousel. Users can switch between panels using navigation buttons.
     * - `"tab"` - Displays each panel within a tab. Use the [`templateTabTitle`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#templateTabTitle) to specify a template for tab titles. [View Demo](https://surveyjs.io/form-library/examples/tabbed-interface-for-duplicate-group-option/)
     * @see showProgressBar
     * @see progressBarLocation
     */
    displayMode: "list" | "carousel" | "tab";
    /**
     * Specifies whether to display the progress bar. Applies only if [`displayMode`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#displayMode) is `"carousel"`.
     *
     * Default value: `true`
     * @see progressBarLocation
     */
    showProgressBar: true | false;
    /**
     * Specifies the alignment of the [progress bar](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#showProgressBar) relative to the currently displayed panel. Applies only if [`displayMode`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#displayMode) is `"carousel"`.
     *
     * Possible values:
     *
     * - `"top"` (default) - Displays the progress bar at the top of the current panel.
     * - `"bottom"` - Displays the progress bar at the bottom of the current panel.
     * - `"topBottom"` - Displays the progress bar at the top and bottom of the current panel.
     */
    progressBarLocation: "top" | "bottom" | "topBottom";
    tabAlign: "center" | "left" | "right";
    get isRenderModeList(): boolean;
    get isRenderModeTab(): boolean;
    setVisibleIndex(val: number): number;
    private setPanelVisibleIndex;
    /**
     * Indicates whether it is possible to add a new panel.
     *
     * This property returns `true` when all of the following conditions apply:
     *
     * - Users are allowed to add new panels (`allowAddPanel` is `true`).
     * - Dynamic Panel or its parent survey is not in read-only state.
     * - `panelCount` is less than `maxPanelCount`.
     * @see allowAddPanel
     * @see isReadOnly
     * @see panelCount
     * @see maxPanelCount
     * @see canRemovePanel
     */
    get canAddPanel(): boolean;
    /**
     * Indicates whether it is possible to delete panels.
     *
     * This property returns `true` when all of the following conditions apply:
     *
     * - Users are allowed to delete panels (`allowRemovePanel` is `true`).
     * - Dynamic Panel or its parent survey is not in read-only state.
     * - `panelCount` exceeds `minPanelCount`.
     * @see allowRemovePanel
     * @see isReadOnly
     * @see panelCount
     * @see minPanelCount
     * @see canAddPanel
     */
    get canRemovePanel(): boolean;
    protected rebuildPanels(): void;
    /**
     * If it is not empty, then this value is set to every new panel, including panels created initially, unless the defaultValue is not empty
     * @see defaultValue
     * @see copyDefaultValueFromLastEntry
     */
    defaultPanelValue: any;
    /**
     * Specifies whether default values for a new panel should be copied from the last panel.
     *
     * If you also specify `defaultValue`, it will be merged with the copied values.
     * @see defaultValue
     */
    copyDefaultValueFromLastEntry: boolean;
    /**
     * @deprecated Use the [`copyDefaultValueFromLastEntry`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#copyDefaultValueFromLastEntry) property instead.
     */
    get defaultValueFromLastPanel(): boolean;
    set defaultValueFromLastPanel(val: boolean);
    protected isDefaultValueEmpty(): boolean;
    protected setDefaultValue(): void;
    get isValueArray(): boolean;
    isEmpty(): boolean;
    getProgressInfo(): IProgressInfo;
    private isRowEmpty;
    addPanelUI(): PanelModel;
    /**
     * Adds a new panel based on the [template](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#template).
     * @param index *(Optional)* An index at which to insert the new panel. `undefined` adds the panel to the end or inserts it after the current panel if [`displayMode`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#displayMode) is `"tab"`. A negative index (for instance, -1) adds the panel to the end in all cases, regardless of the `displayMode` value.
     * @param runAdditionalActions *(Optional)* Pass `true` if you want to perform additional actions: check whether a new panel [can be added](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#canAddPanel), expand and focus the new panel, and run animated effects. Default value: `false` (the listed actions are skipped).
     * @see panelCount
     * @see panels
     * @see allowAddPanel
     * @see newPanelPosition
     */
    addPanel(index?: number, runAdditionalActions?: boolean): PanelModel;
    private addPanelCore;
    private focusNewPanelCallback;
    private focusNewPanel;
    private updateValueOnAddingPanel;
    private canLeaveCurrentPanel;
    private copyValue;
    getPanelRemoveButtonId(panel: PanelModel): string;
    isRequireConfirmOnDelete(val: any): boolean;
    /**
     * Switches Dynamic Panel to the next panel. Returns `true` in case of success, or `false` if `displayMode` is `"list"` or the current panel contains validation errors.
     * @see displayMode
     */
    goToNextPanel(): boolean;
    /**
     * Switches Dynamic Panel to the previous panel.
     */
    goToPrevPanel(): void;
    removePanelUI(value: any): void;
    /**
     * Deletes a panel from the [`panels`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#panels) array.
     * @param value A `PanelModel` instance or zero-based panel index.
     * @param confirmDelete *(Optional)* Pass `true` if you want to perform additional actions: check whether the panel [can be removed](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#canRemovePanel) and display a confirmation dialog.
     * @see addPanel
     */
    removePanel(value: any, confirmDelete?: boolean): void;
    private removedPanelIndex;
    private removePanelCore;
    private notifyOnPanelAddedRemoved;
    private recursiveNoCallback;
    private getVisualPanelIndex;
    private getPanelVisibleIndexById;
    locStrsChanged(): void;
    randomSeedChanged(): void;
    clearIncorrectValues(): void;
    clearErrors(): void;
    getQuestionFromArray(name: string, index: number): IQuestion;
    private clearIncorrectValuesInPanel;
    private iscorrectValueWithPostPrefix;
    getSharedQuestionFromArray(name: string, panelIndex: number): Question;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    protected collectNestedQuestionsCore(questions: Question[], visibleOnly: boolean, includeNested: boolean, includeItSelf: boolean): void;
    getConditionJson(operator?: string, path?: string): any;
    protected onReadOnlyChanged(): void;
    private updateNoEntriesTextDefaultLoc;
    private getNoEntriesLocalizationName;
    onSurveyLoad(): void;
    private adjustPanelCount;
    private hasPanelBuildFirstTime;
    private isBuildingPanelsFirstTime;
    private buildPanelsFirstTime;
    private runTriggersOnBuildPanelsFirstTime;
    private get showAddPanelButton();
    private get wasNotRenderedInSurvey();
    private get canBuildPanels();
    protected onFirstRenderingCore(): void;
    localeChanged(): void;
    protected runConditionCore(properties: HashTable<any>): void;
    runTriggers(name: string, value: any, keys?: any): void;
    private reRunCondition;
    protected runPanelsCondition(panels: PanelModel[], properties: HashTable<any>): void;
    private isValueChangedWithoutPanels;
    onAnyValueChanged(name: string, questionName: string): void;
    private hasKeysDuplicated;
    private updatePanelsContainsErrors;
    protected validateElementCore(context: ValidationContext): boolean;
    private hasInputInChangedQuestions;
    protected getContainsErrors(): boolean;
    protected getIsAnswered(): boolean;
    protected clearValueOnHidding(isClearOnHidden: boolean): void;
    clearValueIfInvisible(reason?: string): void;
    private clearValueInPanelsIfInvisible;
    protected getIsRunningValidators(): boolean;
    getAllErrors(): Array<SurveyError>;
    getValueGetterContext(): IValueGetterContext;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    private getPanelDisplayValue;
    private validateInPanels;
    private isValueDuplicated;
    getPanelActions(panel: PanelModel): Array<IAction>;
    canRenderRemovePanelOnRight(panel: PanelModel): boolean;
    private canRenderRemovePanel;
    protected createNewPanel(): PanelModel;
    protected createAndSetupNewPanelObject(): PanelModel;
    private getTemplateQuestionTitleLocation;
    getChildErrorLocation(child: Question): string;
    protected createNewPanelObject(): PanelModel;
    private settingPanelCountBasedOnValue;
    private setPanelCountBasedOnValue;
    setQuestionValue(newValue: any): void;
    private isSettingPanelItemData;
    onSurveyValueChanged(newValue: any): void;
    private isAllPanelsEmpty;
    private panelUpdateValueFromSurvey;
    private panelSurveyValueChanged;
    protected onSetData(): void;
    protected isNewValueCorrect(val: any): boolean;
    getValueChangingOptions(childQuestion: Question): any;
    getItemIndex(item: ISurveyData): number;
    getItemData(item: ISurveyData): any;
    getBindedQuestions(): Array<IQuestion>;
    getItem(index: number): DynamicItemModelBase;
    private getPanelItemDataByIndex;
    private isSetPanelItemData;
    updateItemValue(item: ISurveyData, name: string, val: any, isDeletingValue: boolean): void;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    updateElementCss(reNew?: boolean): void;
    get progressText(): string;
    get progress(): string;
    get progressBarAriaLabel(): string;
    getRootCss(): string;
    get cssHeader(): string;
    getTabsContainerCss(): string;
    getPanelWrapperCss(panel: PanelModel): string;
    getPanelRemoveButtonCss(): string;
    getAddButtonCss(): string;
    getPrevButtonCss(): string;
    getNextButtonCss(): string;
    /**
     * A text displayed when Dynamic Panel contains no entries.
     */
    get noEntriesText(): string;
    set noEntriesText(val: string);
    get locNoEntriesText(): LocalizableString;
    getShowNoEntriesPlaceholder(): boolean;
    needResponsiveWidth(): boolean;
    private tabbedMenuValue;
    get hasTabbedMenu(): boolean;
    get tabbedMenu(): AdaptiveActionContainer<PanelDynamicTabbedMenuItem> | null;
    _showFooterToolbar: boolean;
    get showFooterToolbar(): boolean;
    private footerToolbarValue;
    get footerToolbar(): ActionContainer;
    legacyNavigation: boolean;
    get ariaRole(): string;
    get ariaRequired(): any;
    get ariaInvalid(): any;
    private updateFooterActionsCallback;
    private updateFooterActions;
    private initFooterToolbar;
    private createTabByPanel;
    private getTabbedMenuCss;
    private updateTabToolbarItemsPressedState;
    private updateTabToolbar;
    private addTabFromToolbar;
    private removeTabFromToolbar;
    get showNavigation(): boolean;
    showSeparator(index: number): boolean;
    protected calcCssClasses(css: any): any;
    protected onMobileChanged(): void;
    ensureRowsVisibility(): void;
}
export declare class PanelDynamicSingleInputBehavior extends QuestionSingleInputBehavior {
    protected get panelDynamic(): QuestionPanelDynamicModel;
    protected getSingleInputQuestionsCore(question: Question, checkDynamic: boolean): Array<Question>;
    fillSingleInputQuestionsInContainer(res: Array<Question>, innerQuestion: Question): void;
    private fillSingleInputQuestionsByPanel;
    protected getSingleQuestionLocTitleCore(): LocalizableString;
    private processSingleInputTitle;
    private getSingleInputTitleTemplate;
    private getPanelByQuestion;
    getSingleInputAddTextCore(): string;
    singleInputAddItemCore(): void;
    protected getSingleQuestionOnChange(index: number): Question;
    protected createSingleInputSummary(): QuestionSingleInputSummary;
    protected singleInputMoveToFirstCore(): void;
    private singInputEditPanel;
}
export {};
