import { HashTable } from "./helpers";
import { ItemValue } from "./itemvalue";
import { QuestionMatrixBaseModel } from "./martixBase";
import { Base } from "./base";
import { SurveyError } from "./survey-error";
import { LocalizableString, ILocalizableOwner } from "./localizablestring";
import { IConditionObject, IQuestionPlainData } from "./question";
import { IPlainDataOptions, ISaveToJSONOptions } from "./base-interfaces";
import { ConditionRunner } from "./conditions/conditionRunner";
import { Question } from "./question";
import { ISurveyData, ITextProcessor, IQuestion } from "./base-interfaces";
import { IObjectValueContext, IValueGetterContext, IValueGetterContextGetValueParams, IValueGetterInfo, ValueGetterContextCore } from "./conditions/conditionProcessValue";
import { QuestionSingleInputBehavior } from "./question_singleinput_behavior";
export interface IMatrixData {
    onMatrixRowChanged(row: MatrixRowModel): void;
    getCorrectedRowValue(value: any): any;
    getDisplayRowValue(value: any): string;
    cellClick(row: MatrixRowModel, column: ItemValue): void;
    isCellChecked(row: MatrixRowModel, column: ItemValue): boolean;
    cssClasses: any;
    isDisabledStyle: boolean;
    isInputReadOnly: boolean;
    isDisabledAttr: boolean;
    isReadOnlyAttr: boolean;
    hasErrorInRow(row: MatrixRowModel): boolean;
}
export declare class MatrixColumn extends ItemValue {
    protected getBaseType(): string;
    isExclusive: boolean;
}
export declare class MatrixRowModel extends Base {
    item: ItemValue;
    fullName: string;
    private data;
    constructor(item: ItemValue, fullName: string, data: IMatrixData, value: any);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    cellClick(column: ItemValue): void;
    isChecked(column: ItemValue): boolean;
    get name(): string;
    get text(): string;
    get locText(): LocalizableString;
    getOwner(): IMatrixData;
    get isVisible(): boolean;
    get value(): any;
    set value(val: any);
    setValueDirectly(val: any): void;
    getDisplayValue(val: any): string;
    get isReadOnly(): boolean;
    get isReadOnlyAttr(): boolean;
    get isDisabledAttr(): boolean;
    get rowTextClasses(): string;
    hasError: boolean;
    get rowClasses(): string;
    getValueGetterContext(): IValueGetterContext;
}
export interface IMatrixCellsOwner extends ILocalizableOwner {
    getRows(): Array<any>;
    getColumns(): Array<any>;
}
export declare class MatrixCells extends Base {
    cellsOwner: IMatrixCellsOwner;
    private values;
    private locs;
    constructor(cellsOwner: IMatrixCellsOwner);
    getType(): string;
    get isEmpty(): boolean;
    onValuesChanged: () => void;
    private locNotification;
    private valuesChanged;
    getDefaultCellLocText(column: any): LocalizableString;
    getCellDisplayLocText(row: any, column: any): LocalizableString;
    private getCellLocCore;
    private get defaultRowValue();
    private getCellLocData;
    private getCellLocDataFromValue;
    getCellText(row: any, column: any): string;
    setCellText(row: any, column: any, val: string): void;
    private updateValues;
    getDefaultCellText(column: any): string;
    setDefaultCellText(column: any, val: string): void;
    getCellDisplayText(row: any, column: any): string;
    get rows(): Array<any>;
    get columns(): Array<any>;
    private getCellRowColumnValue;
    getJson(options?: ISaveToJSONOptions): any;
    setJson(value: any, isLoading?: boolean): void;
    mergeWith(otherCells: MatrixCells, locales?: Array<string>): void;
    locStrsChanged(): void;
    private runFuncOnLocs;
    protected createString(row: string, col: string, onCreate: (item: LocalizableString) => void): LocalizableString;
}
export declare class MatrixValueGetterContext extends ValueGetterContextCore {
    protected question: QuestionMatrixModel;
    constructor(question: QuestionMatrixModel);
    getObj(): Base;
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    getRootObj(): IObjectValueContext;
    protected updateValueByItem(name: string, res: IValueGetterInfo): void;
}
/**
  * A class that describes the Single-Select Matrix question type.
  *
  * [View Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
  */
export declare class QuestionMatrixModel extends QuestionMatrixBaseModel<MatrixRowModel, MatrixColumn> implements IMatrixData, IMatrixCellsOwner {
    private isRowChanging;
    private cellsValue;
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    protected getAllChildren(): Base[];
    /**
     * Specifies the type of matrix cells.
     *
     * Possible values:
     *
     * - `"radio"` (default)
     * - `"checkbox"`
     *
     * [Radio-Button Matrix Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
     *
     * [Checkbox Matrix Demo](https://surveyjs.io/form-library/examples/checkbox-matrix-question/ (linkStyle))
     */
    cellType: string;
    get isMultiSelect(): boolean;
    /**
     * The name of a component used to render cells.
     */
    cellComponent: string;
    get hasSingleInput(): boolean;
    /**
     * Specifies whether each row requires an answer. If a respondent skips a row, the question displays a validation error.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
     * @see isRequired
     * @see eachRowUnique
     * @see validators
     */
    eachRowRequired: boolean;
    /**
     * @deprecated Use the [`eachRowRequired`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#eachRowRequired) property instead.
     */
    get isAllRowRequired(): boolean;
    set isAllRowRequired(val: boolean);
    /**
     * Specifies whether answers in all rows should be unique. If any answers duplicate, the question displays a validation error.
     * @see eachRowRequired
     * @see validators
     */
    eachRowUnique: boolean;
    get hasRows(): boolean;
    /**
     * Specifies a sort order for matrix rows.
     *
     * Possible values:
     *
     * - `"initial"` (default) - Preserves the original order of the `rows` array.
     * - `"random"` - Arranges matrix rows in random order each time the question is displayed.
     * @see rows
     */
    rowOrder: string;
    /**
     * @deprecated Use the [`rowOrder`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rowOrder) property instead.
     */
    get rowsOrder(): string;
    set rowsOrder(val: string);
    /**
     * Specifies whether to hide the question when the matrix has no visible rows.
     * @see rowsVisibleIf
     */
    hideIfRowsEmpty: boolean;
    getRows(): Array<any>;
    getColumns(): Array<any>;
    addColumn(value: any, text?: string): MatrixColumn;
    get checkType(): string;
    private formatCss;
    getItemClass(row: any, column: any): string;
    get itemSvgIcon(): string;
    getItemSvgIcon(row: any, column: any): string;
    get cssItemValue(): string;
    get cssMaterialDecorator(): string;
    get cssItemDecorator(): string;
    locStrsChanged(): void;
    protected getQuizQuestionCount(): number;
    protected convertToCorrectValue(val: any): any;
    protected getCorrectAnswerCount(): number;
    protected runConditionCore(properties: HashTable<any>): void;
    protected createRowsVisibleIfRunner(): ConditionRunner;
    protected onRowsChanged(): void;
    getMatrixRows(): Array<MatrixRowModel>;
    protected getVisibleRows(): Array<MatrixRowModel>;
    private nestedQuestionsValue;
    getMatrixSingleInputQuestions(question: Question, checkDynamic: boolean): Array<Question>;
    private disposeNestedQuestions;
    private getRowByName;
    protected createSingleInputBehavior(): QuestionSingleInputBehavior;
    resetSingleInput(): void;
    dispose(): void;
    getSurveyData(): ISurveyData;
    getTextProcessor(): ITextProcessor;
    getValue(name: string): any;
    setValue(name: string, newValue: any): any;
    getComment(name: string): string;
    setComment(name: string, newValue: string, locNotification: boolean | "text"): any;
    getFilteredProperties(): any;
    findQuestionByName(name: string): IQuestion;
    protected sortVisibleRows(array: Array<MatrixRowModel>): Array<MatrixRowModel>;
    randomSeedChanged(): void;
    endLoadingFromJson(): void;
    protected isNewValueCorrect(val: any): boolean;
    get visibleRows(): Array<MatrixRowModel>;
    /**
     * An array of matrix cells. Use this array to get or set cell values.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/questiontype-matrix-rubric/ (linkStyle))
     */
    get cells(): MatrixCells;
    set cells(value: MatrixCells);
    protected isPropertyStoredInHash(name: string): boolean;
    protected mergeLocalizationWithInnerObjects(src: Base, locales?: Array<string>): void;
    get hasCellText(): boolean;
    protected updateHasCellText(): void;
    setCellText(row: any, column: any, val: string): void;
    getCellText(row: any, column: any): string;
    setDefaultCellText(column: any, val: string): void;
    getDefaultCellText(column: any): string;
    getCellDisplayText(row: any, column: any): string;
    private emptyLocalizableString;
    getCellDisplayLocText(row: any, column: any): LocalizableString;
    supportAutoAdvance(): boolean;
    private errorsInRow;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void;
    private hasValuesInAllRows;
    private checkErrorsAllRows;
    private addErrorIntoRow;
    private refreshRowsErrors;
    protected getIsAnswered(): boolean;
    private createMatrixRow;
    protected onMatrixRowCreated(row: MatrixRowModel): void;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    getValueGetterContext(): IValueGetterContext;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    getConditionJson(operator?: string, path?: string): any;
    clearIncorrectValues(): void;
    protected clearValueIfInvisibleCore(reason: string): void;
    protected clearInvisibleColumnValues(): void;
    protected clearInvisibleValuesInRows(): void;
    protected clearInvisibleValuesInRowsAndColumns(inRows: boolean, inColumns: boolean, inCorrectRows: boolean): void;
    protected clearIncorrectValuesInRow(key: any, data: any): void;
    private getVisibleColumnByValue;
    protected getFirstInputElementId(): string;
    onMatrixRowChanged(row: MatrixRowModel): void;
    getCorrectedRowValue(value: any): any;
    getDisplayRowValue(value: any): string;
    cellClick(row: MatrixRowModel, column: MatrixColumn): void;
    private getValueOnCellClick;
    isCellChecked(row: MatrixRowModel, column: ItemValue): boolean;
    getRowValueIndex(row: MatrixRowModel, column: ItemValue): number;
    private getColumnByValue;
    hasErrorInRow(row: MatrixRowModel): boolean;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
    private get SurveyModel();
    getColumnHeaderWrapperComponentName(cell: ItemValue): string;
    getColumnHeaderWrapperComponentData(cell: ItemValue): any;
    getRowHeaderWrapperComponentName(cell: ItemValue): string;
    getRowHeaderWrapperComponentData(cell: ItemValue): any;
}
export declare class MatrixSingleInputBehavior extends QuestionSingleInputBehavior {
    protected get matrix(): QuestionMatrixModel;
    protected getSingleInputQuestionsCore(question: Question, checkDynamic: boolean): Array<Question>;
}
