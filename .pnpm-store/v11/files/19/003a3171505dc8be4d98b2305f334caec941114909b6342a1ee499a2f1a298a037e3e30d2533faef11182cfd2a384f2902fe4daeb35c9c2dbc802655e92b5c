import { IDialogOptions } from "./popup";
import { PopupBaseViewModel } from "./popup-view-model";
export declare class PopupModalManager {
    private modals;
    onModalsChangedCallback: (modals: Readonly<Array<PopupBaseViewModel>>, addedModals: Array<PopupBaseViewModel>, removedModals: Array<PopupBaseViewModel>) => void;
    private onModalsChanged;
    addModal(modal: PopupBaseViewModel): void;
    addDialog(dialogOptions: IDialogOptions, rootElement?: HTMLElement): PopupBaseViewModel;
    getModals(): Readonly<Array<PopupBaseViewModel>>;
    clear(): void;
}
