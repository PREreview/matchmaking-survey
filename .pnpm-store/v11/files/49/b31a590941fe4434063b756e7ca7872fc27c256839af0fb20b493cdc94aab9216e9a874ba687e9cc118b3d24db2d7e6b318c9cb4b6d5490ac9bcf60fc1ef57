import { QuestionCheckboxModel } from "./question_checkbox";
import { DropdownMultiSelectListModel } from "./dropdownMultiSelectListModel";
import { EventBase } from "./event";
import { ItemValue } from "./itemvalue";
declare const QuestionTagboxModel_base: typeof QuestionCheckboxModel & (new (...args: any[]) => import("./question_dropdown_mixin").IQuestionDropdownMixin);
/**
 * A class that describes the Multi-Select Dropdown (Tag Box) question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/how-to-create-multiselect-tag-box/ (linkStyle))
 */
export declare class QuestionTagboxModel extends QuestionTagboxModel_base {
    private itemDisplayNameMap;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected calculateReadOnlyText(): string;
    protected getOtherItemDisplayValue(val?: any, isReadOnly?: boolean): string | undefined;
    supportElementsInChoice(): boolean;
    locStrsChanged(): void;
    protected getDefaultItemComponent(): string;
    get dropdownListModel(): DropdownMultiSelectListModel;
    set dropdownListModel(val: DropdownMultiSelectListModel);
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
     *>  Custom choices will only be stored temporarily for the duration of the current browser session. If you want to save them in a data storage, handle the [`onCreateCustomChoiceItem`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onCreateCustomChoiceItem) event.
     */
    allowCustomChoices: boolean;
    createCustomChoiceText: string;
    /**
     * Specifies whether to display a button that clears the selected value.
     */
    allowClear: boolean;
    /**
     * Specifies whether users can enter a value into the input field to filter the drop-down list.
     */
    searchEnabled: boolean;
    /**
     * Specifies whether to remove selected items from the drop-down list.
     */
    hideSelectedItems: boolean;
    /**
     * Enables lazy loading. If you set this property to `true`, you should implement the Survey's [`onChoicesLazyLoad`](https://surveyjs.io/form-library/documentation/surveymodel#onChoicesLazyLoad) event handler.
     * @see choicesLazyLoadPageSize
     * @see SurveyModel.onChoicesLazyLoad
     */
    choicesLazyLoadEnabled: boolean;
    /**
     * Specifies the number of choice items to load at a time when choices are loaded on demand.
     * @see choicesLazyLoadEnabled
     * @see SurveyModel.onChoicesLazyLoad
     */
    choicesLazyLoadPageSize: number;
    /**
     * Specifies whether to close the drop-down menu after a user selects a value.
     */
    closeOnSelect: number;
    textWrapEnabled: boolean;
    /**
     * A text displayed in the input field when it doesn't have a value.
     */
    placeholder: string;
    getType(): string;
    supportMultipleComment(item: ItemValue): boolean;
    get a11yInputAriaRole(): string | null;
    getControlClass(): string;
    protected updateCssClasses(res: any, css: any): void;
    onOpened: EventBase<QuestionTagboxModel>;
    protected validateItemValues(itemValues: Array<ItemValue>): Array<ItemValue>;
    updateItemDisplayNameMap(): void;
    protected updateCustomChoices(value: any, items: Array<ItemValue>): void;
    protected getFirstInputElementId(): string;
    getInputId(): string;
    protected allElementsSelected(): boolean;
    updateSelectAllItemText(isAllSelected: boolean): void;
    private selectAllTextValue;
    private deselectAllTextValue;
    private deselectAllText;
}
export {};
