import { Base } from "./base";
import { ISurveyValidatorOwner, ISurvey } from "./base-interfaces";
import { SurveyError } from "./survey-error";
import { LocalizableString } from "./localizablestring";
import { IValueGetterContext } from "./conditions/conditionProcessValue";
export declare class AsyncElementsRunner {
    private onCompleted;
    private asyncElements;
    private isRunningValue;
    constructor(onCompleted: () => void);
    addElement(id: string): void;
    removeElement(id: string): void;
    finish(): void;
    get isRunning(): boolean;
    protected doCompleted(): void;
    private tryComplete;
}
export declare class ValidatorResult {
    value: any;
    error: SurveyError;
    constructor(value: any, error?: SurveyError);
}
/**
 * A base class for all classes that implement validators.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class SurveyValidator extends Base {
    owner: ISurveyValidatorOwner;
    get errorOwner(): ISurveyValidatorOwner;
    set errorOwner(val: ISurveyValidatorOwner);
    get id(): string;
    get isValidator(): boolean;
    getSurvey(live?: boolean): ISurvey;
    getOwner(): ISurveyValidatorOwner;
    /**
     * Specifies the type of notification shown to users.
     *
     * Possible values:
     *
     * - `"error"`
     * - `"warning"`
     * - `"info"`
     *
     * Errors block survey progress until resolved. Warnings indicate potential issues but don't block respondents from continuing the survey. Informational notes provide guidance without restrictions.
     *
     * > If multiple notification types are eligible to be displayed for a question, only the strongest type is shown. Warnings appear only after all errors are resolved, and notes appear only when there are no errors or warnings.
     */
    notificationType: string;
    /**
     * An error message to display when a value fails validation.
     */
    get text(): string;
    set text(value: string);
    get locText(): LocalizableString;
    protected getErrorText(name: string): string;
    protected getDefaultErrorText(name: string): string;
    validateOnCallback(value: any, callback: (res: ValidatorResult) => void, name?: string, properties?: any): ValidatorResult;
    validate(value: any, name?: string, properties?: any): ValidatorResult;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string, item?: any): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    protected createCustomError(name: string): SurveyError;
    toString(): string;
}
export interface IValidatorOwner {
    getValidators(): Array<SurveyValidator>;
    validatedValue: any;
    getValidatorTitle(): string;
    getDataFilteredProperties(): any;
}
export declare class ValidatorRunner {
    onAsyncCompleted: (errors: Array<SurveyError>) => void;
    run(owner: IValidatorOwner): Array<SurveyError>;
}
/**
 * A class that implements a validator for numeric values.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class NumericValidator extends SurveyValidator {
    constructor(minValue?: number | null, maxValue?: number | null);
    getType(): string;
    validate(value: any, name?: string, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /**
     * A minimum allowed numeric value.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
     */
    minValue: number | null;
    /**
     * A maximum allowed numeric value.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
     */
    maxValue: number | null;
}
/**
 * A class that implements a validator for text values.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class TextValidator extends SurveyValidator {
    constructor();
    getType(): string;
    validate(value: any, name?: string, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /**
     * The minimum length of a text value measured in characters.
     *
     * Default value: 0
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
     */
    minLength: number;
    /**
     * The maximum length of a text value measured in characters.
     *
     * Default value: 0 (unlimited)
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
     */
    maxLength: number;
    /**
     * Specifies whether a text value can include numerical digits.
     *
     * Default value: `true`
     */
    allowDigits: boolean;
}
/**
 * A class that implements answer count validation in the question types that can have multiple values (for instance, [Checkboxes](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model)).
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class AnswerCountValidator extends SurveyValidator {
    constructor(minCount?: number, maxCount?: number);
    getType(): string;
    validate(value: any, name?: string, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /**
     * A minimum number of selected answers.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
     */
    minCount: number;
    /**
     * A maximum number of selected answers.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
     */
    maxCount: number;
}
/**
 * A class that implements validation using regular expressions.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class RegexValidator extends SurveyValidator {
    constructor(regex?: string);
    getType(): string;
    validate(value: any, name?: string, properties?: any): ValidatorResult;
    private hasError;
    /**
     * A regular expression used to validate values.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
     */
    regex: string;
    /**
     * Specifies whether uppercase and lowercase letters must be treated as distinct or equivalent when validating values.
     *
     * Default value: `false` (uppercase and lowercase letters are treated as distinct)
     */
    caseInsensitive: boolean;
    get insensitive(): boolean;
    set insensitive(val: boolean);
    private createRegExp;
}
/**
 * A class that implements a validator for e-mail addresses.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class EmailValidator extends SurveyValidator {
    private re;
    constructor();
    getType(): string;
    validate(value: any, name?: string, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
}
/**
 * A class that implements validation using [expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions).
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class ExpressionValidator extends SurveyValidator {
    private conditionRunner;
    constructor(expression?: string);
    getType(): string;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    validateOnCallback(value: any, callback: (res: ValidatorResult) => void, name?: string, properties?: any): ValidatorResult;
    protected generateError(res: boolean, value: any, name: string): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    private ensureConditionRunner;
    /**
     * A Boolean [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions). If it evaluates to `false`, validation fails.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
     */
    expression: string;
    getValueGetterContext(): IValueGetterContext;
}
