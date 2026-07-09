import { Action } from "./actions/action";
import { LocalizableString } from "./localizablestring";
import { Question } from "./question";
export declare class QuestionSingleInputSummaryItem {
    locText: LocalizableString;
    btnEdit: Action;
    btnRemove: Action;
    constructor(locText: LocalizableString, btnEdit: Action, btnRemove: Action);
    get showRemove(): boolean;
}
export declare class QuestionSingleInputSummary {
    question: Question;
    noEntry: LocalizableString;
    constructor(question: Question, noEntry: LocalizableString);
    items: Array<QuestionSingleInputSummaryItem>;
    isEmpty(): boolean;
    dispose(): void;
}
