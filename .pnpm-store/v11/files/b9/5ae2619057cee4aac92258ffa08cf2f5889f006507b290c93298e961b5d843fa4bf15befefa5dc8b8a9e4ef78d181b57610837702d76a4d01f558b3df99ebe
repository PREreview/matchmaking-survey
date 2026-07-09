import { QuestionCheckboxBase, ChoiceItem } from "./question_baseselect";
import { ItemValue } from "./itemvalue";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
export declare class ImageItemValue extends ChoiceItem implements ILocalizableOwner {
    private videoNotLoaded;
    private imageNotLoaded;
    protected getBaseType(): string;
    /**
     * The image or video link property.
     */
    imageLink: string;
    private aspectRatio;
    protected isPropertyStoredInHash(name: string): boolean;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string, item?: any): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string, context?: any): string;
    onErrorHandler(): void;
    set contentNotLoaded(val: boolean);
    get contentNotLoaded(): boolean;
}
/**
  * A class that describes the Image Picker question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/image-picker-question/ (linkStyle))
 */
export declare class QuestionImagePickerModel extends QuestionCheckboxBase {
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    supportAutoAdvance(): boolean;
    get hasSingleInput(): boolean;
    protected getItemValueType(): string;
    get isCompositeQuestion(): boolean;
    protected get itemFlowDirection(): string;
    supportOther(): boolean;
    supportNone(): boolean;
    supportRefuse(): boolean;
    supportDontKnow(): boolean;
    isAnswerCorrect(): boolean;
    /**
     * Specifies whether users can select multiple images or videos.
     *
     * Default value: `false`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/image-picker-question/ (linkStyle))
     */
    multiSelect: boolean;
    isItemSelected(item: ItemValue): boolean;
    getItemEnabled(item: ItemValue): boolean;
    clearIncorrectValues(): void;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    /**
     * Specifies whether to display labels under images or videos. Labels text are taken from the `text` property of each object in the [`choices`](#choices) array.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/image-picker-question/ (linkStyle))
     */
    showLabel: boolean;
    endLoadingFromJson(): void;
    protected getValueCore(): any;
    private convertValToArrayForMultSelect;
    protected renderedValueFromDataCore(val: any): any;
    protected renderedValueToDataCore(val: any): any;
    /**
     * Specifies the height of containers for images or videos. Accepts positive numbers and CSS values.
     *
     * Default value: `auto`
     *
     * This property allows you to specify the exact image height. If you do not set it, the height will be calculated automatically based on the [`minImageHeight`](#minImageHeight) and [`maxImageHeight`](#maxImageHeight) values and available screen height.
     *
     * Use the [`imageFit`](#imageFit) property to specify how to fit the images or videos into their containers.
     * @see imageWidth
     */
    imageHeight: number;
    get imageScale(): number;
    private responsiveImageHeight;
    get renderedImageHeight(): number;
    /**
     * Specifies the width of containers for images or videos. Accepts positive numbers and CSS values.
     *
     * Default value: `auto`
     *
     * This property allows you to specify the exact image width. If you do not set it, the width will be calculated automatically based on the [`minImageWidth`](#minImageWidth) and [`maxImageWidth`](#maxImageWidth) values and available screen width.
     *
     * Use the [`imageFit`](#imageFit) property to specify how to fit the images or videos into their containers.
     * @see imageHeight
     */
    imageWidth: number;
    private responsiveImageWidth;
    get renderedImageWidth(): number;
    /**
     * Specifies how to resize images or videos to fit them into their containers.
     *
     * Refer to the [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property description for information on accepted values.
     * @see imageHeight
     * @see imageWidth
     */
    imageFit: string;
    /**
     * Specifies the type of content that choice items display.
     *
     * Possible values:
     *
     * - `"image"` (default) - Images in one of the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO.
     * - `"video"` - Videos in one of the following formats: MP4, MOV, WMV, FLV, AVI, MKV.
     */
    contentMode: string;
    protected valueToData(val: any): any;
    get inputType(): "checkbox" | "radio";
    isBuiltInChoice(item: ItemValue): boolean;
    protected addToVisibleChoices(items: Array<ItemValue>, isAddAll: boolean): void;
    getSelectBaseRootCss(): string;
    private isResponsiveValue;
    /**
     * Specifies a maximum width for image or video containers. Accepts positive numbers and CSS values.
     *
     * Default value: 3000
     *
     * [View Demo](https://surveyjs.io/form-library/examples/how-to-create-calculator-form/ (linkStyle))
     *
     * The `minImageWidth`, `maxImageWidth`, `minImageHeight`, and `maxImageHeight` properties specify boundary values for container sizes. The resulting sizes are selected depending on the available screen space. If you want to specify the exact width and height, use the [`imageWidth`](#imageWidth) and [`imageHeight`](#imageHeight) properties.
     */
    maxImageWidth: number;
    /**
     * Specifies a minimum width for image or video containers. Accepts positive numbers and CSS values.
     *
     * Default value: 200
     *
     * The `minImageWidth`, `maxImageWidth`, `minImageHeight`, and `maxImageHeight` properties specify boundary values for container sizes. The resulting sizes are selected depending on the available screen space. If you want to specify the exact width and height, use the [`imageWidth`](#imageWidth) and [`imageHeight`](#imageHeight) properties.
     */
    minImageWidth: number;
    /**
     * Specifies a maximum height for image or video containers. Accepts positive numbers and CSS values.
     *
     * Default value: 3000
     *
     * [View Demo](https://surveyjs.io/form-library/examples/how-to-create-calculator-form/ (linkStyle))
     *
     * The `minImageWidth`, `maxImageWidth`, `minImageHeight`, and `maxImageHeight` properties specify boundary values for container sizes. The resulting sizes are selected depending on the available screen space. If you want to specify the exact width and height, use the [`imageWidth`](#imageWidth) and [`imageHeight`](#imageHeight) properties.
     */
    maxImageHeight: number;
    /**
     * Specifies a minimum height for image or video containers. Accepts positive numbers and CSS values.
     *
     * Default value: 133
     *
     * [View Demo](https://surveyjs.io/form-library/examples/how-to-create-calculator-form/ (linkStyle))
     *
     * The `minImageWidth`, `maxImageWidth`, `minImageHeight`, and `maxImageHeight` properties specify boundary values for container sizes. The resulting sizes are selected depending on the available screen space. If you want to specify the exact width and height, use the [`imageWidth`](#imageWidth) and [`imageHeight`](#imageHeight) properties.
     */
    minImageHeight: number;
    private get isResponsive();
    private get exactSizesAreEmpty();
    private calcIsResponsive;
    protected getObservedElementSelector(): string;
    protected supportResponsiveness(): boolean;
    protected needResponsiveness(): boolean;
    needResponsiveWidth(): boolean;
    private _width;
    onContentLoaded: (item: ImageItemValue, event: any) => void;
    private responsiveColCount;
    protected getCurrentColCount(): number;
    gridColCount: number;
    getContainerStyle(): {
        gridAutoFlow?: undefined;
        gridTemplateColumns?: undefined;
    } | {
        gridAutoFlow: string;
        gridTemplateColumns: string;
    };
    protected processResponsiveness(_: number, availableWidth: number): boolean;
    triggerResponsiveness(hard?: boolean): void;
    private gapBetweenItems;
    private reCalcGapBetweenItemsCallback;
    afterRender(el: HTMLElement): void;
    get ariaRole(): string;
    get ariaRequired(): "true" | "false";
    get inputRequiredAttribute(): boolean | null;
}
