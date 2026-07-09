import { ChoiceItem, QuestionSelectBase } from "./question_baseselect";
import { ItemValue } from "./itemvalue";
import { EventBase } from "./event";
import { DropdownListModel } from "./dropdownListModel";
declare const QuestionDropdownModel_base: typeof QuestionSelectBase & (new (...args: any[]) => import("./question_dropdown_mixin").IQuestionDropdownMixin);
/**
 * A class that describes the Dropdown question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-dropdown/ (linkStyle))
 */
export declare class QuestionDropdownModel extends QuestionDropdownModel_base {
    lastSelectedItemValue: ItemValue;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    locStrsChanged(): void;
    private updateInputPlaceholder;
    get showOptionsCaption(): boolean;
    set showOptionsCaption(val: boolean);
    get optionsCaption(): string;
    set optionsCaption(val: string);
    /**
     * A placeholder for the input field.
     */
    placeholder: string;
    getType(): string;
    get isNewA11yStructure(): boolean;
    get a11yQuestionAriaRole(): string | null;
    get a11yInputAriaRole(): string | null;
    /**
     * Returns the selected choice item. If no item is selected, returns `null`.
     */
    get selectedItem(): ChoiceItem;
    protected isOtherValueUnused(): boolean;
    protected onGetSingleSelectedItem(selectedItemByValue: ItemValue): void;
    get isShowingChoiceComment(): boolean;
    supportAutoAdvance(): boolean;
    private minMaxChoices;
    protected getChoices(): Array<ItemValue>;
    /**
     * Use the `choicesMin`, `choicesMax`, and `choicesStep` properties to generate choice items automatically. For example, the configuration below generates three choice items: [10, 20, 30].
     *
     * ```js
     * "choicesMin": 10,
     * "choicesMax": 30
     * "choicesStep": 10
     * ```
     * @see choicesMax
     * @see choicesStep
     */
    choicesMin: number;
    /**
     * Use the `choicesMin`, `choicesMax`, and `choicesStep` properties to generate choice items automatically. For example, the configuration below generates three choice items: [10, 20, 30].
     *
     * ```js
     * "choicesMin": 10,
     * "choicesMax": 30
     * "choicesStep": 10
     * ```
     * @see choicesMin
     * @see choicesStep
     */
    choicesMax: number;
    /**
     * Use the `choicesMin`, `choicesMax`, and `choicesStep` properties to generate choice items automatically. For example, the configuration below generates three choice items: [10, 20, 30].
     *
     * ```js
     * "choicesMin": 10,
     * "choicesMax": 30
     * "choicesStep": 10
     * ```
     *
     * The default value of the `choicesStep` property is 1.
     * @see choicesMin
     * @see choicesMax
     */
    choicesStep: number;
    autocomplete: string;
    /**
     * Specifies whether to display a button that clears the selected value.
     */
    allowClear: boolean;
    /**
     * Specifies whether users can enter a value into the input field to filter the drop-down list.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/ (linkStyle))
     * @see searchMode
     * @see [SurveyModel.onChoicesSearch](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onChoicesSearch)
     */
    searchEnabled: boolean;
    /**
     * Specifies a comparison operation used to filter the drop-down list. Applies only if [`searchEnabled`](#searchEnabled) is `true`.
     *
     * Possible values:
     *
     * - `"contains"` (default)
     * - `"startsWith"`
     * @see [SurveyModel.onChoicesSearch](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onChoicesSearch)
     */
    searchMode: "contains" | "startsWith";
    /**
     * Specifies whether users can add their own choices if the desired option isn't available in the dropdown.
     *
     * Default value: `false`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/dropdown-custom-choice-options/ (linkStyle))
     *
     * > Custom choices will only be stored temporarily for the duration of the current browser session. If you want to save them in a database or another data storage, handle the [`onCreateCustomChoiceItem`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onCreateCustomChoiceItem) event.
     */
    allowCustomChoices: boolean;
    /**
     * Specifies the text displayed for the command that creates a custom choice. Applies only when [`allowCustomChoices`](#allowCustomChoices) is `true`.
     *
     * Default value: `"Create \"{0}\" item..."`
     */
    createCustomChoiceText: string;
    /**
     * Specifies whether to wrap long texts in choice options onto a new line.
     *
     * Default value: `true`
     *
     * Disable this property if you want the texts to be truncated with ellipsis.
     */
    textWrapEnabled: boolean;
    inputHasValue: boolean;
    /**
     * Enables lazy loading. If you set this property to `true`, you should implement the Survey's [`onChoicesLazyLoad`](https://surveyjs.io/form-library/documentation/surveymodel#onChoicesLazyLoad) event handler.
     * @see choicesLazyLoadPageSize
     * @see SurveyModel.onChoicesLazyLoad
     */
    choicesLazyLoadEnabled: boolean;
    /**
     * Specifies the number of choice items to load at a time when choices are loaded on demand.
     *
     * Default value: 25
     *
     * > This property does not accept values below 25 to prevent the server from being flooded with requests.
     * @see choicesLazyLoadEnabled
     * @see SurveyModel.onChoicesLazyLoad
     */
    choicesLazyLoadPageSize: number;
    getControlClass(): string;
    protected updateCssClasses(res: any, css: any): void;
    suggestedItem: ItemValue;
    get selectedItemLocText(): import("./localizablestring").LocalizableString;
    get inputFieldComponentName(): string;
    get showSelectedItemLocText(): boolean;
    get showInputFieldComponent(): boolean;
    protected calculateReadOnlyText(): string;
    private get useDropdownList();
    get dropdownListModel(): DropdownListModel;
    set dropdownListModel(val: DropdownListModel);
    onOpened: EventBase<QuestionDropdownModel>;
    protected onSelectedItemValuesChangedHandler(newValue: any): void;
    protected updateCustomChoices(value: any, items: Array<ItemValue>): void;
    protected getFirstInputElementId(): string;
    getInputId(): string;
    private getInputIdCore;
    protected onClearValue(): void;
    afterRenderCore(el: any): void;
    onClick(e: any): void;
    onKeyUp(event: any): void;
}
export {};
