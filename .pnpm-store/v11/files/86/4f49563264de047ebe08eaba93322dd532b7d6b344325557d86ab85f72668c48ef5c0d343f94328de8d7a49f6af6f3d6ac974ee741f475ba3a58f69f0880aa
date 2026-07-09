import { HashTable } from "./helpers";
import { Base } from "./base";
import { ISurveyImpl, IPage, IPanel, IConditionRunner, IElement, IQuestion, ISurveyErrorOwner, ITitleOwner, IProgressInfo, ISurvey, IFindElement, ISurveyValidation } from "./base-interfaces";
import { SurveyElement } from "./survey-element";
import { Question } from "./question";
import { LocalizableString } from "./localizablestring";
import { findScrollableParent } from "./utils/dom-utils";
import { SurveyError } from "./survey-error";
import { IAction } from "./actions/action";
import { ActionContainer } from "./actions/container";
import { IValueGetterContext } from "./conditions/conditionProcessValue";
import { AnimationGroup } from "./utils/animation";
import { PanelLayoutColumnModel } from "./panel-layout-column";
import { ValidationContext } from "./question";
export declare class QuestionRowModel extends Base {
    panel: PanelModelBase;
    protected _scrollableParent: any;
    protected _updateVisibility: any;
    private get allowRendering();
    private lazyRenderingTimeout;
    startLazyRendering(rowContainerDiv: HTMLElement, findScrollableContainer?: typeof findScrollableParent): void;
    ensureVisibility(): void;
    stopLazyRendering(): void;
    constructor(panel: PanelModelBase);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    private isLazyRenderingValue;
    setIsLazyRendering(val: boolean): void;
    isLazyRendering(): boolean;
    get id(): string;
    protected equalsCore(obj: Base): boolean;
    get elements(): Array<IElement>;
    protected getIsAnimationAllowed(): boolean;
    private getVisibleElementsAnimationOptions;
    visibleElementsAnimation: AnimationGroup<IElement>;
    set visibleElements(val: Array<IElement>);
    get visibleElements(): Array<IElement>;
    onVisibleChangedCallback: () => void;
    visible: boolean;
    isNeedRender: boolean;
    updateVisible(): void;
    addElement(q: IElement): void;
    get index(): number;
    private setWidth;
    private getRenderedCalcWidth;
    private getElementWidth;
    private getRenderedWidthFromWidth;
    dispose(): void;
    getRowCss(): string;
    private rootElement?;
    setRootElement(element?: HTMLElement): void;
    getRootElement(): HTMLElement;
}
/**
 * A base class for the [`PanelModel`](https://surveyjs.io/form-library/documentation/panelmodel) and [`PageModel`](https://surveyjs.io/form-library/documentation/pagemodel) classes.
 */
export declare class PanelModelBase extends SurveyElement<Question> implements IPanel, IConditionRunner, ISurveyErrorOwner, ITitleOwner {
    private elementsValue;
    private isQuestionsReady;
    private questionsValue;
    get validationCallbacks(): ISurveyValidation;
    private _columns;
    private _columnsReady;
    /**
     * An array of columns used to arrange survey elements within this page or panel. Applies only if you set the `SurveyModel`'s [`gridLayoutEnabled`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#gridLayoutEnabled) property to `true`.
     *
     * Each object in this array configures a single layout column and has the following properties:
     *
     * - `width`: `number`\
     * Column width, in percentage.
     *
     * - `questionTitleWidth`: `string`\
     * The width of question titles, in pixels.
     *
     * The `gridLayoutColumns` array is generated automatically based on the maximum number of questions and panels in the same row. To arrange the survey elements in one or several rows, disable the [`startWithNewLine`](https://surveyjs.io/form-library/documentation/api-reference/question#startWithNewLine) property for those elements that should occupy the same row as the previous question or panel. You can also set the [`colSpan`](https://surveyjs.io/form-library/documentation/api-reference/question#colSpan) property for individual questions and panels to specify how many layout columns they span.
     */
    get gridLayoutColumns(): Array<PanelLayoutColumnModel>;
    set gridLayoutColumns(val: Array<PanelLayoutColumnModel>);
    addElementCallback: (element: IElement) => void;
    removeElementCallback: (element: IElement) => void;
    onGetQuestionTitleLocation: () => string;
    onGetQuestionTitleWidth: () => string;
    onAddRow(row: QuestionRowModel): void;
    private getRowsAnimationOptions;
    private rowsAnimation;
    get visibleRows(): Array<QuestionRowModel>;
    set visibleRows(val: Array<QuestionRowModel>);
    onRemoveRow(row: QuestionRowModel): void;
    onRowVisibleChanged(): void;
    constructor(name?: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    getValueGetterContext(): IValueGetterContext;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    endLoadingFromJson(): void;
    showTitle: boolean;
    get hasTextInTitle(): boolean;
    private resetHasTextInTitle;
    get hasTitle(): boolean;
    delete(doDispose?: boolean): void;
    private deletePanel;
    protected removeFromParent(): void;
    protected canShowTitle(survey: ISurvey): boolean;
    protected getDefaultTitleTagName(): string;
    showDescription: boolean;
    get _showDescription(): boolean;
    localeChanged(): void;
    locStrsChanged(): void;
    randomSeedChanged(): void;
    protected getAllChildren(): Base[];
    getMarkdownHtml(text: string, name: string, item?: any): string;
    get locNavigationTitle(): LocalizableString;
    get renderedNavigationTitle(): string;
    /**
     * Returns a character or text string that indicates a required panel/page.
     * @see SurveyModel.requiredMark
     * @see isRequired
     */
    get requiredMark(): string;
    /**
     * @deprecated Use the [`requiredMark`](https://surveyjs.io/form-library/documentation/api-reference/panel-model#requiredMark) property instead.
     */
    get requiredText(): string;
    protected get titlePattern(): string;
    get isRequireTextOnStart(): boolean;
    get isRequireTextBeforeTitle(): boolean;
    get isRequireTextAfterTitle(): boolean;
    /**
     * Specifies a custom error message for a required panel/page.
     * @see isRequired
     * @see requiredIf
     */
    requiredErrorText: string;
    /**
     * Specifies the sort order of questions in the panel/page.
     *
     * Possible values:
     *
     * - `"initial"` - Preserves the original order of questions.
     * - `"random"` - Displays questions in random order.
     * - `"default"` (default) - Inherits the setting from the `SurveyModel`'s [`questionOrder`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionOrder) property.
     * @see areQuestionsRandomized
     */
    questionOrder: string;
    /**
     * @deprecated Use the [`questionOrder`](https://surveyjs.io/form-library/documentation/api-reference/panel-model#questionOrder) property instead.
     */
    get questionsOrder(): string;
    set questionsOrder(val: string);
    /**
     * Specifies a number or letter used to start numbering of elements inside this page/panel.
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
    questionStartIndex: string;
    addNoFromChild(no: string): string;
    private canRandomize;
    protected isRandomizing: boolean;
    randomizeElements(isRandom: boolean): boolean;
    /**
     * Returns `true` if elements in this panel/page are arranged in random order.
     * @see questionOrder
     */
    get areQuestionsRandomized(): boolean;
    /**
     * Returns a survey element (panel or page) that contains this panel and allows you to move the panel to a different survey element.
     *
     * For `PageModel` objects, the `parent` property is `null`, except in the following cases:
     *
     * - `SurveyModel`'s [`questionsOnPageMode`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionsOnPageMode) is set to `"singlePage"`.
     * - The page is included in a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page).
     *
     * In those cases, the survey creates an internal `PageModel` object to show all questions on one page, and the `parent` property contains this object.
     */
    get parent(): PanelModelBase;
    set parent(val: PanelModelBase);
    get depth(): number;
    /**
     * A Boolean expression. If it evaluates to `false`, this panel/page becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see visible
     * @see isVisible
     */
    visibleIf: string;
    protected calcCssClasses(css: any): any;
    /**
     * An auto-generated unique element identifier.
     */
    id: string;
    get isPanel(): boolean;
    getPanels(): Array<IPanel>;
    getLayoutType(): string;
    isLayoutTypeSupported(layoutType: string): boolean;
    /**
     * An array of all questions within this panel/page. Includes questions within nested panels.
     * @see elements
     */
    get questions(): Array<Question>;
    get visibleQuestions(): Array<Question>;
    private getQuestionsCore;
    getQuestions(includeNested: boolean): Array<Question>;
    /**
     * Returns a question with a specified `name`. This method does not find questions within nested panels.
     * @param name A question name.
     */
    getQuestionByName(name: string): Question;
    /**
     * Returns a survey element with a specified `name`. This method can find survey elements within nested panels.
     * @param name An element name.
     */
    getElementByName(name: string): IElement;
    getQuestionByValueName(valueName: string, caseInsensitive?: boolean): Question;
    getQuestionsByValueName(valueName: string, caseInsensitive?: boolean): Array<Question>;
    /**
     * Returns a JSON object with question values nested in the panel/page.
     * @see getDisplayValue
     */
    getValue(): any;
    hasValueAnyQuestion(visibleOnly?: boolean): boolean;
    collectValues(data: any, level: number): boolean;
    /**
     * Returns a JSON object with display texts that correspond to question values nested in the panel/page.
     * @param keysAsText Pass `true` if not only values in the object should be display texts, but also keys. Default value: `false`.
     * @see getValue
     */
    getDisplayValue(keysAsText: boolean): any;
    /**
     * Returns a JSON object with comments left to questions within this panel/page. Question names are used as keys.
     */
    getComments(): any;
    /**
     * Removes values that cannot be assigned to nested questions, for example, choices unlisted in the `choices` array.
     *
     * Call this method after you assign new question values in code to ensure that they are acceptable.
     *
     * > This method does not remove values for invisible questions and values that fail validation. Call the `validate()` method to validate newly assigned values.
     *
     * @see validate
     */
    clearIncorrectValues(): void;
    /**
     * Empties the `errors` array for this panel/page and all its child elements (panels and questions).
     * @see errors
     */
    clearErrors(): void;
    private markQuestionListDirty;
    /**
     * An array of all survey elements (questions or panels) within this panel/page. Does not include questions within nested panels.
     * @see questions
     */
    get elements(): Array<IElement>;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    /**
     * Checks whether a given element belongs to this panel/page or nested panels.
     * @param element A survey element to check.
     */
    containsElement(element: IElement): boolean;
    /**
     * Makes the panel/page require an answer at least in one nested question. If a respondent leaves the panel/page without any answers, the survey displays a validation error.
     * @see requiredIf
     * @see [Data Validation](https://surveyjs.io/form-library/documentation/data-validation)
     */
    isRequired: boolean;
    /**
     * A Boolean expression. If it evaluates to `true`, this panel/page becomes required (at least one question in the panel/page should have an answer).
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see isRequired
     */
    requiredIf: string;
    searchText(text: string, founded: Array<IFindElement>): void;
    hasErrors(fireCallback?: boolean, focusOnFirstError?: boolean): boolean;
    /**
     * Validates questions within this panel or page and returns `false` if the validation fails.
     * @param fireCallback *(Optional)* Pass `false` if you do not want to show validation errors in the UI.
     * @param focusFirstError *(Optional)* Pass `true` if you want to focus the first question with a validation error.
     * @see [Data Validation](https://surveyjs.io/form-library/documentation/data-validation)
     */
    validate(fireCallback?: boolean, focusFirstError?: boolean, callbackResult?: (res: boolean, question: Question) => void): boolean;
    validateContainerOnly(): void;
    private validateInPanels;
    getErrorCustomText(text: string, error: SurveyError): string;
    private validateRequired;
    validateElement(context: ValidationContext): boolean;
    protected validateCore(context: ValidationContext): void;
    protected getContainsErrors(): boolean;
    updateElementVisibility(): void;
    getFirstQuestionToFocus(withError?: boolean, ignoreCollapseState?: boolean): Question;
    getFirstVisibleQuestion(): Question;
    getFirstVisibleElement(): IElement;
    /**
     * Focuses the first question in this panel/page.
     * @see focusFirstErrorQuestion
     */
    focusFirstQuestion(): void;
    /**
     * Focuses the first question with a validation error in this panel/page.
     * @see validate
     * @see focusFirstQuestion
     */
    focusFirstErrorQuestion(): void;
    addQuestionsToList(list: Array<IQuestion>, visibleOnly?: boolean, includingDesignTime?: boolean): void;
    addPanelsIntoList(list: Array<IPanel>, visibleOnly?: boolean, includingDesignTime?: boolean): void;
    private addElementsToList;
    private addElementsToListCore;
    private calcMaxRowColSpan;
    private updateColumnWidth;
    private onColumnPropertyValueChangedCallback;
    updateColumns(): void;
    updateRootStyle(): void;
    updateCustomWidgets(): void;
    /**
     * Sets a title location relative to the input field for questions that belong to this panel/page.
     *
     * Use this property to override the [`questionTitleLocation`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionTitleLocation) property specified for the survey or parent page. You can also set the [`titleLocation`](https://surveyjs.io/form-library/documentation/api-reference/question#titleLocation) property for individual questions.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the `questionTitleLocation` property specified for the survey or parent page.
     * - `"top"` - Displays the title above the input field.
     * - `"bottom"` - Displays the title below the input field.
     * - `"left"` - Displays the title to the left of the input field.
     * - `"hidden"` - Hides the question title.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/vertically-align-input-fields/ (linkStyle))
     *
     * > Certain question types (Matrix, Multiple Text) do not support the `"left"` value. For them, the `"top"` value is used.
     */
    questionTitleLocation: string;
    getQuestionTitleLocation(): string;
    availableQuestionTitleWidth(): boolean;
    hasElementWithTitleLocationLeft(): boolean;
    /**
     * Sets consistent width for question titles in CSS values. Applies only when [`questionTitleLocation`](#questionTitleLocation) evaluates to `"left"`.
     *
     * Default value: `undefined`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/vertically-align-input-fields/ (linkStyle))
     */
    questionTitleWidth: string;
    getQuestionTitleWidth(): string;
    get columns(): Array<PanelLayoutColumnModel>;
    private generateColumns;
    private createGridLayoutColumns;
    updateGridColumns(): void;
    getColumsForElement(el: IElement): Array<PanelLayoutColumnModel>;
    protected isQuestionIndexRecursive(): boolean;
    getQuestionStartIndex(): string;
    protected getStartIndexSubs(str: string, isLast: boolean): string;
    protected getQuestionStartIndexVsVisibleIndex(str: string, index: number): string;
    protected isComplexIndex(str: string): boolean;
    getChildrenLayoutType(): string;
    getProgressInfo(): IProgressInfo;
    get root(): PanelModelBase;
    protected childVisibilityChanged(): void;
    protected canRenderFirstRows(): boolean;
    private isLazyRenderInRow;
    private createRowAndSetLazy;
    protected createRow(): QuestionRowModel;
    onSurveyLoad(): void;
    protected onFirstRenderingCore(): void;
    updateRows(): void;
    get rows(): Array<QuestionRowModel>;
    ensureRowsVisibility(): void;
    protected onRowsChanged(): void;
    private locCountRowUpdates;
    private blockRowsUpdates;
    private releaseRowsUpdates;
    private updateRowsBeforeElementRemoved;
    private updateRowsOnElementAdded;
    private canFireAddRemoveNotifications;
    protected onAddElement(element: IElement, index: number): void;
    protected onRemoveElement(element: IElement): void;
    protected unregisterElementPropertiesChanged(element: IElement): void;
    private onRemoveElementNotifySurvey;
    private onElementVisibilityChanged;
    private onElementStartWithNewLineChanged;
    private updateRowsVisibility;
    canBuildRows(): boolean;
    private buildRows;
    protected getElementsForRows(): Array<IElement>;
    getDragDropInfo(): any;
    private updateRowsOnElementRemoved;
    private updateRowsRemoveElementFromRow;
    getAllRows(): Array<QuestionRowModel>;
    private findRowAndIndexByElement;
    private forceRenderRow;
    forceRenderElement(el: IElement, elementsRendered?: () => void, gap?: number): void;
    forceRenderRows(rows: Array<QuestionRowModel>, elementsRendered?: () => void): void;
    findRowByElement(el: IElement): QuestionRowModel;
    elementWidthChanged(el: IElement): void;
    get ariaTitleId(): string;
    get ariaLabelledBy(): string;
    get ariaLabel(): string;
    get ariaRole(): string;
    get processedTitle(): string;
    protected getRenderedTitle(str: string): string;
    /**
     * Gets or sets panel/page visibility.
     *
     * If you want to display or hide a survey element based on a condition, specify the `visibleIf` property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see visibleIf
     * @see isVisible
     */
    visible: boolean;
    onHidingContent(): void;
    protected onVisibleChanged(): void;
    private updateRowsVisibleState;
    private refreshRowVisibility;
    protected notifyStateChanged(prevState: string): void;
    /**
     * Returns `true` if the panel/page is visible or the survey is currently in design mode.
     *
     * If you want to display or hide a question based on a condition, specify the `visibleIf` property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see visibleIf
     * @see visible
     */
    get isVisible(): boolean;
    getIsContentVisible(exceptionQuestion?: IQuestion): boolean;
    getIsPageVisible(exceptionQuestion?: IQuestion): boolean;
    private lastVisibleIndex;
    setVisibleIndex(index: number): number;
    private updateVisibleIndexes;
    private resetVisibleIndexes;
    protected beforeSetVisibleIndex(index: number): number;
    protected getPanelStartIndex(index: number): number;
    protected isContinueNumbering(): boolean;
    get isReadOnly(): boolean;
    protected onReadOnlyChanged(): void;
    updateElementCss(reNew?: boolean): void;
    /**
     * A Boolean expression. If it evaluates to `false`, this panel/page becomes read-only.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see readOnly
     * @see isReadOnly
     */
    enableIf: string;
    /**
     * Adds a survey element (question or panel) to this panel/page. Returns `true` if the element was added successfully; `false` otherwise.
     * @param element A survey element to add.
     * @param index A desired index of this element in the `elements` array.
     * @see addNewQuestion
     * @see addNewPanel
     */
    addElement(element: IElement, index?: number): boolean;
    insertElement(element: IElement, dest?: IElement, location?: "bottom" | "top" | "left" | "right"): void;
    insertElementAfter(element: IElement, after: IElement): void;
    insertElementBefore(element: IElement, before: IElement): void;
    protected canAddElement(element: IElement): boolean;
    addQuestion(question: Question, index?: number): boolean;
    addPanel(panel: PanelModel, index?: number): boolean;
    /**
     * Creates a new question of a given type and adds it to the `elements` array at a specified index.
     *
     * This method returns `null` if the question cannot be created or added to this panel/page; otherwise, the method returns the created question.
     *
     * @param questionType A [question type](https://surveyjs.io/form-library/documentation/question#getType).
     * @param name A question name.
     * @param index A desired index of the new question in the `elements` array.
     * @see elements
     * @see addElement
     */
    addNewQuestion(questionType: string, name?: string, index?: number): Question;
    /**
     * Creates a new panel and adds it to the end of the `elements` array.
     *
     * This method returns `null` if the panel cannot be created or added to this panel/page; otherwise, the method returns the created panel.
     * @param name A panel name.
     * @see elementsup
     * @see addElement
     */
    addNewPanel(name?: string): PanelModel;
    indexOf(element: IElement): number;
    protected createNewPanel(name: string): PanelModel;
    /**
     * Deletes a survey element (question or panel) from this panel/page. Returns `true` if the element was deleted successfully; `false` otherwise.
     * @param element A survey element to delete.
     * @see elements
     */
    removeElement(element: IElement): boolean;
    removeQuestion(question: Question): void;
    private isRunningConditions;
    runCondition(properties: HashTable<any>): void;
    onAnyValueChanged(name: string, questionName: string): void;
    checkBindings(valueName: string, value: any): void;
    needResponsiveWidth(): boolean;
    get hasDescriptionUnderTitle(): boolean;
    get cssHeader(): string;
    get cssDescription(): string;
    /**
     * Specifies the error message position for questions that belong to this page/panel.
     *
     * Use this property to override the [`questionErrorLocation`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionErrorLocation) property specified for the survey. You can also set the [`errorLocation`](https://surveyjs.io/form-library/documentation/question#errorLocation) property for individual questions.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the `questionErrorLocation` property specified for the survey.
     * - `"top"` - Displays error messages above questions.
     * - `"bottom"` - Displays error messages below questions.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/set-properties-on-multiple-questions-using-panel/ (linkStyle))
     */
    questionErrorLocation: string;
    getQuestionErrorLocation(): string;
    getTitleOwner(): ITitleOwner;
    get no(): string;
    get cssTitleNumber(): string;
    get cssRequiredMark(): string;
    get cssError(): string;
    protected getCssError(cssClasses: any): string;
    getSerializableColumnsValue(): Array<PanelLayoutColumnModel>;
    afterRender(el: HTMLElement): void;
    dispose(): void;
    protected disposeElements(): void;
}
/**
 * A class that describes the Panel container element.
 *
 * A panel can contain questions and other panels. Refer to the following help topic for an illustration: [Survey Structure](https://surveyjs.io/form-library/documentation/design-survey-create-a-simple-survey#survey-structure).
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-panel/ (linkStyle))
 */
export declare class PanelModel extends PanelModelBase implements IElement {
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    get contentId(): string;
    getSurvey(live?: boolean): ISurvey;
    get isPanel(): boolean;
    getOwner(): any;
    /**
     * Returns a page to which the panel belongs and allows you to move this panel to a different page.
     * @see PanelModelBase.parent
     */
    get page(): IPage;
    set page(val: IPage);
    protected removeFromParent(): void;
    moveTo(container: IPanel, insertBefore?: any): boolean;
    getPanelInDesignMode(): PanelModel;
    /**
     * Returns the visible index of the panel in the survey. Commonly it is -1 and it doesn't show.
     * You have to set showNumber to true to show index/numbering for the Panel
     * @see showNumber
     */
    get visibleIndex(): number;
    /**
     * Specifies whether to show the panel number in the title.
     *
     * Default value: `false`
     * @see SurveyModel.showQuestionNumbers
     * @see SurveyModel.questionTitlePattern
     */
    showNumber: boolean;
    addNoFromChild(no: string): string;
    recursiveNoCallback: () => string;
    private getRecursiveNo;
    private canAddDot;
    /**
     * Specifies whether to display survey element numbers within this page/panel and how to calculate them.
     *
     * Possible values:
     *
     * - `"default"` - Inherits the setting from the parent panel, page, or survey.
     * - `"recursive"` - Applies recursive numbering to elements nested within this page/panel (for example, 1 -> 1.1 -> 1.1.1, etc.).
     * - `"onpanel"` - Starts numbering within this page/panel from scratch.
     * - `"off"` - Hides question numbers within this page/panel.
     * @see [SurveyModel.showQuestionNumbers](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showQuestionNumbers)
     * @see showNumber
     * @see questionStartIndex
     */
    showQuestionNumbers: string;
    protected getPageVisibleIndex(): number;
    getQuestionStartIndex(): string;
    /**
     * A question number or letter (depends on the `questionStartIndex` property).
     *
     * When the question number, title, or the entire question is invisible, this property returns an empty string.
     * @see questionStartIndex
     * @see showNumber
     * @see visibleIf
     */
    get no(): string;
    onGetNoCallback: (no: string) => string;
    private calcNo;
    protected notifyStateChanged(prevState: string): void;
    protected createLocTitleProperty(): LocalizableString;
    protected beforeSetVisibleIndex(index: number): number;
    protected getPanelStartIndex(index: number): number;
    private get isQuestionIndexOnPanel();
    protected isQuestionIndexRecursive(): boolean;
    private hasParentInQuestionIndex;
    protected isContinueNumbering(): boolean;
    private notifySurveyOnVisibilityChanged;
    protected getRenderedTitle(str: string): string;
    /**
     * Increases or decreases an indent of panel content from the left edge. Accepts positive integer values and 0.
     */
    innerIndent: number;
    /**
     * Disable this property if you want to render the current panel on the same line or row with the previous question or panel.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/arrange-multiple-questions-in-single-line/ (linkStyle))
     */
    startWithNewLine: boolean;
    allowAdaptiveActions: boolean;
    innerPaddingLeft: string;
    protected calcPaddingLeft(): string;
    protected calcPaddingRight(): string;
    protected resetIndents(): void;
    private getIndentSize;
    clearOnDeletingContainer(): void;
    get footerActions(): Array<IAction>;
    private footerToolbarValue;
    onGetFooterActionsCallback: () => Array<IAction>;
    onGetFooterToolbarCssCallback: () => string;
    getFooterToolbar(): ActionContainer;
    get hasEditButton(): boolean;
    cancelPreview(): void;
    get cssTitle(): string;
    protected getCssPanelTitle(): string;
    getCssTitleExpandableSvg(): string;
    get showErrorsAbovePanel(): boolean;
    protected getCssError(cssClasses: any): string;
    protected onVisibleChanged(): void;
    needResponsiveWidth(): boolean;
    focusIn(): void;
    protected getHasFrameV2(): boolean;
    protected getIsNested(): boolean;
    get showPanelAsPage(): boolean;
    private forcusFirstQuestionOnExpand;
    /**
     * Expands the panel.
     * @param focusFirstQuestion Specifies whether to focus the first question within the expanded panel. Default value: `true`.
     * @hidefor PageModel
     * @see state
     * @see toggleState
     * @see collapse
     * @see isCollapsed
     * @see isExpanded
     */
    expand(focusFirstQuestion?: boolean): void;
    protected onElementExpanded(elementIsRendered: boolean): void;
    protected getCssRoot(cssClasses: {
        [index: string]: string;
    }): string;
    getContainerCss(): string;
    afterRenderCore(element: HTMLElement): void;
}
