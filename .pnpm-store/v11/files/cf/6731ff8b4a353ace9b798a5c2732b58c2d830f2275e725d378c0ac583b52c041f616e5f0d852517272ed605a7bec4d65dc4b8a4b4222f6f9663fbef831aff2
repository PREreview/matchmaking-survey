import { ISurveyErrorOwner } from "./base-interfaces";
import { LocalizableString } from "./localizablestring";
export declare class SurveyError {
    text: string;
    protected errorOwner: ISurveyErrorOwner;
    private locTextValue;
    private notificationTypeValue;
    visible: boolean;
    constructor(text?: string, errorOwner?: ISurveyErrorOwner);
    equals(error: SurveyError): boolean;
    get locText(): LocalizableString;
    get notificationType(): string;
    set notificationType(val: string);
    get isWarning(): boolean;
    get isInfo(): boolean;
    get isError(): boolean;
    getCssIcon(cssClasses: any): string;
    private getCssError;
    getText(): string;
    getErrorType(): string;
    protected getDefaultText(): string;
    protected getLocale(): string;
    protected getLocalizationString(locStrName: string): string;
    onUpdateErrorTextCallback: (error: SurveyError) => void;
    updateText(): void;
}
