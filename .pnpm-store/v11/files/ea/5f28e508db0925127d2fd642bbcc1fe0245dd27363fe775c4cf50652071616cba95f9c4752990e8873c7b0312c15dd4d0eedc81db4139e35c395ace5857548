import * as React from "react";
import { SurveyElementBase } from "../../reactquestion_element";
interface IModalDescriptor {
    init: () => void;
    clean: () => void;
}
export declare class PopupModal extends SurveyElementBase<{}, any> {
    private modalManager;
    private isInitialized;
    private descriptor;
    private createPopupModalManager;
    constructor(props: {});
    static modalDescriptors: Array<IModalDescriptor>;
    static addModalDescriptor(descriptor: IModalDescriptor): void;
    static removeModalDescriptor(descriptor: IModalDescriptor): void;
    protected renderElement(): React.JSX.Element | null;
    init: () => void;
    clean: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export {};
