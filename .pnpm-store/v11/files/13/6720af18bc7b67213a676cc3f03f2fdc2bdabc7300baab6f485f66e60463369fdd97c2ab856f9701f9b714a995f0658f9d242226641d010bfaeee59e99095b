import type { DropdownListModel } from "./dropdownListModel";
import type { PopupModel } from "./popup";
import { QuestionSelectBase } from "./question_baseselect";
type Constructor<T = {}> = new (...args: any[]) => T;
export interface IQuestionDropdownMixin {
    dropdownListModelValue: DropdownListModel;
    dropdownListModel: DropdownListModel;
    readonly popupModel: PopupModel;
    readonly showClearButton: boolean;
    onOpenedCallBack(): void;
    setIsChoicesLoading(value: boolean): void;
    dispose(): void;
}
export declare function questionDropdownMixin<TBase extends Constructor<QuestionSelectBase>>(Base: TBase): TBase & Constructor<IQuestionDropdownMixin>;
export {};
