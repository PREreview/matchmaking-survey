import { ILocalizableOwner } from "../localizablestring";
import { Action, IAction } from "./action";
import { IListModel } from "./list-model";
import { IPopupOptionsBase, PopupModel } from "../popup";
export interface IActionDropdownPopupOptions extends IListModel, IPopupOptionsBase {
}
export declare function createDropdownActionModel(actionOptions: IAction, dropdownOptions: IActionDropdownPopupOptions, locOwner?: ILocalizableOwner): Action;
export declare function createDropdownActionModelAdvanced(actionOptions: IAction, listOptions: IListModel, popupOptions?: IPopupOptionsBase): Action;
export declare function createPopupModelWithListModel(listOptions: IListModel, popupOptions?: IPopupOptionsBase): PopupModel;
export declare function getActionDropdownButtonTarget(container: HTMLElement): HTMLElement;
