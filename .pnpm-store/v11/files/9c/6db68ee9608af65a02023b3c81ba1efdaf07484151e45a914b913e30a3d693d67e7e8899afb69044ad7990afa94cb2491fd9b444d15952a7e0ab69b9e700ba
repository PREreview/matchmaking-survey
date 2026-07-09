import { ChoiceItem, QuestionCheckboxBase } from "./question_baseselect";
import { ItemValue } from "./itemvalue";
import { LocalizableString } from "./localizablestring";
import { IQuestion } from "./base-interfaces";
import { SurveyError } from "./survey-error";
export declare class CheckboxItem extends ChoiceItem {
    isExclusive: boolean;
    protected getBaseType(): string;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
}
/**
 * A class that describes the Checkboxes question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-checkbox/ (linkStyle))
 */
export declare class QuestionCheckboxModel extends QuestionCheckboxBase {
    private selectAllItemValue;
    private invisibleOldValues;
    protected defaultSelectedItemValues: Array<ItemValue>;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    supportElementsInChoice(): boolean;
    protected getDefaultItemComponent(): string;
    getType(): string;
    protected getItemValueType(): string;
    protected onCreating(): void;
    protected getFirstInputElementId(): string;
    /**
     * Specifies a property name used to store selected values.
     *
     * Set this property if you want to store selected values in an array of objects instead of an array of primitive values. For example, if you set `valuePropertyName` to `"car"`, the `value` property will contain an array of objects `[{ car: "Ford" }, { car: "Tesla" }]`, not an array of string values `[ "Ford", "Tesla" ]`.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/merge-question-values/ (linkStyle))
     */
    valuePropertyName: string;
    getValuePropertyName(): string;
    getQuestionFromArray(name: string, index: number): IQuestion;
    protected getDependedQuestionsByValueName(isDependOn: boolean): Array<IQuestion>;
    /**
     * Returns the "Select All" choice item. Use this property to change the item's `value` or `text`.
     * @see showSelectAllItem
     */
    get selectAllItem(): ItemValue;
    /**
     * Gets or sets a caption for the "Select All" choice item.
     * @see showSelectAllItem
     */
    get selectAllText(): string;
    set selectAllText(val: string);
    get locSelectAllText(): LocalizableString;
    /**
     * Enable this property to display a "Select All" item. When users select it, all other choice options, except [special options](https://surveyjs.io/form-library/examples/create-checkboxes-question-in-javascript/documentation#display-special-choices), also become selected.
     * @see selectAll
     * @see isAllSelected
     * @see separateSpecialChoices
     */
    showSelectAllItem: boolean;
    get hasSelectAll(): boolean;
    set hasSelectAll(val: boolean);
    /**
     * Returns `true` if all choice options, except [special options](https://surveyjs.io/form-library/examples/create-checkboxes-question-in-javascript/documentation#display-special-choices), are selected.
     * @see showSelectAllItem
     */
    get isAllSelected(): boolean;
    set isAllSelected(val: boolean);
    toggleSelectAll(): void;
    protected allElementsSelected(): boolean;
    private isNoneItemsSelected;
    private getNoneItems;
    /**
     * Selects all choice options, except [special options](https://surveyjs.io/form-library/examples/create-checkboxes-question-in-javascript/documentation#display-special-choices).
     *
     * To clear selection, call the `clearValue()` method.
     * @see clearValue
     */
    selectAll(): void;
    unselectAll(): void;
    private selectAllCore;
    clickItemHandler(item: ItemValue, checked?: boolean): void;
    selectItem(item: ItemValue, checked?: boolean): void;
    protected isItemSelectedCore(item: ItemValue): boolean;
    protected hasUnknownValueItem(val: any, includeOther?: boolean, isFilteredChoices?: boolean, checkEmptyValue?: boolean): boolean;
    protected setCommentValueCore(item: ItemValue, newValue: string): void;
    protected getCommentValueByItem(item: ItemValue): string;
    private getItemValIndexByItemValue;
    get isTheOnlyComment(): boolean;
    private calcIsTheOnlyComment;
    onItemHasCommentChanged(): void;
    private getValueFromReal;
    get isValueArray(): boolean;
    /**
     * Specifies the maximum number of selected choices.
     *
     * Default value: 0 (unlimited)
     *
     * > This property only limits the number of choice items that can be selected by users. You can select any number of choice items in code, regardless of the `maxSelectedChoices` value.
     *
     * [Ranking Demo](https://surveyjs.io/form-library/examples/select-items-to-rank/ (linkStyle))
     * @see minSelectedChoices
     */
    maxSelectedChoices: number;
    /**
     * Specifies the minimum number of selected choices.
     *
     * Default value: 0 (unlimited)
     *
     * > This property only limits the number of choice items that can be selected by users. You can select any number of choice items in code, regardless of the `minSelectedChoices` value.
     *
     * [Ranking Demo](https://surveyjs.io/form-library/examples/select-items-to-rank/ (linkStyle))
     * @see maxSelectedChoices
     */
    minSelectedChoices: number;
    /**
     * An array of selected choice items. Includes the "Other", "None", "Refuse to answer", and "Don't know" choice items if they are selected, but not "Select All". Items are sorted in the order they were selected.
     * @see visibleChoices
     * @see enabledChoices
     */
    get selectedChoices(): Array<ItemValue>;
    get selectedItems(): Array<ItemValue>;
    get hasFilteredValue(): boolean;
    getFilteredName(): any;
    getFilteredValue(isUnwrapped?: boolean): any;
    protected getMultipleSelectedItems(): Array<ItemValue>;
    protected validateItemValues(itemValues: Array<ItemValue>): Array<ItemValue>;
    protected getAnswerCorrectIgnoreOrder(): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void;
    protected onVisibleChoicesChanged(): void;
    protected onEnableItemCallBack(item: ItemValue): boolean;
    protected onAfterRunItemsEnableCondition(): void;
    private updateSelectAllItemProps;
    private getSelectAllEnabled;
    private getVisibleEnableItems;
    private shouldCheckMaxSelectedChoices;
    private checkMinSelectedChoicesUnreached;
    protected getItemClassCore(item: any, options: any): string;
    updateValueFromSurvey(newValue: any, clearData: boolean): void;
    onSurveyLoad(): void;
    private getPropertyNameArray;
    protected setDefaultUnknownValue(val: any): void;
    private addIntoInvisibleOldValues;
    protected hasValueToClearIncorrectValues(): boolean;
    protected setNewValue(newValue: any): void;
    protected getCommentFromValue(newValue: any): string;
    getStoreOthersAsComment(): boolean;
    protected setOtherValueIntoValue(newValue: any): any;
    private getFirstUnknownIndex;
    protected removeNoneItemsValues(value: Array<any>, newValue: Array<any>): void;
    private noneIndexInArray;
    protected supportSelectAll(): boolean;
    protected addNonChoicesItems(dict: Array<{
        index: number;
        item: ItemValue;
    }>, isAddAll: boolean): void;
    isBuiltInChoice(item: ItemValue): boolean;
    isItemInList(item: ItemValue): boolean;
    protected getDisplayValueEmpty(): string;
    protected getDisplayValueCore(keysAsText: boolean, value: any, isReadOnly?: boolean): any;
    protected clearIncorrectValuesCore(): void;
    protected clearDisabledValuesCore(): void;
    private isChangingValueOnClearIncorrect;
    private clearIncorrectAndDisabledValues;
    private restoreValuesFromInvisible;
    getConditionJson(operator?: string, path?: string): any;
    isAnswerCorrect(): boolean;
    protected getCorrectAnswerOnChoicesChanged(val: any): any;
    protected setDefaultValueWithOthers(): void;
    protected getIsItemValue(val: any, item: ItemValue): boolean;
    protected valueFromData(val: any): any;
    protected rendredValueFromData(val: any): any;
    private convertValueFromObject;
    protected renderedValueFromDataCore(val: any): any;
    protected renderedValueToDataCore(val: any): any;
    protected valueToData(val: any): any;
    protected selectOtherValueFromComment(val: boolean): void;
    get checkBoxSvgPath(): string;
    get isNewA11yStructure(): boolean;
    get a11y_input_ariaRole(): string;
    get a11y_input_ariaRequired(): "true" | "false";
}
