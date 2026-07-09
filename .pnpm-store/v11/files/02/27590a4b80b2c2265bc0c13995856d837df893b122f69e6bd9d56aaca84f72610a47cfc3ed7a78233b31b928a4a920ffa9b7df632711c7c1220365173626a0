import { HashTable } from "./helpers";
import { Question } from "./question";
/**
 * A class that describes the Expression question type. It is a read-only question type that calculates a value based on a specified expression.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-expression/ (linkStyle))
 */
export declare class QuestionExpressionModel extends Question {
    private isExecutionLocked;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    get hasInput(): boolean;
    /**
     * A string that formats a question value. Use `{0}` to reference the question value in the format string.
     * @see displayStyle
     */
    format: string;
    /**
     * An expression used to calculate the question value.
     *
     * Refer to the following help topic for more information: [Expressions](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#expressions).
     *
     * [View Demo](https://surveyjs.io/form-library/examples/expression-question-for-dynamic-form-calculations/ (linkStyle))
     */
    expression: string;
    locCalculation(): void;
    unlocCalculation(): void;
    protected runConditionCore(properties: HashTable<any>): void;
    protected canCollectErrors(): boolean;
    hasRequiredError(): boolean;
    /**
     * The maximum number of fraction digits. Applies only if the `displayStyle` property is not `"none"`. Accepts values in the range from -1 to 20, where -1 disables the property.
     *
     * Default value: -1
     * @see displayStyle
     * @see minimumFractionDigits
     * @see precision
     */
    maximumFractionDigits: number;
    /**
     * The minimum number of fraction digits. Applies only if the `displayStyle` property is not `"none"`. Accepts values in the range from -1 to 20, where -1 disables the property.
     *
     * Default value: -1
     * @see displayStyle
     * @see maximumFractionDigits
     */
    minimumFractionDigits: number;
    private runIfReadOnlyValue;
    get runIfReadOnly(): boolean;
    set runIfReadOnly(val: boolean);
    get formatedValue(): string;
    protected updateFormatedValue(): void;
    protected onValueChanged(): void;
    updateValueFromSurvey(newValue: any, clearData: boolean): void;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    /**
     * Specifies a display style for the question value.
     *
     * Possible values:
     *
     * - `"decimal"`
     * - `"currency"`
     * - `"percent"`
     * - `"date"`
     * - `"none"` (default)
     *
     * If you use the `"currency"` display style, you can also set the `currency` property to specify a currency other than USD.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/expression-question-for-dynamic-form-calculations/ (linkStyle))
     * @see currency
     * @see minimumFractionDigits
     * @see maximumFractionDigits
     * @see format
     */
    displayStyle: string;
    /**
     * A three-letter currency code. Applies only if the `displayStyle` property is set to `"currency"`.
     *
     * Default value: "USD".
     * @see displayStyle
     * @see minimumFractionDigits
     * @see maximumFractionDigits
     * @see format
     */
    currency: string;
    /**
     * Specifies whether to use grouping separators in number representation. Separators depend on the selected [locale](https://surveyjs.io/form-library/documentation/surveymodel#locale).
     *
     * Default value: `true`
     */
    useGrouping: boolean;
    /**
     * Specifies how many decimal digits to keep in the expression value.
     *
     * Default value: -1 (unlimited)
     * @see maximumFractionDigits
     */
    precision: number;
    private roundValue;
    protected getValueAsStr(val: any): string;
    get ariaRole(): string;
}
export declare function getCurrecyCodes(): Array<string>;
