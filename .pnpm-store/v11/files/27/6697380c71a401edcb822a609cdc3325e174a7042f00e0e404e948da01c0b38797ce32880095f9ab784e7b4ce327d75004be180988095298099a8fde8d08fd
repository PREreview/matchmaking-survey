import { Base } from "./base";
import { EventBase } from "./event";
import { IAction } from "./actions/action";
import { VerticalPosition, HorizontalPosition, PositionMode } from "./utils/popup";
type DisplayPopupMode = "modal-popup" | "modal-overlay" | "menu-overlay" | "menu-popup-overlay" | "menu-popup";
export interface IPopupOptionsBase {
    onBlur?: () => void;
    onHide?: () => void;
    /**
     * A callback function executed when the dialog is opened.
     */
    onShow?: () => void;
    /**
     * A callback function executed when users click the Cancel button in the dialog.
     */
    onCancel?: () => void;
    onDispose?: () => void;
    getTargetCallback?: (container: HTMLElement) => HTMLElement;
    getAreaCallback?: (container: HTMLElement) => HTMLElement;
    /**
     * A CSS class to apply to the root element of the dialog for custom styling.
     */
    cssClass?: string;
    /**
     * The dialog's title.
     */
    title?: string;
    verticalPosition?: VerticalPosition;
    horizontalPosition?: HorizontalPosition;
    showPointer?: boolean;
    isModal?: boolean;
    canShrink?: boolean;
    displayMode?: "popup" | "overlay";
}
/**
 * An interface used to configure the content and behavior of a modal dialog displayed via the [`showDialog()`](https://surveyjs.io/form-library/documentation/api-reference/settings#showDialog) method.
 *
 * [View Demo](https://surveyjs.io/survey-creator/examples/add-modal-property-editor-to-property-grid/ (linkStyle))
 */
export interface IDialogOptions extends IPopupOptionsBase {
    /**
     * The name of the component to render inside the dialog.
     *
     * This component should be registered in the component collection used by the application (e.g., in `ReactElementFactory` for React and HTML/JS/CSS, `AngularComponentFactory` for Angular, or `app.component()` for Vue.js).
     */
    componentName: string;
    /**
     * An object with component props.
     */
    data: any;
    /**
     * A callback function executed when users click the Apply button in the dialog.
     *
     * This function should return `true` to close the dialog or `false` to keep it open (for example, if validation fails).
     * @returns `true` to close the dialog or `false` to keep it open.
     * @see onCancel
     */
    onApply: () => boolean;
    isFocusedContent?: boolean;
    showCloseButton?: boolean;
}
export interface IConfirmDialogOptions {
    message?: string;
    funcOnYes?: () => void;
    funcOnNo?: () => void;
    applyTitle?: string;
    locale?: string;
    rootElement?: HTMLElement;
    cssClass?: string;
}
export declare class PopupModel<T = any> extends Base implements IPopupOptionsBase {
    setWidthByTarget: boolean;
    focusFirstInputSelector: string;
    locale: string;
    onCancel: () => void;
    onApply: () => boolean;
    onHide: () => void;
    onShow: () => void;
    onBlur: () => void;
    onDispose: () => void;
    getTargetCallback?: (container: HTMLElement) => HTMLElement;
    getAreaCallback?: (container: HTMLElement) => HTMLElement;
    contentComponentName: string;
    contentComponentData: T;
    verticalPosition: VerticalPosition;
    horizontalPosition: HorizontalPosition;
    showPointer: boolean;
    showCloseButton: boolean;
    isModal: boolean;
    canShrink: boolean;
    isFocusedContent: boolean;
    isFocusedContainer: boolean;
    cssClass: string;
    title: string;
    overlayDisplayMode: "auto" | "tablet-dropdown-overlay" | "dropdown-overlay" | "plain";
    displayMode: "popup" | "overlay";
    positionMode: PositionMode;
    isVisible: boolean;
    onVisibilityChanged: EventBase<PopupModel>;
    onFooterActionsCreated: EventBase<Base>;
    onRecalculatePosition: EventBase<Base>;
    private refreshInnerModel;
    constructor(contentComponentName: string, contentComponentData: T, options?: IPopupOptionsBase);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    toggleVisibility(): void;
    show(): void;
    hide(): void;
    recalculatePosition(isResetHeight: boolean): void;
    updateFooterActions(footerActions: Array<IAction>): Array<IAction>;
    getDisplayMode(): DisplayPopupMode;
    updateDisplayMode(menuType: "dropdown" | "popup" | "overlay"): boolean;
    onHiding(): void;
    dispose(): void;
}
export {};
