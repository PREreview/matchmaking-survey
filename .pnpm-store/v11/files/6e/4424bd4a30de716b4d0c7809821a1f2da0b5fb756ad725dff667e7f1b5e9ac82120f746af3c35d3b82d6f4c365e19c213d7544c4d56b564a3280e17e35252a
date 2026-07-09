import { IPlainDataOptions, ISurveyFileCallbacks } from "./base-interfaces";
import { IQuestionPlainData, Question } from "./question";
import { Base } from "./base";
import { EventBase } from "./event";
import { SurveyError } from "./survey-error";
import { ActionContainer } from "./actions/container";
import { Action } from "./actions/action";
import { Camera } from "./utils/camera";
import { LocalizableString } from "./localizablestring";
export declare function dataUrl2File(dataUrl: string, fileName: string, type: string): File;
/**
 * A base class for question types that support file upload: `QuestionFileModel` and `QuestionSignaturePadModel`.
 */
export declare class QuestionFileModelBase extends Question {
    isUploading: boolean;
    currentState: string;
    /**
     * An event that is raised after the upload state has changed.
     *
     * Parameters:
     *
     * - `sender`: `SurveyModel`\
     * A survey instance that raised the event.
     * - `options.state`: `string`\
     * The current upload state: `"empty"`, `"loading"`, `"loaded"`, or `"error"`.
     */
    onUploadStateChanged: EventBase<QuestionFileModelBase>;
    onStateChanged: EventBase<QuestionFileModelBase>;
    protected stateChanged(state: string): void;
    get showLoadingIndicator(): boolean;
    /**
     * Specifies whether to store file or signature content as text in `SurveyModel`'s [`data`](https://surveyjs.io/form-library/documentation/surveymodel#data) property.
     *
     * If you disable this property, implement `SurveyModel`'s [`onUploadFiles`](https://surveyjs.io/form-library/documentation/surveymodel#onUploadFiles) event handler to specify how to store file content.
     *
     * [File Upload Demo](https://surveyjs.io/form-library/examples/file-upload/ (linkStyle))
     *
     * [Signature Pad Demo](https://surveyjs.io/form-library/examples/upload-signature-pad-data-to-server/ (linkStyle))
     */
    storeDataAsText: boolean;
    /**
     * Enable this property if you want to wait until files are uploaded to complete the survey.
     *
     * Default value: `false`
     *
     * [File Upload Demo](https://surveyjs.io/form-library/examples/file-upload/ (linkStyle))
     *
     * [Signature Pad Demo](https://surveyjs.io/form-library/examples/upload-signature-pad-data-to-server/ (linkStyle))
     */
    waitForUpload: boolean;
    get fileCallbacks(): ISurveyFileCallbacks;
    clearValue(keepComment?: boolean, fromUI?: boolean): void;
    clearOnDeletingContainer(): void;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void;
    protected uploadFiles(files: File[], sourceType?: string): void;
    protected loadPreview(newValue: any): void;
    protected onChangeQuestionValue(newValue: any): void;
    protected getIsQuestionReady(): boolean;
    private isFileLoadingValue;
    protected get isFileLoading(): boolean;
    protected set isFileLoading(val: boolean);
}
export declare class QuestionFilePage extends Base {
    private question;
    private index;
    private static pageCounter;
    private static getId;
    items: Array<any>;
    id: string;
    constructor(question: QuestionFileModel, index: number);
    get css(): string;
}
/**
 * A class that describes the File Upload question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/file-upload/ (linkStyle))
 */
export declare class QuestionFileModel extends QuestionFileModelBase {
    isDragging: boolean;
    previewValue: any[];
    pages: QuestionFilePage[];
    navigationDirection: "left" | "right" | "left-delete";
    indexToShow: number;
    pageSize: number;
    containsMultiplyFiles: boolean;
    allowCameraAccess: boolean;
    /**
     * Specifies the source of uploaded files.
     *
     * Possible values:
     *
     * - `"file"` (default) - Allows respondents to select a local file.
     * - `"camera"` - Allows respondents to capture and upload a photo.
     * - `"file-camera"` - Allows respondents to select a local file or capture a photo.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/photo-capture/ (linkStyle))
     * @see filePlaceholder
     * @see photoPlaceholder
     * @see fileOrPhotoPlaceholder
     */
    sourceType: string;
    protected prevFileAction: Action;
    protected nextFileAction: Action;
    protected fileIndexAction: Action;
    get fileNavigatorVisible(): boolean;
    private get pagesCount();
    get actionsContainerVisible(): boolean;
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    private actionsContainerValue;
    get actionsContainer(): ActionContainer;
    private fileNavigatorValue;
    get fileNavigator(): ActionContainer;
    private createActionsContainer;
    protected createContainerActions(): Array<Action>;
    protected createFileNavigatorActions(): Array<Action>;
    private updateFileIndexActionTitle;
    private closeCameraActionValue;
    get closeCameraAction(): Action;
    private takePictureActionValue;
    get takePictureAction(): Action;
    private changeCameraActionValue;
    get changeCameraAction(): Action;
    get videoId(): string;
    get hasVideoUI(): boolean;
    get hasFileUI(): boolean;
    private videoStream;
    startVideo(): void;
    private get videoHtmlElement();
    private startVideoInCamera;
    stopVideo(): void;
    snapPicture(): void;
    private canFlipCameraValue;
    canFlipCamera(): boolean;
    flipCamera(): void;
    private closeVideoStream;
    onHidingContent(): void;
    private updateFileNavigatorActionsCss;
    protected updateElementCssCore(cssClasses: any): void;
    private getFileIndexCaption;
    private updateFileNavigator;
    private updateRenderedPages;
    private updatePages;
    private prevPreviewLength;
    private previewValueChanged;
    getType(): string;
    protected onChangeQuestionValue(newValue: any): void;
    /**
     * Disable this property only to implement a custom preview.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/file-custom-preview/ (linkStyle))
     * @see allowImagesPreview
     */
    showPreview: boolean;
    /**
     * Specifies whether users can upload multiple files.
     *
     * Default value: `false`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/file-upload/ (linkStyle))
     * @see maxFiles
     */
    allowMultiple: boolean;
    /**
     * The height of the following images:
     *
     * - [Images in the preview](#allowImagesPreview)
     * - [Photos taken using the camera](#sourceType)
     * - Uploaded images in a [generated PDF form](https://surveyjs.io/pdf-generator/documentation/overview)
     *
     * > The sizes of previewed images are limited by the height and width of the preview area in single file upload mode or that of a thumbnail area in [multiple file upload mode](#allowMultiple).
     * @see imageWidth
     */
    imageHeight: string;
    /**
     * The width of the following images:
     *
     * - [Images in the preview](#allowImagesPreview)
     * - [Photos taken using the camera](#sourceType)
     * - Uploaded images in a [generated PDF form](https://surveyjs.io/pdf-generator/documentation/overview)
     *
     * > The sizes of previewed images are limited by the height and width of the preview area in single file upload mode or that of a thumbnail area in [multiple file upload mode](#allowMultiple).
     * @see imageHeight
     */
    imageWidth: string;
    /**
     * An array of predefined file category names used to control which files users can upload.
     *
     * Supported categories:
     *
     * | Category name | File types |
     * | ------------- | ---------- |
     * | `"image"` | .png, .jpg, .jpeg, .gif, .bmp, .tiff, .svg |
     * | `"video"` | .mp4, .avi, .mov, .wmv, .flv, .mkv, .webm |
     * | `"audio"` | .mp3, .wav, .aac, .ogg, .wma, .flac |
     * | `"document"` | .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt, .rtf, .odt |
     * | `"archive"` | .zip, .rar, .7z, .tar, .gz |
     *
     * To allow specific file extensions, use the [`acceptedTypes`](https://surveyjs.io/form-library/documentation/api-reference/file-model#acceptedTypes) property. This property can be used together with `acceptedCategories` to define a combined set of allowed files.
     *
     * To add or remove file extensions within a category, modify the [`acceptedFileCategories`](https://surveyjs.io/form-library/documentation/api-reference/settings#acceptedFileCategories) object in the global settings.
     */
    acceptedCategories: Array<string>;
    private updateAcceptedCategories;
    /**
     * An [`accept`](https://www.w3schools.com/tags/att_input_accept.asp) attribute value for the underlying `<input>` element.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/store-file-names-in-survey-results/ (linkStyle))
     * @see acceptedCategories
     */
    acceptedTypes: string;
    get renderedAcceptedTypes(): string;
    /**
     * Specifies whether to show a preview of image files.
     */
    allowImagesPreview: boolean;
    /**
     * Maximum allowed file size, measured in bytes.
     *
     * Default value: 0 (unlimited)
     *
     * [View Demo](https://surveyjs.io/form-library/examples/file-upload/ (linkStyle))
     * @see maxFiles
     */
    maxSize: number;
    /**
     * Maximum number of files a user can upload. Applies only if [`allowMultiple`](https://surveyjs.io/form-library/documentation/api-reference/file-model#allowMultiple) is `true`.
     *
     * Default value: 1000
     * @see maxSize
     */
    maxFiles: number;
    chooseFile(event: MouseEvent): void;
    /**
     * Specifies whether users should confirm file deletion.
     *
     * Default value: `false`
     */
    needConfirmRemoveFile: boolean;
    getConfirmRemoveMessage(fileName: string): string;
    confirmRemoveMessage: string;
    confirmRemoveAllMessage: string;
    noFileChosenCaption: string;
    chooseButtonCaption: string;
    takePhotoCaption: string;
    replaceButtonCaption: string;
    removeFileCaption: string;
    loadingFileTitle: string;
    chooseFileTitle: string;
    clearButtonCaption: string;
    /**
     * A placeholder text displayed when the File Upload question doesn't contain any files or photos to upload. Applies only when [`sourceType`](#sourceType) value is `"file-camera"`.
     * @see filePlaceholder
     * @see photoPlaceholder
     */
    fileOrPhotoPlaceholder: string;
    /**
     * A placeholder text displayed when the File Upload question doesn't contain any photos to upload. Applies only when the [`sourceType`](#sourceType) value is `"camera"`.
     * @see filePlaceholder
     * @see fileOrPhotoPlaceholder
     */
    photoPlaceholder: string;
    /**
     * A placeholder text displayed when the File Upload question doesn't contain any files to upload. Applies only when the [`sourceType`](#sourceType) value is `"file"`.
     * @see photoPlaceholder
     * @see fileOrPhotoPlaceholder
     */
    filePlaceholder: string;
    locRenderedPlaceholderValue: LocalizableString;
    get locRenderedPlaceholder(): LocalizableString;
    get currentMode(): string;
    get isPlayingVideo(): boolean;
    private setIsPlayingVideo;
    private updateCurrentMode;
    get inputTitle(): string;
    get chooseButtonText(): string;
    isClearingFiles: boolean;
    clear(doneCallback?: () => void): void;
    get renderCapture(): string;
    get multipleRendered(): string;
    get showFileDecorator(): boolean;
    get showDragAreaPlaceholder(): boolean;
    get showLoadingIndicator(): boolean;
    get allowShowPreview(): boolean;
    get showPreviewContainer(): boolean;
    defaultImage(data: any): boolean;
    /**
     * Removes a file with a specified name.
     */
    removeFile(name: string): void;
    protected removeFileByContent(content: any): void;
    protected setValueFromResult(arg: any): void;
    /**
     * Loads multiple files into the question.
     * @param files An array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects.
     */
    loadFiles(files: File[], sourceType?: string): void;
    private cameraValue;
    protected get camera(): Camera;
    canPreviewImage(fileItem: any): boolean;
    private prevLoadedPreviewValue;
    protected loadPreview(newValue: any): void;
    private allFilesOk;
    private isFileImage;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    getImageWrapperCss(data: any): string;
    protected getActionsContainerCss(css: any): string;
    getRemoveButtonCss(): string;
    getChooseFileCss(): string;
    getReadOnlyFileCss(): string;
    get fileRootCss(): string;
    getFileDecoratorCss(): string;
    private onChange;
    private updateActionsContainerCss;
    protected calcCssClasses(css: any): any;
    onSurveyLoad(): void;
    protected needResponsiveness(): boolean;
    protected supportResponsiveness(): boolean;
    protected getObservedElementSelector(): string;
    private getFileListSelector;
    private _renderedPages;
    get renderedPages(): Array<QuestionFilePage>;
    set renderedPages(val: Array<QuestionFilePage>);
    private getPagesAnimationOptions;
    private pagesAnimation;
    private calcAvailableItemsCount;
    private calculatedGapBetweenItems;
    private calculatedItemWidth;
    private _width;
    triggerResponsiveness(hard?: boolean): void;
    protected processResponsiveness(_: number, availableWidth: number): boolean;
    private rootElement;
    private canDragDrop;
    afterRenderQuestionElement(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    private dragCounter;
    onDragEnter: (event: any) => void;
    onDragOver: (event: any) => boolean;
    onDrop: (event: any) => void;
    onDragLeave: (event: any) => void;
    doChange: (event: any) => void;
    doClean: () => void;
    private clearFilesCore;
    doRemoveFile(data: any, event: any): void;
    private removeFileCore;
    doDownloadFileFromContainer: (event: MouseEvent) => void;
    doDownloadFile: (event: any, data: any) => void;
    dispose(): void;
}
export declare class FileLoader {
    private fileQuestion;
    private callback;
    constructor(fileQuestion: QuestionFileModelBase, callback: (status: string, files: any[]) => void);
    loaded: any[];
    load(files: Array<any>): void;
    dispose(): void;
}
