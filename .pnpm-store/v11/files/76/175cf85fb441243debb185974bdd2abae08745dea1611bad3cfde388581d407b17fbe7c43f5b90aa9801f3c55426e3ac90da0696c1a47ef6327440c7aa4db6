export interface ITargets {
    target: HTMLElement;
    currentTarget: HTMLElement;
}
export declare class DragOrClickHelper<T = any> {
    dragHandler: (event: PointerEvent, targets: ITargets, item?: T) => void;
    preventOnTouch: boolean;
    private pointerDownEvent;
    private targets;
    private startX;
    private startY;
    private currentX;
    private currentY;
    private itemModel;
    private rootNode;
    constructor(dragHandler: (event: PointerEvent, targets: ITargets, item?: T) => void, preventOnTouch?: boolean);
    onPointerDown(pointerDownEvent: PointerEvent, itemModel?: T): void;
    private onPointerUp;
    private tryToStartDrag;
    private get isMicroMovement();
    private clearListeners;
}
