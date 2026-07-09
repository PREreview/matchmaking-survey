import { AdaptiveActionContainer } from "../actions/adaptive-container";
interface IDimensions {
    scroll: number;
    offset: number;
}
export declare class ResponsivityManager {
    container: HTMLDivElement;
    private model;
    afterInitializeCallback?: () => void;
    private resizeObserver;
    private isInitialized;
    private isResizeObserverStarted;
    getComputedStyle: (elt: Element) => CSSStyleDeclaration;
    constructor(container: HTMLDivElement, model: AdaptiveActionContainer, afterInitializeCallback?: () => void);
    protected getDimensions(element: HTMLElement): IDimensions;
    protected getAvailableSpace(): number;
    protected getGap(): number;
    protected calcItemSize(item: HTMLElement): number;
    private updateItemsDimensions;
    private get isContainerVisible();
    protected shouldProcessResponsiveness(): boolean;
    private process;
    private isDisposed;
    update(forceUpdate: boolean): void;
    dispose(): void;
}
export declare class VerticalResponsivityManager extends ResponsivityManager {
    constructor(container: HTMLDivElement, model: AdaptiveActionContainer);
    protected getDimensions(): IDimensions;
    protected getAvailableSpace(): number;
    protected calcItemSize(item: HTMLDivElement): number;
}
export {};
