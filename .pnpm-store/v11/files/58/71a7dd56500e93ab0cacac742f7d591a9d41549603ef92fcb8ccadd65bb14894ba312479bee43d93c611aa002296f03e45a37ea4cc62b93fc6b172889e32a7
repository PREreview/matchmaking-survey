import { Action } from "./actions/action";
import { Base } from "./base";
import { HashTable } from "./helpers";
import { ItemValue } from "./itemvalue";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { Question } from "./question";
import { DragOrClickHelper } from "./utils/dragOrClickHelper";
interface ISliderLabelItemOwner extends ILocalizableOwner {
    getTextByItem(item: ItemValue): string;
}
export declare class SliderLabelItemValue extends ItemValue {
    protected getBaseType(): string;
    protected onGetText(text: string): string;
    protected getCorrectValue(value: any): any;
    showValue: boolean;
}
/**
 * A class that describes the Slider question type.
 *
 * [View Slider Demo](https://surveyjs.io/form-library/examples/single-value-slider-input/ (linkStyle))
 *
 * [View Range Slider Demo](https://surveyjs.io/form-library/examples/dual-range-slider-input/ (linkStyle))
 */
export declare class QuestionSliderModel extends Question implements ISliderLabelItemOwner {
    /**
     * Specifies whether the slider allows selecting a single value (`"single"`) or a value range (`"range"`).
     *
     * Possible values:
     *
     * - `"single"` (default)
     * - `"range"`
     *
     * [View Slider Demo](https://surveyjs.io/form-library/examples/single-value-slider-input/ (linkStyle))
     *
     * [View Range Slider Demo](https://surveyjs.io/form-library/examples/dual-range-slider-input/ (linkStyle))
     */
    sliderType: "range" | "single";
    /**
     * Defines the maximum value on the slider scale.
     *
     * Default value: 100
     *
     * [View Slider Demo](https://surveyjs.io/form-library/examples/single-value-slider-input/ (linkStyle))
     *
     * [View Range Slider Demo](https://surveyjs.io/form-library/examples/dual-range-slider-input/ (linkStyle))
     * @see maxValueExpression
     */
    max: number;
    /**
     * Defines the minimum value on the slider scale.
     *
     * Default value: 0
     *
     * [View Slider Demo](https://surveyjs.io/form-library/examples/single-value-slider-input/ (linkStyle))
     *
     * [View Range Slider Demo](https://surveyjs.io/form-library/examples/dual-range-slider-input/ (linkStyle))
     * @see minValueExpression
     */
    min: number;
    /**
     * An expression that dynamically calculates the maximum scale value. Overrides the static [`max`](#max) property if defined.
     *
     * [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions (linkStyle))
     */
    maxValueExpression: string | null;
    /**
     * An expression that dynamically calculates the minimum scale value. Overrides the static [`min`](#min) property if defined.
     *
     * [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions (linkStyle))
     */
    minValueExpression: string | null;
    /**
     * Specifies the maximum length between the two thumbs of a range slider. Applies only if [`sliderType`](#sliderType) is `"range"`.
     *
     * Default value: `null`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/dual-range-slider-input/ (linkStyle))
     */
    maxRangeLength: number | null;
    /**
     * Specifies the minimum length between the two thumbs of a range slider. Applies only if [`sliderType`](#sliderType) is `"range"`.
     *
     * Default value: `null`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/dual-range-slider-input/ (linkStyle))
     */
    minRangeLength: number | null;
    /**
     * A formatting string for thumb tooltips. You can use `{0}` as a placeholder for a tooltip's numeric value.
     *
     * Default value: `"{0}"`
     * @see tooltipVisibility
     */
    tooltipFormat: string;
    /**
     * A formatting string for [auto-generated](#labelCount) or [custom labels](#customLabels). You can use `{0}` as a placeholder for the label's numeric value.
     *
     * Default value: `"{0}"`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-slider-scale-labels/ (linkStyle))
     *
     * > If you are using custom labels, `labelFormat` affects only those that do not define the `text` property.
     * @see showLabels
     * @see tooltipFormat
     */
    labelFormat: string;
    /**
     * Controls the visibility of thumb tooltips.
     *
     * Possible values:
     *
     * - `"auto"` (default) - Tooltips appear when the thumb or selected range is hovered or focused.
     * - `"always"`- Tooltips are always visible.
     * - `"never"` - Tooltips are never displayed.
     * @see tooltipFormat
     */
    tooltipVisibility: "auto" | "always" | "never";
    /**
     * Sets the interval between selectable scale values.
     *
     * Default value: 1
     *
     * [View Slider Demo](https://surveyjs.io/form-library/examples/single-value-slider-input/ (linkStyle))
     *
     * [View Range Slider Demo](https://surveyjs.io/form-library/examples/dual-range-slider-input/ (linkStyle))
     */
    step: number;
    /**
     * Specifies whether the slider displays value labels along the scale.
     *
     * Default value: `true`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-slider-scale-labels/ (linkStyle))
     * @see labelCount
     * @see customLabels
     * @see labelFormat
     */
    showLabels: boolean;
    /**
     * Defines how many auto-generated labels should be displayed along the slider scale. Ignored if the [`customLabels`](#customLabels) property is set.
     *
     * Default value: -1 (the number of labels is calculated automatically based on the [`min`](#min) and [`max`](#max) values)
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-slider-scale-labels/ (linkStyle))
     * @see showLabels
     * @see labelFormat
     */
    get labelCount(): number;
    set labelCount(val: number);
    autoGenerate: boolean;
    /**
     * Specifies custom scale labels. Overrides auto-generated labels if defined.
     *
     * This property accepts an array of numbers or objects with the following fields:
     *
     * - `value`: `number`\
     * The scale value where the label should appear.
     *
     * - `text`: `string`\
     * The label text to display.
     *
     * - `showValue`: `boolean`\
     * Specifies whether to display the numeric value alongside the label text. Default value: `false`.
     *
     * Numbers and objects can be combined in the same array. For instance, the following slider configuration adds textual labels for the minimum and maximum scale values and numeric labels for intermediate points. The extreme labels also display their corresponding values.
     *
     * ```js
     * const surveyJson = {
     *   "elements": [
     *     {
     *       "type": "slider",
     *       // ...
     *       "customLabels": [
     *         { "value": 0, "text": "Lowest", "showValue": true },
     *         20,
     *         40
     *         60
     *         80,
     *         { "value": 100, "text": "Highest", "showValue": true }
     *       ]
     *     }
     *   ]
     * };
     * ```
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-slider-scale-labels/ (linkStyle))
     * @see showLabels
     * @see labelCount
     * @see labelFormat
     */
    customLabels: SliderLabelItemValue[];
    allowDragRange: boolean;
    tickSize: number | null;
    /**
     * Allows the start and end thumbs to cross over each other. If `false`, the thumbs cannot be swapped. Applies only if [`sliderType`](#sliderType) is `"range"`.
     *
     * Default value: `false` if [`minRangeLength`](#minRangeLength) is defined, `true` otherwise.
     */
    get allowSwap(): boolean;
    set allowSwap(val: boolean);
    /**
     * Specifies whether to display a button that clears the selected slider value and resets it to `undefined`.
     *
     * Default value: `false`
     */
    allowClear: boolean;
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    focusedThumb: number | null;
    animatedThumb: boolean | null;
    dragOrClickHelper: DragOrClickHelper;
    get generatedLabels(): ItemValue[];
    get renderedValue(): number[];
    set renderedValue(val: number[]);
    getType(): string;
    protected getAllChildren(): Base[];
    get rootCss(): string;
    getThumbContainerCss: (thumbNumber: number) => string;
    get tooltipCss(): string;
    getLabelCss: (locText: LocalizableString) => string;
    get renderedLabelCount(): number;
    get renderedMax(): number;
    get renderedMin(): number;
    get renderedMaxRangeLength(): number;
    get renderedMinRangeLength(): number;
    get renderedLabels(): Array<ItemValue>;
    isIndeterminate: boolean;
    get isNegativeScale(): boolean;
    getTrackPercentLeft: () => number;
    getTrackPercentRight: () => number;
    getPercent: (value: number) => number;
    ensureMaxRangeBorders: (newValue: number, inputNumber: number) => number;
    ensureMinRangeBorders: (newValue: number, inputNumber: number) => number;
    getClosestToStepValue: (value: number) => number;
    handleRangeOnChange: (event: InputEvent) => void;
    prepareInputRangeForMoving: (event: PointerEvent, questionRootNode: HTMLElement) => void;
    handleRangePointerDown: (event: PointerEvent, rootNode: HTMLElement) => void;
    handleRangePointerUp: (event: PointerEvent, rootNode: HTMLElement) => void;
    refreshInputRange: (inputRef?: HTMLElement) => void;
    setSliderValue: (newValue: number | number[]) => void;
    setValueByClickOnPath: (event: PointerEvent, rootNode: HTMLElement) => void;
    setValueByClick: (newValue: number, inputNode?: HTMLInputElement) => void;
    handleOnChange: (event: InputEvent, inputNumber: number) => void;
    handlePointerDown: (e: PointerEvent) => void;
    handlePointerUp: (event: PointerEvent) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    handleKeyUp: (event: KeyboardEvent) => void;
    handleOnFocus: (inputNumber: number) => void;
    handleOnBlur: () => void;
    handleLabelPointerUp: (event: PointerEvent, newValue: number) => void;
    getTooltipValue: (tooltipNumber: number) => string;
    getTextByItem(item: ItemValue): string;
    getLabelText: (labelNumber: number) => string;
    getLabelPosition: (labelNumber: number) => number;
    endLoadingFromJson(): void;
    updateValueFromSurvey(newValue: any, clearData: boolean): void;
    itemValuePropertyChanged(item: ItemValue, name: string, oldValue: any, newValue: any): void;
    afterRenderQuestionElement(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    protected runConditionCore(properties: HashTable<any>): void;
    protected setNewValue(newValue: any): void;
    protected setDefaultValue(): void;
    protected getDefaultTitleActions(): Array<Action>;
    protected getItemValueType(): string;
    protected createLabelItem(value: number): SliderLabelItemValue;
    private isRangeMoving;
    private oldInputValue;
    private oldValue;
    private calcRenderedValue;
    private calcGeneratedLabels;
    private formatNumber;
    private ensureValueRespectMinMax;
    private isAllowToChange;
    private get isLabelsShowValueText();
    private questionRootElement;
}
export {};
