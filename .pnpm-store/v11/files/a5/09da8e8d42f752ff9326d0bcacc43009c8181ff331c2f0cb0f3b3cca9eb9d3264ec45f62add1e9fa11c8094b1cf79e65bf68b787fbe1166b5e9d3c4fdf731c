import { QuestionNonValue } from "./questionnonvalue";
/**
  * A class that describes the Image question type. Unlike other question types, Image cannot have a title or value.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-image/ (linkStyle))
 */
export declare class QuestionImageModel extends QuestionNonValue {
    contentNotLoaded: boolean;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    get isCompositeQuestion(): boolean;
    onSurveyLoad(): void;
    /**
     * Specifies an image or video URL.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/ (linkStyle))
     * @see contentMode
     */
    imageLink: string;
    /**
     * Specifies a value for the `alt` attribute of the underlying `<img>` element.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/ (linkStyle))
     */
    altText: string;
    /**
     * Specifies the height of a container for the image or video. Accepts positive numbers and CSS values.
     *
     * Default value: 150
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/ (linkStyle))
     *
     * > Use the [`imageFit`](#imageFit) property to specify how to fit the image or video into the container.
     * @see imageWidth
     */
    imageHeight: string;
    get renderedStyleHeight(): string;
    get renderedHeight(): number;
    /**
     * Specifies the width of a container for the image or video. Accepts positive numbers and CSS values.
     *
     * Default value: 200
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/ (linkStyle))
     *
     * > Use the [`imageFit`](#imageFit) property to specify how to fit the image or video into the container.
     * @see imageHeight
     */
    imageWidth: string;
    get renderedStyleWidth(): string;
    get renderedWidth(): number;
    /**
     * Specifies how to resize the image or video to fit it into its container.
     *
     * Refer to the [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property description for information on accepted values.
     * @see imageHeight
     * @see imageWidth
     */
    imageFit: string;
    /**
     * Specifies the type of content that the Image question displays.
     *
     * Possible values:
     *
     * - `"image"` - An image in one of the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO.
     * - `"video"` - A video in one of the following formats: MP4, MOV, WMV, FLV, AVI, MKV.
     * - `"youtube"` - A link to a YouTube video.
     * - `"auto"` (default) - Selects one of the above based on the [`imageLink`](https://surveyjs.io/form-library/documentation/questionimagemodel#imageLink) property.
     */
    contentMode: string;
    /**
     * Returns the type of content that the Image question displays: `"image"`, `"video"`, or `"youtube"`.
     * @see contentMode
     */
    get renderedMode(): string;
    get ariaInvalid(): any;
    get ariaLabel(): any;
    get renderedAltText(): string;
    getImageCss(): string;
    onLoadHandler(): void;
    onErrorHandler(): void;
    private setRenderedMode;
    protected calculateRenderedMode(): void;
    private isYoutubeVideo;
    private isVideo;
}
