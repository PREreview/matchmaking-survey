import { ILayoutElementModel, ISurvey, ISurveyLayoutElement } from "./base-interfaces";
import { Base } from "./base";
import { EventBase } from "./event";
import { PageModel } from "./page";
import { SurveyModel } from "./survey";
export interface ISurveyTimerText {
    timerInfoText: string;
    timerInfo: {
        spent: number;
        limit?: number;
    };
    timerClock: {
        majorText: string;
        minorText?: string;
    };
    getCss(): any;
    mode: string;
    isStartPageActive: boolean;
    isTimerPanelShowingOnBottom: boolean;
    isTimerPanelShowingOnTop: boolean;
    onCurrentPageChanged: EventBase<SurveyModel>;
}
export declare class SurveyTimerModel extends Base implements ILayoutElementModel {
    onTimerTick: (page: PageModel) => void;
    private surveyValue;
    constructor(survey: ISurvey);
    text: string;
    progress: number;
    clockMajorText: string;
    clockMinorText: string;
    spent: number;
    get survey(): ISurveyTimerText;
    private timerFunc;
    start(): void;
    stop(): void;
    get isRunning(): boolean;
    private setIsRunning;
    private update;
    private doTimer;
    private updateProgress;
    private updateText;
    get showProgress(): boolean;
    get showTimerAsClock(): boolean;
    get rootCss(): string;
    getProgressCss(): string;
    get textContainerCss(): string;
    get minorTextCss(): string;
    get majorTextCss(): string;
    createLayoutElements(): Array<ISurveyLayoutElement>;
    private isTimerPanelInContainer;
}
