import { LocalizableStrings } from "./localizablestring";
import { HashTable } from "./helpers";
import { SurveyError } from "./survey-error";
import { QuestionTextBase } from "./question_textbase";
import { CssClassBuilder } from "./utils/cssClassBuilder";
import { InputMaskBase } from "./mask/mask_base";
import { IInputMask } from "./mask/mask_utils";
/**
 * A class that describes the Single-Line Input question type, which is used to create textual, numeric, date-time, and color input fields.
 *
 * [Text Entry Demo](https://surveyjs.io/form-library/examples/text-entry-question/ (linkStyle))
 *
 * [Date-Time Entry Demo](https://surveyjs.io/form-library/examples/datetime-entry-question/ (linkStyle))
 *
 * [Numeric Entry Demo](https://surveyjs.io/form-library/examples/numeric-entry-question/ (linkStyle))
 *
 * [Color Input Demo](https://surveyjs.io/form-library/examples/color-input-question/ (linkStyle))
 */
export declare class QuestionTextModel extends QuestionTextBase {
    private maskInputAdapter;
    private doNotUpdateInputValue;
    private createMaskAdapter;
    private deleteMaskAdapter;
    private updateMaskAdapter;
    onSetMaskType(newValue: string): void;
    /**
     * Specifies the type of a mask applied to the input.
     *
     * Possible values:
     *
     * - `"none"` (default)
     * - `"numeric"`
     * - `"currency"`
     * - `"datetime"`
     * - `"pattern"`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
     * @see maskSettings
     */
    maskType: string;
    /**
     * Specifies text alignment within the input field.
     *
     * Possible values:
     *
     * - `"left"` - Aligns input text to the left side.
     * - `"right"` - Aligns input text to the right side.
     * - `"auto"` (default) - Applies right alignment if a [numeric or currency input mask](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maskType) is specified. Otherwise, applies left alignment.
     */
    inputTextAlignment: "left" | "right" | "auto";
    get maskTypeIsEmpty(): boolean;
    /**
     * An object with properties that configure the mask applied to the input.
     *
     * Available properties depend on the specified [`maskType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maskType) and belong to corresponding classes. Refer to the class APIs for a full list of properties:
     *
     * | `maskType` | Class |
     * | ---------- | ----- |
     * | `"numeric"` | [`InputMaskNumeric`](https://surveyjs.io/form-library/documentation/api-reference/inputmasknumeric) |
     * | `"currency"` | [`InputMaskCurrency`](https://surveyjs.io/form-library/documentation/api-reference/inputmaskcurrency) |
     * | `"datetime"` | [`InputMaskDateTime`](https://surveyjs.io/form-library/documentation/api-reference/inputmaskdatetime) |
     * | `"pattern"` | [`InputMaskPattern`](https://surveyjs.io/form-library/documentation/api-reference/inputmaskpattern) |
     *
     * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
     */
    get maskSettings(): InputMaskBase;
    set maskSettings(val: InputMaskBase);
    private setNewMaskSettingsProperty;
    protected createMaskSettings(): InputMaskBase;
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected isTextValue(): boolean;
    getType(): string;
    onSurveyLoad(): void;
    /**
     * A value passed on to the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) attribute of the underlying `<input>` element.
     *
     * Default value: `"text"`
     *
     * [Text Entry Demo](https://surveyjs.io/form-library/examples/text-entry-question/ (linkStyle))
     *
     * [Date-Time Entry Demo](https://surveyjs.io/form-library/examples/datetime-entry-question/ (linkStyle))
     *
     * [Numeric Entry Demo](https://surveyjs.io/form-library/examples/numeric-entry-question/ (linkStyle))
     *
     * [Color Input Demo](https://surveyjs.io/form-library/examples/color-input-question/ (linkStyle))
     */
    get inputType(): string;
    set inputType(val: string);
    getMaxLength(): any;
    getSupportedValidators(): Array<string>;
    protected runConditionCore(properties: HashTable<any>): void;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    isLayoutTypeSupported(layoutType: string): boolean;
    /**
     * A value passed on to the [`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size) attribute of the underlying `<input>` element.
     */
    inputSize: number;
    /**
     * @deprecated Use the [`inputSize`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputSize) property instead.
     */
    get size(): number;
    set size(val: number);
    get isTextInput(): boolean;
    get renderedInputSize(): number;
    get inputWidth(): string;
    private calInputSize;
    resetInputSize(): void;
    /**
     * A value passed on to the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute of the underlying `<input>` element.
     */
    autocomplete: string;
    /**
     * A value passed on to the [`min`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min) attribute of the underlying `<input>` element.
     * @see minValueExpression
     * @see minErrorText
     */
    get min(): string;
    set min(val: string);
    /**
     * A value passed on to the [`max`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) attribute of the underlying `<input>` element.
     * @see maxValueExpression
     * @see maxErrorText
     */
    get max(): string;
    set max(val: string);
    /**
     * The minimum value specified as an [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions). For example, `"minValueExpression": "today(-1)"` sets the minimum value to yesterday.
     * @see min
     * @see minErrorText
     */
    minValueExpression: string;
    /**
     * The maximum value specified as an [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions). For example, `"maxValueExpression": "today(1)"` sets the maximum value to tomorrow.
     * @see max
     * @see maxErrorText
     */
    maxValueExpression: string;
    get renderedMin(): any;
    get renderedMax(): any;
    /**
     * An error message to display when the entered value is less than the minimum accepted value.
     * @see min
     * @see minValueExpression
     */
    minErrorText: string;
    /**
     * An error message to display when the entered value exceeds the maximum accepted value.
     * @see max
     * @see maxValueExpression
     */
    maxErrorText: string;
    /**
     * An error message to display when the entered value does not match the [step size](#step).
     */
    stepErrorText: string;
    invalidInputErrorText: string;
    /**
     * Returns `true` if the specified `inputType` supports the `min` and `max` properties.
     * @see inputType
     * @see min
     * @see max
     */
    get isMinMaxType(): boolean;
    _inputValue: string;
    get maskInstance(): IInputMask;
    get inputValue(): string;
    set inputValue(val: string);
    getFilteredValue(): any;
    getExpressionValue(val: any): any;
    private tryPreserveMaskedStringValue;
    protected convertToCorrectValue(val: any): any;
    protected onChangeQuestionValue(newValue: any): void;
    private updateInputValue;
    private hasToConvertToUTC;
    private createDate;
    protected valueForSurveyCore(val: any): any;
    protected valueFromDataCore(val: any): any;
    private dateValidationMessage;
    private isMaskInputIncomplete;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void;
    protected canSetValueToSurvey(): boolean;
    protected convertFuncValuetoQuestionValue(val: any): any;
    private getMinMaxErrorText;
    private getStepErrorText;
    private get isValueLessMin();
    private get isValueGreaterMax();
    private get isStepNumberIncorrect();
    private get isDateInputType();
    private isDateTimeLocaleType;
    private getCalculatedMinMax;
    private setRenderedMinMax;
    /**
     * A value passed on to the [`step`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step) attribute of the underlying `<input>` element.
     * @see stepErrorText
     */
    step: string;
    get renderedStep(): string;
    protected getIsInputTextUpdate(): boolean;
    supportAutoAdvance(): boolean;
    supportGoNextPageError(): boolean;
    /**
     * An array of predefined options from which users can select. This property configures an HTML [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) element and associates it with the underlying `input` element.
     */
    get dataList(): Array<string>;
    set dataList(val: Array<string>);
    private locDataListValue;
    get locDataList(): LocalizableStrings;
    get dataListId(): string;
    protected isPropertyStoredInHash(name: string): boolean;
    protected setNewValue(newValue: any): void;
    updateValueFromSurvey(newValue: any, clearData?: boolean): void;
    protected correctValueType(newValue: any): any;
    protected hasPlaceholder(): boolean;
    protected getControlCssClassBuilder(): CssClassBuilder;
    isReadOnlyRenderDiv(): boolean;
    get inputStyle(): any;
    private updateTextAlign;
    private _isWaitingForEnter;
    private _isValueChanged;
    private setIsValueChanged;
    private updateValueOnEvent;
    private prevNumberValue;
    private updateNumericValue;
    onCompositionUpdate: (event: any) => void;
    onKeyUp: (event: any) => void;
    private updateDateValidationMessage;
    readOnlyBlocker: (event: any) => boolean;
    onKeyDown: (event: any) => void;
    private shouldPreventNumberInput;
    onChange: (event: any) => void;
    protected onBlurCore(event: any): void;
    protected onFocusCore(event: any): void;
    afterRenderQuestionElement(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
}
export declare function isMinMaxType(obj: any): boolean;
