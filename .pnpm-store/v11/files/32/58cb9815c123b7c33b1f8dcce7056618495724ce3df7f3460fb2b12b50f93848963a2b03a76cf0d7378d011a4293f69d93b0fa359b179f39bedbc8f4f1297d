import { EventBase } from "./event";
import { ItemValue } from "./itemvalue";
import { ISaveToJSONOptions } from "./base-interfaces";
export interface ILocalizableOwner {
    getLocale(): string;
    getMarkdownHtml(text: string, name: string, item?: any): string;
    getProcessedText(text: string, context?: any): string;
    getRenderer(name: string, item?: ItemValue): string;
    getRendererContext(locStr: LocalizableString, item?: ItemValue): any;
    getAllowLineBreaks?(name: string): boolean;
}
export interface ILocalizableString {
    getLocaleText(loc: string): string;
    setLocaleText(loc: string, newValue: string): any;
    getJson(): any;
    getLocales(): Array<string>;
    getIsMultiple(): boolean;
}
/**
 * The class represents the string that supports multi-languages and markdown.
 * It uses in all objects where support for multi-languages and markdown is required.
 */
export declare class LocalizableString implements ILocalizableString {
    owner: ILocalizableOwner;
    useMarkdown: boolean;
    name?: string;
    static SerializeAsObject: boolean;
    static get defaultLocale(): string;
    static set defaultLocale(val: string);
    static defaultRenderer: string;
    static editableRenderer: string;
    private values;
    private htmlValues;
    private renderedText;
    private calculatedTextValue;
    private _localizationName;
    get localizationName(): string;
    set localizationName(val: string);
    private _allowLineBreaks;
    get allowLineBreaks(): boolean;
    onGetTextCallback: (str: string, nonProcessedText?: string) => string;
    storeDefaultText: boolean;
    serializeCallBackText: boolean;
    onStrChanged: (oldValue: string, newValue: string) => void;
    lastChangedLoc: string;
    onSearchChanged: () => void;
    sharedData: LocalizableString;
    searchText: string;
    searchIndex: number;
    disableLocalization: boolean;
    defaultValue: string;
    constructor(owner: ILocalizableOwner, useMarkdown?: boolean, name?: string, locName?: string);
    getIsMultiple(): boolean;
    getStringViewerClassName(textClass?: string): string;
    get locale(): string;
    get isDefautlLocale(): boolean;
    strChanged(): void;
    get text(): string;
    set text(value: string);
    get calculatedText(): string;
    getPlaceholder(): string;
    private calcText;
    private isTextRequested;
    get pureText(): string;
    private getRootDialect;
    private getLocalizationName;
    private getLocalizationStr;
    get hasHtml(): boolean;
    get html(): string;
    get isEmpty(): boolean;
    get textOrHtml(): string;
    get renderedHtml(): string;
    getLocaleText(loc: string): string;
    private getLocaleTextCore;
    private isLocaleTextEqualsWithDefault;
    clear(): void;
    clearLocale(loc?: string): void;
    setLocaleText(loc: string, value: string): void;
    private isValueEmpty;
    private get curLocale();
    private canRemoveLocValue;
    private fireStrChanged;
    hasNonDefaultText(): boolean;
    getLocales(): Array<string>;
    getJson(options?: ISaveToJSONOptions): any;
    setJson(value: any, isLoading?: boolean): void;
    mergeWith(locStr: LocalizableString, locales?: string[]): void;
    get renderAs(): string;
    get renderAsData(): any;
    equals(obj: any): boolean;
    private searchableText;
    setFindText(text: string): boolean;
    onChanged(): void;
    onStringChanged: EventBase<LocalizableString>;
    private hasHtmlValue;
    private setHtmlValue;
    getHtmlValue(): string;
    private deleteValuesEqualsToDefault;
    private getValue;
    private setValue;
    private deleteValue;
    private getValueLoc;
    private getValuesKeys;
    private get defaultLoc();
}
/**
 * The class represents the list of strings that supports multi-languages.
 */
export declare class LocalizableStrings implements ILocalizableString {
    owner: ILocalizableOwner;
    private values;
    onValueChanged: (oldValue: any, newValue: any) => void;
    constructor(owner: ILocalizableOwner);
    getIsMultiple(): boolean;
    get locale(): string;
    get value(): Array<string>;
    set value(val: Array<string>);
    get text(): string;
    set text(val: string);
    getLocaleText(loc: string): string;
    setLocaleText(loc: string, newValue: string): any;
    getValue(loc: string): Array<string>;
    private getValueCore;
    setValue(loc: string, val: Array<string>): void;
    hasValue(loc?: string): boolean;
    get isEmpty(): boolean;
    private getLocale;
    getLocales(): Array<string>;
    getJson(): any;
    setJson(value: any): void;
    private getValuesKeys;
}
