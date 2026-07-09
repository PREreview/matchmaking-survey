import { ItemValue } from "./itemvalue";
import { ChoiceItem, QuestionCheckboxBase } from "./question_baseselect";
import { LocalizableString } from "./localizablestring";
import { DropdownListModel } from "./dropdownListModel";
export declare class ButtonGroupItemValue extends ChoiceItem {
    protected getBaseType(): string;
    iconName: string;
    iconSize: number;
    /**
     * By default item caption is visible.
     * Set it 'false' to hide item caption.
     */
    showCaption: boolean;
}
/**
 * A Model for a button group question.
 */
export declare class QuestionButtonGroupModel extends QuestionCheckboxBase {
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    locStrsChanged(): void;
    getType(): string;
    protected getItemValueType(): string;
    supportOther(): boolean;
    getControlClass(): string;
    protected getFirstInputElementId(): string;
    getInputId(index: number): string;
    placeholder: string;
    _allowClear: boolean;
    get allowClear(): boolean;
    set allowClear(newVal: boolean);
    get searchEnabled(): boolean;
    isItemSelected(item: ItemValue): boolean;
    get readOnlyText(): string;
    get locReadOnlyText(): LocalizableString;
    private resetReadOnlyText;
    inputHasValue: boolean;
    get showSelectedItemLocText(): boolean;
    get selectedItemLocText(): LocalizableString;
    private dropdownListModelValue;
    set dropdownListModel(val: DropdownListModel);
    get dropdownListModel(): DropdownListModel;
    get selectedItem(): ItemValue;
    protected onBlurCore(event: any): void;
    protected updateCssClasses(res: any, css: any): void;
    protected calcCssClasses(css: any): any;
    needResponsiveWidth(): boolean;
    protected supportResponsiveness(): boolean;
    protected getCompactRenderAs(): string;
    protected getObservedElementSelector(): string;
    protected onBeforeSetCompactRenderer(): void;
    dispose(): void;
}
export declare class ButtonGroupItemModel {
    question: QuestionButtonGroupModel;
    item: ItemValue;
    index: number;
    constructor(question: QuestionButtonGroupModel, item: ItemValue, index: number);
    get value(): any;
    get iconName(): string;
    get iconSize(): string | number;
    get caption(): LocalizableString;
    get showCaption(): any;
    get isRequired(): boolean;
    get selected(): boolean;
    get readOnly(): boolean;
    get name(): string;
    get id(): string;
    get hasErrors(): boolean;
    get describedBy(): string;
    private get labelClass();
    get css(): {
        label: string;
        icon: any;
        control: any;
        caption: any;
        decorator: any;
    };
    onChange(): void;
}
