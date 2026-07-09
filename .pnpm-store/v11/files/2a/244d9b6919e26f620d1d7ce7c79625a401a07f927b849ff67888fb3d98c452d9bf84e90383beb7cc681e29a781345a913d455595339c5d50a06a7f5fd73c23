import { Base } from "./base";
import { EventBase } from "./event";
import { IAction } from "./actions/action";
import { AdaptiveActionContainer } from "./actions/adaptive-container";
import { ISurveyElement, IPage, IPanel, IProgressInfo, ISurvey, ISurveyData, ISurveyImpl, ITextProcessor, ITitleOwner, IElementUIState, ISurveyTitleSettings, ISurveyElementLifecycle, ISurveyCssCallbacks, ISurveySingleInput } from "./base-interfaces";
import { SurveyError } from "./survey-error";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { ActionContainer } from "./actions/container";
import { PanelModel } from "./panel";
import { IValueGetterContext } from "./conditions/conditionProcessValue";
import { ItemValue } from "./itemvalue";
/**
 * A base class for the [`SurveyElement`](https://surveyjs.io/form-library/documentation/surveyelement) and [`SurveyModel`](https://surveyjs.io/form-library/documentation/surveymodel) classes.
 */
export declare abstract class SurveyElementCore extends Base implements ILocalizableOwner {
    constructor();
    protected createLocTitleProperty(): LocalizableString;
    getAllowLineBreaks(name: string): boolean;
    /**
     * A title for the survey element. If `title` is undefined, the `name` property value is displayed instead.
     *
     * Empty pages and panels do not display their titles or names.
     *
     * @see [Configure Question Titles](https://surveyjs.io/form-library/documentation/design-survey-question-titles)
    */
    get title(): string;
    set title(val: string);
    get locTitle(): LocalizableString;
    get locRenderedTitle(): LocalizableString;
    protected getDefaultTitleValue(): string;
    protected setTitleValue(val: string): void;
    /**
     * Returns `true` if the survey element has a description.
     * @see description
    */
    get hasDescription(): boolean;
    set hasDescription(val: boolean);
    protected calcDescriptionVisibility(): boolean;
    protected resetDescriptionVisibility(): void;
    /**
     * Explanatory text displayed under the title.
     * @see hasDescription
     */
    description: string;
    get locDescription(): LocalizableString;
    get titleTagName(): string;
    protected getDefaultTitleTagName(): string;
    get hasTitle(): boolean;
    get hasTitleActions(): boolean;
    get hasTitleEvents(): boolean;
    getTitleToolbar(): AdaptiveActionContainer;
    getTitleOwner(): ITitleOwner;
    get isTitleOwner(): boolean;
    get isTitleRenderedAsString(): boolean;
    toggleState(): boolean;
    get cssClasses(): any;
    get cssTitle(): string;
    get ariaTitleId(): string;
    get ariaDescriptionId(): string;
    get titleTabIndex(): number;
    get titleAriaExpanded(): any;
    get titleAriaRole(): any;
    get ariaLabel(): string;
    get titleAriaLabel(): string | null;
    protected getIsTitleRenderedAsString(): boolean;
    abstract getLocale(): string;
    abstract getMarkdownHtml(text: string, name: string, item?: any): string;
    abstract getRenderer(name: string): string;
    abstract getRendererContext(locStr: LocalizableString): any;
    abstract getProcessedText(text: string, context?: any): string;
}
/**
 * A base class for all survey elements.
 */
export declare class SurveyElement<E = any> extends SurveyElementCore implements ISurveyElement {
    stateChangedCallback: () => void;
    static getProgressInfoByElements(children: Array<SurveyElement>, isRequired: boolean): IProgressInfo;
    private surveyImplValue;
    private surveyDataValue;
    private surveyValue;
    private textProcessorValue;
    private selectedElementInDesignValue;
    readOnlyChangedCallback: () => void;
    private static IsNeedScrollIntoView;
    static ScrollIntoView(el: Element, scrollIntoViewOptions?: ScrollIntoViewOptions, doneCallback?: () => void): void;
    static ScrollElementToTop(element: Element, scrollIfVisible?: boolean, scrollIntoViewOptions?: ScrollIntoViewOptions, doneCallback?: () => void): boolean;
    static ScrollElementToViewCore(el: Element, checkLeft: boolean, scrollIfVisible?: boolean, scrollIntoViewOptions?: ScrollIntoViewOptions, doneCallback?: () => void): boolean;
    static GetFirstNonTextElement(elements: any, removeSpaces?: boolean): any;
    static FocusElement(elementId: string, isTimeOut?: boolean, containerEl?: HTMLElement): boolean;
    private static focusElementCore;
    get effectiveColSpan(): number;
    /**
     * Specifies how many columns this survey element spans in the grid layout. Applies only if you set the `SurveyModel`'s [`gridLayoutEnabled`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#gridLayoutEnabled) property to `true` and define the [`gridLayoutColumns`](https://surveyjs.io/form-library/documentation/api-reference/page-model#gridLayoutColumns) array for the parent page or panel.
     *
     * Default value: 1
     */
    colSpan: number;
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected isPropertyStoredInHash(name: string): boolean;
    protected getSkeletonComponentNameCore(): string;
    protected canUpdateValueOnVisibleChanged(): boolean;
    private parentQuestionValue;
    /**
     * A Dynamic Panel, Dynamic Matrix, or Dropdown Matrix that includes the current question.
     *
     * This property is `null` for standalone questions.
     */
    get parentQuestion(): E;
    setParentQuestion(val: E): void;
    protected onParentQuestionChanged(): void;
    getPanelInDesignMode(): PanelModel;
    updateElementVisibility(): void;
    get skeletonComponentName(): string;
    /**
     * Gets and sets the survey element's expand state.
     *
     * Possible values:
     *
     * - `"default"` (default) - The survey element is displayed in full and cannot be collapsed in the UI.
     * - `"expanded"` - The survey element is displayed in full and can be collapsed in the UI.
     * - `"collapsed"` - The survey element displays only `title` and `description` and can be expanded in the UI.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/set-properties-on-multiple-questions-using-panel/ (linkStyle))
     * @hidefor PageModel
     * @see toggleState
     * @see collapse
     * @see expand
     * @see isCollapsed
     * @see isExpanded
     */
    get state(): string;
    set state(val: string);
    protected notifyStateChanged(prevState: string): void;
    /**
     * Returns `true` if the survey element is collapsed.
     * @hidefor PageModel
     * @see state
     * @see toggleState
     * @see collapse
     * @see expand
     * @see isExpanded
     */
    get isCollapsed(): boolean;
    protected get isSingleInputMode(): boolean;
    /**
     * Returns `true` if the survey element is expanded.
     * @hidefor PageModel
     * @see state
     * @see toggleState
     * @see collapse
     * @see expand
     * @see isCollapsed
     */
    get isExpanded(): boolean;
    /**
     * Collapses the survey element.
     *
     * In collapsed state, the element displays only `title` and `description`.
     * @hidefor PageModel
     * @see title
     * @see description
     * @see state
     * @see toggleState
     * @see expand
     * @see isCollapsed
     * @see isExpanded
     */
    collapse(): void;
    /**
     * Expands the survey element.
     * @see state
     * @see toggleState
     * @see collapse
     * @see isCollapsed
     * @see isExpanded
     */
    expand(): void;
    /**
     * Toggles the survey element's `state` between collapsed and expanded.
     * @hidefor PageModel
     * @see state
     * @see collapse
     * @see expand
     * @see isCollapsed
     * @see isExpanded
     */
    toggleState(): boolean;
    get hasStateButton(): boolean;
    get uiState(): IElementUIState;
    set uiState(data: IElementUIState);
    protected getUIState(): IElementUIState;
    protected setUIState(data: IElementUIState): void;
    get shortcutText(): string;
    private titleToolbarValue;
    getTitleToolbar(): AdaptiveActionContainer;
    protected createActionContainer(allowAdaptiveActions?: boolean): ActionContainer;
    get titleActions(): Array<any>;
    private isTitleActionRequested;
    getTitleActions(): Array<any>;
    protected getDefaultTitleActions(): Array<IAction>;
    private updateTitleActions;
    locStrsChanged(): void;
    get hasTitleActions(): boolean;
    get hasTitleEvents(): boolean;
    get titleTabIndex(): number;
    get titleAriaExpanded(): any;
    get titleAriaRole(): any;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    getValueGetterContext(): IValueGetterContext;
    protected canSkipExpressionByKeys(runner: any, keys: any, vars?: string[]): boolean;
    protected createTextProcessor(): ITextProcessor;
    protected canRunConditions(): boolean;
    getDataFilteredProperties(): any;
    protected get surveyImpl(): ISurveyImpl;
    __setData(data: ISurveyData): void;
    get data(): ISurveyData;
    /**
     * Returns the survey object.
     */
    get survey(): ISurvey;
    get titleSettings(): ISurveyTitleSettings;
    get lifecycleCallbacks(): ISurveyElementLifecycle;
    get cssCallbacks(): ISurveyCssCallbacks;
    get singleInput(): ISurveySingleInput;
    getSurvey(live?: boolean): ISurvey;
    protected setSurveyCore(value: ISurvey): void;
    get skeletonHeight(): string;
    isContentElement: boolean;
    isEditableTemplateElement: boolean;
    isInteractiveDesignElement: boolean;
    protected get isInternal(): boolean;
    get areInvisibleElementsShowing(): boolean;
    get isVisible(): boolean;
    /**
     * Returns `true` if the survey element or its parent element is read-only.
     *
     * If you want to switch a survey element to the read-only state based on a condition, specify the [`enableIf`](https://surveyjs.io/form-library/documentation/question#enableIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see readOnly
     */
    get isReadOnly(): boolean;
    /**
     * Makes the survey element read-only.
     *
     * If you want to switch a survey element to the read-only state based on a condition, specify the [`enableIf`](https://surveyjs.io/form-library/documentation/question#enableIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see isReadOnly
     */
    get readOnly(): boolean;
    set readOnly(val: boolean);
    protected onReadOnlyChanged(): void;
    private get css();
    get cssClassesValue(): any;
    private isCalculatingCssClasses;
    private createCssClassesValue;
    protected onCalcCssClasses(classes: any): void;
    /**
     * Returns an object in which keys are UI elements and values are CSS classes applied to them.
     *
     * Use the following events of the [`SurveyModel`](https://surveyjs.io/form-library/documentation/surveymodel) object to override CSS classes:
     *
     * - [`onUpdateQuestionCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdateQuestionCssClasses)
     * - [`onUpdatePanelCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdatePanelCssClasses)
     * - [`onUpdatePageCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdatePageCssClasses)
     * - [`onUpdateChoiceItemCss`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onUpdateChoiceItemCss)
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-survey-with-css/ (linkStyle))
     */
    get cssClasses(): any;
    get cssTitleNumber(): any;
    get cssRequiredMark(): any;
    getCssTitleExpandableSvg(): string;
    protected calcCssClasses(css: any): any;
    protected updateElementCssCore(cssClasses: any): void;
    get cssError(): string;
    updateElementCss(reNew?: boolean): void;
    protected clearCssClasses(): void;
    protected getIsLoadingFromJson(): boolean;
    /**
     * A survey element identifier.
     *
     * > Question names must be unique.
     */
    get name(): string;
    set name(val: string);
    protected getValidName(name: string): string;
    protected onNameChanged(oldValue: string): void;
    protected updateBindingValue(valueName: string, value: any): void;
    /**
     * Validation errors. Call the `validate()` method to validate survey element data.
     * @see validate
     */
    get errors(): Array<SurveyError>;
    set errors(val: Array<SurveyError>);
    get renderedErrors(): Array<SurveyError>;
    set renderedErrors(val: Array<SurveyError>);
    calcRenderedErrors(): Array<SurveyError>;
    get currentNotificationType(): string;
    private calcCurrentNotificationType;
    hasVisibleErrors: boolean;
    protected updateVisibleErrors(): void;
    /**
     * Returns `true` if the survey element or its child elements have validation errors.
     *
     * This property contains the result of the most recent validation. This result may be outdated. Call the `validate` method to get an up-to-date value.
     * @see errors
     */
    get containsErrors(): boolean;
    updateContainsErrors(): void;
    protected getContainsErrors(): boolean;
    get selectedElementInDesign(): SurveyElement;
    set selectedElementInDesign(val: SurveyElement);
    updateCustomWidgets(): void;
    onSurveyLoad(): void;
    private wasRenderedValue;
    get wasRendered(): boolean;
    protected resetWasRendered(): void;
    onFirstRendering(): void;
    protected onFirstRenderingCore(): void;
    endLoadingFromJson(): void;
    setVisibleIndex(index: number): number;
    protected getPageVisibleIndex(): number;
    protected getStartIndex(): string;
    delete(doDispose: boolean): void;
    locOwner: ILocalizableOwner;
    /**
     * Returns the survey's [locale](https://surveyjs.io/form-library/documentation/surveymodel#locale).
     *
     * If a default locale is used, this method returns an empty string. To get the applied locale in this case, use the following code:
     *
     * ```js
     * import { surveyLocalization } from 'survey-core';
     * const defaultLocale = surveyLocalization.defaultLocale;
     * ```
     *
     * @see [Localization & Globalization](https://surveyjs.io/form-library/documentation/localization)
     */
    getLocale(): string;
    getMarkdownHtml(text: string, name: string, item?: any): string;
    getRenderer(name: string, item?: ItemValue): string;
    getRendererContext(locStr: LocalizableString, item?: ItemValue): any;
    getProcessedText(text: string, context?: any): string;
    protected getUseDisplayValuesInDynamicTexts(): boolean;
    protected removeSelfFromList(list: Array<any>): void;
    protected get textProcessor(): ITextProcessor;
    protected getProcessedHtml(html: string): string;
    protected onSetData(): void;
    get parent(): IPanel;
    set parent(val: IPanel);
    protected getPage(parent: IPanel): IPage;
    protected moveToBase(parent: IPanel, container: IPanel, insertBefore?: any): boolean;
    protected setPage(parent: IPanel, newPage: IPage): void;
    protected getSearchableLocKeys(keys: Array<string>): void;
    get hasParent(): boolean;
    isSingleInRow: boolean;
    private shouldAddRunnerStyles;
    protected get isCompact(): boolean;
    isInternalNested: boolean;
    private canHaveFrameStyles;
    protected getHasFrameV2(): boolean;
    protected getIsNested(): boolean;
    protected getCssRoot(cssClasses: {
        [index: string]: string;
    }): string;
    /**
     * Sets survey element width in CSS values.
     *
     * Default value: ""
     * @see minWidth
     * @see maxWidth
    */
    width: string;
    /**
     * Gets or sets minimum survey element width in CSS values.
     *
     * Default value: "300px" (taken from [`settings.minWidth`](https://surveyjs.io/form-library/documentation/settings#minWidth))
     * @see maxWidth
     * @see renderWidth
     * @see width
     */
    minWidth: string;
    /**
     * Gets or sets maximum survey element width in CSS values.
     *
     * Default value: "100%" (taken from [`settings.maxWidth`](https://surveyjs.io/form-library/documentation/settings#maxWidth))
     * @see minWidth
     * @see renderWidth
     * @see width
     */
    maxWidth: string;
    /**
     * Returns a calculated width of the rendered survey element in CSS values.
     * @see width
     * @see minWidth
     * @see maxWidth
     */
    renderWidth: string;
    /**
     * Increases or decreases an indent of survey element content from the left edge. Accepts positive integer values and 0.
     */
    indent: number;
    rightIndent: number;
    getRootStyle(): object;
    get paddingLeft(): string;
    protected calcPaddingLeft(): string;
    get paddingRight(): string;
    set paddingRight(val: string);
    protected calcPaddingRight(): string;
    protected resetIndents(): void;
    allowRootStyle: boolean;
    get rootStyle(): any;
    set rootStyle(val: any);
    updateRootStyle(): void;
    private setRootStyle;
    protected calcRootStyle(): any;
    private isContainsSelection;
    get clickTitleFunction(): any;
    protected needClickTitleFunction(): boolean;
    protected processTitleClick(): void;
    get hasAdditionalTitleToolbar(): boolean;
    get additionalTitleToolbar(): ActionContainer;
    protected getAdditionalTitleToolbar(): ActionContainer | null;
    protected getCssTitle(cssClasses: any): string;
    get isDisabledStyle(): boolean;
    get isReadOnlyStyle(): boolean;
    protected getIsDisableAndReadOnlyStyles(itemReadOnly: boolean): Array<boolean>;
    get isPreviewStyle(): boolean;
    localeChanged(): void;
    private wrapperElement?;
    setWrapperElement(element?: HTMLElement): void;
    getWrapperElement(): HTMLElement;
    private _renderedIsExpanded;
    private _isAnimatingCollapseExpand;
    private set isAnimatingCollapseExpand(value);
    private get isAnimatingCollapseExpand();
    protected notifyElementContentVisibilityChanged(): void;
    protected onElementExpanded(elementIsRendered: boolean): void;
    protected onElementCollapsed(): void;
    private getExpandCollapseAnimationOptions;
    private get isExpandCollapseAnimationEnabled();
    private animationCollapsed;
    set renderedIsExpanded(val: boolean);
    get renderedIsExpanded(): boolean;
    protected getIsAnimationAllowed(): boolean;
    onAfterRenderElement: EventBase<SurveyElement<E>, any>;
    afterRenderCore(element: HTMLElement): void;
    dispose(): void;
    get randomSeed(): number;
    randomSeedChanged(): void;
    ensureRowsVisibility(): void;
}
export declare class RenderingCompletedAwaiter {
    private _elements;
    private _renderedHandler;
    constructor(_elements: Array<SurveyElement>, _renderedHandler: () => void, waitingTimeout?: number);
    private _elementsToRenderCount;
    private _elementsToRenderTimer;
    private _elementRenderedHandler;
    private stopWaitingForElementsRendering;
    private visibleElementsRendered;
    dispose(): void;
}
