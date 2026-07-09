import { QuestionMatrixDropdownModelBase, MatrixDropdownRowModelBase, IMatrixDropdownData } from "./question_matrixdropdownbase";
import { ItemValue } from "./itemvalue";
import { LocalizableString } from "./localizablestring";
import { IProgressInfo } from "./base-interfaces";
import { HashTable } from "./helpers";
import { IObjectValueContext, IValueGetterContext, IValueGetterContextGetValueParams, IValueGetterInfo, ValueGetterContextCore } from "./conditions/conditionProcessValue";
import { ArrayChanges, Base } from "./base";
export declare class MatrixDropdownValueGetterContext extends ValueGetterContextCore {
    protected question: QuestionMatrixDropdownModel;
    constructor(question: QuestionMatrixDropdownModel);
    getObj(): Base;
    getValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    getRootObj(): IObjectValueContext;
    protected updateValueByItem(name: string, res: IValueGetterInfo): void;
}
export declare class MatrixDropdownRowModel extends MatrixDropdownRowModelBase {
    name: string;
    private item;
    constructor(name: string, item: ItemValue, data: IMatrixDropdownData, value: any);
    get rowName(): string;
    get rowTitle(): any;
    get text(): string;
    get locText(): LocalizableString;
    protected isItemVisible(): boolean;
    isRowEnabled(): boolean;
    protected isRowHasEnabledCondition(): boolean;
    protected getRowsVisibleIfExpression(rowsVisibleIf: string): Array<string>;
    protected runRowsEnableCondition(properties: HashTable<any>): void;
}
/**
  * A class that describes the Multi-Select Matrix question type. Multi-Select Matrix allows you to use the [Dropdown](https://surveyjs.io/form-library/documentation/questiondropdownmodel), [Checkbox](https://surveyjs.io/form-library/documentation/questioncheckboxmodel), [Radiogroup](https://surveyjs.io/form-library/documentation/questionradiogroupmodel), [Text](https://surveyjs.io/form-library/documentation/questiontextmodel), and [Comment](https://surveyjs.io/form-library/documentation/questioncommentmodel) question types as cell editors.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/ (linkStyle))
 */
export declare class QuestionMatrixDropdownModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any, arrayChanges?: ArrayChanges): void;
    private tryUpdateRowsIncrementally;
    private tryAddSingleRow;
    private tryRemoveSingleRow;
    private getAddedRowIndex;
    private getRemovedRowIndex;
    private finishIncrementalRowChange;
    getType(): string;
    protected getAllChildren(): Base[];
    /**
     * A title for the total row. Applies if at least one column displays total values.
     * @see rowTitleWidth
     * @see columns
     */
    totalText: string;
    getFooterText(): LocalizableString;
    getRowTitleWidth(): string;
    /**
     * Specifies whether to hide the question when the matrix has no visible rows.
     * @see rowsVisibleIf
     */
    hideIfRowsEmpty: boolean;
    getSingleInputTitleTemplate(): string;
    getValueGetterContext(): IValueGetterContext;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    protected getConditionObjectRowName(index: number): string;
    protected getConditionObjectRowText(index: number): string;
    protected getConditionObjectsRowIndeces(): Array<number>;
    protected isNewValueCorrect(val: any): boolean;
    clearIncorrectValues(): void;
    private getRowByKey;
    private defaultValuesInRows;
    protected clearGeneratedRows(): void;
    private getRowValueForCreation;
    protected generateRows(): Array<MatrixDropdownRowModel>;
    protected createMatrixRow(item: ItemValue, value: any): MatrixDropdownRowModel;
    protected getFilteredDataCore(): any;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
    protected getIsRequireToGenerateRows(): boolean;
    protected updateProgressInfoByValues(res: IProgressInfo): void;
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
    protected sortVisibleRows(array: Array<MatrixDropdownRowModel>): Array<MatrixDropdownRowModel>;
    endLoadingFromJson(): void;
    randomSeedChanged(): void;
}
