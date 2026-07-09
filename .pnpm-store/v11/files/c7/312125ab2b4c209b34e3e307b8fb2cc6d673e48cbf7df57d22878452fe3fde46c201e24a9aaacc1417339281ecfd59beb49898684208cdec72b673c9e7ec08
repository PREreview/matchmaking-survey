import { JsonObjectProperty } from "./jsonobject";
import { SurveyError } from "./survey-error";
import { ISurveyImpl, ISurvey, ISurveyData, IPlainDataOptions, IElement, IPanel, ISurveyChoiceCallbacks } from "./base-interfaces";
import { IQuestionPlainData, Question } from "./question";
import { ItemValue } from "./itemvalue";
import { ChoicesRestful } from "./choicesRestful";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { HashTable } from "./helpers";
import { TextAreaModel } from "./utils/text-area";
import { ValidationContext } from "./question";
import { PanelModel } from "./panel";
import { Base, IExpressionValidationOptions, IExpressionValidationResult } from "./base";
import { EventBase } from "./event";
export interface IChoiceOwner extends ILocalizableOwner {
    supportElementsInChoice(): boolean;
    getSurvey(): ISurvey;
    isItemSelected(item: ItemValue): boolean;
    isDesignMode: boolean;
    parent: IPanel;
}
export declare class ChoiceItem extends ItemValue {
    private panelValue;
    protected getBaseType(): string;
    protected getAllChildren(): Base[];
    get choiceOwner(): IChoiceOwner;
    get supportElements(): boolean;
    showCommentArea: boolean;
    isCommentRequired: boolean;
    commentPlaceholder: string;
    get isCommentShowing(): boolean;
    setIsCommentShowing(val: boolean): void;
    get supportComment(): boolean;
    protected isPropertyStoredInHash(name: string): boolean;
    protected mergeLocalizationWithInnerObjects(src: Base, locales?: Array<string>): void;
    protected canAddPpropertyToJSON(prop: JsonObjectProperty): boolean;
    protected onLocOwnerChanged(): void;
    private onExpandPanelAtDesignValue;
    get onExpandPanelAtDesign(): EventBase<ChoiceItem, any>;
    get isPanelShowing(): boolean;
    get hasElements(): boolean;
    get panel(): PanelModel;
    get isPanelCreated(): boolean;
    get elements(): Array<IElement>;
    panelFirstRendering(): void;
    protected createPanel(): PanelModel;
    private setPanelSurvey;
    dispose(): void;
}
/**
 * A base class for multiple-choice question types ([Checkboxes](https://surveyjs.io/form-library/documentation/questioncheckboxmodel), [Dropdown](https://surveyjs.io/form-library/documentation/questiondropdownmodel), [Radio Button Group](https://surveyjs.io/form-library/documentation/questionradiogroupmodel), etc.).
 */
export declare class QuestionSelectBase extends Question implements IChoiceOwner {
    visibleChoicesChangedCallback: () => void;
    loadedChoicesFromServerCallback: () => void;
    renderedChoicesChangedCallback: () => void;
    get choiceCallbacks(): ISurveyChoiceCallbacks;
    private commentAreaModelValues;
    private filteredChoicesValue;
    private otherItemValue;
    private choicesFromUrl;
    private cachedValueForUrlRequests;
    private isChoicesLoaded;
    private enableOnLoadingChoices;
    private noneItemValue;
    private refuseItemValue;
    private dontKnowItemValue;
    private newItemValue;
    private canShowOptionItemCallback;
    private waitingGetChoiceDisplayValueResponse;
    private get waitingChoicesByURL();
    protected selectedItemValues: any;
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    validateExpression(name: string, expression: string, options: IExpressionValidationOptions): IExpressionValidationResult | undefined;
    protected getAllChildren(): Base[];
    dispose(): void;
    supportElementsInChoice(): boolean;
    getPanels(): Array<IPanel>;
    private getVisiblePanels;
    private doForPanels;
    protected collectNestedQuestionsCore(questions: Array<Question>, visibleOnly: boolean, includeNested: boolean, includeItSelf: boolean): void;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    get otherTextAreaModel(): TextAreaModel;
    getCommentTextAreaModel(item: ItemValue): TextAreaModel;
    private getOtherTextAreaOptions;
    private getCommentPlaceholder;
    protected resetDependedQuestion(): void;
    get otherId(): string;
    getItemCommentId(item: ItemValue): string;
    protected getCommentElementsId(): Array<string>;
    protected getItemValueType(): string;
    createItemValue(value: any, text?: string): ChoiceItem;
    private createChoiceItem;
    protected validateElementCore(context: ValidationContext): boolean;
    get isUsingCarryForward(): boolean;
    get carryForwardQuestionType(): string;
    private setCarryForwardQuestionType;
    get isUsingRestful(): boolean;
    updateIsUsingRestful(): void;
    supportGoNextPageError(): boolean;
    isLayoutTypeSupported(layoutType: string): boolean;
    localeChanged(): void;
    locStrsChanged(): void;
    private prevOtherErrorValue;
    private updatePrevOtherErrorValue;
    protected setNewComment(newValue: string): void;
    private isSettingComment;
    get otherValue(): string;
    set otherValue(val: string);
    protected get otherValueCore(): string;
    protected set otherValueCore(val: string);
    /**
     * Returns the "Other" choice item. Use this property to change the item's `value` or `text`.
     * @see showOtherItem
     */
    get otherItem(): ItemValue;
    /**
     * Returns `true` if the "Other" choice item is selected.
     * @see showOtherItem
     */
    get isOtherSelected(): boolean;
    get isNoneSelected(): boolean;
    supportMultipleComment(item: ItemValue): boolean;
    isCommentShowing(item: ItemValue): boolean;
    getCommentValue(item: ItemValue): string;
    setCommentValue(item: ItemValue, newValue: string): void;
    get commentPropertyValue(): string;
    protected getCommentValueCore(item: ItemValue): string;
    protected getCommentValueByItem(item: ItemValue): string;
    protected setCommentValueCore(item: ItemValue, newValue: string): void;
    protected setCommentPropertyValue(item: ItemValue, newValue: string): void;
    protected isOtherItemByValue(item: ItemValue): boolean;
    protected getCommentPropertyValue(item: ItemValue): string;
    /**
     * Specifies whether to display the "None" choice item.
     *
     * When users select the "None" item in multi-select questions, all other items become unselected.
     *
     * [Dropdown Demo](https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/ (linkStyle))
     *
     * [Checkboxes Demo](https://surveyjs.io/form-library/examples/create-checkboxes-question-in-javascript/ (linkStyle))
     *
     * [Radio Button Group Demo](https://surveyjs.io/form-library/examples/single-select-radio-button-group/ (linkStyle))
     * @see noneItem
     * @see noneText
     * @see [settings.noneItemValue](https://surveyjs.io/form-library/documentation/api-reference/settings#noneItemValue)
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    showNoneItem: boolean;
    get hasNone(): boolean;
    set hasNone(val: boolean);
    /**
     * Returns the "None" choice item. Use this property to change the item's `value` or `text`.
     * @see showNoneItem
     */
    get noneItem(): ItemValue;
    /**
     * Gets or sets a caption for the "None" choice item.
     * @see showNoneItem
     */
    get noneText(): string;
    set noneText(val: string);
    get locNoneText(): LocalizableString;
    /**
     * Specifies whether to display the "Refuse to answer" choice item.
     *
     * When users select the "Refuse to answer" item in multi-select questions, all other items become unselected.
     * @see refuseItem
     * @see refuseItemText
     * @see [settings.refuseItemValue](https://surveyjs.io/form-library/documentation/api-reference/settings#refuseItemValue)
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    showRefuseItem: boolean;
    /**
     * Returns the "Refuse to answer" choice item. Use this property to change the item's `value` or `text`.
     * @see showRefuseItem
     */
    get refuseItem(): ItemValue;
    /**
     * Gets or sets a caption for the "Refuse to answer" choice item.
     * @see showRefuseItem
     */
    get refuseText(): string;
    set refuseText(val: string);
    get locRefuseText(): LocalizableString;
    /**
     * Specifies whether to display the "Don't know" choice item.
     *
     * When users select the "Don't know" item in multi-select questions, all other items become unselected.
     * @see dontKnowItem
     * @see dontKnowItemText
     * @see [settings.dontKnowItemValue](https://surveyjs.io/form-library/documentation/api-reference/settings#dontKnowItemValue)
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    showDontKnowItem: boolean;
    /**
     * Returns the "Don't know" choice item. Use this property to change the item's `value` or `text`.
     * @see showDontKnowItem
     */
    get dontKnowItem(): ItemValue;
    /**
     * Gets or sets a caption for the "Don't know" choice item.
     * @see showDontKnowItem
     */
    get dontKnowText(): string;
    set dontKnowText(val: string);
    get locDontKnowText(): LocalizableString;
    private createBuiltInNoneItem;
    protected createBuiltInItem(defaultValue: any, name: string, locName: string, callback?: (item: ChoiceItem) => void): ChoiceItem;
    /**
     * A Boolean expression that is evaluated against each choice item. If the expression evaluates to `false`, the choice item becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{item}` placeholder to reference the current choice item in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see visibleIf
     * @see choicesEnableIf
     */
    choicesVisibleIf: string;
    /**
     * A Boolean expression that is evaluated against each choice item. If the expression evaluates to `false`, the choice item becomes read-only.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{item}` placeholder to reference the current choice item in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see enableIf
     * @see choicesVisibleIf
     */
    choicesEnableIf: string;
    surveyChoiceItemVisibilityChange(): void;
    addUsedLocales(locales: Array<string>): void;
    protected runConditionCore(properties: HashTable<any>): void;
    protected isTextValue(): boolean;
    protected setDefaultIntoValue(val: any): void;
    protected setDefaultUnknownValue(val: any): void;
    protected valueToData(val: any): any;
    protected getCorrectAnswerValue(): any;
    protected isCorrectAnswerValueExists(val: any): boolean;
    private updateCorrectAnswerOnChoicesChanged;
    protected getCorrectAnswerOnChoicesChanged(val: any): any;
    protected correctAnswerValueExistsInChoices(val: any): boolean;
    protected filterItems(): boolean;
    protected runItemsCondition(properties: HashTable<any>): boolean;
    protected runItemsEnableCondition(properties: HashTable<any>): any;
    protected onAfterRunItemsEnableCondition(): void;
    protected onEnableItemCallBack(item: ItemValue): boolean;
    protected onSelectedItemValuesChangedHandler(newValue: any): void;
    protected getItemIfChoicesNotContainThisValue(value: any, text?: string): any;
    protected getSingleSelectedItem(): ItemValue;
    protected onGetSingleSelectedItem(selectedItemByValue: ItemValue): void;
    protected getMultipleSelectedItems(): Array<ItemValue>;
    private getChoicesCondition;
    private canSurveyChangeItemVisibility;
    private changeItemVisibility;
    private runConditionsForItems;
    private isCarryForwardChanged;
    protected isOtherValue(val: any): boolean;
    protected getIsItemValue(val: any, item: ItemValue): boolean;
    get validatedValue(): any;
    protected createRestful(): ChoicesRestful;
    autoOtherMode: boolean;
    protected getQuestionComment(): string;
    protected selectOtherValueFromComment(val: boolean): void;
    private onUpdateCommentOnAutoOtherMode;
    private getValueOnSettingOther;
    protected onClearValue(): void;
    get renderedValue(): any;
    set renderedValue(val: any);
    private setRenderedValue;
    protected onRenderedValueChagned(updateComment: boolean): void;
    private updateItemIsCommentShowing;
    selectItem(item: ItemValue): void;
    protected onItemSelected(item: ItemValue): void;
    protected onItemDeselected(item: ItemValue): void;
    private makeCommentEmpty;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean, updateComment?: boolean): void;
    protected setValueCore(newValue: any): void;
    protected setNewValue(newValue: any): void;
    protected valueFromData(val: any): any;
    private updateChoicesPanels;
    protected getChoiceValue(choice: ItemValue, val: any, objOnComment: boolean): any;
    getItemByValue(val: any, choices?: Array<ItemValue>): ItemValue;
    protected rendredValueFromData(val: any): any;
    private getValueFromValueWithComment;
    getFilteredValue(isUnwrapped?: boolean): any;
    protected rendredValueToData(val: any): any;
    protected renderedValueFromDataCore(val: any): any;
    protected renderedValueToDataCore(val: any): any;
    protected needConvertRenderedOtherToDataValue(): boolean;
    protected getIsQuestionReady(): boolean;
    protected updateSelectedItemValues(): void;
    protected onSelectedItemValuesUpdated(): void;
    private setCustomValuesIntoItems;
    protected hasUnknownValue(val: any, includeOther?: boolean, isFilteredChoices?: boolean, checkEmptyValue?: boolean): boolean;
    protected hasUnknownValueItem(val: any, includeOther?: boolean, isFilteredChoices?: boolean, checkEmptyValue?: boolean): boolean;
    protected isValueDisabled(val: any): boolean;
    endLoadingFromJson(): void;
    clearIncorrectValuesCallback: () => void;
    /**
     * An array of choice items that were added by a user. Applies only if the [`allowCustomChoices`](#allowCustomChoices) is set to `true` for this question.
     *
     * > Custom choices will only be stored temporarily for the duration of the current browser session. If you want to save them in a database or another data storage, handle the [`onCreateCustomChoiceItem`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onCreateCustomChoiceItem) event.
     * @hidefor QuestionImagePickerModel, QuestionRadiogroupModel, QuestionRankingModel, QuestionCheckboxModel
     */
    get customChoices(): Array<any>;
    set customChoices(val: Array<any>);
    /**
     * Configures access to a RESTful service that returns choice items. Refer to the [`ChoicesRestful`](https://surveyjs.io/form-library/documentation/choicesrestful) class description for more information. You can also specify additional application-wide settings using the [`settings.web`](https://surveyjs.io/form-library/documentation/api-reference/settings#web) object.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/dropdown-menu-load-data-from-restful-service/ (linkStyle))
     * @see choices
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    get choicesByUrl(): ChoicesRestful;
    set choicesByUrl(val: ChoicesRestful);
    private get choicesByUrlValue();
    get isChoicesUrlEmpty(): boolean;
    private createChoicesByUrl;
    /**
     * Gets or sets choice items. This property accepts an array of objects with the following structure:
     *
     * ```js
     * {
     *   "value": any, // A unique value to be saved in the survey results.
     *   "text": string, // A display text. This property supports Markdown. When `text` is undefined, `value` is used.
     *   "imageLink": string // A link to the image or video that represents this choice value. Applies only to Image Picker questions.
     *   "customProperty": any // Any property that you find useful.
     * }
     * ```
     *
     * To enable Markdown support for the `text` property, implement Markdown-to-HTML conversion in the [`onTextMarkdown`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onTextMarkdown) event handler. For an example, refer to the following demo: [Convert Markdown to HTML with markdown-it](https://surveyjs.io/form-library/examples/edit-survey-questions-markdown/).
     *
     * If you add custom properties, refer to the following help topic to learn how to serialize them into JSON: [Add Custom Properties to Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid#add-custom-properties-to-the-property-grid).
     *
     * If you need to specify only the `value` property, you can set the `choices` property to an array of primitive values, for example, `[ "item1", "item2", "item3" ]`. These values are both saved in survey results and used as display text.
     *
     * [Dropdown Demo](https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/ (linkStyle))
     *
     * [Checkboxes Demo](https://surveyjs.io/form-library/examples/create-checkboxes-question-in-javascript/ (linkStyle))
     *
     * [Radio Button Group Demo](https://surveyjs.io/form-library/examples/single-select-radio-button-group/ (linkStyle))
     *
     * [Ranking Demo](https://surveyjs.io/form-library/examples/add-ranking-question-to-form/ (linkStyle))
     *
     * [Image Picker Demo](https://surveyjs.io/form-library/examples/image-picker-question/ (linkStyle))
     *
     * [Conditionally Display Choice Options](https://surveyjs.io/form-library/examples/how-to-conditionally-display-choice-options/ (linkStyle))
     * @see choicesByUrl
     * @see choicesFromQuestion
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    choices: Array<any>;
    /**
     * Copies choice items from a specified question. Accepts a question name.
     *
     * If you specify this property, the [`choices`](#choices), [`choicesVisibleIf`](#choicesVisibleIf), [`choicesEnableIf`](#choicesEnableIf), and [`choicesOrder`](#choicesEnableIf) properties do not apply because their values are copied.
     *
     * In addition, you can specify the [`choicesFromQuestionMode`](#choicesFromQuestionMode) property if you do not want to copy all choice items.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/carry-forward-responses/ (linkStyle))
     */
    get choicesFromQuestion(): string;
    set choicesFromQuestion(val: string);
    private isLockVisibleChoices;
    /**
     * Specifies which choice items to copy from another question. Applies only when the [`choicesFromQuestion`](#choicesFromQuestion) property is specified.
     *
     * Possible values:
     *
     * - `"all"` (default) - Copies all choice items.
     * - `"selected"` - Copies only selected choice items.
     * - `"unselected"` - Copies only unselected choice items.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/carry-forward-responses/ (linkStyle))
     *
     * > Use the [`visibleChoices`](#visibleChoices) property to access copied choice items in code.
     */
    choicesFromQuestionMode: string;
    /**
     * Specifies which matrix column or dynamic panel question supplies choice values. Use this property to construct choice items based on cell values in Dynamic Matrix and question values in Dynamic Panel.
     *
     * Each choice item consists of a value saved in survey results and a text displayed in the UI. To construct a choice item, assign the `name` of a Dynamic Matrix or Dynamic Panel to the [`choicesFromQuestion`](#choicesFromQuestion) property and specify which dynamic panel question or matrix column supplies values and which provides texts. Use the `choiceValuesFromQuestion` and [`choiceTextsFromQuestion`](#choiceTextsFromQuestion) properties for this purpose. If a choice text is empty, a choice value is used as a display text and saved in survey results.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/pipe-answers-from-dynamic-matrix-or-panel/ (linkStyle))
     */
    choiceValuesFromQuestion: string;
    /**
     * Specifies which matrix column or dynamic panel question supplies choice texts. Use this property to construct choice items based on cell values in Dynamic Matrix and question values in Dynamic Panel.
     *
     * Each choice item consists of a value saved in survey results and a text displayed in the UI. To construct a choice item, assign the `name` of a Dynamic Matrix or Dynamic Panel to the [`choicesFromQuestion`](#choicesFromQuestion) property and specify which dynamic panel question or matrix column supplies values and which provides texts. Use the [`choiceValuesFromQuestion`](#choiceValuesFromQuestion) and `choiceTextsFromQuestion` properties for this purpose. If a choice text is empty, a choice value is used as a display text and saved in survey results.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/pipe-answers-from-dynamic-matrix-or-panel/ (linkStyle))
     */
    choiceTextsFromQuestion: string;
    /**
     * Specifies whether to hide the question if no choice items are visible.
     *
     * This property is useful if you show or hide choice items at runtime based on a [condition](https://surveyjs.io/form-library/documentation/questionselectbase#choicesVisibleIf).
     */
    hideIfChoicesEmpty: boolean;
    /**
     * Specifies whether to keep values that cannot be assigned to this question, for example, choices unlisted in the `choices` array.
     *
     * > This property cannot be specified in the survey JSON schema. Use dot notation to specify it.
     * @see clearIncorrectValues
     */
    keepIncorrectValues: boolean;
    storeOthersAsComment: any;
    /**
     * Specifies the sort order of choice items.
     *
     * Possible values:
     *
     * - `"none"` (default) - Preserves the original order of choice items.
     * - `"asc"`- Sorts choice items in ascending order.
     * - `"desc"`- Sorts choice items in ascending order.
     * - `"random"` - Displays choice items in random order.
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    choicesOrder: string;
    /**
     * Gets or sets a caption for the "Other" choice item.
     * @see showOtherItem
     */
    get otherText(): string;
    set otherText(val: string);
    get locOtherText(): LocalizableString;
    /**
     * Displays the "Select All", "None", and "Other" choices on individual rows.
     *
     * [Checkboxes Demo](https://surveyjs.io/form-library/examples/create-checkboxes-question-in-javascript/ (linkStyle))
     *
     * [Radio Button Group Demo](https://surveyjs.io/form-library/examples/single-select-radio-button-group/ (linkStyle))
     * @see showNoneItem
     * @see showOtherItem
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    separateSpecialChoices: boolean;
    /**
     * A placeholder for the comment area. Applies when the `showOtherItem` or `showCommentArea` property is `true`.
     * @see showOtherItem
     * @see showCommentArea
     */
    otherPlaceholder: string;
    get otherPlaceHolder(): string;
    set otherPlaceHolder(newValue: string);
    /**
     * Gets or sets an error message displayed when users select the "Other" choice item but leave the comment area empty.
     * @see showOtherItem
     */
    otherErrorText: string;
    /**
     * An array of visible choice items. Includes the "Select All", "Other", and "None" choice items if they are visible. Items are sorted according to the `choicesOrder` value.
     * @see showNoneItem
     * @see showOtherItem
     * @see choicesOrder
     * @see choices
     * @see enabledChoices
     */
    get visibleChoices(): Array<ChoiceItem>;
    /**
     * An array of choice items with which users can interact. Includes the "Select All", "Other", and "None" choice items if they are not disabled. Items are sorted according to the `choicesOrder` value.
     * @see showNoneItem
     * @see showOtherItem
     * @see choicesOrder
     * @see choices
     * @see visibleChoices
     */
    get enabledChoices(): Array<ItemValue>;
    protected updateVisibleChoices(): void;
    private calcVisibleChoices;
    setCanShowOptionItemCallback(func: (item: ItemValue) => boolean): void;
    get newItem(): ItemValue;
    protected addToVisibleChoices(items: Array<ItemValue>, isAddAll: boolean): void;
    protected addNewItemToVisibleChoices(items: Array<ItemValue>, isAddAll: boolean): void;
    protected addNonChoicesItems(dict: Array<{
        index: number;
        item: ItemValue;
    }>, isAddAll: boolean): void;
    protected addNonChoiceItem(dict: Array<{
        index: number;
        item: ItemValue;
    }>, getItem: () => ItemValue, isAddAll: boolean, showItem: boolean, order: Array<number>): void;
    private canShowOptionItem;
    isItemInList(item: ItemValue): boolean;
    protected get isAddDefaultItems(): boolean;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    protected getDisplayValueCore(keysAsText: boolean, value: any, isReadOnly?: boolean): any;
    protected getDisplayValueEmpty(): string;
    private getChoicesDisplayValue;
    protected getDisplayArrayValue(keysAsText: boolean, value: any, onGetValueCallback?: (index: number) => any, isReadOnly?: boolean): string;
    private getItemDisplayValue;
    protected getOtherItemDisplayValue(val?: any, isReadOnly?: boolean): string | undefined;
    private getFilteredChoices;
    private get activeChoices();
    isMessagePanelVisible: boolean;
    private get isEmptyActiveChoicesInDesign();
    getCarryForwardQuestion(data?: ISurveyData): Question;
    protected getIsReadyDependsOn(): Array<Question>;
    private getQuestionWithChoices;
    private carryForwardQuestion;
    private findCarryForwardQuestion;
    private getQuestionWithChoicesCore;
    private getQuestionWithArrayValue;
    private getChoicesFromArrayQuestion;
    private getValueKeyName;
    private getChoicesFromSelectQuestion;
    private copyChoiceItem;
    protected get hasActiveChoices(): boolean;
    isBuiltInChoice(item: ItemValue): boolean;
    isNoneItem(item: ItemValue): boolean;
    protected getChoices(): Array<ItemValue>;
    /**
     * Specifies whether to display the "Other" choice item.
     *
     * [Dropdown Demo](https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/ (linkStyle))
     *
     * [Checkboxes Demo](https://surveyjs.io/form-library/examples/create-checkboxes-question-in-javascript/ (linkStyle))
     *
     * [Radio Button Group Demo](https://surveyjs.io/form-library/examples/single-select-radio-button-group/ (linkStyle))
     * @see otherText
     * @see otherItem
     * @see otherErrorText
     * @see showCommentArea
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    showOtherItem: boolean;
    get hasOther(): boolean;
    set hasOther(val: boolean);
    get requireUpdateCommentValue(): boolean;
    supportOther(): boolean;
    supportNone(): boolean;
    supportRefuse(): boolean;
    supportDontKnow(): boolean;
    protected isSupportProperty(propName: string): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void;
    private hasEmptyComments;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    protected setSurveyCore(value: ISurvey): void;
    getStoreOthersAsComment(): boolean;
    private checkHasChoicesComments;
    onSurveyLoad(): void;
    protected onFirstRenderingCore(): void;
    onAnyValueChanged(name: string, questionName: string): void;
    updateValueFromSurvey(newValue: any, clearData: boolean): void;
    updateCommentFromSurvey(newValue: any): any;
    private updateValueForPanels;
    protected getCommentFromValue(newValue: any): string;
    protected setOtherValueIntoValue(newValue: any): any;
    private onOtherValueInput;
    private onOtherValueChange;
    private isRunningChoicesValue;
    private runChoicesByUrl;
    private get isRunningChoices();
    private isFirstLoadChoicesFromUrl;
    protected onBeforeSendRequest(): void;
    protected onLoadChoicesFromUrl(array: Array<ItemValue>): void;
    private canAvoidSettChoicesFromUrl;
    private setChoicesFromUrl;
    private createCachedValueForUrlRequests;
    private updateCachedValueForUrlRequests;
    private isUpdatingChoicesDependedQuestions;
    protected updateChoicesDependedQuestions(): void;
    protected updateDependedQuestion(): void;
    onSurveyValueChanged(newValue: any): void;
    protected onVisibleChoicesChanged(): void;
    protected isVisibleCore(): boolean;
    private sortArrayByChoicesOrder;
    private sortArray;
    randomSeedChanged(): void;
    private randomizeArray;
    private get hasChoicesUrl();
    clearIncorrectValues(): void;
    private canClearIncorrectValues;
    protected canAddCustomChoices(): boolean;
    protected hasValueToClearIncorrectValues(): boolean;
    protected clearValueIfInvisibleCore(reason: string): void;
    private clearValuesInVisiblePanels;
    /**
     * Returns `true` if a passed choice item is selected.
     *
     * To obtain a choice item to check, use the `noneItem` or `otherItem` property or the `choices` array.
     * @param item A choice item.
     * @see noneItem
     * @see otherItem
     * @see choices
     */
    isItemSelected(item: ItemValue): boolean;
    protected isItemSelectedCore(item: ItemValue): boolean;
    private clearDisabledValues;
    protected clearIncorrectValuesCore(): void;
    protected canClearValueAnUnknown(val: any): boolean;
    protected clearDisabledValuesCore(): void;
    clearUnusedValues(): void;
    protected isOtherValueUnused(): boolean;
    getColumnClass(): string;
    getItemIndex(item: any): number;
    getItemClass(item: any): string;
    protected getCurrentColCount(): number;
    protected getItemClassCore(item: any, options: any): string;
    getLabelClass(item: ItemValue): string;
    getControlLabelClass(item: ItemValue): string;
    _renderedChoices: Array<ItemValue>;
    onGetRenderedChoicesCallback?: (visibleChoices: Array<ItemValue>) => Array<ItemValue>;
    private updateRenderedChoices;
    private getRenderedChoicesAnimationOptions;
    private renderedChoicesAnimation;
    get renderedChoices(): Array<ItemValue>;
    set renderedChoices(val: Array<ItemValue>);
    private headItemsCount;
    private footItemsCount;
    get headItems(): ItemValue[];
    get footItems(): ItemValue[];
    get dataChoices(): ItemValue[];
    get bodyItems(): ItemValue[];
    get hasHeadItems(): boolean;
    get hasFootItems(): boolean;
    protected get itemFlowDirection(): string;
    get columns(): any[];
    private getColumnsWithColumnItemFlow;
    private getColumnsWithRowItemFlow;
    getItemsColumnKey(itemsColumn: Array<ItemValue>): string;
    get hasColumns(): boolean;
    get rowLayout(): boolean;
    get blockedRow(): boolean;
    choicesLoaded(): void;
    getItemValueWrapperComponentName(item: ItemValue): string;
    getItemValueWrapperComponentData(item: ItemValue): any;
    ariaItemChecked(item: ItemValue): "true" | "false";
    isOtherItem(item: ItemValue): boolean;
    protected isOtherItemByInstance(item: ItemValue): boolean;
    get itemSvgIcon(): string;
    getSelectBaseRootCss(): string;
    protected allowMobileInDesignMode(): boolean;
    getAriaItemLabel(item: ItemValue): string;
    getItemId(item: ItemValue): string;
    getItemEnabled(item: ItemValue): boolean;
    private focusOtherComment;
    protected getDefaultItemComponent(): string;
    /**
     * The name of a component used to render items.
     *
     * [Dropdown Demo](https://surveyjs.io/form-library/examples/dropdown-box-with-custom-items/ (linkStyle))
     *
     * [Ranking Demo](https://surveyjs.io/form-library/examples/ranking-with-custom-items/ (linkStyle))
     *
     * [Checkboxes and Radio Button Group Demo](https://surveyjs.io/form-library/examples/add-custom-items-to-single-and-multi-select-questions/ (linkStyle))
     */
    itemComponent: string;
}
/**
 * A base class for multiple-selection question types that can display choice items in multiple columns ([Checkbox](https://surveyjs.io/form-library/documentation/questioncheckboxmodel), [Radiogroup](https://surveyjs.io/form-library/documentation/questionradiogroupmodel), [Image Picker](https://surveyjs.io/form-library/documentation/questionimagepickermodel)).
 */
export declare class QuestionCheckboxBase extends QuestionSelectBase {
    colCountChangedCallback: () => void;
    /**
     * Gets or sets the number of columns used to arrange choice items.
     *
     * Set this property to 0 if you want to display all items in one line. The default value depends on the available width.
     * @see separateSpecialChoices
     */
    get colCount(): number;
    set colCount(value: number);
    protected onParentChanged(): void;
    protected onParentQuestionChanged(): void;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
}
