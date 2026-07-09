import { Base } from "./base";
import type { ILayoutElementModel, IProgressInfo, ISurveyLayoutElement } from "./base-interfaces";
import type { SurveyModel } from "./survey";
export declare class SurveyProgressTextModel extends Base implements ILayoutElementModel {
    private survey;
    private readonly key;
    constructor(survey: SurveyModel);
    createLayoutElements(): Array<ISurveyLayoutElement>;
    get progressBarAriaLabel(): string;
    get css(): any;
    getProgressCssClasses(container?: string): string;
    getProgressInfo(): IProgressInfo;
    get progressText(): string;
    get progressValue(): number;
    updateProgressText(onValueChanged?: boolean): void;
    getProgressText(): string;
    getProgressValue(): number;
    dispose(): void;
    private subscribeSurvey;
    private readonly onStateChanged;
    private readonly onValueChanged;
    private calculateProgressText;
    private getProgressTextCore;
    private createLayoutElement;
    private getProgressBarComponentName;
    private isProgressBarInContainer;
}
