import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { HashTable } from "./helpers";
import { JsonObjectProperty } from "./jsonobject";
import { ItemValue } from "./itemvalue";
import { IElement, IFindElement, IProgressInfo, ISurvey, ILoadFromJSONOptions, ISaveToJSONOptions } from "./base-interfaces";
import { ExpressionRunner } from "./expressions/expressionRunner";
import { IExpressionError } from "./expressions/expressionError";
import { IObjectValueContext, IValueGetterContext } from "./conditions/conditionProcessValue";
import { EventBase, Event } from "./event";
export interface IPropertyValueChangedEvent {
    name: string;
    newValue: any;
}
export interface IPropertyArrayValueChangedEvent {
    name: string;
    newValue: Array<any>;
    arrayChanges: ArrayChanges;
    valueFromHash: Array<any>;
}
export interface IExpressionValidationOptions {
    variables: boolean;
    functions: boolean;
    semantics: boolean;
}
/**
 * An interface that describes the result returned by the [`validateExpressions`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#validateExpressions) method.
 */
export interface IExpressionValidationResult {
    /**
     * A SurveyJS object (question, panel, page, collection item, or the survey itself) that contains the validated expression.
     */
    obj: Base;
    /**
     * The name of the property that holds the expression.
     */
    propertyName: string;
    /**
     * A list of validation errors detected in the expression.
     *
     * Each error object in this array may contain the following properties:
     *
     * - `errorType`: `ExpressionErrorType`\
     * The type of validation error: 0 &ndash; `SyntaxError`, 1 &ndash; `UnknownFunction`, 2 &ndash; `UnknownVariable`, or 3 &ndash; `SemanticError`.
     *
     * - `functionName`: `string`\
     * The name of the unknown function. Present only when `errorType` is `UnknownFunction`.
     *
     * - `variableName`: `string`\
     * The name of the unknown variable. Present only when `errorType` is `UnknownVariable`.
     */
    errors: IExpressionError[];
}
export declare class Bindings {
    private obj;
    private properties;
    private values;
    constructor(obj: Base);
    getType(): string;
    get isSurveyObj(): boolean;
    getNames(): Array<string>;
    getProperties(): Array<JsonObjectProperty>;
    setBinding(propertyName: string, valueName: string): void;
    clearBinding(propertyName: string): void;
    isEmpty(): boolean;
    getValueNameByPropertyName(propertyName: string): string;
    getPropertiesByValueName(valueName: string): Array<string>;
    getJson(): any;
    setJson(value: any, isLoading?: boolean): void;
    private fillProperties;
    private onChangedJSON;
}
export declare class Dependencies {
    currentDependency: () => void;
    target: Base;
    property: string;
    private static DependenciesCount;
    constructor(currentDependency: () => void, target: Base, property: string);
    dependencies: Array<{
        obj: Base;
        prop: string;
        id: string;
    }>;
    id: string;
    addDependency(target: Base, property: string): void;
    dispose(): void;
}
export declare class ComputedUpdater<T = any> {
    private _updater;
    static readonly ComputedUpdaterType = "__dependency_computed";
    private dependencies;
    constructor(_updater: () => T);
    readonly type = "__dependency_computed";
    get updater(): () => T;
    setDependencies(dependencies: Dependencies): void;
    protected getDependencies(): Dependencies;
    private clearDependencies;
    dispose(): any;
}
/**
 * A base class for all SurveyJS objects.
 */
export declare class Base implements IObjectValueContext {
    private static UniqueId;
    private uniqueIdValue;
    private static currentDependencis;
    static finishCollectDependencies(): Dependencies;
    static startCollectDependencies(updater: () => void, target: Base, property: string): void;
    protected static collectDependency(target: Base, property: string): void;
    dependencies: {
        [key: string]: ComputedUpdater;
    };
    private expressionDependencies;
    static get commentSuffix(): string;
    static set commentSuffix(val: string);
    static get commentPrefix(): string;
    static set commentPrefix(val: string);
    static createItemValue: (item: any, type?: string) => any;
    static itemValueLocStrChanged: (arr: Array<any>) => void;
    /**
     * Returns `true` if a passed `value` is an empty string, array, or object or if it equals to `undefined` or `null`.
     *
     * @param value A value to be checked.
     * @param trimString *(Optional)* When this parameter is `true`, the method ignores whitespace characters at the beginning and end of a string value. Pass `false` to disable this functionality.
     */
    isValueEmpty(value: any, trimString?: boolean): boolean;
    equals(obj: Base): boolean;
    protected equalsCore(obj: Base): boolean;
    protected trimValue(value: any): any;
    static createPropertiesHash(): {};
    private propertyHash;
    private localizableStrings;
    private arraysInfo;
    private eventList;
    private expressionInfo;
    private isDisposedValue;
    private classMetaData;
    private onPropChangeFunctions;
    protected isLoadingFromJsonValue: boolean;
    loadingOwner: Base;
    protected jsonObj: any;
    /**
     * An event that is raised when a property of this SurveyJS object has changed.
     *
     * Parameters:
     *
     * - `sender`: `this`\
     * A SurveyJS object whose property has changed.
     * - `options.name`: `string`\
     * The name of the changed property.
     * - `options.newValue`: `any`\
     * A new value for the property.
     * - `options.oldValue`: `any`\
     * An old value of the property. If the property is an array, `oldValue` contains the same array as `newValue` does.
     *
     * If you need to add and remove property change event handlers dynamically, use the [`registerPropertyChangedHandlers`](#registerPropertyChangedHandlers) and [`unregisterPropertyChangedHandlers`](#unregisterPropertyChangedHandlers) methods instead.
     */
    onPropertyChanged: EventBase<Base>;
    onNestedPropertyChanged: EventBase<Base>;
    /**
     * An event that is raised when an [`ItemValue`](https://surveyjs.io/form-library/documentation/itemvalue) property is changed.
     *
     * Parameters:
     *
     * - `sender`: `this`\
     * A SurveyJS object whose property contains an array of `ItemValue` objects.
     * - `options.obj`: [`ItemValue`](https://surveyjs.io/form-library/documentation/itemvalue)\
     * An `ItemValue` object.
     * - `options.propertyName`: `string`\
     * The name of the property to which an array of `ItemValue` objects is assigned (for example, `"choices"` or `"rows"`).
     * - `options.name`: `"text"` | `"value"`\
     * The name of the changed property.
     * - `options.newValue`: `any`\
     * A new value for the property.
     */
    onItemValuePropertyChanged: Event<(sender: Base, options: any) => any, Base, any>;
    getPropertyValueCoreHandler: (propertiesHash: any, name: string) => any;
    setPropertyValueCoreHandler: (propertiesHash: any, name: string, val: any) => void;
    createArrayCoreHandler: (propertiesHash: any, name: string) => Array<any>;
    surveyChangedCallback: () => void;
    private isCreating;
    constructor();
    dispose(): void;
    get isDisposed(): boolean;
    get uniqueId(): number;
    get isSurveyObj(): boolean;
    protected addEvent<T, Options = any>(onCallbacksChanged?: () => void): EventBase<T, Options>;
    protected addAsyncEvent<T, Options = any>(): EventAsync<T, Options>;
    protected onBaseCreating(): void;
    /**
     * Returns the object type as it is used in the JSON schema.
     */
    getType(): string;
    /**
     * Returns the survey element that owns this element. Returns `undefined` if called on a `SurveyModel` instance.
     * @returns The owner survey element, or `undefined` if none exists.
     */
    getOwner(): any;
    /**
     * Returns `true` if the survey element is a page.
     *
     * This property returns `false` for [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model) objects in the following cases:
     *
     * - `SurveyModel`'s [`questionsOnPageMode`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionsOnPageMode) is set to `"singlePage"`.
     * - The page is included in a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page).
     *
     * In those cases, the survey creates an internal `PageModel` object to show all questions on one page, and all regular pages become panels.
     */
    get isPage(): boolean;
    /**
     * Returns `true` if the survey element is a panel or acts as one.
     *
     * This property returns `true` for `PageModel` objects in the following cases:
     *
     * - `SurveyModel`'s [`questionsOnPageMode`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionsOnPageMode) is set to `"singlePage"`.
     * - The page is included in a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page).
     *
     * In those cases, the survey creates an internal `PageModel` object to show all questions on one page, and all regular pages become panels.
     */
    get isPanel(): boolean;
    /**
     * Returns `true` if the survey element is a question.
     */
    get isQuestion(): boolean;
    /**
     * Returns `true` if the element is a survey.
     */
    get isSurvey(): boolean;
    /**
     * Use this method to find out if the current object is of a given `typeName` or inherited from it.
     *
     * @param typeName One of the values listed in the [getType()](https://surveyjs.io/form-library/documentation/question#getType) description.
     * @returns `true` if the current object is of a given `typeName` or inherited from it.
     * @see getType
     */
    isDescendantOf(typeName: string): boolean;
    getSurvey(isLive?: boolean): ISurvey;
    getValueGetterContext(): IValueGetterContext;
    /**
     * Returns `true` if the survey is being designed in Survey Creator.
     */
    get isDesignMode(): boolean;
    /**
     * Returns `true` if the object is included in a survey.
     *
     * This property may return `false`, for example, when you [create a survey model dynamically](https://surveyjs.io/form-library/documentation/design-survey-create-a-simple-survey#create-or-change-a-survey-model-dynamically).
     */
    get inSurvey(): boolean;
    private bindingsValue;
    get bindings(): Bindings;
    protected isBindingEmpty(): boolean;
    checkBindings(valueName: string, value: any): void;
    protected canUpdateBindings(): boolean;
    protected updateBindings(propertyName: string, value: any): void;
    protected updateBindingValue(valueName: string, value: any): void;
    getTemplate(): string;
    /**
     * Returns `true` if the object configuration is being loaded from JSON.
     */
    get isLoadingFromJson(): boolean;
    protected getIsLoadingFromJson(): boolean;
    startLoadingFromJson(json?: any): void;
    endLoadingFromJson(): void;
    protected mergeLocalizationObj(obj: Base, locales?: Array<string>): void;
    protected mergeLocalizationWithInnerObjects(_src: Base, _locales?: Array<string>): void;
    private mergeLocalizationInObjectCore;
    private canMergeObj;
    private mergeLocalizationInArrays;
    /**
     * Returns a JSON schema that corresponds to the current survey element.
     * @param options An [`ISaveToJSONOptions`](https://surveyjs.io/form-library/documentation/api-reference/isavetojsonoptions) object with configuration options.
     * @returns A JSON schema of the survey element.
     * @see fromJSON
     */
    toJSON(options?: ISaveToJSONOptions): any;
    /**
     * Returns a JSON schema that contains only locale strings and the minimal set of properties required to identify survey elements.
     *
     * This method is syntactic sugar for calling the [`toJSON()`](#toJSON) method with the `storeLocaleStrings` option set to `"stringsOnly"`.
     *
     * To apply a locale-strings-only schema to a survey model, call the [`mergeLocalizationJSON(json, locales)`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#mergeLocalizationJSON) method.
     * @param locales *(Optional)* An array of locale identifiers to include in the JSON schema.
     * @returns A locale-strings-only JSON schema.
     */
    getLocalizationJSON(locales?: Array<string>): any;
    /**
     * Assigns a new JSON schema to the current survey element.
     *
     * The JSON schema should contain only serializable properties of this survey element. Event handlers and properties that do not belong to the survey element are ignored.
     *
     * @param json A JSON schema that you want to apply to the current survey element.
     * @param options An object with configuration options.
     * @param {boolean} options.validatePropertyValues Pass `true` if you want to validate property values. Use the [`jsonErrors`](#jsonErrors) array to access validation errors.
     * @see toJSON
     */
    fromJSON(json: any, options?: ILoadFromJSONOptions): void;
    onSurveyLoad(): void;
    /**
     * Creates a new object that has the same type and properties as the current SurveyJS object.
     */
    clone(): Base;
    /**
     * Returns a `JsonObjectProperty` object with metadata about a serializable property that belongs to the current SurveyJS object.
     *
     * If the property is not found, this method returns `null`.
     * @param propName A property name.
     */
    getPropertyByName(propName: string): JsonObjectProperty;
    isPropertyVisible(propName: string): boolean;
    static createProgressInfo(): IProgressInfo;
    getProgressInfo(): IProgressInfo;
    localeChanged(): void;
    locStrsChanged(): void;
    protected getValueAsString(value: any): string;
    /**
     * Returns the value of a property with a specified name.
     *
     * If the property is not found or does not have a value, this method returns either `undefined`, `defaultValue` specified in the property configuration, or a value passed as the `defaultValue` parameter.
     *
     * @param name A property name.
     * @param defaultValue *(Optional)* A value to return if the property is not found or does not have a value.
     */
    getPropertyValue(name: string, defaultValue?: any, calcFunc?: () => any): any;
    protected isValueUndefined(value: any): boolean;
    getDefaultPropertyValue(name: string): any;
    hasDefaultPropertyValue(name: string): boolean;
    resetPropertyValue(name: string): void;
    private doNotSerializeEmptyProperty;
    protected isPropertyStoredInHash(name: string): boolean;
    getIsSerializablePropertyEmpty(prop: JsonObjectProperty): boolean;
    getOriginalObj(): Base;
    getOriginalByProperty(propName: string): Base;
    protected getPropertyValueWithoutDefault(name: string): any;
    protected getPropertyValueCore(propertiesHash: any, name: string): any;
    geValueFromHash(): any;
    protected setPropertyValueCore(propertiesHash: any, name: string, val: any, isCalcValue?: boolean): void;
    protected getItemValuesPropertyValue(name: string): Array<ItemValue>;
    protected getArrayPropertyValue(name: string, onPush?: (item: any) => void, onRemove?: (item: any) => void): Array<any>;
    protected setArrayPropertyValue(name: string, val: any): void;
    get isEditingSurveyElement(): boolean;
    iteratePropertiesHash(func: (hash: any, key: string) => void): void;
    /**
     * Assigns a new value to a specified property.
     * @param name A property name.
     * @param val A new value for the property.
     */
    setPropertyValue(name: string, val: any): void;
    protected setArrayPropertyDirectly(name: string, val: any, sendNotification?: boolean): void;
    protected setPropertyValueDirectly(name: string, val: any, isCalcValue?: boolean): void;
    protected clearPropertyValue(name: string): void;
    onPropertyValueChangedCallback(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges): void;
    itemValuePropertyChanged(item: ItemValue, name: string, oldValue: any, newValue: any): void;
    private isFuncExecuting;
    protected executeOnSyncPropertiesChanged(func: () => void): void;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any, arrayChanges?: ArrayChanges): void;
    protected propertyValueChanged(name: string, oldValue: any, newValue: any, arrayChanges?: ArrayChanges, target?: Base): void;
    onBindingChanged(oldValue: any, newValue: any): void;
    protected get isInternal(): boolean;
    private doPropertyValueChangedCallback;
    addExpressionProperty(name: string, onExecute: (obj: Base, res: any) => void, canRun?: (obj: Base) => boolean, useStrictDependencies?: boolean, onReset?: (obj: Base) => void): void;
    validateExpression(name: string, expression: string, options: IExpressionValidationOptions): IExpressionValidationResult | undefined;
    /**
     * Validates expressions used in the survey.
     *
     * This method detects the following types of errors:
     *
     * - Unknown variable\
     * The expression references an undefined variable or an unknown question, panel, or page name.
     *
     * - Unknown function\
     * The expression references an unregistered function.
     *
     * - Semantic error\
     * The expression is syntactically valid but has no meaningful effect because it always evaluates to the same value.
     *
     * - Syntax error\
     * The expression contains invalid syntax, such as unmatched parentheses, missing operands, or invalid operators.
     *
     * You can disable checks for unknown variables, unknown functions, and semantic errors by passing an `options` object with the `variables`, `functions`, or `semantics` property set to `false`. Syntax errors are always validated.
     *
     * ```js
     * // ...
     * // Omitted: `SurveyModel` creation
     * // ...
     *
     * // Validate syntax errors only
     * const res = survey.validateExpressions({
     *   variables: false,
     *   functions: false,
     *   semantics: false
     * });
     * ```
     * @param options Configuration options that control which validation checks are performed.
     * @param {boolean} options.variables Pass `false` to disable validation of unknown variables.
     * @param {boolean} options.functions Pass `false` to disable validation of unknown functions.
     * @param {boolean} options.semantics Pass `false` to disable validation of semantic errors.
     * @returns An [`IExpressionValidationResult`](https://surveyjs.io/form-library/documentation/api-reference/IExpressionValidationResult) array.
     */
    validateExpressions(options?: IExpressionValidationOptions): IExpressionValidationResult[];
    protected getAllChildren(): Base[];
    getDataFilteredProperties(): any;
    protected runConditionCore(properties: HashTable<any>): void;
    protected canRunConditions(): boolean;
    private checkConditionPropertyChanged;
    private runConditionItemCore;
    protected canSkipRunningExpression(propName: string): boolean;
    protected canSkipExpressionByKeys(runner: ExpressionRunner, keys: any, vars?: string[]): boolean;
    private asynExpressionHash;
    private doBeforeAsynRun;
    private doAfterAsynRun;
    protected onAsyncRunningChanged(): void;
    get isAsyncExpressionRunning(): boolean;
    protected createExpressionRunner(expression: string): ExpressionRunner;
    private runExpressionHash;
    protected getExpressionFromSurvey(propName: string): string;
    protected runExpressionByProperty(propName: string, properties: HashTable<any>, onExecute: (value: any) => void, canRun?: (runner: ExpressionRunner) => boolean): boolean;
    protected getPropertiesCopy(properties: HashTable<any>, propName?: string): HashTable<any>;
    protected getExpressionByProperty(propName: string): ExpressionRunner;
    private getExpressionInfoByProperty;
    /**
     * Registers a single value change handler for one or multiple properties.
     *
     * The `registerPropertyChangedHandlers` and [`unregisterPropertyChangedHandlers`](#unregisterPropertyChangedHandlers) methods allow you to manage property change event handlers dynamically. If you only need to attach an event handler without removing it afterwards, you can use the [`onPropertyChanged`](#onPropertyChanged) event instead.
     * @param propertyNames An array of one or multiple property names.
     * @param handler A function to call when one of the listed properties change. Accepts a new property value as an argument.
     * @param key *(Optional)* A key that identifies the current registration. If a function for one of the properties is already registered with the same key, the function will be overwritten. You can also use the key to subsequently unregister handlers.
     * @see unregisterPropertyChangedHandlers
     */
    registerPropertyChangedHandlers(propertyNames: Array<string>, handler: any, key?: string): void;
    /**
     * Unregisters value change event handlers for the specified properties.
     * @param propertyNames An array of one or multiple property names.
     * @param key *(Optional)* A key of the registration that you want to cancel.
     * @see registerPropertyChangedHandlers
     */
    unregisterPropertyChangedHandlers(propertyNames: Array<string>, key?: string): void;
    registerFunctionOnPropertyValueChanged(name: string, func: any, key?: string): void;
    registerFunctionOnPropertiesValueChanged(names: Array<string>, func: any, key?: string): void;
    unRegisterFunctionOnPropertyValueChanged(name: string, key?: string): Array<any>;
    unRegisterFunctionOnPropertiesValueChanged(names: Array<string>, key?: string): void;
    addPropertyDependency(obj: Base, propertyName: string): void;
    protected onDependencyValueChanged(obj: Base, propertyName: string): void;
    createCustomLocalizableObj(name: string): LocalizableString;
    getLocale(): string;
    getLocalizationString(strName: string): string;
    getLocalizationFormatString(strName: string, ...args: any[]): string;
    protected createLocString(params: {
        name: string;
        owner?: ILocalizableOwner;
        supportsMarkdown?: boolean;
        translationKey?: string;
        hasTranslation?: boolean;
    }): LocalizableString;
    protected createLocalizableString(name: string, owner?: ILocalizableOwner, supportsMarkdown?: boolean, defaultStr?: boolean | string): LocalizableString;
    protected createLocalizableStringCore(owner: ILocalizableOwner, name: string, supportsMarkdown: boolean, locName?: string): LocalizableString;
    protected removeLocalizableString(name: string): void;
    getLocalizableString(name: string): LocalizableString;
    protected getOrCreateLocStr(name: string, supportsMarkdown?: boolean, defaultStr?: boolean | string, onCreate?: (newLocStr: LocalizableString) => void): LocalizableString;
    protected locStrChanged(name: string): void;
    protected isLocStrEmpty(name: string): boolean;
    getLocalizableStringText(name: string, defaultStr?: string): string;
    setLocalizableStringText(name: string, value: string): void;
    protected getLocStringText(locStr: LocalizableString, defaultStr?: string): string;
    protected setLocStringText(locStr: LocalizableString, value: string): void;
    addUsedLocales(locales: Array<string>): void;
    searchText(text: string, founded: Array<IFindElement>): void;
    private getSearchableLocalizedStrings;
    protected getSearchableLocKeys(keys: Array<string>): void;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
    private addLocStringToUsedLocales;
    protected createItemValues(name: string): Array<any>;
    private onArrayChanged;
    addOnArrayChangedCallback(callback: (sender: Base, options: IPropertyArrayValueChangedEvent) => void): void;
    removeOnArrayChangedCallback(callback: (sender: Base, options: IPropertyArrayValueChangedEvent) => void): void;
    private notifyArrayChanged;
    private onPropertyValueCoreChanged;
    addOnPropertyValueChangedCallback(callback: (sender: Base, options: IPropertyValueChangedEvent) => void): void;
    removeOnPropertyValueChangedCallback(callback: (sender: Base, options: IPropertyValueChangedEvent) => void): void;
    get hasActiveUISubscribers(): boolean;
    protected createNewArrayCore(name: string): Array<any>;
    protected ensureArray(name: string, onPush?: any, onRemove?: any): any[];
    protected createNewArray(name: string, onPush?: any, onRemove?: any): Array<any>;
    protected getItemValueType(): string;
    protected setArray(name: string, dest: any[], src: any[], isItemValues: boolean, onPush: any): void;
    protected isTwoValueEquals(x: any, y: any, caseInSensitive?: boolean, trimString?: boolean): boolean;
    private static copyObject;
    protected copyCssClasses(dest: any, source: any): void;
    private getValueInLowCase;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    get animationAllowed(): boolean;
    protected getIsAnimationAllowed(): boolean;
    private animationAllowedLock;
    blockAnimations(): void;
    releaseAnimations(): void;
    supportOnElementRerenderedEvent: boolean;
    onElementRerenderedEventEnabled: boolean;
    enableOnElementRerenderedEvent(): void;
    disableOnElementRerenderedEvent(): void;
    protected _onElementRerendered: EventBase<Base>;
    get onElementRerendered(): EventBase<Base>;
    afterRerender(): void;
}
export declare class ArrayChanges<T = any> {
    index: number;
    deleteCount: number;
    itemsToAdd: T[];
    deletedItems: T[];
    constructor(index: number, deleteCount: number, itemsToAdd: T[], deletedItems: T[]);
}
export declare class EventAsync<Sender, Options = any> extends EventBase<Sender, Options> {
    fire(sender: Sender, options: Options, onComplete?: () => void, onFirstAsync?: () => void): void;
}
