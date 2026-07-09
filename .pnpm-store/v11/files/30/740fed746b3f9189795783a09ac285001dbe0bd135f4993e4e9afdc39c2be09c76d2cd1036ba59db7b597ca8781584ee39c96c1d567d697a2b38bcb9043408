import { Base } from "./base";
import { EventBase } from "./event";
import { PageModel } from "./page";
import { SurveyModel } from "./survey";
export declare class ProgressButtons extends Base {
    survey: SurveyModel;
    constructor(survey: SurveyModel);
    visiblePages: PageModel[];
    isListElementClickable(index: number | any): boolean;
    getRootCss(container?: string): string;
    getListElementCss(index: number | any): string;
    getScrollButtonCss(hasScroller: boolean, isLeftScroll: boolean): string;
    clickListElement(element: number | PageModel): void;
    isListContainerHasScroller(element: HTMLElement): boolean;
    minListWidth: number;
    isCanShowItemTitles(element: HTMLElement): boolean;
    get isFitToSurveyWidth(): boolean;
    get progressWidth(): string;
    get showItemNumbers(): boolean;
    get showItemTitles(): boolean;
    getItemNumber(page: PageModel): string;
    get headerText(): string;
    get footerText(): string;
    get progressText(): string;
    get progressBarAriaLabel(): string;
    resetProgressText(): void;
    dispose(): void;
    onResize: EventBase<ProgressButtons, any>;
    processResponsiveness(width: number): void;
    private readonly onCurrentPageChanged;
}
export interface IProgressButtonsViewModel {
    container: string;
    onResize(canShowItemTitles: boolean): void;
    onUpdateScroller(hasScroller: boolean): void;
    onUpdateSettings(): void;
}
export declare class ProgressButtonsResponsivityManager {
    private model;
    private element;
    private viewModel;
    private criticalProperties;
    private canShowItemTitles;
    private pages;
    private observer;
    constructor(model: ProgressButtons, element: HTMLElement, viewModel: IProgressButtonsViewModel);
    private forceUpdate;
    private processResponsiveness;
    dispose(): void;
}
