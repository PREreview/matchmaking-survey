export declare class Event<CallbackFunction extends Function, Sender, Options> {
    onCallbacksChanged: () => void;
    protected callbacks: Array<CallbackFunction>;
    get isEmpty(): boolean;
    get length(): number;
    fireByCreatingOptions(sender: any, createOptions: () => Options): void;
    fire(sender: Sender, options: Options): void;
    clear(): void;
    add(func: CallbackFunction): void;
    remove(func: CallbackFunction): void;
    hasFunc(func: CallbackFunction): boolean;
    private fireCallbackChanged;
}
export declare class EventBase<Sender, Options = any> extends Event<(sender: Sender, options: Options) => any, Sender, Options> {
}
