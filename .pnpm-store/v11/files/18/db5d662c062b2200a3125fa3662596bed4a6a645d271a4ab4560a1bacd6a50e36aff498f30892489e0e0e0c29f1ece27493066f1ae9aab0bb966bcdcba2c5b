import { ResponsivityManager } from "../utils/responsivity-manager";
import { ListModel } from "../list";
import { Action, actionModeType } from "./action";
import { ActionContainer, ContainerUpdateOptions } from "./container";
export declare enum UpdateResponsivenessMode {
    None = 0,
    Light = 1,
    Hard = 3
}
export type AdaptiveContainerUpdateOptions = {
    updateResponsivenessMode?: UpdateResponsivenessMode;
} & ContainerUpdateOptions;
export declare class AdaptiveActionContainer<T extends Action = Action> extends ActionContainer<T> {
    dotsItem: Action;
    protected responsivityManager: ResponsivityManager;
    minVisibleItemsCount: number;
    isResponsivenessDisabled: boolean;
    private isInitialized;
    private hideItemsGreaterN;
    private getActionsToHide;
    private updateItemMode;
    constructor();
    get hiddenItemsListModel(): ListModel;
    protected onSet(): void;
    protected onPush(action: T): void;
    protected onRemove(action: T): void;
    protected onActionPropertyChanged(action: T, options: {
        name: string;
        newValue: any;
        oldValue: any;
    }): void;
    protected getRenderedActions(): Array<T>;
    protected getAllActions(): T[];
    protected getActionMinDimension(action: Action): number;
    private getVisibleItemsCount;
    fit(options: {
        availableSpace: number;
        gap?: number;
    }): void;
    protected createResponsivityManager(container: HTMLDivElement): ResponsivityManager;
    protected mergeUpdateOptions(nextOptions: AdaptiveContainerUpdateOptions, prevOptions: AdaptiveContainerUpdateOptions): AdaptiveContainerUpdateOptions;
    protected raiseUpdate(options?: AdaptiveContainerUpdateOptions): void;
    protected update(options: AdaptiveContainerUpdateOptions): void;
    initResponsivityManager(container: HTMLDivElement): void;
    resetResponsivityManager(): void;
    getRootStyle(): {
        opacity: number;
    };
    setActionsMode(mode: actionModeType): void;
    dispose(): void;
}
